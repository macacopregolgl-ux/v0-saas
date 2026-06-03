"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FluidRibbon } from "@/components/fluid-ribbon"
import { Sidebar } from "@/components/dashboard/sidebar"
import { AlertTriangle, CheckCircle, X, Inbox } from "lucide-react"

interface Alert {
  id: number
  type: "danger" | "warning" | "success"
  title: string
  description: string
}

const initialAlerts: Alert[] = [
  { 
    id: 1, 
    type: "danger", 
    title: "DAS vencendo em 5 dias", 
    description: "Valor: R$ 67,80 — Vencimento: 20/06/2025" 
  },
  { 
    id: 2, 
    type: "warning", 
    title: "Saldo baixo este mês", 
    description: "Seu saldo atual está 40% abaixo da média mensal" 
  },
  { 
    id: 3, 
    type: "success", 
    title: "Relatório de maio disponível", 
    description: "Clique para visualizar ou exportar seu relatório mensal" 
  },
]

export default function AlertasPage() {
  const [alerts, setAlerts] = useState<Alert[]>(initialAlerts)

  const dismissAlert = (id: number) => {
    setAlerts(alerts.filter(a => a.id !== id))
  }

  const getAlertStyles = (type: Alert["type"]) => {
    switch (type) {
      case "danger":
        return {
          bg: "bg-red-500/10",
          border: "border-red-500/30",
          icon: "bg-red-500",
          text: "text-red-400"
        }
      case "warning":
        return {
          bg: "bg-amber-500/10",
          border: "border-amber-500/30",
          icon: "bg-amber-500",
          text: "text-amber-400"
        }
      case "success":
        return {
          bg: "bg-emerald-500/10",
          border: "border-emerald-500/30",
          icon: "bg-emerald-500",
          text: "text-emerald-400"
        }
    }
  }

  const getAlertIcon = (type: Alert["type"]) => {
    switch (type) {
      case "danger":
        return (
          <div className="relative">
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full" />
            <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center">
              <AlertTriangle className="w-5 h-5 text-red-400" />
            </div>
          </div>
        )
      case "warning":
        return (
          <div className="w-10 h-10 bg-amber-500/20 rounded-full flex items-center justify-center">
            <AlertTriangle className="w-5 h-5 text-amber-400" />
          </div>
        )
      case "success":
        return (
          <div className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center">
            <CheckCircle className="w-5 h-5 text-emerald-400" />
          </div>
        )
    }
  }

  return (
    <div className="relative min-h-screen">
      <FluidRibbon />
      <Sidebar />
      
      <main className="relative z-10 lg:ml-64 min-h-screen p-4 sm:p-6 lg:p-8 pt-16 lg:pt-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-white">Alertas</h1>
          <p className="text-white/60 mt-2">
            {alerts.length > 0 
              ? `Você tem ${alerts.length} alerta${alerts.length > 1 ? "s" : ""} ativo${alerts.length > 1 ? "s" : ""}`
              : "Nenhum alerta ativo"
            }
          </p>
        </motion.div>

        {/* Alert cards */}
        <div className="space-y-4 max-w-2xl">
          <AnimatePresence mode="popLayout">
            {alerts.map((alert, index) => {
              const styles = getAlertStyles(alert.type)
              return (
                <motion.div
                  key={alert.id}
                  layout
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -100, scale: 0.95 }}
                  transition={{ delay: index * 0.1 }}
                  className={`${styles.bg} backdrop-blur-md border ${styles.border} rounded-xl p-4 sm:p-6`}
                >
                  <div className="flex items-start gap-4">
                    {getAlertIcon(alert.type)}
                    
                    <div className="flex-1 min-w-0">
                      <h3 className={`font-semibold ${styles.text}`}>{alert.title}</h3>
                      <p className="text-white/60 text-sm mt-1">{alert.description}</p>
                    </div>

                    <button
                      onClick={() => dismissAlert(alert.id)}
                      className="p-2 hover:bg-white/10 rounded-lg transition-colors shrink-0"
                    >
                      <X className="w-5 h-5 text-white/40 hover:text-white/60" />
                    </button>
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>

          {/* Empty state */}
          {alerts.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-12 text-center"
            >
              <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4">
                <Inbox className="w-8 h-8 text-white/40" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">Tudo em dia!</h3>
              <p className="text-white/60">Você não tem alertas pendentes no momento.</p>
            </motion.div>
          )}
        </div>
      </main>
    </div>
  )
}
