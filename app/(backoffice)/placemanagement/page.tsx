import { places } from '@/data/places'

export default function PlaceManagementPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
        <div>
          <span className="text-xs font-bold text-amber-700 bg-amber-100 border border-amber-300 px-3 py-1 rounded-full uppercase tracking-wider inline-block">
            Admin System
          </span>
          <h1 className="text-2xl md:text-3xl font-black text-slate-900 mt-2 tracking-tight">
            จัดการข้อมูลสถานที่ (Places Management)
          </h1>
          <p className="text-slate-600 text-sm mt-1 font-medium">
            รายการสถานที่ทั้งหมดในระบบ คณะสหวิทยาการ มหาวิทยาลัยขอนแก่น วิทยาเขตหนองคาย
          </p>
        </div>

        <button 
          className="self-start md:self-auto px-4 py-2.5 rounded-xl bg-slate-100 text-slate-400 font-bold text-sm cursor-not-allowed border border-slate-200 flex items-center gap-2 shadow-inner" 
          disabled
        >
          <span>🔒</span> เพิ่มสถานที่ใหม่ <span className="text-xs text-slate-400">(ยังไม่เปิดใช้งาน)</span>
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-900 text-white text-xs uppercase font-bold tracking-wider border-b border-slate-800">
              <tr>
                <th className="px-6 py-4">Slug ID</th>
                <th className="px-6 py-4">ชื่อสถานที่</th>
                <th className="px-6 py-4">หมวดหมู่</th>
                <th className="px-6 py-4">อาคาร / ที่ตั้ง</th>
                <th className="px-6 py-4 text-center">จัดการ</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              {places.map((place) => (
                <tr key={place.slug} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 font-mono text-xs">
                    <span className="bg-amber-50 text-amber-800 border border-amber-200 px-2.5 py-1 rounded-md font-bold inline-block">
                      {place.slug}
                    </span>
                  </td>

                  <td className="px-6 py-4">
                    <p className="font-bold text-slate-900 text-base leading-snug">
                      {place.name}
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5 font-medium">
                      {place.englishName}
                    </p>
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="bg-slate-100 text-slate-800 text-xs px-3 py-1.5 rounded-lg border border-slate-300 font-bold inline-block">
                      {place.category}
                    </span>
                  </td>

                  <td className="px-6 py-4 text-slate-700 text-xs font-normal leading-relaxed max-w-xs">
                    {place.building}
                  </td>

                  <td className="px-6 py-4 text-center whitespace-nowrap">
                    <div className="flex items-center justify-center gap-2">
                      <button 
                        className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-400 text-xs font-bold cursor-not-allowed border border-slate-200 flex items-center gap-1" 
                        disabled
                      >
                        ✏️ แก้ไข
                      </button>
                      <button 
                        className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-400 text-xs font-bold cursor-not-allowed border border-slate-200 flex items-center gap-1" 
                        disabled
                      >
                        🗑️ ลบ
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}