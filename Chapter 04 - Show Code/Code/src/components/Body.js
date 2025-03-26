import { restData } from "../utils/mockData";
import RestorantCard from "./RestaurantCard";
import { useEffect, useState } from "react";

const Body = () => {
  const [restDetail, setRestDetail] = useState(restData);

  useEffect(()=>{
      fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING`).then((response)=>{
        response.json().then((res)=>{
          console.log(res);
        })
      }).catch((err)=>{
        console.log(err);
      })
  }, []);
  return (
    <div className="food-body">
      <button
        onClick={() => {
          const filterData = restDetail.filter(
            (restItem) => restItem.info.avgRating > 4
          );
          setRestDetail(filterData);
        }}
        className="filter-button"
      >
        Restaurant with avgRating greater than 4
      </button>
      {/* <RestorantSearchBarComponent /> */}
      <div className="card-container">
        {/*this is a comment*/}
        {restDetail.map((restItem) => (
          <RestorantCard key={restItem.info.id} restData={restItem} />
        ))}
      </div>
    </div>
  );
};

export default Body;
