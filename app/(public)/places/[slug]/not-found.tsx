import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center text-center p-8 bg-white rounded-3xl shadow-sm border border-slate-100 my-8">
      <div className="w-20 h-20 bg-red-50 text-red-600 rounded-full flex items-center justify-center text-4xl mb-4 border border-red-100">
        🔍
      </div>
      <h2 className="text-3xl font-black text-slate-900 mb-2">404 - ไม่พบสถานที่</h2>
      <p className="text-slate-500 text-sm max-w-md mb-6">
        ขออภัย ไม่พบข้อมูลสถานที่ที่คุณกำลังค้นหาในระบบ คณะสหวิทยาการ มหาวิทยาลัยขอนแก่น
      </p>
      <Link 
        href="/places" 
        className="px-6 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-semibold text-sm transition-all shadow-lg shadow-red-600/20"
      >
        ย้อนกลับไปหน้ารายการสถานที่
      </Link>
    </div>
  )
}