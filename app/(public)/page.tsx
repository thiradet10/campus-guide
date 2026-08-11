import Link from 'next/link'
import { places } from '@/data/places'

export default function HomePage() {
  const featuredPlaces = places.slice(0, 2)

  return (
    <div className="space-y-16 py-6 px-4 max-w-6xl mx-auto">
      
      <section className="flex flex-col items-center justify-center text-center space-y-6 pt-6">
        <span className="px-4 py-1.5 bg-red-100 text-red-700 rounded-full text-xs font-bold uppercase tracking-wider border border-red-200">
          CAMPUS GUIDE APPLICATION
        </span>

        <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight max-w-3xl leading-tight">
          ยินดีต้อนรับสู่ <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-800 via-red-600 to-amber-600">
            มหาวิทยาลัยขอนแก่น วิทยาเขตหนองคาย
          </span>
        </h1>

        <p className="text-slate-600 max-w-xl text-sm md:text-base leading-relaxed">
          สำรวจสถานที่สำคัญ อาคารเรียน สำนักหอสมุด และจุดบริการต่างๆ ภายในคณะสหวิทยาการได้อย่างสะดวกและรวดเร็ว
        </p>

        <div className="pt-2">
          <Link 
            href="/places" 
            className="px-8 py-4 rounded-2xl bg-gradient-to-r from-red-800 to-red-700 hover:from-red-700 hover:to-red-600 text-white font-bold shadow-lg shadow-red-900/20 hover:scale-105 transition-all text-base inline-flex items-center gap-2 group"
          >
            <span>📍 เข้าสู่หน้าสถานที่ทั้งหมด</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-center justify-between border-b border-slate-200 pb-4">
          <div>
            <h2 className="text-2xl font-black text-slate-900">✨ สถานที่แนะนำ</h2>
            <p className="text-xs md:text-sm text-slate-500 mt-0.5">สถานที่ยอดนิยมและจุดบริการสำคัญในวิทยาเขต</p>
          </div>
          <Link 
            href="/places" 
            className="text-xs md:text-sm font-bold text-red-700 hover:text-red-800 hover:underline flex items-center gap-1"
          >
            ดูทั้งหมด <span>→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredPlaces.map((place) => (
            <div 
              key={place.slug} 
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="h-48 overflow-hidden bg-slate-100 relative">
                  <img 
                    src={place.image} 
                    alt={place.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-3 left-3 bg-slate-900/80 text-white text-[11px] font-bold px-2.5 py-1 rounded-lg backdrop-blur-md">
                    {place.category}
                  </span>
                </div>
                <div className="p-5 space-y-2">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-red-700 transition-colors">
                    {place.name}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">{place.englishName}</p>
                  <p className="text-sm text-slate-600 line-clamp-2 leading-relaxed pt-1">
                    {place.summary || place.description}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <Link 
                  href={`/places/${place.slug}`}
                  className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-red-50 text-slate-700 hover:text-red-700 font-bold text-xs flex items-center justify-center gap-1 transition-colors border border-slate-200/80"
                >
                  ดูรายละเอียดสถานที่ ➔
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-900 text-white rounded-3xl p-6 md:p-10 shadow-xl border border-slate-800 space-y-6">
        <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
          <div className="w-10 h-10 rounded-xl bg-red-600/20 border border-red-500/30 flex items-center justify-center text-xl text-red-400">
            🏛️
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-black text-white">ข้อมูลที่ตั้ง คณะสหวิทยาการ</h2>
            <p className="text-xs md:text-sm text-slate-400">Faculty of Interdisciplinary Studies, Khon Kaen University</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          <div className="space-y-2 bg-slate-800/50 p-4 rounded-2xl border border-slate-700/50">
            <p className="font-bold text-amber-400 flex items-center gap-2">
              <span>📍</span> ที่อยู่คณะ
            </p>
            <p className="text-slate-300 leading-relaxed text-xs md:text-sm">
              คณะสหวิทยาการ มหาวิทยาลัยขอนแก่น วิทยาเขตหนองคาย <br />
              112 หมู่ 7 ถนนมิตรภาพ ต.หนองกอมเกาะ อ.เมือง จ.หนองคาย 43000
            </p>
          </div>

          <div className="space-y-2 bg-slate-800/50 p-4 rounded-2xl border border-slate-700/50">
            <p className="font-bold text-amber-400 flex items-center gap-2">
              <span>🕒</span> เวลาทำการสำนักงาน
            </p>
            <p className="text-slate-300 leading-relaxed text-xs md:text-sm">
              วันจันทร์ – วันศุกร์ <br />
              เวลา 08.30 – 16.30 น. <br />
              <span className="text-slate-500 text-xs">(เว้นวันหยุดนักขัตฤกษ์)</span>
            </p>
          </div>

          <div className="space-y-2 bg-slate-800/50 p-4 rounded-2xl border border-slate-700/50">
            <p className="font-bold text-amber-400 flex items-center gap-2">
              <span>📞</span> ช่องทางติดต่อ
            </p>
            <ul className="text-slate-300 space-y-1 text-xs md:text-sm">
              <li><strong className="text-slate-200">โทรศัพท์:</strong> 042-415-600</li>
              <li><strong className="text-slate-200">เว็บไซต์:</strong> nk.kku.ac.th</li>
            </ul>
          </div>
        </div>
      </section>

    </div>
  )
}