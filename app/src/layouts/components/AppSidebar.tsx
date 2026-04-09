import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router'
import { User, Wrench, Briefcase, Terminal, Menu, X, Layers } from 'lucide-react'
import { cn } from '@/lib/utils'

type NavItem = {
  path: string
  label: string
  icon: any
  hint: string
  external?: boolean
}

const navItems: NavItem[] = [
  { path: '/profile', label: 'Profile', icon: User, hint: '自己紹介' },
  { path: '/projects', label: 'Projects', icon: Briefcase, hint: 'プロジェクト' },
  { path: '/architecture', label: 'Architecture', icon: Layers, hint: 'アーキテクチャ' },
  { path: '/skills', label: 'Skills', icon: Wrench, hint: '技術スタック' },

  {
    path: 'https://github.com/jounouchi666',
    label: 'GitHub',
    icon: Terminal,
    hint: 'ソースコード',
    external: true,
  },
]

export function AppSidebar() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : ''
  }, [isMobileMenuOpen])

  return (
    <>
      {/* ===== Mobile Header ===== */}
      <header className="lg:hidden fixed top-0 left-0 right-0 h-14 bg-sidebar border-b border-sidebar-border z-50 flex items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="font-serif text-lg text-foreground">jounouchi666</span>
        </div>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </header>

      {/* ===== Overlay ===== */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setIsMobileMenuOpen(false)
            }
          }}
        />
      )}

      {/* ===== Sidebar ===== */}
      <aside
        className={cn(
          'fixed left-0 top-0 h-screen w-64 bg-sidebar border-r border-sidebar-border flex flex-col z-50',
          'transition-transform duration-300 ease-out',
          'lg:translate-x-0',
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        {/* ===== Header ===== */}
        <div className="p-6 border-b border-sidebar-border">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="font-mono text-xs text-muted-foreground tracking-wider">
                  SYSTEM.ACTIVE
                </span>
              </div>

              <h1 className="font-serif text-xl text-foreground tracking-wide">
                jounouchi666
              </h1>

              <p className="text-sm text-muted-foreground mt-1">
                (become) Software Engineer
              </p>

              <p className="text-xs text-muted-foreground/60 mt-1 font-mono">
                Now: Building WebRTC streaming app
              </p>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="lg:hidden p-2 text-muted-foreground hover:text-foreground"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* ===== Nav ===== */}
        <nav className="flex-1 p-4">
          <ul className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon

              const isActive =
                !item.external && location.pathname.startsWith(item.path)

              const isHovered = hoveredItem === item.path

              const baseClass = cn(
                'w-full flex items-center gap-3 px-3 py-3 rounded-md text-left',
                'transition-all duration-300 ease-out',
                'group relative overflow-hidden',
                isActive
                  ? 'bg-sidebar-accent text-foreground'
                  : 'text-muted-foreground hover:text-foreground hover:bg-sidebar-accent/50'
              )

              return (
                <li key={item.path}>
                  {item.external ? (
                    <a
                      href={item.path}
                      target="_blank"
                      onMouseEnter={() => setHoveredItem(item.path)}
                      onMouseLeave={() => setHoveredItem(null)}
                      className={baseClass}
                    >
                      <Icon className="w-4 h-4 shrink-0" />
                      <span className="text-sm tracking-wide">{item.label}</span>

                      <span
                        className={cn(
                          'absolute right-3 text-xs text-muted-foreground/70 hidden lg:block',
                          'transition-all duration-300',
                          isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
                        )}
                      >
                        {item.hint}
                      </span>
                    </a>
                  ) : (
                    <NavLink
                      to={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      onMouseEnter={() => setHoveredItem(item.path)}
                      onMouseLeave={() => setHoveredItem(null)}
                      className={baseClass}
                    >
                      <Icon
                        className={cn(
                          'w-4 h-4 shrink-0',
                          isActive && 'text-primary'
                        )}
                      />

                      <span className="text-sm tracking-wide">{item.label}</span>

                      <span
                        className={cn(
                          'absolute right-3 text-xs text-muted-foreground/70 hidden lg:block',
                          'transition-all duration-300',
                          isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
                        )}
                      >
                        {item.hint}
                      </span>

                      {isActive && (
                        <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-6 bg-primary rounded-r" />
                      )}
                    </NavLink>
                  )}
                </li>
              )
            })}
          </ul>
        </nav>

        {/* ===== Footer ===== */}
        <div className="p-4 border-t border-sidebar-border">
          <div className="flex items-center gap-2 text-xs text-muted-foreground font-mono">
            <Terminal className="w-3 h-3" />
            <span className="opacity-60">build: production</span>
          </div>
        </div>
      </aside>
    </>
  )
}