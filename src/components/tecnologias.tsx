import TecCard from "./tecCards"

export default function Tecnologias(){
    return (
        <div className="flex flex-col justify-center bg-slate-900 p-4 h-screen">
            <h2 className="text-7xl text-slate-100 font-semibold p-32">Que tecnologias manejo?</h2>
            <TecCard/>
        </div>
    )
}