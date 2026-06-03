"use client"

import { motion } from "framer-motion"
import { ShoppingCart, Zap, Coffee, Briefcase, FileText } from "lucide-react"

const transactions = [
  { icon: Briefcase, name: "Serviço de consultoria", value: 1500, type: "entrada" },
  { icon: ShoppingCart, name: "Material de escritório", value: -230, type: "saida" },
  { icon: FileText, name: "Projeto freelance", value: 850, type: "entrada" },
  { icon: Zap, name: "Conta de energia", value: -180, type: "saida" },
  { icon: Coffee, name: "Reunião com cliente", value: -45, type: "saida" },
]

export function TransactionsList() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-5"
    >
      <h3 className="text-white font-semibold mb-4">Últimos lançamentos</h3>
      <div className="space-y-3">
        {transactions.map((transaction, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
            className="flex items-center justify-between py-3 border-b border-white/5 last:border-0"
          >
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-lg ${transaction.type === "entrada" ? "bg-emerald-400/10" : "bg-red-400/10"}`}>
                <transaction.icon className={`w-4 h-4 ${transaction.type === "entrada" ? "text-emerald-400" : "text-red-400"}`} />
              </div>
              <span className="text-white/80 text-sm">{transaction.name}</span>
            </div>
            <span className={`font-semibold ${transaction.value > 0 ? "text-emerald-400" : "text-red-400"}`}>
              {transaction.value > 0 ? "+" : ""}R$ {Math.abs(transaction.value).toLocaleString("pt-BR")}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
