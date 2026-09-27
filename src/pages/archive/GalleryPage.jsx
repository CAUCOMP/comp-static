import SectionGroup from '@/components/card/SectionGroup'
import ScrollReveal from '@/components/ScrollReveal'
import { galleryGroups } from '@/data/gallery'
import { useEffect, useRef, useState } from 'react'
import { FiImage, FiX } from 'react-icons/fi'

const GalleryPage = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null)
  const dialogRef = useRef(null)

  useEffect(() => {
    if (selectedPhoto && !dialogRef.current?.open) {
      dialogRef.current?.showModal()
    }
  }, [selectedPhoto])

  const closePhoto = () => dialogRef.current?.close()

  return (
    <section className="min-h-screen relative overflow-hidden py-10">

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px]rounded-full blur-[120px] pointer-events-none" />

      <div className="relative w-full flex flex-col items-center justify-center overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/15 via-blue-500/5 to-transparent" />
 
        {/* 젤 위쪽 컨텐츠 */}
        <ScrollReveal className="relative flex w-full flex-col items-center gap-3 px-6 pt-20 text-center">
          <div className="w-12 h-12 rounded-full border border-blue-400/30 bg-blue-500/10 flex items-center justify-center">
            <FiImage className="text-blue-300 text-xl" />
          </div>
          <p className="text-blue-300/60 text-sm tracking-widest">Archive</p>
          <h1 className="text-4xl font-bold">Gallery</h1>
          <p className="text-white/40">함께 쌓아가는 COMP의 순간들</p>
        </ScrollReveal>

      </div>

      <div className="flex flex-col gap-12 px-5 py-12 sm:px-10 lg:px-16">
        {galleryGroups.map(({ generation, items }) => (
          <ScrollReveal key={generation}>
            <SectionGroup generation={generation} items={items} onImageClick={setSelectedPhoto} />
          </ScrollReveal>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        aria-label="갤러리 사진 원본 보기"
        onClose={() => setSelectedPhoto(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) closePhoto()
        }}
        className="fixed inset-0 m-auto max-h-[95dvh] max-w-[95vw] overflow-visible border-0 bg-transparent p-0 text-white backdrop:bg-black/85"
      >
        {selectedPhoto && (
          <div className="relative flex flex-col items-center">
            <button
              type="button"
              onClick={closePhoto}
              aria-label="사진 닫기"
              className="absolute right-2 top-2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-white hover:bg-black focus-visible:outline-2 focus-visible:outline-blue-400"
            >
              <FiX size={22} aria-hidden="true" />
            </button>
            <img
              src={selectedPhoto.image}
              alt={selectedPhoto.alt}
              className="max-h-[95dvh] max-w-[95vw] rounded-lg object-contain"
            />
          </div>
        )}
      </dialog>

    </section>
  )
}

export default GalleryPage
