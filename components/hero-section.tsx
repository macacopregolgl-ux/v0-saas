"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const headlineWords = ["Suas", "financas,", "finalmente", "organizadas"]
const subtitleWords = [
  "Controle", "entradas,", "saidas", "e", "nunca", "mais", "perca", 
  "o", "prazo", "do", "DAS.", "Simples,", "rapido,", "feito", "pra", "voce."
]

export function HeroSection() {
  return (
    <section className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-[64px] leading-tight font-bold text-white mb-6 text-balance">
          {headlineWords.map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
                ease: "easeOut"
              }}
              className="inline-block mr-2 sm:mr-4"
            >
              {word}
            </motion.span>
          ))}
        </h1>
        
        <p className="text-base sm:text-lg text-white/60 mb-10 max-w-2xl mx-auto text-pretty">
          {subtitleWords.map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: 0.6 + index * 0.05,
                ease: "easeOut"
              }}
              className="inline-block mr-1.5"
            >
              {word}
            </motion.span>
          ))}
        </p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/cadastro">
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 text-base font-semibold bg-white text-[#080810] rounded-xl hover:bg-white/90 transition-colors"
            >
              Comecar gratis
            </motion.button>
          </Link>
          <Link href="/dashboard">
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 text-base font-semibold text-white border border-white/20 rounded-xl hover:bg-white/5 transition-colors"
            >
              Ver demonstracao
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
