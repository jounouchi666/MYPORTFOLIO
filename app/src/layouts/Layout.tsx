import { Outlet } from 'react-router'
import { AppSidebar } from './components/AppSidebar'

export function Layout() {
  return (
    <div className="min-h-screen bg-background">
      <AppSidebar />

      <main className="lg:ml-64 min-h-screen pt-14 lg:pt-0">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          <Outlet />
        </div>
      </main>
    </div>
  )
}
