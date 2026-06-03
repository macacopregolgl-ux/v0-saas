"use client"

import { useState, useEffect } from "react"
import { motion, useMotionValue, useTransform, animate } from "framer-motion"
import { FluidRibbon } from "@/components/fluid-ribbon"
import { Sidebar } from "@/components/dashboard/sidebar"
import { Download, TrendingUp, TrendingDown, Wallet, ChevronDown } from "lucide-react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"

const months = [
  "Janeiro 2025", "Fevereiro 2025", "Março 2025", 
  "Abril 2025", "Maio 2025", "Junho 2025"
]

const categoryData = [
  { category: "Serviços", entradas: 4200, saidas: 0 },
  { category: "Produtos", entradas: 1800, saidas: 0 },
  { category: "Aluguel", entradas: 0, saidas: 800 },
  { category: "Materiais", entradas: 0, saidas: 350 },
  { category: "Utilidades", entradas: 0, saidas: 280 },
  { category: "Outros", entradas: 650, saidas: 420 },
]

function AnimatedNumber({ value, prefix = "", suffix = "", color = "text-white" }: { 
  value: number
  prefix?: string
  suffix?: string
  color?: string
}) {
  const count = useMotionValue(0)
  const rounded = useTransform(count, (v) => Math.floor(v).toLocaleString("pt-BR"))

  useEffect(() => {
    const controls = animate(count, value, { duration: 1.5, ease: "easeOut" })
    return controls.stop
  }, [count, value])

  return (
    <span className={color}>
      {prefix}<motion.span>{rounded}</motion.span>{suffix}
    </span>
  )
}

export default function RelatorioPage() {
  const [selectedMonth, setSelectedMonth] = useState("Maio 2025")
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [chartAnimated, setChartAnimated] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setChartAnimated(true), 500)
    return () => clearTimeout(timer)
  }, [])

  const receita = 6650
  const despesa = 1850
  const lucro = receita - despesa

  return (
    <div className="relative min-h-screen">
      <FluidRibbon />
      <Sidebar />
      
      <main className="relative z-10 lg:ml-64 min-h-screen p-4 sm:p-6 lg:p-8 pt-16 lg:pt-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8"
        >
          <div>
            <h1 className="text-3xl font-bold text-white">Relatório Mensal</h1>
            <p className="text-white/60 mt-1">Resumo financeiro do período</p>
          </div>
          
          <div className="flex items-center gap-3">
            {/* Month selector */}
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg text-white hover:bg-white/10 transition-colors"
              >
                {selectedMonth}
                <ChevronDown className={`w-4 h-4 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
              </button>
              
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute top-full left-0 mt-2 w-full bg-[#0a0a14]/95 backdrop-blur-xl border border-white/10 rounded-lg overflow-hidden z-20"
                >
                  {months.map(month => (
                    <button
                      key={month}
                      onClick={() => {
                        setSelectedMonth(month)
                        setDropdownOpen(false)
                      }}
                      className={`w-full px-4 py-2 text-left hover:bg-white/10 transition-colors ${
                        selectedMonth === month ? "text-[#c4a35a]" : "text-white"
                      }`}
                    >
                      {month}
                    </button>
                  ))}
                </motion.div>
              )}
            </div>

            {/* Export button */}
            <button className="flex items-center gap-2 px-4 py-2 border border-white/20 rounded-lg text-white hover:bg-white/10 transition-colors">
              <Download className="w-4 h-4" />
              Exportar PDF
            </button>
          </div>
        </motion.div>

        {/* Summary cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-emerald-400" />
              </div>
              <span className="text-white/60">Receita Total</span>
            </div>
            <div className="text-3xl font-bold">
              <AnimatedNumber value={receita} prefix="R$ " color="text-emerald-400" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center">
                <TrendingDown className="w-5 h-5 text-red-400" />
              </div>
              <span className="text-white/60">Despesa Total</span>
            </div>
            <div className="text-3xl font-bold">
              <AnimatedNumber value={despesa} prefix="R$ " color="text-red-400" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-[#c4a35a]/20 rounded-full flex items-center justify-center">
                <Wallet className="w-5 h-5 text-[#c4a35a]" />
              </div>
              <span className="text-white/60">Lucro Líquido</span>
            </div>
            <div className="text-3xl font-bold">
              <AnimatedNumber value={lucro} prefix="R$ " color="text-[#c4a35a]" />
            </div>
          </motion.div>
        </div>

        {/* Bar chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6"
        >
          <h2 className="text-lg font-semibold text-white mb-6">Entradas vs Saídas por Categoria</h2>
          <div className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={categoryData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis 
                  dataKey="category" 
                  stroke="rgba(255,255,255,0.4)"
                  tick={{ fill: "rgba(255,255,255,0.6)", fontSize: 12 }}
                />
                <YAxis 
                  stroke="rgba(255,255,255,0.4)"
                  tick={{ fill: "rgba(255,255,255,0.6)", fontSize: 12 }}
                  tickFormatter={(value) => `R$${value}`}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(10, 10, 20, 0.95)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "8px",
                    color: "white"
                  }}
                  formatter={(value: number) => [`R$ ${value.toLocaleString("pt-BR")}`, ""]}
                />
                <Legend 
                  wrapperStyle={{ color: "white" }}
                  formatter={(value) => <span className="text-white/80">{value === "entradas" ? "Entradas" : "Saídas"}</span>}
                />
                <Bar 
                  dataKey="entradas" 
                  fill="#10b981" 
                  radius={[4, 4, 0, 0]}
                  animationDuration={1500}
                  animationBegin={chartAnimated ? 0 : 99999}
                />
                <Bar 
                  dataKey="saidas" 
                  fill="#ef4444" 
                  radius={[4, 4, 0, 0]}
                  animationDuration={1500}
                  animationBegin={chartAnimated ? 300 : 99999}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </main>
    </div>
  )
}
