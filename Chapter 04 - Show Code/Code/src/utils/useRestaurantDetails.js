import { useEffect, useState } from "react";

const useRestaurantDetails = () => {
const [restDetail, setRestDetail] = useState([]);
console.log(`body html is rendered - -1`)
  useEffect(() => {
    console.log(`body html is rendered - 0`)
    console.log(`useEffect called`);
    fetch(
      `https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING`
    )
      .then((response) => {
        response.json().then((res) => {
          console.log(res);
          console.log(
            res?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants
          );
          setRestDetail(
            res?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants
          );
        });
      })
      .catch((err) => {
        console.log(err);
      },);
  }, []);
  return restDetail;
};

export default useRestaurantDetails;
