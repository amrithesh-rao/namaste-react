import { useEffect, useState } from "react";
import { GET_RESTAURANT_MENU } from "../utils/constants";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
    const { restId } = useParams();
    const [restMenuInfo, setRestMenuInfo] = useState([]);
    console.log(useParams());
    useEffect(() => {
        fetch(GET_RESTAURANT_MENU+`?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=${restId}&catalog_qa=undefined&submitAction=ENTER`).then(async (res)=>{
            const menuData = await res.json();
            setRestMenuInfo(menuData?.data?.cards);
            console.log(menuData.data.cards);
        })
    }, []);
    if (restMenuInfo.length === 0) {
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