const ItemMenu = ({itemCards}) => {
    console.log(itemCards);
    return (
        <div>
            {itemCards.map((item) =>
               <div>{item.card.info.name} - {item.card.info.price/100 || item.card.info.defaultPrice/100}rs</div>
            )}
        </div>
    )
}

export default ItemMenu;