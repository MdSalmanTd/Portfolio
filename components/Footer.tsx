'use client';
import React from "react";
import { FaLinkedinIn, FaGithub, FaInstagram, FaEnvelope, FaXTwitter } from "react-icons/fa6";

const Footer = () => {

    const socials = [
        { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/mdsalmantd", label: "LinkedIn" },
        { icon: FaGithub, href: "https://github.com/mdsalmantd", label: "GitHub" },
        { icon: FaInstagram, href: "https://www.instagram.com/mdsalmantd0.0", label: "Instagram" },
        { icon: FaEnvelope, href: "mailto:mdsalmantd2004@gmail.com", label: "Email" },
        { icon: FaXTwitter, href: "https://twitter.com/mdsalmantd", label: "X" },
    ];

    return (
        <section className="relative min-h-[40vh] flex flex-col justify-center items-center text-center">

            {/* Soft vignette */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_60%)]" />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center gap-6 px-4">

                {/* Availability pill */}
                <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#141414] border border-white/10 text-sm text-white/80">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    Available for work
                </div>

                {/* Heading */}
                <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white max-w-2xl">
                    Let&apos;s create your <br /> next big idea.
                </h1>

                {/* Button */}
                <a href="mailto:mdsalmantd2004@gmail.com" className="mt-2 px-6 py-3 rounded-full border border-white/40 text-white hover:bg-white hover:text-black transition">
                    Contact Me
                </a>
            </div>

            {/* Footer */}
            <div className="absolute bottom-6 w-full px-6 flex items-center justify-between text-sm text-white/60 md:flex-row flex-col gap-4">
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
