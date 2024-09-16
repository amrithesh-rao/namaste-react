import { RESTAURANT_MEDIA_LINK } from "../utils/constants";

const RestorantCard = (props) => {
  const { restData } = props;
  const { cloudinaryImageId, name, avgRating, costForTwo, sla } = restData.info;

  return (
    <div className="restorant-card">
      <img
        className="restorant-card-img"
        src={RESTAURANT_MEDIA_LINK + cloudinaryImageId}
      />
      <h3 className="restorant-card-item">{name}</h3>
      <h3 className="restorant-card-item">
        {restData.info.cuisines.join(", ")}
      </h3>

      <h3 className="restorant-card-item">{avgRating} rating</h3>

      <h3 className="restorant-card-item">{costForTwo}</h3>
      <h3 className="restorant-card-item">{sla.deliveryTime} minutes</h3>
    </div>
  );
};

export default RestorantCard;
