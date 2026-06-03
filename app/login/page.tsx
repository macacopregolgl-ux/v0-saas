"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { FluidRibbon } from "@/components/fluid-ribbon"

export default function LoginPage() {
  return (
    <main className="relative min-h-screen flex items-center justify-center px-6">
      <FluidRibbon />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 w-full max-w-md"
      >
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-10">
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
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/30 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/20 transition-colors"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-white/70 mb-2">
                Senha
              </label>
              <input
                type="password"
                id="password"
                placeholder="********"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/30 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/20 transition-colors"
              />
            </div>

            <Link href="/dashboard">
              <motion.button
                type="button"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full mt-2 px-6 py-3.5 bg-white text-[#080810] font-semibold rounded-lg hover:bg-white/90 transition-colors"
              >
                Entrar
              </motion.button>
            </Link>
          </form>

          <div className="mt-6 text-center">
            <p className="text-white/50 text-sm">
              Ainda nao tem conta?{" "}
              <Link href="/cadastro" className="text-white hover:underline">
                Criar conta gratis
              </Link>
            </p>
          </div>
        </div>
      </motion.div>
    </main>
  )
}
