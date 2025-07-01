import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemMenu from "./ItemMenu";
import { clearCart } from "../utils/cartSlice";

export const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(store => store.cart.items);
    console.log(cartItems);
    return (
        <div className="text-center w-6/12 mx-auto">
            <div className="font-bold">Cart</div>
            <button className="font-bold" onClick={() => {dispatch(clearCart())}}>Clear</button>
            <ItemMenu itemCards={cartItems}/>
        </div>
    );
}