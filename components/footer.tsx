"use client"

import { motion } from "framer-motion"

const footerLinks = {
  Produto: ["Funcionalidades", "Preços", "Demo"],
  Suporte: ["Ajuda", "Contato", "Status"],
  Legal: ["Privacidade", "Termos"],
}

export function Footer() {
  return (
    <footer className="relative z-10 px-6 pb-8">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row justify-between gap-12 mb-12">
            {/* Logo */}
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-white">FinMEI</span>
            </div>

            {/* Link Columns */}
            <div className="grid grid-cols-3 gap-8 md:gap-16">
              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category}>
                  <h4 className="text-sm font-semibold text-white mb-4">
                    {category}
                  </h4>
                  <ul className="space-y-3">
                    {links.map((link) => (
                      <li key={link}>
                        <a
                          href="#"
                          className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/10 pt-8">
            <p className="text-sm text-gray-500 text-center">
              © 2025 FinMEI. Feito para MEIs brasileiros.
            </p>
          </div>
        </div>
      </motion.div>
    </footer>
  )
}
