import './CartFooterCss.css';

function CartFooter (props){
   let sum = sumProducts(props.data)
    return(
        <div className="footerItem">
            <div className="footerTotal">
                <h3>Subtotal:</h3>
                <span>{"$"+ sum}</span>

            </div>
            <div className="footerBtn">
                <button>Checkout</button>
            </div>
        </div>
    )
}
function sumProducts(data){
    let  subtotal=0
    for (let i = 0; i <data.length; i++) {
      let  price = data[i].price.substring(1, data[i].price.length);
        let quantity = data[i].quantity;
        subtotal += quantity * price;
    }
    if(subtotal===0){
      let title =  document.getElementById("cartHeaderTitle")
        title.innerText = "The cart is empty";
    }
    return subtotal;
}
export default CartFooter;