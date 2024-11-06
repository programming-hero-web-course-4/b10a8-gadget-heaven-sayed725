import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";

const GadgetCards = () => {
    const {category} = useParams()
    const data = useLoaderData()
   const [gadgets , setGadgets] = useState([])
   useEffect(()=>{
    if(category){
        const filteredByCategory = [...data].filter(gadget=>gadget.category === category)
    setGadgets(filteredByCategory)
    }
    else if(category === 'All Product'){
        setGadgets(data)
    }
    else{
        setGadgets(data)
    }
    
   },[category,data])


    return (
        <div className="col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    gadgets.map(gadget=><Card key={gadget.product_id} gadget={gadget}></Card>)
                }

            </div>
            
        </div>
    );
};

export default GadgetCards;