import RestorantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [restDetail, setRestDetail] = useState([]);
  const [filteredRestDetail, setFilteredRestDetail] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  console.log(`body is rendered - 1`);
  useEffect(() => {
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
          setFilteredRestDetail(res?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(`body is rendered - 2`);
  return restDetail.length === 0 ? (
    <>
      {console.log(`body html is rendered - 3`)}
      <Shimmer />
    </>
  ) : (
    <div className="food-body">
      {console.log(`body html is rendered - 4`)}
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
          <Link key={restItem.info.id} to={"/restaurant/"+restItem.info.id}><RestorantCard restData={restItem}/></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
