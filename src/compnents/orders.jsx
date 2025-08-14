import { useContext } from "react";
import { con } from "./context";
import { useState } from "react";
 import POpup from "./popup";
export default function Orders() {
  const { items, dispatch } = useContext(con);
  const [pop,setpop]=useState(false)
  function handleClick(name) {
    dispatch({ type: "deleteitem", payload: name  });
  }
  function handlesubmit(){
    return (
        setpop(true)
    )
  }

  const totalPrice = items.reduce((sum, item) => sum + item.quantity * item.price, 0);

  return (
    <div className="orders">
      <div className="count">
        <p>Your cart ({items.length})</p>
      </div>

      <div className="body">
        {items.length === 0 ? (
          <p>Cart is empty</p>
        ) : (
          <>
            {items.map((item) => (
              <div key={item.name} className="order-item">
                <p>{item.name}</p>
                <div className="price-info">
                  <p>{item.quantity}X</p>
                  <p>${item.price}</p>
                  <p>${item.quantity * item.price}</p>
                  <div className="delete" onClick={() => handleClick(item.name)}>x</div>
                </div>
              </div>
            ))}

            {/* Total Price */}
            <div className="total">
              <strong>Total: </strong>
              <p>${totalPrice}</p>
            </div>
            <div className="submit">
                <button onClick={handlesubmit}>confirm</button>
            </div>
          </>
        )}
      </div>
      {pop && <POpup onClose={()=>setpop(false)}/>

      }
    </div>
  );
}
