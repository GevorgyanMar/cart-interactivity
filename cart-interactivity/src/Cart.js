import React, {useState, useEffect} from "react";
import CartItemList from "./CartItemList";
import "./CartCss.css"
import CartHeader from './CartHeader';
import CartFooter from './CartFooter';


// let subtotal=0;
function Cart() {
    const [data, setData] = useState();
    const json = async () => {
        const dat = await fetch("DataProduct.json");
        const getJson = await dat.json()
        setData(getJson)
    }

    useEffect(() => {
       setTimeout(()=>{
                   json();
        },2000)
    }, [])

    return (
        <div className="allProductInfo">
            <CartHeader/>
            {data && <CartItemList data={data} id={data.id}
                                   onDelete={
                                       (dataProduct) => {
                                           setData(data.filter((t) => t.id !== dataProduct.id))
                                       }}
                                   onButtonAdd={
                                       (dataProduct) => {
                                           setData(
                                               data.map(x => {
                                                   if (x.id === dataProduct.id) {
                                                       ++x.quantity
                                                   }
                                                   return x;
                                               })
                                           )
                                       }
                                   }
                                   onBtnMinClick={
                                       (dataProduct) => {
                                           setData(
                                               data.map(x => {
                                                   if (x.id === dataProduct.id) {
                                                       --x.quantity;
                                                   }
                                                   return x;
                                               })


                                       )

                                       }
                                   }
                                   onChange = {
                                       (dataProduct) => {
                                           setData(
                                               data.map(x => {
                                                   if (x.id === dataProduct.id) {
                                                       x.quantity=dataProduct.quantity;
                                                   }
                                                   return x;
                                               })
                                           )

                                       }
                                   }

            />}

                {data && <CartFooter data={data}/>}
        </div>
    )
}


export default Cart;

