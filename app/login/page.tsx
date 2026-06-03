"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { FluidRibbon } from "@/components/fluid-ribbon"

export default function LoginPage() {
  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <FluidRibbon />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 w-full max-w-md mx-4"
      >
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8">
          <div className="text-center mb-8">
            <Link href="/" className="text-3xl font-bold text-white tracking-tight">
              FinMEI
            </Link>
            <p className="text-white/50 mt-2">Entre na sua conta</p>
          </div>
          
          <form className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="seu@email.com"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-white/30 transition-colors"
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-white/70 mb-2">
                Senha
              </label>
              <input
                type="password"
                id="password"
                placeholder="••••••••"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-white/30 transition-colors"
              />
            </div>
            
            <Link
              href="/dashboard"
              className="block w-full py-3 bg-white text-[#080810] font-medium rounded-lg hover:bg-white/90 transition-colors text-center"
            >
              Entrar
            </Link>
          </form>
          
          <p className="text-center mt-6 text-white/50 text-sm">
            Ainda nao tem conta?{" "}
            <Link href="/cadastro" className="text-white hover:underline">
              Criar conta gratis
            </Link>
          </p>
        </div>
      </motion.div>
    </main>
  )
}
