import ImageSlider from '@/components/ImageSlider'
import React from 'react'
import { FiBook, FiStar } from 'react-icons/fi'
import { FaChalkboardTeacher, FaLaptopCode } from "react-icons/fa";

const AboutSection = () => {
  const features = [
    {
      icon: <FiBook className="text-blue-400 text-xl" />,
      title: "스터디",
      description: "주 1회 대면 스터디로 프로그래밍의 기본기를 함께 다집니다.",
    },
    {
      icon: <FaChalkboardTeacher className="text-blue-400 text-xl" />,
      title: "정규 세션",
      description:
        "Git 활용 교육, AI 툴 세션, 현업 선배님 초청 강연 등 \n다양한 세션을 통해 개발자로서의 시야를 넓혀갑니다.",
    },
    {
      icon: <FaLaptopCode className="text-blue-400 text-xl" />,
      title: "실전 프로젝트",
      description:
        "파트별 심화 학습을 바탕으로 아이디어를 서비스로 구현합니다.",
    },
    {
      icon: <FiStar className="text-blue-400 text-xl" />,
      title: "콤프인의 밤",
      description:
        "현업에서 활약 중인 선배님들과 함께하는 COMP의 연말 행사입니다.",
    },
  ];

  return (
    <section className="min-h-screen flex flex-col justify-center p-20 gap-6">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="">
            <p className="text-blue-300/60 text-sm tracking-widest">Why COMP?</p>
            <h2 className="font-medium text-[28px]">컴퓨터와 나와 친구들이 있는 곳</h2>
        </div>

        {/* 컨텐츠 영역 */}
        <div className="flex gap-10 items-center relative">
            <ImageSlider />
            <div className="flex flex-col items-start gap-6">
            {features.map((feature, index) => (
              <article 
                key={index} 
                className="w-full flex flex-col gap-1">

                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full border border-blue-400/30 bg-blue-500/10 flex items-center justify-center drop-shadow-[0_0_6px_rgba(96,165,250,0.3)]">
                        {feature.icon}
                    </div>
                    <h2 className="font-medium text-[24px]">{feature.title}</h2>
              </div>
                
                {index < features.length && (
                <hr className="border-t border-blue-400/30 mb-2" />
                )}

                <p className="font-light text-[20px] tracking-[0] whitespace-pre-line text-white/80">
                  {feature.description}
                </p>

              </article>
            ))}
          </div>
        </div>

    </section>
  )
}

export default AboutSection