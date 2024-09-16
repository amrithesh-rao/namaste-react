import { restData } from "../utils/mockData";
import RestorantCard from "./RestaurantCard";

const Body = () => (
  <div className="food-body">
    Search
    {/* <RestorantSearchBarComponent /> */}
    <div className="card-container">
      {restData.map((restItem) => (
        <RestorantCard key={restItem.info.id} restData={restItem} />
      ))}
    </div>
  </div>
);

export default Body;
