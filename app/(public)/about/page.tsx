import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-red-900 via-red-800 to-amber-900 text-white p-8 md:p-12 shadow-xl">
        <div className="relative z-10 space-y-3">
          <span className="px-3 py-1 bg-amber-400/20 text-amber-200 border border-amber-300/30 rounded-full text-xs font-semibold tracking-wider uppercase">
            Developer Profile
          </span>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight">
            ข้อมูลผู้จัดทำ
          </h1>
          <p className="text-amber-100/80 text-sm md:text-base max-w-xl">
            โครงการพัฒนาเว็บแนะนำสถานที่ในมหาวิทยาลัยขอนแก่น วิทยาเขตหนองคาย
          </p>
        </div>
      </div>

      <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-slate-100 grid md:grid-cols-3 gap-8 items-center">
        <div className="flex flex-col items-center text-center space-y-4 md:border-r md:border-slate-100 md:pr-8">
          <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-red-600 via-amber-500 to-amber-300 p-1 shadow-xl">
            <div className="w-full h-full rounded-full bg-white overflow-hidden relative">
              <Image 
                src="/profile.jpg"
                alt="นาย ธีรเดช ประสารสุข"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900">นาย ธีรเดช ประสารสุข</h2>
            <p className="text-xs text-red-600 font-semibold mt-0.5">นักศึกษา มหาวิทยาลัยขอนแก่น</p>
          </div>
        </div>

        <div className="md:col-span-2 space-y-4 text-sm text-slate-700">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
              <span className="text-xs font-semibold text-slate-400 block uppercase">รหัสนักศึกษา</span>
              <span className="text-base font-bold text-slate-800">673450195-4</span>
            </div>
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
              <span className="text-xs font-semibold text-slate-400 block uppercase">สาขาวิชา</span>
              <span className="text-base font-bold text-slate-800">วิทยาการคอมพิวเตอร์และสารสนเทศ</span>
            </div>
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
              <span className="text-xs font-semibold text-slate-400 block uppercase">คณะ</span>
              <span className="text-base font-bold text-slate-800">คณะสหวิทยาการ</span>
            </div>
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
              <span className="text-xs font-semibold text-slate-400 block uppercase">วิทยาเขต</span>
              <span className="text-base font-bold text-slate-800">วิทยาเขตหนองคาย</span>
            </div>
          </div>

          <div className="pt-2">
            <h3 className="font-bold text-slate-900 mb-2">🎓 เกี่ยวกับโครงการ</h3>
            <p className="text-slate-600 leading-relaxed text-xs md:text-sm">
              เว็บแอปพลิเคชันนี้สร้างขึ้นเพื่ออำนวยความสะดวกแก่นักศึกษา บุคลากร และบุคคลทั่วไป ในการเข้าถึงข้อมูลสถานที่สำคัญภายในคณะสหวิทยาการ มหาวิทยาลัยขอนแก่น วิทยาเขตหนองคาย
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}