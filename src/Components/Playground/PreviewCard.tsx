import { useContext } from "react"
import { context } from "../../Context/DataContext"

const PreviewCard = () => {
  const { Data } = useContext(context)
  if(Data === null) return null
  return (
      <div className="h-full w-[60%] border border-zinc-700 rounded-l-xl ">
          <div className="h-[10%] w-full border-b border-zinc-700"></div>
          <div className=""></div>
    </div>
  )
}

export default PreviewCard