import Items from "./items";
import data from "../data.json"
import Orders from "./orders";
export default function Mainlayout(){
    return(
        <>
       <section className="cart-store">
  <div className="container">
    <h1>desserts</h1>
    <div className="flex">
           <div className="cards-grid">
      {data.map((e) => (
        <Items key={e.name} item={e} />
      ))}
    </div>
    <Orders/>
    </div>
  </div>
</section>

        </>
      
    )
}