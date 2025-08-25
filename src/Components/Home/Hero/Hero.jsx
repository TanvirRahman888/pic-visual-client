"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full bg-gray-900 text-white overflow-hidden bg-opacity-50 ">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img 
          src="https://everycom.in/assets/img/products/x7/img1.png"
          alt="Photo editing background"
          className="object-cover opacity-50"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 -z-10" />

      <div className="container mx-auto px-6 md:px-12 lg:px-16 flex flex-col items-center justify-center text-center py-32">
        {/* Animated Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold leading-tight"
        >
          Transform Your Photos <br />
          <span className="text-yellow-400">Into Stunning Masterpieces</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-6 text-lg md:text-xl max-w-2xl text-gray-200"
        >
          Professional photo editing services for photographers, e-commerce, and
          businesses worldwide. Fast, affordable, and reliable.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-8 flex gap-4"
        >
          <button className="px-6 py-3 rounded-2xl bg-yellow-400 text-gray-900 font-semibold flex items-center gap-2 hover:bg-yellow-300 transition">
            Get Started <ArrowRight size={18} />
          </button>
          <button className="px-6 py-3 rounded-2xl border border-white text-white font-semibold hover:bg-white/10 transition">
            View Portfolio
          </button>
        </motion.div>
      </div>
    </section>
  );
}
