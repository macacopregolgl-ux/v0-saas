"use client"

import { User } from "lucide-react"

export function TopBar() {
  const today = new Date()
  const formattedDate = today.toLocaleDateString("pt-BR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  })

  return (
    <header className="flex items-center justify-between gap-4 mb-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-white">
        {"Ola, Joao"} <span className="inline-block">👋</span>
      </h1>
      <div className="flex items-center gap-4">
        <p className="text-white/50 text-sm sm:text-base capitalize hidden sm:block">{formattedDate}</p>
        <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
          <User className="w-5 h-5 text-white/70" />
        </div>
      </div>
    </header>
  )
}
