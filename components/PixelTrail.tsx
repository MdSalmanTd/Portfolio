'use client'

import React, { useMemo } from 'react';
import { Canvas, useThree, CanvasProps, ThreeEvent } from '@react-three/fiber';
import { shaderMaterial, useTrailTexture } from '@react-three/drei';
import * as THREE from 'three';

interface GooeyFilterProps {
  id?: string;
  strength?: number;
}

interface DotMaterialUniforms {
  resolution: THREE.Vector2;
  mouseTrail: THREE.Texture | null;
  gridSize: number;
  pixelColor: THREE.Color;
  borderWidth: number;
}

interface SceneProps {
  gridSize: number;
  trailSize: number;
  maxAge: number;
  interpolate: number;
  easingFunction: (x: number) => number;
  pixelColor: string;
  borderWidth: number;
}

interface PixelTrailProps {
  gridSize?: number;
  trailSize?: number;
  maxAge?: number;
  interpolate?: number;
  easingFunction?: (x: number) => number;
  canvasProps?: Partial<CanvasProps>;
  glProps?: WebGLContextAttributes & { powerPreference?: string };
  gooeyFilter?: { id: string; strength: number };
  color?: string;
  borderWidth?: number;
  className?: string;
}

const GooeyFilter: React.FC<GooeyFilterProps> = ({ id = 'goo-filter', strength = 10 }) => {
  return (
    <svg className="absolute overflow-hidden z-1">
      <defs>
        <filter id={id}>
          <feGaussianBlur in="SourceGraphic" stdDeviation={strength} result="blur" />
          <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
          <feComposite in="SourceGraphic" in2="goo" operator="atop" />
        </filter>
      </defs>
    </svg>
  );
};

const DotMaterial = shaderMaterial(
  {
    resolution: new THREE.Vector2(),
    mouseTrail: null,
    gridSize: 100,
    pixelColor: new THREE.Color('#ffffff'),
    borderWidth: 0.05,
  },
  /* glsl vertex shader */ `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = vec4(position.xy, 0.0, 1.0);
    }
  `,
  /* glsl fragment shader */ `
    uniform vec2 resolution;
    uniform sampler2D mouseTrail;
    uniform float gridSize;
    uniform vec3 pixelColor;
    uniform float borderWidth;

    vec2 coverUv(vec2 uv) {
      vec2 s = resolution.xy / max(resolution.x, resolution.y);
      vec2 newUv = (uv - 0.5) * s + 0.5;
      return clamp(newUv, 0.0, 1.0);
    }

    void main() {
      vec2 screenUv = gl_FragCoord.xy / resolution;
      vec2 uv = coverUv(screenUv);

      // Get the grid coordinates
      vec2 gridCoord = uv * gridSize;
      vec2 gridCellUv = fract(gridCoord);
      vec2 gridCellCenter = (floor(gridCoord) + 0.5) / gridSize;

      // Get trail intensity at the center of the grid cell
      float trail = texture2D(mouseTrail, gridCellCenter).r;

      // Calculate distance from edges
      float distFromEdge = min(
        min(gridCellUv.x, 1.0 - gridCellUv.x),
        min(gridCellUv.y, 1.0 - gridCellUv.y)
      );
      
      // Create border ONLY - completely hollow inside
      // Pixel is part of border if it's within borderWidth of the edge
      float border = step(distFromEdge, borderWidth);
      
      // Only show if there's trail AND it's a border pixel
      // This makes the inside completely transparent
      float alpha = trail * border;
      
      // Color with trail intensity
      vec3 color = pixelColor * trail;
      
      gl_FragColor = vec4(color, alpha);
    }
  `
);

function Scene({ gridSize, trailSize, maxAge, interpolate, easingFunction, pixelColor, borderWidth }: SceneProps) {
  const size = useThree(s => s.size);
  const viewport = useThree(s => s.viewport);

  const dotMaterial = useMemo(() => new DotMaterial(), []);
  dotMaterial.uniforms.pixelColor.value = new THREE.Color(pixelColor);
  dotMaterial.uniforms.borderWidth.value = borderWidth;

  const [trail, onMove] = useTrailTexture({
    size: 512,
    radius: trailSize,
    maxAge: maxAge,
    interpolate: interpolate || 0.1,
    ease: easingFunction || ((x: number) => x)
  }) as [THREE.Texture | null, (e: ThreeEvent<PointerEvent>) => void];

  if (trail) {
    trail.minFilter = THREE.NearestFilter;
    trail.magFilter = THREE.NearestFilter;
    trail.wrapS = THREE.ClampToEdgeWrapping;
    trail.wrapT = THREE.ClampToEdgeWrapping;
  }

  const scale = Math.max(viewport.width, viewport.height) / 2;

  return (
    <mesh scale={[scale, scale, 1]} onPointerMove={onMove}>
      <planeGeometry args={[2, 2]} />
      <primitive
        object={dotMaterial}
        gridSize={gridSize}
        resolution={[size.width * viewport.dpr, size.height * viewport.dpr]}
        mouseTrail={trail}
      />
    </mesh>
  );
}

export default function PixelTrail({
  gridSize = 40,
  trailSize = 0.1,
  maxAge = 250,
  interpolate = 5,
  easingFunction = (x: number) => x,
  canvasProps = {},
  glProps = {
    antialias: false,
    powerPreference: 'high-performance',
    alpha: true
  },
  gooeyFilter,
  color = '#ff0000',
  borderWidth = 0.05,
  className = ''
}: PixelTrailProps) {
  return (
    <>
      {gooeyFilter && <GooeyFilter id={gooeyFilter.id} strength={gooeyFilter.strength} />}
      <Canvas
        {...canvasProps}
        gl={glProps}
        className={`absolute z-1 ${className}`}
        style={gooeyFilter ? { filter: `url(#${gooeyFilter.id})` } : undefined}
      >
        <Scene
          gridSize={gridSize}
          trailSize={trailSize}
          maxAge={maxAge}
          interpolate={interpolate}
          easingFunction={easingFunction}
          pixelColor={color}
          borderWidth={borderWidth}
        />
      </Canvas>
    </>
  );
}