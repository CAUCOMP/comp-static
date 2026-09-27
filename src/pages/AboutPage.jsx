import { FiBookOpen, FiCode, FiUsers } from 'react-icons/fi'
import compLogo from '@/assets/logo/comp-logo.png'

const activities = [
  {
    icon: <FiBookOpen aria-hidden="true" />,
    title: '함께 배우는 스터디',
    description: '매주 만나 프로그래밍의 기본기를 쌓고 서로의 배움을 나눕니다.',
  },
  {
    icon: <FiCode aria-hidden="true" />,
    title: '직접 만드는 프로젝트',
    description: '배운 내용을 바탕으로 아이디어를 실제 웹·앱 서비스로 구현합니다.',
  },
  {
    icon: <FiUsers aria-hidden="true" />,
    title: '이어지는 선후배 네트워크',
    description: '다양한 분야에서 활동하는 선배들과 경험을 나누며 함께 성장합니다.',
  },
]

const AboutPage = () => (
  <div className="relative isolate min-h-screen overflow-hidden bg-[#000925]">
    <div className="pointer-events-none absolute left-1/2 top-28 -z-10 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[130px]" />

    <div className="mx-auto w-full max-w-6xl px-6 pb-28 pt-36 md:px-10 md:pt-44">
      <section aria-labelledby="about-heading" className="grid items-center gap-12 border-b border-blue-300/20 pb-20 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
        <div>
          <p className="mb-5 text-sm tracking-[0.25em] text-blue-300/70">ABOUT US</p>
          <h1 id="about-heading" className="max-w-2xl text-4xl font-semibold leading-[1.35] break-keep md:text-5xl">
            함께 배우고,<br />함께 만드는 COMP
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/75 break-keep md:text-xl md:leading-9">
            COMP는 1988년부터 이어져 온 중앙대학교 웹·앱 개발 동아리입니다.
            소수정예로 모여 스터디에서 배우고, 프로젝트에서 직접 구현하며 성장합니다.
          </p>
        </div>

        <div className="flex min-h-64 items-center justify-center rounded-3xl border border-blue-300/20 bg-white/[0.04] p-6 md:min-h-80">
          <img src={compLogo} alt="COMP 로고" className="h-auto w-full max-w-[320px] rounded-2xl object-contain" />
        </div>
      </section>

      <section aria-labelledby="activities-heading" className="pt-16">
        <p className="text-sm tracking-[0.25em] text-blue-300/70">WHAT WE DO</p>
        <h2 id="activities-heading" className="mt-3 text-2xl font-semibold md:text-3xl">COMP에서 함께하는 일</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {activities.map(({ icon, title, description }) => (
            <article key={title} className="rounded-2xl border border-blue-300/15 bg-white/[0.04] p-6 md:p-7">
              <div className="mb-8 flex h-11 w-11 items-center justify-center rounded-full border border-blue-400/30 bg-blue-500/10 text-xl text-blue-300">
                {icon}
              </div>
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="mt-3 leading-7 text-white/65 break-keep">{description}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  </div>
)

export default AboutPage
