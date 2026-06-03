"use client"

import { motion } from "framer-motion"

export function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold text-white tracking-tight">
          FinMEI
        </div>
        
        <div className="flex items-center gap-4">
          <button className="px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors">
            Entrar
          </button>
          <button className="px-5 py-2.5 text-sm font-medium bg-white text-[#080810] rounded-lg hover:bg-white/90 transition-colors">
            Começar grátis
          </button>
        </div>
      </div>
    </motion.nav>
  )
}
