const MainSection = () => {
    return (
        <div className="">
           <img src="./public/food.webp" alt="image is loading" className="w-full h-[695px] relative z-0" />

            <div className="absolute top-20 left-[600px] z-10  ">

            <button className="bg-orange-600 text-white mr-2 px-2 py-1 text-sm 
            rounded hover:bg-orange-800  hover:border-2 hover:border-white">All</button>
           <button className="bg-orange-600 text-white mr-2 px-2 py-1 text-sm
            rounded hover:bg-orange-800 hover:border-2 hover:border-white">Breakfast</button>
           <button className="bg-orange-600 text-white mr-2 px-2 py-1 text-sm 
           rounded hover:bg-orange-800 hover:border-2 hover:border-white">Lunch</button>
           <button className="bg-orange-600 text-white mr-2 px-2 py-1 text-sm 
           rounded hover:bg-orange-800 hover:border-2 hover:border-white">Dinner</button>

            </div>

            <input placeholder="search food..." className="absolute top-3 right-6 z-10 border-[1px]
             rounded border-white bg-transparent text-white placeholder-white px-2 py-1 text-sm  "/>
           


      </div>
    )
}

export default MainSection;