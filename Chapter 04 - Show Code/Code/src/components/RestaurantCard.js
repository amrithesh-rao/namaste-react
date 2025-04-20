import { useContext } from "react";
import { RESTAURANT_MEDIA_LINK } from "../utils/constants";
import userContext from "../contexts/userContext";

const RestorantCard = (props) => {
  const { restData } = props;
  const { cloudinaryImageId, name, avgRating, costForTwo, sla } = restData.info;
  const { userName } = useContext(userContext);

  return (
    <div className="m-2 p-4 rounded-lg bg-orange-50 hover:bg-orange-900 w-[200px]">
      <img
        className="rounded-lg"
        src={RESTAURANT_MEDIA_LINK + cloudinaryImageId}
      />
      <h4 className="font-bold py-2">{name}</h4>
      <h5 className="restorant-card-item">
        {restData.info.cuisines.join(", ")}
      </h5>

      <h5 className="restorant-card-item">{avgRating} rating</h5>

      <h5 className="restorant-card-item">{costForTwo}</h5>
      <h5 className="restorant-card-item">{sla.deliveryTime} minutes</h5>
      <h5>{userName}</h5>
    </div>
  );
};

export default RestorantCard;
