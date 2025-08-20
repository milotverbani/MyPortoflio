import React from 'react';
import { motion } from "framer-motion";
import Marqueeslider from '../Components/Marqueeslider.jsx';
import milotCV from '../Components/CV-MilotVerbani.pdf'; 

function Home() {
  return (
    <section id='home'>
      <div className="text-white pt-[150px] sm:pt-[180px] md:pt-[220px] lg:pt-[250px] min-h-[500px] flex flex-col justify-center items-center px-4 sm:px-6 md:px-12 lg:px-24">

        <motion.div 
          initial={{ opacity: 0, y: -30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
          className="flex flex-col sm:flex-row gap-2 sm:gap-3 items-center"
        >
          <h1 className="font-bold italic text-sky-600 text-3xl sm:text-4xl motion-safe:animate-pulse">MILOT</h1>
          <h1 className='font-bold text-sky-700 text-3xl sm:text-4xl motion-safe:animate-pulse'>VERBANI</h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className='w-full sm:w-[700px] md:w-[800px] lg:w-[900px] font-mono text-center mt-4 text-base sm:text-lg'
        >
          “BSc. Milot Verbani – full-stack software developer with experience in both frontend and backend. Motivated and always ready for new projects and exciting challenges.”
        </motion.p>

        <div className='flex sm:flex-row gap-3 sm:gap-4 mt-6'>
          {/* Project button */}
          <motion.a
            href="#projects" // kjo do të çojë tek section id="projects"
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="group text-base sm:text-lg cursor-pointer relative inline-flex h-[40px] items-center justify-center overflow-hidden rounded-md bg-emerald-950 px-4 sm:px-6 font-medium text-neutral-200 transition"
          >
            <span className='p-2 sm:p-4'>Project</span>
            <div className="absolute inset-0 flex h-full w-full justify-center transform group-hover:duration-1000 group-hover:translate-x-full group-hover:skew-x-[-12deg] -translate-x-full skew-x-[-12deg]">
              <div className="relative h-full w-8 bg-white/20" />
            </div>
          </motion.a>

          {/* CV button */}
          <motion.a
            href={milotCV} // ky është path-i i PDF
            download // kjo bën që ta shkarkojë
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="group text-base sm:text-lg cursor-pointer relative inline-flex h-[40px] items-center justify-center overflow-hidden rounded-md bg-emerald-950 px-4 sm:px-6 font-medium text-neutral-200 transition"
          >
            <span className='p-2 sm:p-4'>CV</span>
            <div className="absolute inset-0 flex h-full w-full justify-center transform group-hover:duration-1000 group-hover:translate-x-full group-hover:skew-x-[-12deg] -translate-x-full skew-x-[-12deg]">
              <div className="relative h-full w-8 bg-white/20" />
            </div>
          </motion.a>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className='mt-8 w-full'
        >
          <Marqueeslider/>
        </motion.div>

      </div>
    </section>
  );
}

export default Home;
