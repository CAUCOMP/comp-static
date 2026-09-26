import { useState } from 'react'
import { FiChevronDown, FiHelpCircle } from 'react-icons/fi'
import Footer from "@/components/Footer"
import ScrollReveal from '@/components/ScrollReveal'

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const questions = [
    {
      question: "COMP는 학술 동아리인가요?",
      answer: "COMP는 학술동아리의 성격을 띠고 있지만 소모임, 한강 나들이, 만우절 교복데이, MT 등 COMP만의 가족같은 분위기 형성을 위한 다양한 활동이 준비되어있습니다!",
    },
    {
      question: "비전공자도 지원 가능한가요?",
      answer: "네! 전공 무관, 초보자도 환영합니다. 코딩 경험이 없어도 함께 배우며 프로젝트에 참여할 수 있습니다.\n다음 모집 일정은 모집 안내 페이지와 공식 인스타그램을 통해 공지합니다.",
    },
    {
      question: "동아리 활동은 언제 진행되나요?",
      answer: "각 팀끼리 멘토님 및 팀원들과 상의하여 일정 조율 후 진행됩니다!\n정규 세션이나 다른 활동의 경우, 별도 공지로 안내해드릴 예정입니다.",
    },
    {
      question: "어떤 현직자 선배님들과 교류할 수 있나요?",
      answer: "현재 당근마켓, NC 등 유수의 IT 기업에 재직 중인 선배님들의 연사 세션이 예정되어 있습니다.\n이외에도 다양한 분야의 선배님들과 교류할 기회가 열려 있습니다.",
    },
  ]

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    
    <section className="relative min-h-[70vh] flex flex-col items-center gap-10 overflow-x-clip px-6 pt-24 md:px-30 md:pt-30">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      
      <ScrollReveal className="text-center flex flex-col items-center gap-2 mb-4">
        <div className="w-10 h-10 rounded-full border border-blue-400/30 bg-blue-500/10 flex items-center justify-center drop-shadow-[0_0_10px_rgba(96,165,250,0.3)]">
          <FiHelpCircle className="text-blue-300 text-lg" />
        </div>
        <p className="text-blue-300/60 text-sm tracking-widest uppercase">FAQ</p>
        <h1 className="text-4xl font-semibold">자주 묻는 질문</h1>
      </ScrollReveal>

      {questions.map((question, index) => (
        <ScrollReveal key={question.question} delay={index * 60} className="w-full">
          <article className="w-full">
            <button
              className="w-full flex justify-between items-center py-4 cursor-pointer"
              onClick={() => handleToggle(index)}
            >
              <h2 className="text-[24px]">{question.question}</h2>
              <FiChevronDown
                className={`transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
              />
            </button>

            <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-[500px]' : 'max-h-0'}`}>
              <p className="font-light text-[20px] whitespace-pre-line pb-4 text-white/80">
                {question.answer}
              </p>
            </div>

            <hr className="border-white/40" />
          </article>
        </ScrollReveal>
      ))}
      <Footer/>
    </section>

    
  )
}

export default FAQSection
