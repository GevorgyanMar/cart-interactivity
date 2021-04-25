import './CartFooterCss.css';

function CartFooter (props){
    return(
        <div className="footerItem">
            <div className="footerTotal">
                <h3>Subtotal:</h3>
                <span>{props.data}</span>

            </div>
            <div className="footerBtn">
                <button>Checkout</button>
            </div>
        </div>
    )
}
export default CartFooter;