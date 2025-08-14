import Addcart from "./addcart"
export default function Items({item}){
    return(
        <div className="card">
            <div className="img">
                <img src={item.image.desktop}/>
                <Addcart item={item}/>
            </div>
            <div className="body">
                <p>{item.category}</p>
                 <p>{item.name}</p>
            </div>
            <div className="price">
                <p>$ {item.price}</p>
            </div>
        </div>
    )
}