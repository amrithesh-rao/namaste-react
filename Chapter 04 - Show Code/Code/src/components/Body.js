import RestorantCard from "./RestaurantCard";
import { useEffect, useState } from "react";

const Body = () => {
  const [restDetail, setRestDetail] = useState([]);
  const [filteredRestDetail, setFilteredRestDetail] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
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
          setFilteredRestDetail(res?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return restDetail.length === 0 ? (
    "loading"
  ) : (
    <div className="food-body">
      <input
        id="rest-search-button"
        placeholder="type restorant name here"
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
      />
      <button onClick={() => {
        if (searchValue.length === 0) {
          setFilteredRestDetail(restDetail);
          return;
        }
        const filterData = restDetail.filter(restItem=>
          restItem.info.name.toLowerCase().split(' ').includes(searchValue.toLowerCase())
        );
        console.log(filterData);
        setFilteredRestDetail(filterData);
      }}>Go</button>
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
        {filteredRestDetail.map((restItem) => (
          <RestorantCard key={restItem.info.id} restData={restItem} />
        ))}
      </div>
    </div>
  );
};

export default Body;
