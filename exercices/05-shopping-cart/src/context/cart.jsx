import { createContext, useReducer } from 'react'
import { CartReducer, initialState, CART_ACTIONS_TYPES } from '../reducers/cart'

export const CartContext = createContext()

function useCartReducer () {
  const [state, dispatch] = useReducer(CartReducer, initialState)

  const addToCart = product => dispatch({
    type: CART_ACTIONS_TYPES.ADD_TO_CART,
    payload: product
  })
  const removeFromCart = product => dispatch({
    type: CART_ACTIONS_TYPES.REMOVE_FROM_CART,
    payload: product
  })
  const clearCart = () => dispatch({ type: CART_ACTIONS_TYPES.CLEAR_CAR })

  return { state, addToCart, removeFromCart, clearCart }
}

export function CartProvider ({ children }) {
  const { state, addToCart, removeFromCart, clearCart } = useCartReducer()
  return (
    <CartContext.Provider value={{
      cart: state,
      addToCart,
      removeFromCart,
      clearCart
    }}
    >
      {children}
    </CartContext.Provider>
  )
}
