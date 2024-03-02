export function getCountProductsInCard() {
    const cart = JSON.parse(localStorage.getItem('cart'))
    return cart? cart.products.length : 0;
}

export const calcSubPrice = product => +product.count * product.item.price;

export function calcTotalPrice(products) {
    return products.reduce((pV, cur) => {
        return (pV += cur.sunPrice)
    }, 0)
}