import { FiUsers } from 'react-icons/fi'
import { alumni } from '@/data/alumni'

const OBCard = ({ image, generation, company, name, description }) => {
  return (
    <div className="flex gap-5">
      <div className="w-[180px] h-[220px] rounded-xl border border-blue-400/20 bg-blue-500/10 overflow-hidden">
        {image ? (
          <img src={image} alt={name} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full" />
        )}
      </div>

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

      {alumni.length === 0 ? (
        <div className="p-12 text-center text-white/50">OB 소개를 준비하고 있습니다.</div>
      ) : (
        <div className="grid grid-cols-2 gap-10 p-12">
          {alumni.map((member) => (
            <OBCard key={member.id} {...member} />
          ))}
        </div>
      )}
    </section>
  )
}

export default OBPage
