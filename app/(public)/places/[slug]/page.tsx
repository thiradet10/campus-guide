import { findPlace } from '@/data/places'
import { notFound } from 'next/navigation'
import Link from 'next/link'

export default async function PlaceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params
  const place = findPlace(resolvedParams.slug)

  if (!place) {
    notFound()
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="relative rounded-3xl overflow-hidden shadow-2xl h-80 md:h-96">
        <img 
          src={place.image} 
          alt={place.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white space-y-2">
          <span className="bg-red-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md uppercase tracking-wider">
            {place.category}
          </span>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight">{place.name}</h1>
          <p className="text-amber-200/90 text-sm md:text-base font-medium">{place.englishName}</p>
        </div>
      </div>

      <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-slate-100 space-y-8">
        <div>
          <h2 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
            <span>ℹ️</span> รายละเอียดสถานที่
          </h2>
          <p className="text-slate-600 leading-relaxed text-sm md:text-base">
            {place.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 pt-6 border-t border-slate-100">
          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 space-y-1">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">อาคาร / ที่ตั้ง</span>
            <p className="text-base font-semibold text-slate-800 flex items-center gap-2">
              <span>🏢</span> {place.building}
            </p>
          </div>

          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 space-y-1">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">เวลาทำการ</span>
            <p className="text-base font-semibold text-slate-800 flex items-center gap-2">
              <span>⏰</span> {place.openHours}
            </p>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-100">
          <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
            <span>🛠️</span> สิ่งอำนวยความสะดวก & บริการ
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {place.facilities.map((facility, idx) => (
              <span 
                key={idx} 
                className="bg-amber-50 text-amber-900 text-xs font-semibold px-4 py-2 rounded-xl border border-amber-200/60 shadow-sm flex items-center gap-1.5"
              >
                <span className="text-amber-600">✓</span> {facility}
              </span>
            ))}
          </div>
        </div>

        <div className="pt-6 border-t border-slate-100 flex justify-end">
          <Link 
            href="/places" 
            className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-red-700 text-white font-semibold text-sm transition-all shadow-md"
          >
            ← กลับไปหน้ารายการสถานที่
          </Link>
        </div>
      </div>
    </div>
  )
}