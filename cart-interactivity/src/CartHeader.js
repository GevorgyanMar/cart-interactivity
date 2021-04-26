import './CartHeaderCss.css';

function CartHeader () {
    return (
        <div  className="CartHeader">
            <h3 id="cartHeaderTitle">your cart</h3>
            <button>X</button>
        </div>
    );
}

export default CartHeader;