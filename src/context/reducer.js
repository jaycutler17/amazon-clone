export const initialState = {
    basket: [],
    user:null
};

// export const BasketValue =(basket)=>{
//     basket.reduce((amount =0 , item)=>{
//         amount += item.price;
//     })

// }

// selector -->
export const BasketValue = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);


const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'add_to_basket':
            return {
                ...state,
                basket: [...state.basket, action.item]
            };
        case 'remove_from_basket':
            const index = state.basket.findIndex(
                (basketitem) => basketitem.id === action.id
            );

            let newbasket = [...state.basket];

            if (index >= 0) {
                newbasket.splice(index, 1);
            } else {
                console.warn(
                    `can't remove product id ${action.id} as it is not in the basket`
                )
            }

            return {
                ...state,
                basket:newbasket
            }
        case 'SET_USER':
            return {
                ...state,
                user:action.user
            }    

        default:
            return state;
    }
}

export default reducer;