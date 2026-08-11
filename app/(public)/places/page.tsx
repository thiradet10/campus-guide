import Link from 'next/link'
import { places } from '@/data/places'

export default function PlacesPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200/80 pb-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-red-600 bg-red-50 px-3 py-1 rounded-full border border-red-100">
            KKU Nong Khai Map
          </span>
          <h1 className="text-3xl md:text-4xl font-black text-slate-900 mt-2">
            สถานที่สำคัญในวิทยาเขต
          </h1>
          <p className="text-slate-500 text-sm mt-1">
            รวมจุดบริการ สำนักหอสมุด และห้องปฏิบัติการ คณะสหวิทยาการ มหาวิทยาลัยขอนแก่น
          </p>
        </div>
        <div className="text-xs text-slate-400 font-medium">
          พบทั้งหมด <span className="font-bold text-slate-800">{places.length}</span> สถานที่
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        {places.map((place) => (
          <div 
            key={place.slug} 
            className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col justify-between"
          >
            <div>
              <div className="relative h-52 overflow-hidden bg-slate-100">
                <img 
                  src={place.image} 
                  alt={place.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-slate-900 text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                  {place.category}
                </span>
              </div>

              <div className="p-6 space-y-3">
                <h2 className="text-xl font-bold text-slate-900 group-hover:text-red-700 transition-colors">
                  {place.name}
                </h2>
                <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                  {place.englishName}
                </p>
                <p className="text-slate-600 text-sm line-clamp-2 leading-relaxed">
                  {place.summary}
                </p>
                
                <div className="pt-2 text-xs text-slate-500 space-y-1">
                  <p className="flex items-center gap-2">
                    <span>🏢</span> <span className="font-medium text-slate-700">{place.building}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span>⏰</span> <span>{place.openHours}</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 pt-0">
              <Link 
                href={`/places/${place.slug}`}
                className="w-full py-3 px-4 rounded-2xl bg-slate-50 hover:bg-red-600 hover:text-white text-slate-700 text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-2 group/btn border border-slate-200/60"
              >
                <span>ดูรายละเอียดสถานที่</span>
                <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}