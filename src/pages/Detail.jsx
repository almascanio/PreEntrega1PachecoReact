import {useEffect} from "react";
import { productsMueble } from "../lib/products.requests";
import {ItemCount} from "../components/ItemCount/ItemCount"

export const Detail = () => {
    const [ wood, setWood ] = useState({});

    useEffect(() => {
        productsMueble().then((res) => {
            setWood(res);
        })
}, []);

return (
    <div>
        <div>
            <div>
                <img src={wood.img}/>
            </div>
            <div>
                <span>{wood.title}</span>
                <p>{wood.descrip}</p>
                <span>${wood.price}</span>
                <span> "Quedan pocas unidades" {wood.stock}</span>
                <ItemCount stock={wood.stock} onAdd={() => alert("Ya lograste comprar")}/>
            </div>
        </div>
    </div>
)
};