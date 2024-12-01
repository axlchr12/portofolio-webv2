export const CardContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="my-36 flex items-center justify-center">
      <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg p-3 w-3/5 h-3/5 max-w-3/5 max-h-3/5">
        <div className="p-4 leading-normal font-light">{children}</div>
      </div>
    </div>
  )
}
