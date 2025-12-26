'use client';
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        title: "Track Truck",
        image: "/images/download1.png",
        github: "https://github.com/MdSalmanTd/TrackTruck",
        preview: "https://track-truck.vercel.app/",
        status: "Deployed",
    },
    {
        title: "Yc Blog",
        image: "/images/download2.png",
        github: "https://github.com/gothsec/stockin-demo",
        preview: "https://yc-blog-three.vercel.app/",
        status: "Deployed",
    },
    {
        title: "Digital Library",
        image: "/images/download3.png",
        github: "https://github.com/MdSalmanTd/Digital_Library_Management",
        preview: "https://mdsalmantd.github.io/Digital_Library_Management/",
        status: "Contributor",
    },
    {
        title: "E-School",
        image: "/images/download.png",
        github: "https://github.com/MdSalmanTd/E-School",
        preview: "https://e-school-pied.vercel.app/",
        status: "Deployed",
    },
];

const Project = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const tagRef = useRef<HTMLHeadingElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const descRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    toggleActions: "play none none none",
                }
            });

            tl.fromTo(
                tagRef.current,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
            )
            .fromTo(
                titleRef.current,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
                "-=0.4"
            )
            .fromTo(
                descRef.current,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
                "-=0.4"
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={sectionRef} id="works" className="max-w-7xl mx-auto px-4 py-30">
            {/* Header */}
            <h3 ref={tagRef} className="text-lg mb-3 text-md uppercase tracking-wider text-orange-400">My Work</h3>
            <h2 ref={titleRef} className="text-4xl md:text-5xl font-medium mb-4">
                Selected Projects
            </h2>
            <p ref={descRef} className="text-white/60 max-w-xl mb-10">
                Here's a curated selection showcasing my expertise and the results
                I’ve delivered through real-world projects.
            </p>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, i) => (
                    <div key={i} className="group">
                        {/* Image */}
                        <a href={project.preview} target="_blank" rel="noreferrer">
                            <div className="rounded-2xl overflow-hidden mb-4 bg-[#1414149c] border border-white/10">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-56 md:h-72 object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                        </a>

                        {/* Content */}
                        <div className="flex items-center px-2">
                            <div className="grow">
                                <h4 className="text-2xl font-semibold">
                                    {project.title}
                                </h4>
                                <span className="text-sm text-white/60">
                                    {project.status}
                                </span>
                            </div>

                            {/* Actions */}
                            <div className="flex gap-2">
                                {/* GitHub */}
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="size-12 flex items-center justify-center rounded-xl border border-white/10 bg-[#1414149c] hover:bg-white/10 transition"
                                >
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="size-6"
                                    >
                                        <path d="M12 2C6.475 2 2 6.475 2 12c0 4.425 2.862 8.163 6.838 9.488.5.087.675-.213.675-.475v-1.65c-2.5.463-3.025-1.062-3.025-1.062-.412-1.05-1.012-1.325-1.012-1.325-.825-.563.063-.55.063-.55.913.063 1.395.938 1.395.938.812 1.387 2.137.987 2.65.75.087-.587.312-.987.562-1.212-2-.225-4.1-1-4.1-4.438 0-.975.35-1.775.925-2.4-.1-.225-.4-1.138.087-2.375 0 0 .75-.238 2.463.913a8.56 8.56 0 012.237-.3c.762 0 1.525.1 2.238.3 1.712-1.15 2.462-.913 2.462-.913.488 1.237.188 2.15.088 2.375.575.625.925 1.425.925 2.4 0 3.45-2.1 4.213-4.1 4.438.325.275.612.825.612 1.675v2.475c0 .262.175.575.687.475C19.138 20.163 22 16.425 22 12c0-5.525-4.475-10-10-10z" />
                                    </svg>
                                </a>

                                {/* Live */}
                                <a
                                    href={project.preview}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="size-12 flex items-center justify-center rounded-xl border border-white/10 bg-[#1414149c] hover:bg-white/10 transition"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="size-7"
                                    >
                                        <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* More */}
            <a
                href="https://github.com/mdsalmantd?tab=repositories"
                target="_blank"
                rel="noreferrer"
                className="mt-12 w-fit flex items-center justify-center gap-2 rounded-full border border-white/10 bg-[#1414149c] py-3 px-2 hover:bg-white/10 transition mx-auto"
            >
                <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6"
                >
                    <path d="M12 2C6.475 2 2 6.475 2 12c0 4.425 2.862 8.163 6.838 9.488.5.087.675-.213.675-.475v-1.65c-2.5.463-3.025-1.062-3.025-1.062-.412-1.05-1.012-1.325-1.012-1.325-.825-.563.063-.55.063-.55.913.063 1.395.938 1.395.938.812 1.387 2.137.987 2.65.75.087-.587.312-.987.562-1.212-2-.225-4.1-1-4.1-4.438 0-.975.35-1.775.925-2.4-.1-.225-.4-1.138.087-2.375 0 0 .75-.238 2.463.913a8.56 8.56 0 012.237-.3c.762 0 1.525.1 2.238.3 1.712-1.15 2.462-.913 2.462-.913.488 1.237.188 2.15.088 2.375.575.625.925 1.425.925 2.4 0 3.45-2.1 4.213-4.1 4.438.325.275.612.825.612 1.675v2.475c0 .262.175.575.687.475C19.138 20.163 22 16.425 22 12c0-5.525-4.475-10-10-10z" />
                </svg>
                <span className="text-lg">More projects on GitHub</span>
            </a>
        </div>
    );
};

export default Project;
