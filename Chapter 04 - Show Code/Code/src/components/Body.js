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
    <div>
      {console.log(`body html is rendered - 4`)}
      <div className="flex justify-center m-4">
      <input
        className="border-2 border-black px-6 w-44"
        placeholder="Search restaurant"
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
      />
      <button className="bg-orange-100 px-4 rounded-lg ml-2 mr-5" onClick={() => {
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
        className="bg-orange-100 px-4 rounded-lg mr-5"
      >
        Restaurant with avgRating greater than 4
      </button>
      </div>
      {/* <RestorantSearchBarComponent /> */}
      <div className="flex flex-wrap">
        {/*this is a comment*/}
        {filteredRestDetail.map((restItem) => (
          <Link key={restItem.info.id} to={"/restaurant/"+restItem.info.id}><RestorantCard restData={restItem}/></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
