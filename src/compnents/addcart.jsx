export default function Addcart({item}){
    const [click,setclick]=useState(false)
    const {items,dispatch}=useContext(con);
  const quantity = items.find(x => x.name === item.name)?.quantity || 0;
    function handleclick(){
        setclick(true);
      dispatch({ type: "add", payload: item });
    }
 function handleincrease() {
  dispatch({ type: "add", payload: item });
}
useEffect(() => {
  if (items.length === 0) {
    setclick(false);
  }
}, [items]);
  function handledecrease() {
    if (quantity <= 1) {
      setclick(false);
      dispatch({ type: "delete", payload: item }); 
    } else {
      dispatch({ type: "delete", payload: item }); 
    }
  }


    if(click){
        return(
             <>
        <div className="cart click">
            <div className="items-count ">
                <div className="decreament" onClick={handledecrease}>
                    <button>-</button>
                </div>
                <span>{quantity}</span>
                <div className="increment" onClick={handleincrease}>
                    <button>+</button>
                </div>
            </div>
        </div>
        </>
        )
    }
    return(
        <>
        <div className="cart" onClick={handleclick}>
            <img src="../../public/assets/images/icon-add-to-cart.svg"/>
            <p>add to cart</p>
        </div>
        </>
    )
}
import { useState } from "react";
import { con } from "./context";
import { useContext } from "react";
import { useEffect } from "react";