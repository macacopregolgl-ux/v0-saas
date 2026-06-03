"use client"

import { motion } from "framer-motion"

export function CTASection() {
  return (
    <section className="relative z-10 py-32 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center"
      >
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-12 md:p-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 text-balance">
            Pronto para organizar suas finanças?
          </h2>
          <p className="text-lg text-gray-400 mb-10">
            Comece grátis hoje. Sem cartão de crédito.
          </p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 text-lg font-semibold text-white border-2 border-white rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:bg-white/10"
          >
            Criar conta grátis
          </motion.button>
        </div>
      </motion.div>
    </section>
  )
}
