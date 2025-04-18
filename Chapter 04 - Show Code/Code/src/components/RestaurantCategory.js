import { useState } from "react";
import ItemMenu from "./ItemMenu";

const RestaurantCategory = ({title, itemCards, setShow, isShow}) => {
    return (
        <div className="bg-orange-50 my-4">
            <div className="flex justify-between p-4 cursor-pointer" onClick={()=> { setShow() }}>
                <span className="font-bold text-sm">{title}</span>
                <span>{isShow ? '⬆️' : '⬇️'}</span>
            </div>
            {isShow ? <ItemMenu itemCards={itemCards}/> : ''}
        </div>
    )
}

export default RestaurantCategory;