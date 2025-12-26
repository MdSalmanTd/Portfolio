'use client';
import { useState, useRef, useEffect } from "react";
import { FaCaretDown,FaCode,FaPenNib   } from "react-icons/fa";
import { LuSwatchBook } from "react-icons/lu";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const iconMap = {
  FaCode,
  FaPenNib,
  LuSwatchBook,
};

const services = [
  {
    id: "dev",
    title: "Development",
    description:
      "Building scalable, high-performance web applications with modern stacks.",
    image: "/images/development.png",
    icon: "FaCode" as keyof typeof iconMap,
  },
  {
    id: "design",
    title: "UI/UX Design",
    description:
      "Designing clean, user-centric interfaces that feel intuitive and modern.",
    image: "/images/design.jpg",
    icon: "FaPenNib" as keyof typeof iconMap,
  },
  {
    id: "branding",
    title: "Branding",
    description:
      "Creating strong brand identities that connect with users.",
    image: "/images/branding.png",
    icon: "LuSwatchBook" as keyof typeof iconMap,
  },
];

const Expertise = () => {
   const [active, setActive] = useState("dev");
   const descRefs = useRef<{ [key: string]: HTMLParagraphElement | null }>({});
   const sectionRef = useRef<HTMLElement>(null);
   const headingRef = useRef<HTMLDivElement>(null);
   const titleRef = useRef<HTMLHeadingElement>(null);
   const buttonsRef = useRef<HTMLDivElement>(null);
   const imageRef = useRef<HTMLDivElement>(null);

  // Scroll-triggered animation (runs once)
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 20%",
          toggleActions: "play none none none",
        }
      });

      tl.fromTo(
        headingRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
      )
      .fromTo(
        titleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
        "-=0.4"
      )
      .fromTo(
        buttonsRef.current?.children || [],
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.5, stagger: 0.1, ease: "power2.out" },
        "-=0.3"
      )
      .fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.7, ease: "power2.out" },
        "-=0.5"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Accordion animation
  useEffect(() => {
    services.forEach((item) => {
      const element = descRefs.current[item.id];
      if (element) {
        if (active === item.id) {
          gsap.fromTo(
            element,
            { 
              height: 0, 
              opacity: 0,
              marginTop: 0
            },
            { 
              height: "auto", 
              opacity: 1,
              marginTop: 12,
              duration: 0.4,
              ease: "power2.out"
            }
          );
        } else {
          gsap.to(element, {
            height: 0,
            opacity: 0,
            marginTop: 0,
            duration: 0.3,
            ease: "power2.in"
          });
        }
      }
    });
  }, [active]);

  return (
    <section ref={sectionRef} className="relative mx-auto max-w-7xl px-6 py-20 mt-20">
      <div ref={headingRef}>
        <p className="mb-3 text-md uppercase tracking-wider text-orange-400">
          Speciality
        </p>
      </div>
      <div className="grid gap-10 md:grid-cols-2 items-start">

        <div>
          <h2 ref={titleRef} className="mb-8 text-4xl font-semibold text-white">
            Areas of Expertise
          </h2>

          <div ref={buttonsRef} className="space-y-4">
            {services.map((item) => {
              const isActive = active === item.id;
              const Icon = iconMap[item.icon];
              return (
                <button
                  key={item.id}
                  onClick={() => setActive(item.id)}
                  className={`w-full rounded-2xl border p-5 text-left transition-all overflow-hidden
                    ${
                      isActive
                        ? "border-orange-500 bg-zinc-950"
                        : "border-gray-600 bg-zinc-950 hover:bg-zinc-900"
                    }
                  `}
                >
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-3">
                    <Icon />
                    <h3 className="text-base font-medium text-white">
                      {item.title}
                    </h3>
                    </span>
                    <span
                      className={`transition-transform duration-300 ${
                        isActive ? "rotate-180" : ""
                      }`}
                    >
                      <FaCaretDown />
                    </span>
                  </div>

                  <p 
                    ref={(el) => { descRefs.current[item.id] = el; }}
                    className="text-sm bg-zinc-950 overflow-hidden"
                    style={{ height: isActive ? 'auto' : 0, opacity: isActive ? 1 : 0 }}
                  >
                    {item.description}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        <div ref={imageRef} className="relative aspect-video w-full overflow-hidden rounded-3xl bg-neutral-900">
          {services.map((item) => (
            <img
              key={item.id}
              src={item.image}
              alt={item.title}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500
                ${active === item.id ? "opacity-100" : "opacity-0"}
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Expertise