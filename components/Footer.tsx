'use client';
import React, { useRef, useEffect } from "react";
import { FaLinkedinIn, FaGithub, FaInstagram, FaEnvelope, FaXTwitter } from "react-icons/fa6";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const pillRef = useRef<HTMLDivElement>(null);
    const headingRef = useRef<HTMLHeadingElement>(null);
    const buttonRef = useRef<HTMLAnchorElement>(null);
    const footerRef = useRef<HTMLDivElement>(null);

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
                pillRef.current,
                { opacity: 0, scale: 0.8 },
                { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.7)" }
            )
            .fromTo(
                headingRef.current,
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" },
                "-=0.4"
            )
            .fromTo(
                buttonRef.current,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
                "-=0.4"
            )
            .fromTo(
                footerRef.current,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
                "-=0.3"
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const socials = [
        { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/mdsalmantd", label: "LinkedIn" },
        { icon: FaGithub, href: "https://github.com/mdsalmantd", label: "GitHub" },
        { icon: FaInstagram, href: "https://www.instagram.com/mdsalmantd0.0", label: "Instagram" },
        { icon: FaEnvelope, href: "mailto:mdsalmantd2004@gmail.com", label: "Email" },
        { icon: FaXTwitter, href: "https://twitter.com/mdsalmantd", label: "X" },
    ];

    return (
        <section ref={sectionRef} className="relative min-h-[70vh] flex flex-col justify-center items-center text-center">

            {/* Soft vignette */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_60%)]" />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center gap-6 px-4">

                {/* Availability pill */}
                <div ref={pillRef} className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#141414] border border-white/10 text-sm text-white/80">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    Available for work
                </div>

                {/* Heading */}
                <h1 ref={headingRef} className="text-4xl md:text-6xl font-semibold tracking-tight text-white max-w-2xl">
                    Let&apos;s create your <br /> next big idea.
                </h1>

                {/* Button */}
                <a
                    ref={buttonRef} 
                    id="contact" 
                    href="https://wa.me/8801999907883" 
                    className="relative mt-2 px-6 py-3 rounded-full border border-white/40 text-white overflow-hidden group transition-colors duration-300"
                >
                    <span className="relative z-10 group-hover:text-black transition-colors duration-500">Contact Me</span>
                    <span className="absolute inset-0 bg-white scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out" />
                </a>
            </div>

            {/* Footer */}
            <div ref={footerRef} className="absolute bottom-6 w-full px-6 flex items-center justify-between text-sm text-white/60 md:flex-row flex-col gap-4">
                <p>© 2025 Salman. All rights reserved.</p>

                <div className="flex items-center gap-4 text-lg">
                    {socials.map(({ icon: Icon, href, label }) => (
                        <a
                            key={label}
                            href={href}
                            target={href.startsWith("http") ? "_blank" : undefined}
                            rel="noopener noreferrer"
                            aria-label={label}
                            className="hover:text-white transition"
                        >
                            <Icon />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Footer;
