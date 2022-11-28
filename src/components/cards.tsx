export default function Cards(){
    return (
        <div className="flex justify-center p-4">
                <div className="p-4 border-solid border-amber-500 border-4 m-4 rounded-lg shadow-lg">
                    <h2 className="p-2 text-2xl text-slate-200 font-semibold">Proyecto 1</h2>
                    <img className="w-96 h-auto rounded-lg" src="https://www.adslzone.net/app/uploads-adslzone.net/2020/05/Mejores-webs-con-juegos-multijugador.jpg" alt="Videojuegos" />
                    <div className="flex flex-wrap justify-center p-4">
                        <p className="p-2 border text-slate-300 border-amber-500 m-2 rounded-lg shadow-lg">React.js</p>
                        <p className="p-2 border text-slate-300 border-amber-500 m-2 rounded-lg shadow-lg">Node.js</p>
                        <p className="p-2 border text-slate-300 border-amber-500 m-2 rounded-lg shadow-lg">Redux</p>
                    </div>
                </div>
                <div className="p-4 border-solid border-amber-500 border-4 m-4 rounded-lg shadow-lg">
                    <h2 className="p-2 text-2xl text-slate-200 font-semibold">Proyecto 2</h2>
                    <img className="w-96 h-auto rounded-lg" src="https://www.adslzone.net/app/uploads-adslzone.net/2020/05/Mejores-webs-con-juegos-multijugador.jpg" alt="Videojuegos" />
                    <div className="flex flex-wrap justify-center p-4">
                        <p className="p-2 border text-slate-300 border-amber-500 m-2 rounded-lg shadow-lg">React.js</p>
                        <p className="p-2 border text-slate-300 border-amber-500 m-2 rounded-lg shadow-lg">Node.js</p>
                        <p className="p-2 border text-slate-300 border-amber-500 m-2 rounded-lg shadow-lg">Redux</p>
                    </div>
                </div>
        </div>
    )
}