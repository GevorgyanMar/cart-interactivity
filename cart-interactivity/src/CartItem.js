import './CartItemCss.css';

function CartItem (props){

let price = props.dataProduct.price;
price = price.substring(1,price.length);
let quantity = props.dataProduct.quantity;
let sumProduct =quantity*price;
    return (
        <div className="productContent">
            <div className="productImg">
                <img  src = {props.dataProduct.image} />
            </div>

            <div className="productDescription">
                <h2>{props.dataProduct.name}</h2>
                <div className="productColor">
                    <h4>color</h4>
                    <div style={{backgroundColor:props.dataProduct.color}}></div>
                </div>
               <div className="counter">
                   <button


                   >-</button>
                   <input type="number"  onChange={(e)=>{
                       sumProduct=e.target.value*price;
                      let spanSubtotal = document.getElementById(props.dataProduct.id)
                       spanSubtotal.innerText=sumProduct;
                   }} name={props.dataProduct.id} placeholder={props.dataProduct.quantity} />
                   <button onClick={()=>{
                       props.onButtonAdd(props.dataProduct)
                   }}>+</button>
               </div>
            </div>
            <div className="productPrice">
                <div onClick={()=>{
                    props.onDelete(props.dataProduct)
                }}> </div>
                <span id={props.dataProduct.id}>{sumProduct}</span>
                <span> Skzbnakan gin {props.dataProduct.price}</span>
            </div>
        </div>
    )
}
//
// function handlePassButtonClick (aa) {
// console.log(aa)
// }
export default CartItem;