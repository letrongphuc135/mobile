import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

let cart = window.localStorage.getItem('cart');
let cartCount = window.localStorage.getItem('cartCount');
let auth = window.localStorage.getItem('auth');
export default new Vuex.Store({
    state: {
        cart: cart ? JSON.parse(cart) : [],
        cartCount: cartCount ? JSON.parse(cartCount) : 0,
        auth: auth ? JSON.parse(auth) : null,
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

        login(state, item){
            state.auth = item;
            this.commit('saveData');
        },

        logout(state){
            state.auth = null;
            this.commit('saveData');
        },

        saveData(state){
            window.localStorage.setItem('cart', JSON.stringify(state.cart));
            window.localStorage.setItem('cartCount', JSON.stringify(state.cartCount));
            window.localStorage.setItem('auth', JSON.stringify(state.auth));
        },

        removeFromCart(state, item){
            let index = state.cart.indexOf(item);
            state.cartCount -= item.quantity;
            state.cart.splice(index, 1);
            this.commit('saveData');
        }
    }

})
