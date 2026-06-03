"use client"

export function TopBar() {
  const today = new Date()
  const formattedDate = today.toLocaleDateString("pt-BR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  })

  return (
    <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-white">
        {"Olá, João 👋"}
      </h1>
      <p className="text-white/50 text-sm sm:text-base capitalize">{formattedDate}</p>
    </header>
  )
}
