import { FluidRibbon } from "@/components/fluid-ribbon"
import { Sidebar } from "@/components/dashboard/sidebar"
import { TopBar } from "@/components/dashboard/top-bar"
import { MetricCards } from "@/components/dashboard/metric-cards"
import { ChartSection } from "@/components/dashboard/chart-section"
import { TransactionsList } from "@/components/dashboard/transactions-list"
import { AlertsCard } from "@/components/dashboard/alerts-card"

export default function DashboardPage() {
  return (
    <div className="relative min-h-screen">
      <FluidRibbon />
      <Sidebar />
      
      {/* Main content */}
      <main className="relative z-10 lg:ml-64 min-h-screen p-4 sm:p-6 lg:p-8 pt-16 lg:pt-8">
        <TopBar />
        <MetricCards />
        <ChartSection />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <TransactionsList />
          <AlertsCard />
        </div>
      </main>
    </div>
  )
}
