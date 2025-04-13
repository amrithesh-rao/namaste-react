import RestorantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurantDetails from "../utils/useRestaurantDetails";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [restDetail, setRestDetail] = useState([]);
  const [filteredRestDetail, setFilteredRestDetail] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const getRestDetials = useRestaurantDetails();
  console.log(`body html is rendered - 1`)
  useEffect(()=>{
    console.log(`body html is rendered - 2`)
    setRestDetail(getRestDetials);
    setFilteredRestDetail(
      getRestDetials
    );
  }, [getRestDetials]);
 
  if (!useOnlineStatus()) {
    return <div>Not internet connection. please check internet connection</div>
  }
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
