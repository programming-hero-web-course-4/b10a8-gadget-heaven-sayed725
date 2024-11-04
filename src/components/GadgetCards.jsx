import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";

const GadgetCards = () => {

    const {category} = useParams()
    const data = useLoaderData()
    console.log(data)
    return (
        <div className="col-span-3">
            <div className="grid grid-cols-3 gap-6">
                {
                    data.map(gadget=><Card key={gadget.product_id} gadget={gadget}></Card>)
                }

            </div>
            
        </div>
    );
};

export default GadgetCards;