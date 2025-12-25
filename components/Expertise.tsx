'use client';
import { useState } from "react";
import { FaCaretDown,FaCode,FaPenNib   } from "react-icons/fa";
import { LuSwatchBook } from "react-icons/lu";

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

  return (
    <section className="relative mx-auto max-w-7xl px-6 py-20 mt-20">
      <div className="grid gap-10 md:grid-cols-2 items-center">

        <div>
          <p className="mb-3 text-md uppercase tracking-wider text-orange-400">
            Speciality
          </p>

          <h2 className="mb-8 text-4xl font-semibold text-white">
            Areas of Expertise
          </h2>

          <div className="space-y-4">
            {services.map((item) => {
              const isActive = active === item.id;
              const Icon = iconMap[item.icon];
              return (
                <button
                  key={item.id}
                  onClick={() => setActive(item.id)}
                  className={`w-full rounded-2xl border p-5 text-left transition-all
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
                      className={`transition-transform ${
                        isActive ? "rotate-180" : ""
                      }`}
                    >
                      <FaCaretDown />
                    </span>
                  </div>

                  {isActive && (
                    <p className="mt-3 text-sm bg-zinc-950">
                      {item.description}
                    </p>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        <div className="relative aspect-video w-full overflow-hidden rounded-3xl bg-neutral-900">
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