import { Link } from 'react-router-dom'

const ArchiveCard = ({ image, title, subtitle }) => {
  return (
    <section className="flex flex-col">

      <div className="w-full aspect-square rounded-xl overflow-hidden border border-blue-400/20 bg-blue-500/10 group-hover:border-blue-400/50">
        {image
          ? <img src={image} alt={title} className="w-full h-full object-cover" />
          : <div className="w-full h-full" />
        }
      </div>

      <p className="text-xl font-semibold group-hover:text-blue-300 text-center pt-3">
        {title}
      </p>

      {/* 서브타이틀 */}
      <p className="text-s text-white/50 text-center">{subtitle}</p>

    </section>
  )
}

export default ArchiveCard