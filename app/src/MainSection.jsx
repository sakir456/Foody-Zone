import { useEffect, useState } from "react";
import { BASE_URL } from "./utils/Constants";

const MainSection = () => {
    
    const[foodData, setFoodData] = useState([])
    const [error, setError] = useState(null) 
    const [loading, setLoading] = useState(false)
    const [searchText, setSearchText] = useState("")
    const [listOfFood, setListOfFood] = useState([])

    const fetchData = async () => {
       
        setLoading(true)
        try {

        const response = await fetch(BASE_URL)

        const data = await  response.json();
          setLoading(false)
          setFoodData(data)
          setListOfFood(data)

            
        } catch (error) {
            setError("Sorry for Inconvience! Unable to Fetch Data")
        }
        

    }

    useEffect(() => {
        fetchData()
    }, [])

    if (loading) return <div>Loading...</div>

    if(error) return <div>{error}</div>

    

    return (
        <div className="">
            <div className="">
            <img src="./public/bg.png" alt="image is loading" className="w-full h-[695px]  relative z-0   " />
            </div>
           
           
            <div className="absolute top-20 left-[600px] z-10  ">
           <button className="bg-orange-600 text-white mr-2 px-2 py-1 text-sm 
            rounded hover:bg-orange-800  hover:border-2 hover:border-white"
            onClick={() => {
       
        setFoodData(listOfFood);
    }}
            >All</button>
           <button className="bg-orange-600 text-white mr-2 px-2 py-1 text-sm
            rounded hover:bg-orange-800 hover:border-2 hover:border-white"
            onClick={()=>{
          const filteredFoodtype = listOfFood.filter((food)=>
           food.type === "breakfast"
            )
            setFoodData(filteredFoodtype)
            }}
         >Breakfast</button>
           <button className="bg-orange-600 text-white mr-2 px-2 py-1 text-sm 
           rounded hover:bg-orange-800 hover:border-2 hover:border-white"
           onClick={()=>{
          const filteredFoodtype = listOfFood.filter((food)=>
           food.type === "lunch"
            )
            setFoodData(filteredFoodtype)
            }}
           
           
           >Lunch</button>
           <button className="bg-orange-600 text-white mr-2 px-2 py-1 text-sm 
           rounded hover:bg-orange-800 hover:border-2 hover:border-white"
           onClick={()=>{
          const filteredFoodtype = listOfFood.filter((food)=>
           food.type === "dinner"
            )
            setFoodData(filteredFoodtype)
            }}
           
           
           >Dinner</button>
           </div>
           <div  className="absolute top-3 right-6 z-10">
           <input placeholder="search food..." className=" border-[1px]
             rounded border-white bg-transparent text-white placeholder-white placeholder:font-bold px-2 py-1 text-sm  "
             value={searchText}
             onChange={(e) =>{
                setSearchText(e.target.value)
             }}
             />
           <button className="bg-orange-600 text-white mr-2 ml-2 px-2 py-1 text-sm 
           rounded hover:bg-orange-800 hover:border-2 hover:border-white"
           onClick={() => {
        // If search text is empty, reset foodData to original state
        if (searchText.trim() === "") {
            setFoodData(listOfFood);
        } else {
            // Filter food items based on search text
            const filteredFoodItems = listOfFood.filter((food) =>
                food.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFoodData(filteredFoodItems);
        }
    }}
           >
           Search
           </button>
           </div>
          

<div className="absolute top-[200px] left-[175px] z-10  rounded-md grid grid-cols-3 gap-5" >
     {foodData.map((item,index) =>(
        <div key={item.price} className=" h-[150px] w-[380px] flex backdrop-blur-md"> 
        <img src={item.image} className="h-[110px] w-[110px] rounded-full ml-4 mt-5 mr-4" />
        <div className="h-full">
            <h1 className="text-md font-bold text-white mt-5">{item.name}</h1>
            <p className="text-sm text-white mt-2 mr-1">{item.text} </p>
            <button className="bg-orange-600 text-white ml-44 mb-0 px-2 py-1 text-sm 
            rounded hover:bg-orange-800  hover:border-2 hover:border-white">$ {item.price}</button>
        </div>
    </div>
     ))}
    
</div>

           


      </div>
    )
}

export default MainSection;