"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FluidRibbon } from "@/components/fluid-ribbon"
import { Sidebar } from "@/components/dashboard/sidebar"
import { Plus, Search, X } from "lucide-react"

const mockTransactions = [
  { id: 1, date: "28/05/2025", desc: "Venda de serviço", category: "Serviços", type: "entrada", value: 1500 },
  { id: 2, date: "27/05/2025", desc: "Aluguel escritório", category: "Aluguel", type: "saida", value: 800 },
  { id: 3, date: "25/05/2025", desc: "Consultoria", category: "Serviços", type: "entrada", value: 2200 },
  { id: 4, date: "24/05/2025", desc: "Material de escritório", category: "Materiais", type: "saida", value: 150 },
  { id: 5, date: "22/05/2025", desc: "Venda produto", category: "Produtos", type: "entrada", value: 850 },
  { id: 6, date: "20/05/2025", desc: "Internet", category: "Utilidades", type: "saida", value: 120 },
  { id: 7, date: "18/05/2025", desc: "Projeto freelance", category: "Serviços", type: "entrada", value: 1800 },
  { id: 8, date: "15/05/2025", desc: "Software mensal", category: "Assinaturas", type: "saida", value: 99 },
  { id: 9, date: "12/05/2025", desc: "Manutenção cliente", category: "Serviços", type: "entrada", value: 500 },
  { id: 10, date: "10/05/2025", desc: "Contador", category: "Serviços", type: "saida", value: 350 },
]

const categories = ["Serviços", "Produtos", "Aluguel", "Materiais", "Utilidades", "Assinaturas", "Outros"]

export default function LancamentosPage() {
  const [modalOpen, setModalOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [formData, setFormData] = useState({
    descricao: "",
    valor: "",
    tipo: "entrada",
    categoria: "Serviços",
    data: ""
  })

  const filteredTransactions = mockTransactions.filter(t => 
    t.desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
    t.category.toLowerCase().includes(searchTerm.toLowerCase())
  )

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
          <h1 className="text-3xl font-bold text-white">Lançamentos</h1>
          <button
            onClick={() => setModalOpen(true)}
            className="flex items-center gap-2 px-4 py-2 bg-white text-[#080810] font-semibold rounded-lg hover:bg-white/90 transition-colors"
          >
            <Plus className="w-5 h-5" />
            Novo lançamento
          </button>
        </motion.div>

        {/* Search */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-6"
        >
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
            <input
              type="text"
              placeholder="Buscar lançamentos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-white/30"
            />
          </div>
        </motion.div>

        {/* Table */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left p-4 text-white/60 font-medium">Data</th>
                  <th className="text-left p-4 text-white/60 font-medium">Descrição</th>
                  <th className="text-left p-4 text-white/60 font-medium hidden sm:table-cell">Categoria</th>
                  <th className="text-left p-4 text-white/60 font-medium">Tipo</th>
                  <th className="text-right p-4 text-white/60 font-medium">Valor</th>
                </tr>
              </thead>
              <tbody>
                {filteredTransactions.map((transaction, index) => (
                  <motion.tr
                    key={transaction.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.05 }}
                    className="border-b border-white/5 hover:bg-white/5 transition-colors"
                  >
                    <td className="p-4 text-white/80">{transaction.date}</td>
                    <td className="p-4 text-white">{transaction.desc}</td>
                    <td className="p-4 text-white/60 hidden sm:table-cell">{transaction.category}</td>
                    <td className="p-4">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        transaction.type === "entrada" 
                          ? "bg-emerald-500/20 text-emerald-400" 
                          : "bg-red-500/20 text-red-400"
                      }`}>
                        {transaction.type === "entrada" ? "Entrada" : "Saída"}
                      </span>
                    </td>
                    <td className={`p-4 text-right font-semibold ${
                      transaction.type === "entrada" ? "text-emerald-400" : "text-red-400"
                    }`}>
                      {transaction.type === "entrada" ? "+" : "-"} R$ {transaction.value.toLocaleString("pt-BR")}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </main>

      {/* Modal */}
      <AnimatePresence>
        {modalOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModalOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md z-50 p-4"
            >
              <div className="bg-[#0a0a14]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-white">Novo Lançamento</h2>
                  <button onClick={() => setModalOpen(false)} className="p-1 hover:bg-white/10 rounded-lg">
                    <X className="w-5 h-5 text-white/60" />
                  </button>
                </div>

                <form className="space-y-4">
                  <div>
                    <label className="block text-white/60 text-sm mb-2">Descrição</label>
                    <input
                      type="text"
                      value={formData.descricao}
                      onChange={(e) => setFormData({...formData, descricao: e.target.value})}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-white/30"
                      placeholder="Ex: Venda de serviço"
                    />
                  </div>

                  <div>
                    <label className="block text-white/60 text-sm mb-2">Valor</label>
                    <input
                      type="text"
                      value={formData.valor}
                      onChange={(e) => setFormData({...formData, valor: e.target.value})}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-white/30"
                      placeholder="R$ 0,00"
                    />
                  </div>

                  <div>
                    <label className="block text-white/60 text-sm mb-2">Tipo</label>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => setFormData({...formData, tipo: "entrada"})}
                        className={`flex-1 py-3 rounded-lg font-medium transition-all ${
                          formData.tipo === "entrada"
                            ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                            : "bg-white/5 text-white/60 border border-white/10 hover:bg-white/10"
                        }`}
                      >
                        Entrada
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData({...formData, tipo: "saida"})}
                        className={`flex-1 py-3 rounded-lg font-medium transition-all ${
                          formData.tipo === "saida"
                            ? "bg-red-500/20 text-red-400 border border-red-500/30"
                            : "bg-white/5 text-white/60 border border-white/10 hover:bg-white/10"
                        }`}
                      >
                        Saída
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-white/60 text-sm mb-2">Categoria</label>
                    <select
                      value={formData.categoria}
                      onChange={(e) => setFormData({...formData, categoria: e.target.value})}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-white/30"
                    >
                      {categories.map(cat => (
                        <option key={cat} value={cat} className="bg-[#0a0a14]">{cat}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-white/60 text-sm mb-2">Data</label>
                    <input
                      type="date"
                      value={formData.data}
                      onChange={(e) => setFormData({...formData, data: e.target.value})}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-white/30"
                    />
                  </div>

                  <button
                    type="button"
                    onClick={() => setModalOpen(false)}
                    className="w-full py-3 bg-white text-[#080810] font-semibold rounded-lg hover:bg-white/90 transition-colors mt-6"
                  >
                    Salvar lançamento
                  </button>
                </form>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
