import SectionGroup from '@/components/card/SectionGroup'
import { FiCode } from 'react-icons/fi'

const ProjectPage = () => {

  const data = [
    {
      generation: 39,
      items: [
        { title: "프로젝트", subtitle: "대체텍스트"},
        { title: "프로젝트", subtitle: "대체텍스트"},
        { title: "프로젝트", subtitle: "대체텍스트"},
        { title: "프로젝트", subtitle: "대체텍스트"},
      ]
    },
    {
      generation: 38,
      items: [
        { title: "프로젝트", subtitle: "대체텍스트"},
        { title: "프로젝트", subtitle: "대체텍스트"},
      ]
    }
  ]

  return (
    <section className="min-h-screen relative overflow-hidden py-10">

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px]rounded-full blur-[120px] pointer-events-none" />

      <div className="relative w-full flex flex-col items-center justify-center overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/15 via-blue-500/5 to-transparent" />
 
        {/* 젤 위쪽 컨텐츠 */}
        <div className="relative flex flex-col items-center gap-3 pt-20">
          <div className="w-12 h-12 rounded-full border border-blue-400/30 bg-blue-500/10 flex items-center justify-center">
            <FiCode className="text-blue-300 text-xl" />
          </div>
          <p className="text-blue-300/60 text-sm tracking-widest">Project</p>
          <h1 className="text-4xl font-bold">Project</h1>
          <p className="text-white/40">36기부터 COMP는 스터디를 넘어 실제 웹서비스 배포까지 이어지는 경험을 만들어가고 있어요.</p>
        </div>

      </div>

      <div className="flex flex-col gap-12 px-16 py-12">
        {data.map(({ generation, items }) => (
          <SectionGroup key={generation} generation={generation} items={items} />
        ))}
      </div>

    </section>
  )
}

export default ProjectPage