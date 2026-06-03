"use client"

import { motion } from "framer-motion"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const data = [
  { month: "Jan", entradas: 3200, saidas: 1800 },
  { month: "Fev", entradas: 4100, saidas: 2200 },
  { month: "Mar", entradas: 3800, saidas: 2600 },
  { month: "Abr", entradas: 5200, saidas: 2100 },
  { month: "Mai", entradas: 4500, saidas: 2400 },
  { month: "Jun", entradas: 4850, saidas: 2340 },
]

export function ChartSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.5 }}
      className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-5 mb-8"
    >
      <h3 className="text-white font-semibold mb-6">Entradas vs Saídas — Últimos 6 meses</h3>
      <div className="h-64 sm:h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis 
              dataKey="month" 
              stroke="rgba(255,255,255,0.5)" 
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis 
              stroke="rgba(255,255,255,0.5)" 
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `R$${value / 1000}k`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(0,0,0,0.8)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "8px",
                color: "#fff",
              }}
              formatter={(value: number) => [`R$ ${value.toLocaleString("pt-BR")}`, ""]}
              labelStyle={{ color: "rgba(255,255,255,0.7)" }}
            />
            <Line
              type="monotone"
              dataKey="entradas"
              stroke="#34d399"
              strokeWidth={2}
              dot={{ fill: "#34d399", strokeWidth: 0, r: 4 }}
              activeDot={{ r: 6, fill: "#34d399" }}
              name="Entradas"
              animationDuration={2000}
              animationEasing="ease-out"
            />
            <Line
              type="monotone"
              dataKey="saidas"
              stroke="#f87171"
              strokeWidth={2}
              dot={{ fill: "#f87171", strokeWidth: 0, r: 4 }}
              activeDot={{ r: 6, fill: "#f87171" }}
              name="Saídas"
              animationDuration={2000}
              animationEasing="ease-out"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="flex items-center justify-center gap-6 mt-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-emerald-400" />
          <span className="text-white/60 text-sm">Entradas</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <span className="text-white/60 text-sm">Saídas</span>
        </div>
      </div>
    </motion.div>
  )
}
