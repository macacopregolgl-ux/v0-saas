"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Home, 
  ArrowLeftRight, 
  Bell, 
  FileText,
  Menu,
  X
} from "lucide-react"

const menuItems = [
  { icon: Home, label: "Início", href: "/dashboard" },
  { icon: ArrowLeftRight, label: "Lançamentos", href: "/lancamentos" },
  { icon: Bell, label: "Alertas", href: "/alertas" },
  { icon: FileText, label: "Relatório", href: "/relatorio" },
]

export function Sidebar() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      {/* Mobile hamburger button */}
      <button
        onClick={() => setMobileMenuOpen(true)}
        className="fixed top-4 left-4 z-50 p-2 rounded-lg bg-white/5 backdrop-blur-md border border-white/10 lg:hidden"
      >
        <Menu className="w-6 h-6 text-white" />
      </button>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{ x: mobileMenuOpen ? 0 : "-100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="fixed left-0 top-0 h-full w-64 bg-black/40 backdrop-blur-xl border-r border-white/10 z-50 lg:translate-x-0 lg:z-20"
      >
        <div className="p-6">
          {/* Close button mobile */}
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-4 right-4 p-2 rounded-lg hover:bg-white/10 lg:hidden"
          >
            <X className="w-5 h-5 text-white" />
          </button>

          {/* Logo */}
          <Link href="/" className="block mb-10">
            <span className="text-2xl font-bold text-white">Fin<span className="text-[#c4a35a]">MEI</span></span>
          </Link>

          {/* Menu items */}
          <nav className="space-y-2">
            {menuItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`relative w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                    isActive 
                      ? "text-white" 
                      : "text-white/60 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeItem"
                      className="absolute inset-0 bg-white/10 rounded-lg shadow-[0_0_20px_rgba(255,255,255,0.15)]"
                      transition={{ type: "spring", damping: 25, stiffness: 200 }}
                    />
                  )}
                  <item.icon className="relative w-5 h-5" />
                  <span className="relative font-medium">{item.label}</span>
                </Link>
              )
            })}
          </nav>
        </div>
      </motion.aside>
    </>
  )
}
