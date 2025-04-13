import { useEffect, useState } from "react";
import { GET_RESTAURANT_MENU } from "../utils/constants";

const useRestaurantMenu = (restId) => {
    const [restMenuInfo, setRestMenuInfo] = useState(null);
    useEffect(() => {
        fetch(GET_RESTAURANT_MENU+`?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=${restId}&catalog_qa=undefined&submitAction=ENTER`).then(async (res)=>{
            const menuData = await res.json();
            setRestMenuInfo(menuData?.data?.cards);
            console.log(menuData.data.cards);
        })
    }, []);
 return restMenuInfo;
}

export default useRestaurantMenu;