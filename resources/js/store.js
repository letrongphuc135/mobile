import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

let cart = window.localStorage.getItem('cart');
let cartCount = window.localStorage.getItem('cartCount');
export default new Vuex.Store({
    state: {
        cart: cart ? JSON.parse(cart) : [],
        cartCount: cartCount ? JSON.parse(cartCount) : 0,
        search: null
    },

    mutations: {
        addToCart(state, item){
            let found  = state.cart.find(product  => product.product.id == item.product.id )
            if (found){
                found.quantity += item.quantity;
                state.cartCount += item.quantity;
            }else{
                state.cartCount += item.quantity;
                state.cart.push(item);
            }

            this.commit('saveData');
        },

        searchinit(state, item){
            state.search = item;
        },

        saveData(state){
            window.localStorage.setItem('cart', JSON.stringify(state.cart));
            window.localStorage.setItem('cartCount', JSON.stringify(state.cartCount));
        },

        removeFromCart(state, item){
            let index = state.cart.indexOf(item);
            state.cartCount -= item.quantity;
            state.cart.splice(index, 1);
            this.commit('saveData');
        }
    }

})
