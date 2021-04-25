
import cartItemListCss from './CartItemListCss.css';
import CartItem from './CartItem';


function CartItemList(props){
    return(
        <>
            {props.data.map((elem)=>
                <CartItem
                key={elem.id}
                dataProduct={elem}
                onDelete={props.onDelete}
                onButtonAdd={props.onButtonAdd}
            />)}
        </>
    )
}
export default CartItemList;