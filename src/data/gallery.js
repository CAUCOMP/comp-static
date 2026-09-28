import gen40Spring from '@/assets/gallery/gen-40/spring.jpeg'
import gen40Gathering from '@/assets/gallery/gen-40/gathering.jpeg'
import gen40Study from '@/assets/gallery/gen-40/study.jpeg'
import gen40Friends from '@/assets/gallery/gen-40/friends.jpeg'
import gen39PhotoBooth from '@/assets/gallery/gen-39/photo-booth.png'
import gen39Walk from '@/assets/gallery/gen-39/walk.jpeg'
import gen39Gathering from '@/assets/gallery/gen-39/gathering.jpeg'
import gen36Campus from '@/assets/gallery/gen-36/campus.jpeg'
import gen36Trip from '@/assets/gallery/gen-36/trip.jpeg'
import gen36Gathering from '@/assets/gallery/gen-36/gathering.jpeg'
import gen36Friends from '@/assets/gallery/gen-36/friends.jpeg'

export const galleryGroups = [
  {
    generation: 40,
    items: [
      { image: gen40Spring, alt: '벚꽃나무 앞에서 함께 찍은 40기 단체 사진' },
      { image: gen40Gathering, alt: '실내에 모여 포즈를 취한 40기 구성원들' },
      { image: gen40Study, alt: '강의실에서 함께 공부하는 40기 구성원들' },
      { image: gen40Friends, alt: '실내에서 함께 사진을 찍은 40기 구성원들' },
    ],
  },
  {
    generation: 39,
    items: [
      { image: gen39PhotoBooth, alt: '포토부스에서 함께 찍은 39기 구성원들의 사진' },
      { image: gen39Walk, alt: '야외 산책길을 함께 걷는 39기 구성원들' },
      { image: gen39Gathering, alt: '실내에서 함께 찍은 39기 단체 사진' },
    ],
  },
  {
    generation: '34&35&36',
    items: [
      { image: gen36Campus, alt: '캠퍼스에서 찍은 즉석 사진 세 장을 들고 있는 모습' },
      { image: gen36Trip, alt: '대성리역 앞에서 함께 찍은 COMP 단체 사진' },
      { image: gen36Gathering, alt: '실내에 모여 함께 찍은 COMP 단체 사진' },
      { image: gen36Friends, alt: '네 명의 COMP 구성원이 함께 찍은 사진' },
    ],
  },
]
