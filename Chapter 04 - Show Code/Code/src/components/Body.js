import { restData } from "../utils/mockData";
import RestorantCard from "./RestaurantCard";
import { useState } from "react";

const Body = () => {
  const [restDetail, setRestDetail] = useState(restData);

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
