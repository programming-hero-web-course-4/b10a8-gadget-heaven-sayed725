import { useParams } from "react-router-dom";

const GadgetCards = () => {

    const {category} = useParams()
    return (
        <div>
            <h2 className="text-3xl font bold text-center">Gadget Cards...{category}</h2>
        </div>
    );
};

export default GadgetCards;