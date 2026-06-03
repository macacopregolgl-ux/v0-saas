"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-white tracking-tight">
          FinMEI
        </Link>
        
        <div className="flex items-center gap-4">
          <Link 
            href="/login"
            className="px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors"
          >
            Entrar
          </Link>
          <Link 
            href="/cadastro"
            className="px-5 py-2.5 text-sm font-medium bg-white text-[#080810] rounded-lg hover:bg-white/90 transition-colors"
          >
            Comecar gratis
          </Link>
        </div>
      </div>
    </motion.nav>
  )
}
