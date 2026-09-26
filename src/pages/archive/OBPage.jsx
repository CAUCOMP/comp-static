// import { FiUsers } from 'react-icons/fi'
// import { getOBProfiles } from '@/apis/archiveProfile'

// const OBCard = ({ image, generation, company, name, description }) => {
//   return (
//     <div className="flex gap-5">

//       {/* 이미지 */}
//       <div className="w-[180px] h-[220px] rounded-xl border border-blue-400/20 bg-blue-500/10 overflow-hidden">
//         {image
//           ? <img src={image} alt={name} className="w-full h-full object-cover" />
//           : <div className="w-full h-full" />
//         }
//       </div>

//       {/* 텍스트 */}
//       <div className="flex flex-col gap-10">
//         <div>
//             <p className="text-blue-300/60 text-sm">{generation} | {company}</p>
//             <h2 className="text-3xl font-semibold">{name}</h2>
//         </div>
//         <p className="text-white/40 text-sm leading-relaxed max-w-[400px]">{description}</p>
//       </div>

//     </div>
//   )
// }

// const OBPage = () => {

//   // todo: api 연결
//   const members = [
//     {
//       generation: "OO", company: "삼성전자", name: "OOO",
//       description: "설명글입니다. 설명글입니다.설명글입니다.설명글입니다.설명글입니다.설명글입니다.설명글입니다.설명글입니다.설명글입니다.설명글입니다.설명글입니다."
//     },
//     {
//       generation: "OO", company: "삼성전자", name: "OOO",
//       description: "설명글입니다. 설명글입니다.설명글입니다.설명글입니다.설명글입니다.설명글입니다.설명글입니다.설명글입니다.설명글입니다.설명글입니다.설명글입니다."
//     },{
//       generation: "OO", company: "삼성전자", name: "OOO",
//       description: "설명글입니다. 설명글입니다.설명글입니다.설명글입니다.설명글입니다.설명글입니다.설명글입니다.설명글입니다.설명글입니다.설명글입니다.설명글입니다."
//     },{
//       generation: "OO", company: "삼성전자", name: "OOO",
//       description: "설명글입니다. 설명글입니다.설명글입니다.설명글입니다.설명글입니다.설명글입니다.설명글입니다.설명글입니다.설명글입니다.설명글입니다.설명글입니다."
//     },
//   ]

//   return (
//     <section className="min-h-screen relative overflow-hidden py-10">

//       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px]rounded-full blur-[120px] pointer-events-none" />

//       <div className="relative w-full flex flex-col items-center justify-center overflow-hidden">

//         <div className="absolute inset-0 bg-gradient-to-b from-blue-500/15 via-blue-500/5 to-transparent" />
 
//         {/* 젤 위쪽 컨텐츠 */}
//         <div className="relative flex flex-col items-center gap-3 pt-20">
//           <div className="w-12 h-12 rounded-full border border-blue-400/30 bg-blue-500/10 flex items-center justify-center">
//             <FiUsers className="text-blue-300 text-xl" />
//           </div>
//           <p className="text-blue-300/60 text-sm tracking-widest">Archive</p>
//           <h1 className="text-4xl font-bold">OB</h1>
//           <p className="text-white/40">COMP의 선배님들은 현재 다양한 분야에서 활약하고 계십니다.</p>
//         </div>

//       </div>

//       <div className="grid grid-cols-2 gap-10 p-12">
//         {members.map((member, index) => (
//           <OBCard key={index} {...member} />
//         ))}
//       </div>

//     </section>
//   )
// }

// export default OBPage

import { FiUsers } from 'react-icons/fi'
import { useEffect, useState } from 'react'
import { getOBProfiles } from '@/apis/archiveProfile'

const OBCard = ({ image, generation, company, name, description }) => {
  return (
    <div className="flex gap-5">
      {/* 이미지 */}
      <div className="w-[180px] h-[220px] rounded-xl border border-blue-400/20 bg-blue-500/10 overflow-hidden">
        {image ? (
          <img src={image} alt={name} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full" />
        )}
      </div>

      {/* 텍스트 */}
      <div className="flex flex-col gap-10">
        <div>
          <p className="text-blue-300/60 text-sm">
            {generation} | {company}
          </p>
          <h2 className="text-3xl font-semibold">{name}</h2>
        </div>
        <p className="text-white/40 text-sm leading-relaxed max-w-[400px]">
          {description}
        </p>
      </div>
    </div>
  )
}

const OBPage = () => {
  const [members, setMembers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchOBProfiles = async () => {
      try {
        setLoading(true)
        const data = await getOBProfiles()
        setMembers(data)
      } catch (err) {
        console.error('OB 프로필 불러오기 실패:', err)
        setError('OB 데이터를 불러오지 못했습니다.')
      } finally {
        setLoading(false)
      }
    }

    fetchOBProfiles()
  }, [])

  return (
    <section className="min-h-screen relative overflow-hidden py-10">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative w-full flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/15 via-blue-500/5 to-transparent" />

        <div className="relative flex flex-col items-center gap-3 pt-20">
          <div className="w-12 h-12 rounded-full border border-blue-400/30 bg-blue-500/10 flex items-center justify-center">
            <FiUsers className="text-blue-300 text-xl" />
          </div>
          <p className="text-blue-300/60 text-sm tracking-widest">Archive</p>
          <h1 className="text-4xl font-bold">OB</h1>
          <p className="text-white/40">
            COMP의 선배님들은 현재 다양한 분야에서 활약하고 계십니다.
          </p>
        </div>
      </div>

      {loading ? (
        <div className="p-12 text-center text-white/50">불러오는 중...</div>
      ) : error ? (
        <div className="p-12 text-center text-red-400">{error}</div>
      ) : (
        <div className="grid grid-cols-2 gap-10 p-12">
          {members.map((member) => (
            <OBCard key={member.id} {...member} />
          ))}
        </div>
      )}
    </section>
  )
}

export default OBPage