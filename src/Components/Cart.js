import React, { useState ,useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Cart({token}) {
  const [cart, setCart] = useState([]);
  const {id} = useParams()

  useEffect(async () => {
    console.log(id,"id");
    const res = await axios.get(`https://tuwiq-projecthuda.herokuapp.com/cart/${id}`,{
        headers: { authorization: "Bearer " + token }
    });
  console.log(res.data);
  setCart(res.data)

          }, []);
   
  return (
    <div>
         {/* <div className="stordiv" >
            <p>{cart.name}</p>
            <p>{cart.price}</p>
            <img src={cart.img} alr="no img" />
          </div> */}
      {cart.map((elem, i) => {
        return (
          <div className="stordiv" key={i}>
            <p>{elem.name}</p>
            <p>{elem.price}</p>
            <img src={elem.img} alr="no img" />
          </div>
        );
      })}
    </div>
  );
}
