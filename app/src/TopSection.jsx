
const TopSection = () => {
     
    return (
        <div className="bg-[#5D5A5A] relative ">

       
        <img src="./public/Foody zone.png" alt="image is Loading" className=" absolute top-8 left-7" />
        <input type="text" placeholder="Search Food...." className="bg-transparent absolute top-8 right-10 placeholder-white border border-orange-500 focus:outline-none focus:border-orange-700 rounded-md text-white"/>
        
        
            <button className="bg-orange-600 h-7 px-2 text-sm my-8 rounded-md text-white">All</button>
            <button className="bg-orange-600 h-7 px-2 text-sm my-8 rounded-md  text-white">Breakfast</button>
            <button className="bg-orange-600 h-7 px-2 text-sm my-8 rounded-md  text-white">Lunch</button>
            <button className="bg-orange-600 h-7 px-2 text-sm my-8 rounded-md  text-white">Dinner</button>
       

        </div>
    )
}

export default TopSection