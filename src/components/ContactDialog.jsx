import { useEffect, useId, useRef } from 'react'
import { FiMail, FiX } from 'react-icons/fi'
import { presidentContact } from '@/data/contact'

export default function ContactDialog({ open, onClose }) {
  const dialogRef = useRef(null)
  const titleId = useId()
  const descriptionId = useId()

  useEffect(() => {
    if (!open) return

    const dialog = dialogRef.current
    const previousOverflow = document.body.style.overflow
    dialog.showModal()
    document.body.style.overflow = 'hidden'

    return () => {
      if (dialog.open) dialog.close()
      document.body.style.overflow = previousOverflow
    }
  }, [open])

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
      onClose={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) dialogRef.current?.close()
      }}
      className="fixed inset-0 m-auto w-[calc(100%_-_2rem)] max-w-md max-h-[90dvh] overflow-y-auto rounded-2xl border border-blue-400/30 bg-[#071331] p-0 text-left text-white shadow-2xl backdrop:bg-black/75"
    >
      <div className="relative p-6 sm:p-8">
        <button
          type="button"
          onClick={() => dialogRef.current?.close()}
          aria-label="Contact 닫기"
          className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full text-white/70 transition hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-blue-300"
        >
          <FiX size={22} aria-hidden="true" />
        </button>
        <p className="mb-2 text-sm tracking-widest text-blue-300">Contact</p>
        <h2 id={titleId} className="pr-8 text-2xl font-semibold">COMP에 문의하기</h2>
        <p id={descriptionId} className="mt-3 text-sm leading-relaxed text-white/60">
          COMP에 궁금한 점이 있다면 이메일로 연락해 주세요.
        </p>
        <dl className="mt-7">
          <dt className="text-sm text-blue-200">{presidentContact.role}</dt>
          <dd className="mt-1 text-xl font-medium">{presidentContact.name}</dd>
          <dt className="mt-6 text-sm text-white/60">Email</dt>
          <dd className="mt-2">
            <a
              href={`mailto:${presidentContact.email}`}
              className="flex min-h-11 items-center gap-3 rounded-lg text-blue-200 underline decoration-blue-300/40 underline-offset-4 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300"
            >
              <FiMail className="shrink-0" size={20} aria-hidden="true" />
              <span className="break-all">{presidentContact.email}</span>
            </a>
          </dd>
        </dl>
      </div>
    </dialog>
  )
}
