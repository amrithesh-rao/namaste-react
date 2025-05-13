import { useDispatch } from "react-redux";
import { RESTAURANT_MEDIA_LINK } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemMenu = ({itemCards}) => {
    const dispatch = useDispatch();
    console.log(itemCards);
    return (
        <div>
            {itemCards.map((item) =>
               <div className="border-b-2 p-4 border-white flex justify-between">
                    <div className="text-left w-9/12">
                        <div className="text-sm p-2">{item.card.info.name} - {item.card.info.price/100 || item.card.info.defaultPrice/100}rs</div>
                        <div className="text-xs p-2">{item.card.info.description}</div>
                    </div>
                    <div className="ml-4 w-3/12">
                        <img src={RESTAURANT_MEDIA_LINK+item.card.info.imageId}/>
                        <div className="absolute -mt-10">
                            <button className="bg-white p-3 rounded-lg shadow-lg mx-16" onClick={() => {dispatch(addItem(item.card.info))}}>ADD</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ItemMenu;