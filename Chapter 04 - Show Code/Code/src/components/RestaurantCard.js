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
      <h4 className="restorant-card-item">{name}</h4>
      <h5 className="restorant-card-item">
        {restData.info.cuisines.join(", ")}
      </h5>

      <h5 className="restorant-card-item">{avgRating} rating</h5>

      <h5 className="restorant-card-item">{costForTwo}</h5>
      <h5 className="restorant-card-item">{sla.deliveryTime} minutes</h5>
    </div>
  );
};

export default RestorantCard;
