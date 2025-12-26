'use client';
import React from 'react'
import ScrollReveal from '@/components/ui/ScrollReveal';

const About = () => {
    return (
        <div id='about' className="font-druk-cond-super mt-40 text-center px-4 md:px-0 w-[90%] md:w-[80%] mx-auto">
            <h2 className="mb-4 text-lg uppercase tracking-wider text-orange-400">ABOUT ME</h2>
            <ScrollReveal
                baseOpacity={0.1}
                enableBlur={true}
                baseRotation={3}
                blurStrength={4}
            >
                I'm Md Salman, with over 2+ years of experience in design & development with strong focus on producing high quality & impactful digital experiences. I have worked with some of the most innovative industry leaders to help build their top-notch products.
            </ScrollReveal>
        </div>
    )
}

export default About