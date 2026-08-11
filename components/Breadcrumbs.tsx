"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const pathNames: Record<string, string> = {
  about: "เกี่ยวกับผู้จัดทำ",
  places: "สถานที่ในวิทยาเขต",
  placemanagement: "จัดการสถานที่ (Admin)",
  library: "สำนักหอสมุด มข. วิทยาเขตหนองคาย",
  "complex-cafeteria": "ศูนย์อาหารและกิจกรรมนักศึกษา",
  "interdisciplinary-lab": "ศูนย์ปฏิบัติการวิจัยคณะสหวิทยาการ",
  "sports-complex": "ศูนย์กีฬาและนันทนาการ",
  "nongkhai-aquarium": "พิพิธภัณฑ์สัตว์น้ำจังหวัดหนองคาย",
  "interdisciplinary-office": "อาคารสำนักงานบริหาร คณะสหวิทยาการ",
  "satit-kku-nongkhai": "โรงเรียนสาธิต มข. วิทยาเขตหนองคาย",
  "satit-primary-kku-nongkhai": "โรงเรียนสาธิต มข. ฝ่ายประถม",
  "swimming-pool": "สระว่ายน้ำ คณะสหวิทยาการ",
   stadium: "สนามกีฬา มข. วิทยาเขตหนองคาย",
}

export default function Breadcrumbs() {
  const pathname = usePathname()
  const pathSegments = pathname.split("/").filter((segment) => segment)

  return (
    <nav className="flex px-5 py-3.5 text-gray-700 bg-white/80 backdrop-blur-md rounded-2xl shadow-sm border border-gray-100/80 mb-8 transition-all" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-2 md:space-x-3 text-xs md:text-sm font-medium">
        <li className="inline-flex items-center">
          <Link href="/" className="inline-flex items-center text-gray-500 hover:text-red-700 transition-colors">
            <svg className="w-4 h-4 mr-2 text-red-600/80" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 001-1h2a1 1 0 001 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l1.293 1.293a1 1 0 001.414-1.414l-7-7z"></path>
            </svg>
            หน้าหลัก
          </Link>
        </li>
        {pathSegments.map((segment, index) => {
          const href = `/${pathSegments.slice(0, index + 1).join("/")}`
          const isLast = index === pathSegments.length - 1
          const label = pathNames[segment] || segment

          return (
            <li key={href}>
              <div className="flex items-center">
                <svg className="w-4 h-4 text-gray-300 mx-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                </svg>
                {isLast ? (
                  <span className="text-red-800 font-semibold bg-red-50/80 px-2.5 py-1 rounded-lg border border-red-100">{label}</span>
                ) : (
                  <Link href={href} className="text-gray-500 hover:text-red-700 transition-colors">
                    {label}
                  </Link>
                )}
              </div>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}