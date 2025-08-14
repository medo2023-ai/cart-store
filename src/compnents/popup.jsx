import { useContext } from "react";
import { con } from "./context";
export default function POpup({ onClose }) {
  const { items,dispatch } = useContext(con);
  const totalPrice = items.reduce((sum, item) => sum + item.quantity * item.price, 0);
   function handleConfirm() {
    dispatch({ type: "clearcart" });
    onClose();
  }
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-btn" onClick={onClose} style={{color:"black"}}>×</button>
        <h2>Your Order</h2>

        {items.map((item) => (
          <div key={item.name} className="order-item">
            <p>{item.name}</p>
            <div className="price-info">
              <p>{item.quantity}X</p>
              <p>${item.price}</p>
              <p>${item.quantity * item.price}</p>
            </div>
          </div>
        ))}

        <div className="total">
          <strong>Total: </strong>
          <p>${totalPrice}</p>
        </div>

        <div className="submit">
          <button onClick={handleConfirm}>Confirm</button>
        </div>
      </div>
    </div>
  );
}
