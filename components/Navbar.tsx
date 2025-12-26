'use client';
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";

const navigationItems = [
  { name: 'Home', link: '/' },
  { name: 'Works', link: '#works' },
  { name: 'About', link: '#about' },
  { name: 'Contact', link: '#contact' }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);


  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 50);
      
 
      if (isOpen) return;
      
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {

        gsap.to(navRef.current, {
          y: -100,
          duration: 0.3,
          ease: "power2.out"
        });
      } else {

        gsap.to(navRef.current, {
          y: 0,
          duration: 0.3,
          ease: "power2.out"
        });
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && menuRef.current) {
      gsap.fromTo(
        menuRef.current,
        { y: "100%", opacity: 0 },
        { 
          y: "0%", 
          opacity: 1, 
          duration: 0.5, 
          ease: "power3.out" 
        }
      );

      const items = menuRef.current.querySelectorAll("a");
      gsap.fromTo(
        items,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.4,
          stagger: 0.1,
          delay: 0.2,
          ease: "power2.out"
        }
      );
    }
  }, [isOpen]);

  return (
    <>
      <nav ref={navRef} className={`w-[90%] mx-auto fixed left-0 right-0 top-4 flex justify-between items-center px-6 py-4 text-white z-50 rounded-full transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md shadow-lg' : ''
      }`}>
        <Link href="/">
          <Image src="/images/logo.png" alt="Logo" width={32} height={32} className="rounded-lg" />
        </Link>

        <ul className="hidden md:flex font-druk-bold font-bold items-center gap-6 ml-7">
          {navigationItems.map((item) => (
            <li key={item.name} className="relative h-6 md:h-8 overflow-hidden group whitespace-nowrap">
              <Link href={item.link} className="relative block h-full">
                <span className="invisible">{item.name}</span>
                <span className="absolute inset-0 flex items-center justify-center translate-y-0 transition-transform duration-300 ease-out group-hover:-translate-y-full">
                  {item.name}
                </span>
                <span className="absolute inset-0 flex items-center justify-center translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0">
                  {item.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <button className="block md:hidden p-2 rounded-md focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
          <div className="space-y-1">
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </div>
        </button>
      </nav>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setIsOpen(false)}
          />
          
          <div ref={menuRef} className="fixed bottom-0 left-0 right-0 bg-black text-white rounded-t-2xl shadow-lg p-6 z-50">
            <button className="absolute top-4 right-4 text-gray-400 text-xl" onClick={() => setIsOpen(false)}>
              <svg className="w-6 h-6 text-white" viewBox="0 0 1195 1195" xmlns="http://www.w3.org/2000/svg">
                <path fill="currentColor" d="M959.333 278q-9-9-22.5-9t-22.5 9l-317 317-317-317q-9-9-22.5-9t-22.5 9-9 22.5 9 22.5l317 317-317 317q-9 9-9 22.5t9 22.5 22.5 9 22.5-9l317-317 317 317q9 9 22.5 9t22.5-9t9-22.5-9-22.5l-317-317 317-317q9-9 9-22.5t-9-22.5z" />
              </svg>
            </button>

            <div className="flex flex-col gap-4 mt-6">
              {navigationItems.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.link}
                  className="text-white text-lg hover:text-gray-400"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <p className="mt-6 text-gray-400 text-sm">
              © 2025 Md Salman Td. All rights reserved.
            </p>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
