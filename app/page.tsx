'use client';
import Hero from '@/components/Hero';
import Stack from '@/components/Stack'
import About from '@/components/About';
import TextSlide from '@/components/TextSlide';
import Expertise from '@/components/Expertise';
import Project from '@/components/Project';
import Footer from '@/components/Footer';


const Home = () => {
  return (

    <div>
      <Hero />
      <TextSlide />
      <About />
      <Expertise />
      <Stack />
      <Project />
      <Footer />
    </div>

  )
}

export default Home