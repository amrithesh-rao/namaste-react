import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
    const { restId } = useParams();
    console.log(useParams());

    const restMenuInfo = useRestaurantMenu(restId);
    
    if (restMenuInfo === null) {
        return <div>loading...</div>;
    }
    const restName = restMenuInfo[0]?.card?.card?.text;
    const restMenu = restMenuInfo[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;
    console.log(restMenu);
    return (
        <>
            <div>
                {restName} Menu:
            </div>
            <ul>
                {
                    restMenu?.map((card)=> (
                        <li>{card?.card?.info?.name} - {card?.card?.info?.price/100 || card?.card?.info?.defaultPrice/100}rs</li>
                    ))
                }
            </ul>
        </>
    );
};

export default RestaurantMenu;