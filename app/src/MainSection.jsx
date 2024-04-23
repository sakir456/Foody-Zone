const MainSection = () => {
    const data = [
        {
            id: 1,
            image: "./public/eggs boiled.png",
            title: "Boiled Eggs",
            description: "This is boiled eggs, healthy and tasty. It looks good and is the best.",
            price: "$10.00"
        },
        {
            id: 2,
            image: "./public/eggs boiled.png",
            title: "Boiled Eggs",
            description: "This is boiled eggs, healthy and tasty. It looks good and is the best.",
            price: "$10.00"
        },
        {
            id: 3,
            image: "./public/eggs boiled.png",
            title: "Boiled Eggs",
            description: "This is boiled eggs, healthy and tasty. It looks good and is the best.",
            price: "$10.00"
        },
        {
            id: 4,
            image: "./public/eggs boiled.png",
            title: "Boiled Eggs",
            description: "This is boiled eggs, healthy and tasty. It looks good and is the best.",
            price: "$10.00"
        },
        {
            id: 5,
            image: "./public/eggs boiled.png",
            title: "Boiled Eggs",
            description: "This is boiled eggs, healthy and tasty. It looks good and is the best.",
            price: "$10.00"
        },
        {
            id: 6,
            image: "./public/eggs boiled.png",
            title: "Boiled Eggs",
            description: "This is boiled eggs, healthy and tasty. It looks good and is the best.",
            price: "$10.00"
        },
       
    ];

    return (
        <div className="">
            <div className="">
            <img src="./public/bg.png" alt="image is loading" className="w-full h-[695px]  relative z-0   " />
            </div>
           
           
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
             rounded border-white bg-transparent text-white placeholder-white placeholder:font-bold px-2 py-1 text-sm  "/>

<div className="absolute top-[200px] left-[175px] z-10  rounded-md grid grid-cols-3 gap-5" >
     {data.map((item,index) =>(
        <div key={item.id} className=" h-[150px] w-[380px] flex backdrop-blur-md"> 
        <img src={item.image} className="h-[110px] w-[110px] rounded-full ml-4 mt-5 mr-4" />
        <div className="h-full">
            <h1 className="text-md font-bold text-white mt-5">{item.title}</h1>
            <p className="text-sm text-white mt-2">{item.description} </p>
            <button className="bg-orange-600 text-white ml-48 mb-0 px-1 py-1 text-sm 
            rounded hover:bg-orange-800  hover:border-2 hover:border-white">{item.price}</button>
        </div>
    </div>
     ))}
    
</div>

           


      </div>
    )
}

export default MainSection;