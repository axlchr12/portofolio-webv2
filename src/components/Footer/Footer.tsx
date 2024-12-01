export const Footer = () => {
  const date = new Date()
  return (
    <div className="mx-3 border-t border-slate-200 pt-2 px-1 flex">
      <p className="text-sm text-[#2d334a] font-medium">
        Axel C - {date.getFullYear()} | Inspired design by
      </p>
    </div>
  )
}
