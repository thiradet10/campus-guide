import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 selection:bg-red-500 selection:text-white">
      <header className="sticky top-0 z-50 bg-gradient-to-r from-red-900 via-red-800 to-amber-900 text-white shadow-lg backdrop-blur-md bg-opacity-95 border-b border-red-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex justify-between items-center">
          
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center p-1.5 shadow-inner border border-white/20 group-hover:scale-105 transition-transform overflow-hidden">
              <img 
                src="/kku-logo.png" 
                alt="ตรามหาวิทยาลัยขอนแก่น" 
                className="w-full h-full object-contain"
              />
            </div>

            <div>
              <span className="text-lg font-black tracking-wide block leading-none bg-clip-text text-transparent bg-gradient-to-r from-white via-amber-100 to-amber-200">
                KKU NONG KHAI
              </span>
              <span className="text-[11px] font-medium text-amber-200/90 tracking-wider uppercase">
                Faculty of Interdisciplinary Studies
              </span>
            </div>
          </Link>

          {/* แถบเมนู Navigation */}
          <nav className="flex items-center gap-1 sm:gap-2 text-sm font-medium">
            <Link 
              href="/" 
              className="px-3 py-2 rounded-xl text-amber-100/90 hover:text-white hover:bg-white/10 transition-all flex items-center gap-1.5"
            >
              <span>🏠</span> หน้าหลัก
            </Link>

            <Link 
              href="/places" 
              className="px-3 py-2 rounded-xl text-amber-100/90 hover:text-white hover:bg-white/10 transition-all flex items-center gap-1.5"
            >
              <span>📍</span> สถานที่ทั้งหมด
            </Link>
            
            <Link 
              href="/about" 
              className="px-3 py-2 rounded-xl text-amber-100/90 hover:text-white hover:bg-white/10 transition-all flex items-center gap-1.5"
            >
              <span>👤</span> ผู้จัดทำ
            </Link>

            <Link 
              href="/placemanagement" 
              className="ml-2 px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold shadow-md hover:shadow-amber-500/20 transition-all flex items-center gap-1.5 text-xs"
            >
              <span>🔑</span> ระบบแอดมิน
            </Link>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-grow">
        <div className="mb-6">
          <Breadcrumbs />
        </div>
        {children}
      </main>

      <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div>
            <p className="text-sm font-semibold text-slate-200">
              คณะสหวิทยาการ มหาวิทยาลัยขอนแก่น วิทยาเขตหนองคาย
            </p>
            <p className="text-xs text-slate-500 mt-1">
              Faculty of Interdisciplinary Studies, Khon Kaen University, Nong Khai Campus
            </p>
          </div>
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Campus Guide App. Created for Educational Purposes.
          </p>
        </div>
      </footer>
    </div>
  )
}