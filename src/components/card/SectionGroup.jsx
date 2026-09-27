import ArchiveCard from './Card'

const SectionGroup = ({ generation, items, onImageClick }) => {
  const isGallery = Boolean(onImageClick)

  return (
    <div className={`flex flex-col ${isGallery ? 'gap-6' : 'gap-4'}`}>

      <div className="flex items-center gap-3">
        <p className={isGallery ? 'shrink-0 text-lg font-semibold tracking-wider text-blue-200' : 'text-blue-300/60 text-m tracking-widest'}>{generation}기</p>
        <div className={isGallery ? 'h-0.5 flex-1 bg-gradient-to-r from-blue-300/80 via-blue-400/55 to-blue-400/20' : 'flex-1 h-[1px] bg-gradient-to-r from-blue-400/30 to-transparent'} />
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4 lg:gap-6">
        {items.map((item) => (
          <ArchiveCard 
            key={item.image || item.title}
            {...item}
            onClick={onImageClick && item.image ? () => onImageClick(item) : undefined}
          />
        ))}
      </div>

    </div>
  )
}

export default SectionGroup
