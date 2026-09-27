const ArchiveCard = ({ image, title, subtitle, alt, onClick }) => {
  const CardElement = onClick ? 'button' : 'section'

  return (
    <CardElement
      type={onClick ? 'button' : undefined}
      onClick={onClick}
      aria-label={onClick ? `${title} 사진 크게 보기` : undefined}
      className={`group flex w-full flex-col ${onClick ? 'cursor-zoom-in focus-visible:rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400' : ''}`}
    >

      <span className="block w-full aspect-square rounded-xl overflow-hidden border border-blue-400/20 bg-blue-500/10 group-hover:border-blue-400/50">
        {image
          ? <img src={image} alt={alt || title} loading="lazy" decoding="async" className="w-full h-full object-cover" />
          : <span className="block w-full h-full" />
        }
      </span>

      <span className="w-full text-xl font-semibold group-hover:text-blue-300 text-center pt-3">
        {title}
      </span>

      {/* 서브타이틀 */}
      <span className="w-full text-s text-white/50 text-center">{subtitle}</span>

    </CardElement>
  )
}

export default ArchiveCard
