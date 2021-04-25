import React, {useState, useEffect} from "react";
import CartItemList from "./CartItemList";
import  "./CartCss.css"
import CartHeader from './CartHeader';
import CartFooter from './CartFooter';


 function Cart() {
    const [data, setData] = useState();
    const json = async () => {

        const dat = await fetch("DataProduct.json");
        const getJson = await dat.json()

        setData(getJson)
    }

    useEffect(() => {
        json();
    }, [])

    return (
        <div className="aa">
            <CartHeader/>
            {data && <CartItemList data={data}
             onDelete={
                 (dataProduct)=>{
                 setData(data.filter((t)=> t.id !== dataProduct.id ))
                 } }

             onButtonAdd={

                 (dataProduct)=>{


                     setData(()=>
                     {

                         console.log("10000")
                         for(let i=0; i< data.length-1;i++)
                           {
                               console.log("10001")
                         if(dataProduct.id===data[i].id)
                         {

                             data[i].quantity = data[i].quantity++;
                             console.log("----")
                             console.log(data[i].quantity)
                             console.log(data[i].id)
                             console.log("----")
                         }}
                     })
                 }
             }
            /> }
            <CartFooter/>
        </div>
    )
}

export default Cart;

