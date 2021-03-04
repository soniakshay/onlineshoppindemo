const init = {
    cartProduct: [],
    totalPrice:0
};
const CartReducer  = (state = init ,action) => {
    if(action.type == 'add') {
        let newData = [...state.cartProduct];
        newData.push(action.data);
        let price = state.totalPrice + action.data.price;
        return {
            ...state,
            cartProduct: newData,
            totalPrice:price
        }

    }
    if(action.type == 'remove') {
        let newData = [...state.cartProduct];
        let index = newData.findIndex(x => x.id === action.data.id);
        let price = state.totalPrice - action.data.price;
        newData.splice(index,1);
        return {
            ...state,
            cartProduct: newData,
            totalPrice:price
        }
    }

    return state;
}

export default CartReducer;
