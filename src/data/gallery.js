import gen40Spring from '@/assets/gallery/40기/KakaoTalk_Photo_2026-09-28-00-06-41.jpeg'
import gen40Gathering from '@/assets/gallery/40기/KakaoTalk_Photo_2026-09-28-00-26-28.jpeg'
import gen40Study from '@/assets/gallery/40기/KakaoTalk_Photo_2026-09-28-00-27-19.jpeg'
import gen40Friends from '@/assets/gallery/40기/KakaoTalk_Photo_2026-09-28-00-29-48.jpeg'
import gen39PhotoBooth from '@/assets/gallery/39기/스크린샷 2026-09-28 오전 12.39.24.png'
import gen39Walk from '@/assets/gallery/39기/KakaoTalk_Photo_2026-09-28-00-30-08 002.jpeg'
import gen39Gathering from '@/assets/gallery/39기/KakaoTalk_Photo_2026-09-28-00-30-08 003.jpeg'
import gen36Campus from '@/assets/gallery/36기/KakaoTalk_Photo_2026-09-28-00-28-00 001.jpeg'
import gen36Trip from '@/assets/gallery/36기/KakaoTalk_Photo_2026-09-28-00-28-00 002.jpeg'
import gen36Gathering from '@/assets/gallery/36기/KakaoTalk_Photo_2026-09-28-00-28-01 003.jpeg'
import gen36Friends from '@/assets/gallery/36기/KakaoTalk_Photo_2026-09-28-00-28-01 004.jpeg'

export const galleryGroups = [
  {
    generation: 40,
    items: [
      { image: gen40Spring, title: '벚꽃 아래에서', subtitle: '40기 단체 사진', alt: '벚꽃나무 앞에서 함께 찍은 40기 단체 사진' },
      { image: gen40Gathering, title: '함께 모인 날', subtitle: '40기 활동 사진', alt: '실내에 모여 포즈를 취한 40기 구성원들' },
      { image: gen40Study, title: '스터디 현장', subtitle: '40기 활동 사진', alt: '강의실에서 함께 공부하는 40기 구성원들' },
      { image: gen40Friends, title: '함께한 순간', subtitle: '40기 활동 사진', alt: '실내에서 함께 사진을 찍은 40기 구성원들' },
    ],
  },
  {
    generation: 39,
    items: [
      { image: gen39PhotoBooth, title: '포토부스에서', subtitle: '39기 활동 사진', alt: '포토부스에서 함께 찍은 39기 구성원들의 사진' },
      { image: gen39Walk, title: '산책길에서', subtitle: '39기 활동 사진', alt: '야외 산책길을 함께 걷는 39기 구성원들' },
      { image: gen39Gathering, title: '다 함께 한 컷', subtitle: '39기 단체 사진', alt: '실내에서 함께 찍은 39기 단체 사진' },
    ],
  },
  {
    generation: 36,
    items: [
      { image: gen36Campus, title: '캠퍼스의 추억', subtitle: '36기 활동 사진', alt: '캠퍼스에서 찍은 즉석 사진 세 장을 들고 있는 모습' },
      { image: gen36Trip, title: '대성리에서', subtitle: '36기 단체 사진', alt: '대성리역 앞에서 함께 찍은 36기 단체 사진' },
      { image: gen36Gathering, title: '다 같이', subtitle: '36기 단체 사진', alt: '실내에 모여 함께 찍은 36기 단체 사진' },
      { image: gen36Friends, title: '네 사람의 순간', subtitle: '36기 활동 사진', alt: '네 명의 36기 구성원이 함께 찍은 사진' },
    ],
  },
]
