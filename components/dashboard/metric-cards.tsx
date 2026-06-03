"use client"

import { motion, useMotionValue, useTransform, animate } from "framer-motion"
import { useEffect } from "react"
import { TrendingUp, TrendingDown, Wallet, AlertTriangle } from "lucide-react"

interface AnimatedNumberProps {
  value: number
  prefix?: string
  duration?: number
}

function AnimatedNumber({ value, prefix = "", duration = 2 }: AnimatedNumberProps) {
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => {
    return prefix + latest.toLocaleString("pt-BR", { minimumFractionDigits: 0, maximumFractionDigits: 0 })
  })

  useEffect(() => {
    const controls = animate(count, value, { duration, ease: "easeOut" })
    return controls.stop
  }, [count, value, duration])

  return <motion.span>{rounded}</motion.span>
}

const metrics = [
  { 
    label: "Entradas", 
    value: 4850, 
    prefix: "R$ ", 
    color: "text-emerald-400",
    bgColor: "bg-emerald-400/10",
    icon: TrendingUp 
  },
  { 
    label: "Saídas", 
    value: 2340, 
    prefix: "R$ ", 
    color: "text-red-400",
    bgColor: "bg-red-400/10",
    icon: TrendingDown 
  },
  { 
    label: "Saldo", 
    value: 2510, 
    prefix: "R$ ", 
    color: "text-white",
    bgColor: "bg-white/10",
    icon: Wallet 
  },
  { 
    label: "Alertas", 
    value: 2, 
    prefix: "", 
    color: "text-amber-400",
    bgColor: "bg-amber-400/10",
    icon: AlertTriangle 
  },
]

export function MetricCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {metrics.map((metric, index) => (
        <motion.div
          key={metric.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-5"
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-white/60 text-sm font-medium">{metric.label}</span>
            <div className={`p-2 rounded-lg ${metric.bgColor}`}>
              <metric.icon className={`w-4 h-4 ${metric.color}`} />
            </div>
          </div>
          <p className={`text-2xl sm:text-3xl font-bold ${metric.color}`}>
            <AnimatedNumber value={metric.value} prefix={metric.prefix} />
          </p>
        </motion.div>
      ))}
    </div>
  )
}
