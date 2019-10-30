export default function({store, redirect}){
    if(store.getters['cart/cart'].length < 1){
        redirect('/cart')
    } else {
        if(!store.getters['cart/selectedStreet'] && !store.getters['cart/pickUpTime']){
            redirect('/cart')
        }
    }
}