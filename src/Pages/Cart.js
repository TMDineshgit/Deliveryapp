import { useDispatch, useSelector } from "react-redux"
import ItemList from "../components/ItemList"
import { clearCart } from "../../store/slices/cartSlice"


const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items)
    //console.log(cartItems)
    const dispatch = useDispatch()

    return(
        <div className="py-3">
            <h1 className="text-2xl font-bold mb-3 text-black">Cart</h1>
            {cartItems.length == 0 ? ( <h1>Cart is empty add items to cart</h1>) : (
                <div className="w-6/12 mx-auto">
                    <ItemList items={cartItems} />
                    <hr />
                    <div className="flex items-end pt-3 mt-3">
                        <button className="bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer" onClick={()=> dispatch(clearCart())} type="button">Clear Cart</button>
                    </div>
                    </div>
            )}
        </div>
    )
}

export default Cart