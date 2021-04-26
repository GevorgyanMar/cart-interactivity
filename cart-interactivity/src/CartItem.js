import './CartItemCss.css';

function CartItem(props) {
   if (props.dataProduct.image===""){
       props.dataProduct.image="https://kubalubra.is/wp-content/uploads/2017/11/default-thumbnail.jpg";
   }
    let price = props.dataProduct.price;
    price = price.substring(1, price.length);
    let quantity = props.dataProduct.quantity;
    let sumProduct =Math.round(quantity * price * 100) / 100;
    return (
        <div className="productContent">
            <div className="productImg">
                <img src={props.dataProduct.image} />
            </div>

            <div className="productDescription">
                <h2>{props.dataProduct.name}</h2>
                <div className="productColor">
                    <h4>color</h4>
                    <div style={{ backgroundColor: props.dataProduct.color }}></div>
                </div>
                <div className="counter">
                    <button onClick={() => {props.onBtnMinClick(props.dataProduct)}}>-</button>
                    <input id={props.dataProduct.id} type="number"
                           placeholder={props.dataProduct.quantity}
                           onChange={() => {
                               let spanSubtotal = document.getElementById("idSpan"+props.dataProduct.id)
                               console.log(props.dataProduct.quantity)
                               spanSubtotal.innerText = sumProduct;

                        let name = document.getElementById(props.dataProduct.id).value;
                        props.dataProduct.quantity = name;
                        props.onChange(props.dataProduct)

                    }} />
                    <button onClick={() => {
                        props.onButtonAdd(props.dataProduct)
                    }}>+</button>
                </div>
            </div>
            <div className="productPrice">
                <div onClick={() => {
                    props.onDelete(props.dataProduct)
                }}> </div>
                <span id={"idSpan"+props.dataProduct.id}>{"$"+ sumProduct}</span>
                <span>{props.dataProduct.price}</span>
            </div>
        </div>
    )
}

export default CartItem;