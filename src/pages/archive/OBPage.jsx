import { FiUsers } from 'react-icons/fi'
import ScrollReveal from '@/components/ScrollReveal'
import { alumni } from '@/data/alumni'
import appleLogo from '@/assets/organizations/apple.svg'
import carmoreLogo from '@/assets/organizations/carmore.png'
import daangnLogo from '@/assets/organizations/daangn.webp'
import hugLogo from '@/assets/organizations/hug.png'
import hyundaiLogo from '@/assets/organizations/hyundai.png'
import kakaoLogo from '@/assets/organizations/kakao.svg'
import kftcLogo from '@/assets/organizations/kftc.png'
import lgElectronicsLogo from '@/assets/organizations/lg-electronics.svg'
import ncLogo from '@/assets/organizations/nc.png'
import samilPwcLogo from '@/assets/organizations/samil-pwc.jpg'
import samsungLogo from '@/assets/organizations/samsung.svg'
import skEnmoveLogo from '@/assets/organizations/sk-enmove.jpg'
import skHynixLogo from '@/assets/organizations/sk-hynix.png'
import koreaUniversityLogo from '@/assets/organizations/korea-university.png'
import seoulNationalUniversityLogo from '@/assets/organizations/seoul-national-university.png'
import utAustinLogo from '@/assets/organizations/ut-austin.png'

const workplaces = [
  { name: 'NC', logo: ncLogo, logoWidth: 320 },
  { name: '당근', logo: daangnLogo, logoWidth: 270 },
  { name: '삼성전자', logo: samsungLogo, logoWidth: 124 },
  { name: 'SK하이닉스', logo: skHynixLogo, logoWidth: 128 },
  { name: '금융결제원', logo: kftcLogo, logoWidth: 124 },
  { name: 'Apple', logo: appleLogo, logoWidth: 52 },
  { name: '카카오', logo: kakaoLogo, logoWidth: 124 },
  { name: '현대자동차', logo: hyundaiLogo, logoWidth: 136 },
  { name: '카모아', logo: carmoreLogo, logoWidth: 154 },
  { name: 'SK엔무브', logo: skEnmoveLogo, logoWidth: 330 },
  { name: '삼일PwC', logo: samilPwcLogo, logoWidth: 200 },
  { name: '주택도시보증공사', logo: hugLogo, logoWidth: 122 },
  { name: 'LG전자', logo: lgElectronicsLogo, logoWidth: 132 },
]

const graduateSchools = [
  { name: '고려대학교 대학원', logo: koreaUniversityLogo, logoClassName: 'h-24 w-24 object-contain' },
  { name: '서울대학교 대학원', logo: seoulNationalUniversityLogo, logoClassName: 'h-28 w-24 object-cover object-left' },
  { name: 'UT Austin 대학원', logo: utAustinLogo, logoClassName: 'h-24 w-full max-w-56 object-contain' },
]

const WorkplaceLogo = ({ name, logo, logoWidth }) => (
  <div className="relative h-16 w-full max-w-36 overflow-hidden">
    <img
      src={logo}
      alt={`${name} 로고`}
      style={{ width: logoWidth }}
      className="absolute left-1/2 top-1/2 h-auto max-w-none -translate-x-1/2 -translate-y-1/2"
    />
  </div>
)

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

        <ScrollReveal className="relative flex w-full flex-col items-center gap-3 px-6 pt-20 text-center">
          <div className="w-12 h-12 rounded-full border border-blue-400/30 bg-blue-500/10 flex items-center justify-center">
            <FiUsers className="text-blue-300 text-xl" />
          </div>
          <p className="text-blue-300/60 text-sm tracking-widest">Archive</p>
          <h1 className="text-4xl font-bold">OB</h1>
          <p className="text-white/40">
            COMP의 선배님들은 현재 다양한 분야에서 활약하고 계십니다.
          </p>
        </ScrollReveal>
      </div>

      <div className="relative mx-auto max-w-6xl px-6 pb-12 pt-20 md:px-10">
        <section aria-labelledby="ob-path-heading">
          <ScrollReveal>
            <p className="text-sm tracking-[0.25em] text-blue-300/70">WHERE THEY ARE</p>
            <h2 id="ob-path-heading" className="mt-3 text-2xl font-semibold md:text-3xl">다양한 곳에서 이어지는 COMP</h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-white/70 break-keep md:text-lg">
              COMP 선배들은 개발 직무를 비롯해 대기업·외국계 기업, 컨설팅·회계법인, 금융권, 공공기관, 스타트업 등 다양한 분야에서 활동하고 있습니다.
              아래는 선배들이 진출한 곳의 일부입니다.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {workplaces.map((workplace) => (
                <div key={workplace.name} className="flex min-h-36 flex-col items-center justify-center gap-2 rounded-2xl border border-blue-300/20 bg-white px-4 py-5 text-center shadow-[0_12px_32px_rgba(0,0,0,0.12)]">
                  <WorkplaceLogo {...workplace} />
                  <span className="text-sm font-medium text-slate-700">{workplace.name}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </section>

        <section aria-labelledby="ob-study-heading" className="mt-16 border-t border-blue-300/20 pt-12">
          <ScrollReveal>
            <p className="text-sm tracking-[0.25em] text-blue-300/70">FURTHER STUDY</p>
            <h2 id="ob-study-heading" className="mt-3 text-2xl font-semibold md:text-3xl">배움을 이어가는 선배들</h2>
            <p className="mt-4 text-white/70">대학원에서 전문성을 넓혀가는 선배들도 있습니다.</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {graduateSchools.map((school) => (
                <div key={school.name} className="flex min-h-48 flex-col items-center justify-center gap-3 rounded-2xl border border-blue-300/20 bg-white px-4 py-5 text-center">
                  <img src={school.logo} alt={`${school.name} 로고`} className={school.logoClassName} />
                  <span className="text-sm font-medium text-slate-700 break-keep">{school.name}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </section>

        <section aria-labelledby="ob-members-heading" className="mt-16 border-t border-blue-300/20 pt-12">
          <ScrollReveal>
            <h2 id="ob-members-heading" className="text-2xl font-semibold md:text-3xl">OB 소개</h2>
            {alumni.length === 0 ? (
              <div className="py-12 text-center text-white/50">OB 소개를 준비하고 있습니다.</div>
            ) : (
              <div className="grid gap-10 py-12 md:grid-cols-2">
                {alumni.map((member) => (
                  <OBCard key={member.id} {...member} />
                ))}
              </div>
            )}
          </ScrollReveal>
        </section>
      </div>
    </section>
  )
}

export default OBPage
