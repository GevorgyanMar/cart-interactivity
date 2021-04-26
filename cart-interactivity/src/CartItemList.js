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
                onBtnMinClick={props.onBtnMinClick}
                onChange={props.onChange}
            />)}
        </>
    )
}
export default CartItemList;