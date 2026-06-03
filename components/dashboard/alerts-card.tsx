"use client"

import { motion } from "framer-motion"
import { AlertCircle, Target } from "lucide-react"

export function AlertsCard() {
  return (
    <div className="space-y-4">
      {/* DAS Alert */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-5"
      >
        <div className="flex items-start gap-3">
          <div className="relative">
            <div className="p-2 rounded-lg bg-red-400/10">
              <AlertCircle className="w-5 h-5 text-red-400" />
            </div>
            {/* Pulsing red dot */}
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"
            />
          </div>
          <div className="flex-1">
            <h4 className="text-white font-semibold mb-1">Alerta de DAS</h4>
            <p className="text-white/60 text-sm mb-2">Vencimento em 5 dias</p>
            <p className="text-red-400 font-bold text-xl">R$ 67,80</p>
          </div>
        </div>
        <button className="w-full mt-4 py-2 px-4 rounded-lg bg-red-400/20 text-red-400 font-medium text-sm hover:bg-red-400/30 transition-colors">
          Pagar agora
        </button>
      </motion.div>

      {/* Monthly Goal Progress */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-5"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-[#c4a35a]/10">
            <Target className="w-5 h-5 text-[#c4a35a]" />
          </div>
          <div>
            <h4 className="text-white font-semibold">Meta mensal</h4>
            <p className="text-white/60 text-sm">R$ 4.850 de R$ 6.000</p>
          </div>
        </div>
        <div className="h-3 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "81%" }}
            transition={{ delay: 0.8, duration: 1.5, ease: "easeOut" }}
            className="h-full bg-gradient-to-r from-[#c4a35a] to-[#d4b36a] rounded-full"
          />
        </div>
        <div className="flex justify-between mt-2">
          <span className="text-white/50 text-xs">81% alcançado</span>
          <span className="text-white/50 text-xs">Faltam R$ 1.150</span>
        </div>
      </motion.div>
    </div>
  )
}
