

const GlassPanel = ({children,className}:any) => {
  return (
    <div className={`${className} rounded-2xl border-solid border-2 border-[rgba(255,255,255,0.2)]`}>{children}</div>
  )
}

export default GlassPanel
