export const getWishFromLs = () => {
    const itemsWish = localStorage.getItem("wish");


    const items = itemsWish ? JSON.parse(itemsWish) : [];
    const countWish = items.length
    return {items, countWish}
 }