"use client";
import LogoLoop from './ui/LogoLoop';
import {
  SiReact,SiNextdotjs,SiTypescript, SiTailwindcss,SiPostgresql, SiMongodb,SiPostman, SiDocker,SiVercel, SiGithub,
} from "react-icons/si";

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiPostgresql />, title: "PostgreSQL", href: "https://www.postgresql.org" },
  { node: <SiMongodb />, title: "MongoDB", href: "https://www.mongodb.com" },
  { node: <SiPostman />, title: "Postman", href: "https://www.postman.com" },
  { node: <SiDocker />, title: "Docker", href: "https://www.docker.com" },
  { node: <SiVercel />, title: "Vercel", href: "https://vercel.com" },
  { node: <SiGithub />, title: "GitHub", href: "https://github.com" },
];

const Stack = () => {
  return (
    <div className="relative flex justify-center items-center flex-col overflow-hidden mb-20">

      {/* <h2 className="text-4xl font-bold mb-8">My tech stack</h2> */}

      <LogoLoop
        logos={techLogos}
        speed={120}
        direction="left"
        logoHeight={48}
        gap={40}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        fadeOutColor="transparent"
        ariaLabel="Technology partners"
      />
    </div>
  )
}

export default Stack