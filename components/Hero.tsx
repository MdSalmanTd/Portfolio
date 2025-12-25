'use client'
// import PixelTrail from '../components/PixelTrail';
import Image from 'next/image';
import RotatingText from './RotatingText';

const Hero = () => {
    return (

        <div className="max-w-11/12 mx-auto h-screen flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 px-4 md:px-8 md:py-12 ">
            <div className="text-white space-y-3 text-center md:text-left order-2 md:order-1 px-4 md:px-0">
                <p className="text-sm md:text-base">I'm a</p>

                <RotatingText
                    className="bg-orange-500 w-56 md:w-64 text-black px-2 py-1 rounded font-extrabold text-xl md:text-2xl inline-flex justify-center items-center text-center overflow-clip"
                    texts={['Frontend Developer', 'UI/UX Designer', 'Tech Enthusiast']}
                    splitBy="characters"
                    staggerDuration={0.03}
                    staggerFrom="first"
                    initial={{ y: '100%', opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: '-100%', opacity: 0 }}
                />


                <p className="opacity-70 text-sm md:text-base">Based in Dhaka.</p>
            </div>

            <div className="relative flex flex-col items-center order-1 md:order-2 ">

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                  w-[50vw] h-[50vw] max-w-202 max-h-202 
                  bg-[radial-gradient(circle,rgba(255,78,8,1)_0%,#131313_100%)] 
                  rounded-[112%] filter blur-[120px] opacity-10">
                </div>
                <h1 className="brand text-5xl sm:text-6xl md:text-7xl lg:text-9xl text-gray-300 -rotate-4">
                    Portfolio
                </h1>

                <Image
                    src="/images/profile.png"
                    alt="Profile"
                    width={300}
                    height={225}
                    priority
                    className="-mt-4 md:-mt-6 z-10 rounded-4xl bg-orange-500 border-2 border-white shadow-lg w-48 h-auto sm:w-56 md:w-64 lg:w-80"
                />

                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-semibold brand z-20 -mt-4 md:-mt-6 text-white drop-shadow-[2px_2px_0_#ff5a00] md:drop-shadow-[3px_3px_0_#ff5a00]">
                    Md Salman
                </h2>

            </div>

            <div className="text-white text-center md:text-right space-y-3 max-w-xs md:max-w-sm px-4 md:px-0 order-3 md:order-3">
                <p className="opacity-70 text-xs md:text-sm">
                    Code in one hand, design tools in the other — I build experiences that bridge both worlds.
                </p>
                <a
                    href="/SalmanResume.pdf"
                    download
                    className="inline-block bg-orange-500 text-black px-3 py-2 rounded font-extrabold text-xl md:text-2xl hover:bg-orange-600 transition-colors"
                >
                    Download Resume
                </a>

            </div>
        </div>

    )
}

export default Hero