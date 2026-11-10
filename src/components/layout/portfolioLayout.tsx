
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import ProfileSidebar from './ProfileSidebar'

export default function PortfolioLayout() {
  const location = useLocation()

  return (
    <div className="min-h-screen bg-background p-4 font-sans text-foreground transition-colors duration-300 md:p-6">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-6 md:grid-cols-[230px_minmax(0,1fr)] lg:gap-8">
        <aside className="rounded-3xl border border-border bg-surface p-6 transition-colors duration-300 md:sticky md:top-6 md:h-[calc(100vh-3rem)]">
          <ProfileSidebar />
        </aside>
        <div className="min-w-0">
          <Header />

          <main className="mt-8 min-h-[70vh] rounded-3xl border border-border bg-surface-raised p-6 transition-colors duration-300 md:mt-10 md:p-12">
            <div key={location.pathname} className="route-enter">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
