import ScrollBar from '@/components/ScrollBar'
import horizontalLine from '@/assets/intro/horizontal-line.svg'
import verticalLine from '@/assets/intro/vertical-line.svg'

const stats = [
  { label: '운영 기간', value: 'since 1988' },
  { label: '운영 기수', value: '40기' },
  { label: '누적 회원 수', value: '약 640명' },
  { label: '소수 정예 선발', value: '기수당 16명' },
]

const IntroductionSection = () => (
  <section
    id="introduction"
    aria-labelledby="introduction-heading"
    className="relative flex min-h-[calc(100vh-5rem)] flex-col items-center justify-center bg-[#000925] px-6 pb-36 pt-28 scroll-mt-20 md:px-12"
  >
    <div className="mx-auto w-full max-w-6xl text-center">
      <h2
        id="introduction-heading"
        className="text-[clamp(1.5rem,3vw,2.5rem)] leading-[1.6] font-normal break-keep"
      >
        <strong className="font-bold">COMP</strong>는 소수정예로 함께 배우고,
        <br className="hidden md:block" /> 스터디와 프로젝트로 성장하는 중앙대학교 웹·앱 개발 동아리입니다.
      </h2>

      <div className="relative mx-auto mt-12 h-[300px] w-full max-w-[993px] md:mt-16 md:h-[440px]">
        <img
          src={horizontalLine}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 left-0 z-10 h-[2px] w-full -translate-y-1/2 opacity-70"
        />
        <img
          src={verticalLine}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 left-1/2 z-10 h-px w-[300px] -translate-x-1/2 -translate-y-1/2 rotate-90 opacity-70 md:w-[440px]"
        />
        <dl className="grid h-full w-full grid-cols-2 grid-rows-2">
          {stats.map(({ label, value }) => (
            <div key={label} className="flex flex-col items-center justify-center gap-2 px-3 md:gap-4">
              <dt className="text-[clamp(1rem,2.5vw,2.25rem)] font-normal break-keep">{label}</dt>
              <dd className="m-0 text-[clamp(1.3rem,3vw,2.75rem)] font-bold break-keep">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>

    <ScrollBar targetId="about" />
  </section>
)

export default IntroductionSection
