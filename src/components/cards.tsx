export default function Cards(){
    return (
        <div className="flex justify-center p-4">
                <div className="p-4 border-solid border-gray-900 border-4 m-4 rounded-lg shadow-lg shadow-gray-900">
                    <h2 className="p-2 text-2xl font-semibold">Proyecto 1</h2>
                    <img className="w-96 h-auto rounded-lg shadow-lg shadow-gray-900" src="https://www.adslzone.net/app/uploads-adslzone.net/2020/05/Mejores-webs-con-juegos-multijugador.jpg" alt="Videojuegos" />
                    <div className="flex flex-wrap justify-center p-4">
                        <p className="p-2 border border-gray-900 m-2 rounded-lg shadow-lg shadow-gray-900 hover:bg-gray-900 hover:text-white hover:cursor-pointer">React.js</p>
                        <p className="p-2 border border-gray-900 m-2 rounded-lg shadow-lg shadow-gray-900 hover:bg-gray-900 hover:text-white hover:cursor-pointer">Node.js</p>
                        <p className="p-2 border border-gray-900 m-2 rounded-lg shadow-lg shadow-gray-900 hover:bg-gray-900 hover:text-white hover:cursor-pointer">Redux</p>
                    </div>
                </div>
                <div className="p-4 border-solid border-gray-900 border-4 m-4 rounded-lg shadow-lg shadow-gray-900">
                    <h2 className="p-2 text-2xl font-semibold">Proyecto 2</h2>
                    <img className="w-96 h-auto rounded-lg shadow-lg shadow-gray-900" src="https://www.adslzone.net/app/uploads-adslzone.net/2020/05/Mejores-webs-con-juegos-multijugador.jpg" alt="Videojuegos" />
                    <div className="flex flex-wrap justify-center p-4">
                        <p className="p-2 border border-gray-900 m-2 rounded-lg shadow-lg shadow-gray-900 hover:bg-gray-900 hover:text-white hover:cursor-pointer">React.js</p>
                        <p className="p-2 border border-gray-900 m-2 rounded-lg shadow-lg shadow-gray-900 hover:bg-gray-900 hover:text-white hover:cursor-pointer">Node.js</p>
                        <p className="p-2 border border-gray-900 m-2 rounded-lg shadow-lg shadow-gray-900 hover:bg-gray-900 hover:text-white hover:cursor-pointer">Redux</p>
                    </div>
                </div>
        </div>
    )
}