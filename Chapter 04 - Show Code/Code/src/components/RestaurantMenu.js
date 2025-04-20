import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ItemMenu from "./ItemMenu";
import { useState } from "react";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
    const [showIndex, setShowIndex] = useState(0);
    const { restId } = useParams();
    console.log(useParams());

    const restMenuInfo = useRestaurantMenu(restId);
    
    if (restMenuInfo === null) {
        return <div>loading...</div>;
    }

    const { name, cuisines, costForTwoMessage } = restMenuInfo[2]?.card?.card?.info;
    const categories = restMenuInfo[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
        (card) => card.card.card['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    console.log(categories);

    return (
        <div className="mx-auto w-6/12 text-center">
            <div className="p-4">
            <h2 className="font-bold text-lg">{name}</h2>
            <h3 className="font-bold text-sm">{cuisines.join(", ")+" - "+costForTwoMessage}</h3>
            </div>
            <ul>
                {
                    categories?.map((card, index)=> (
                        <RestaurantCategory title={card.card.card.title} itemCards={card.card.card.itemCards} setShow={(isShow) => isShow ? setShowIndex(null) : setShowIndex(index)} isShow={index === showIndex}/>
                    ))
                }
            </ul>
        </div>
    );
};

export default RestaurantMenu;