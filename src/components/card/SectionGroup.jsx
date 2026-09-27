import ArchiveCard from './Card'

const SectionGroup = ({ generation, items }) => {
  return (
    <div className="flex flex-col gap-4">

      <div className="flex items-center gap-3">
        <p className="text-blue-300/60 text-m tracking-widest">{generation}기</p>
        <div className="flex-1 h-[1px] bg-gradient-to-r from-blue-400/30 to-transparent" />
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4 lg:gap-6">
        {items.map((item) => (
          <ArchiveCard 
            key={item.image || item.title}
            {...item} />
        ))}
      </div>

    </div>
  )
}

export default SectionGroup
