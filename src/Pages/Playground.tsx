import Input from "../Components/Playground/Input"
import PreviewCard from "../Components/Playground/PreviewCard"
import ContextProvider from "../Context/DataContext"

const Playground = () => {
  return (
    <ContextProvider>
    <div className="h-screen w-full bg-[#252627] p-24 flex">
      <PreviewCard />
      <Input/>
    </div>
    </ContextProvider >
  )
}

export default Playground