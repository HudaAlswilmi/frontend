import React, { useState, useEffect } from "react";
import { useHistory} from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs"
import axios from "axios";
// import Parv from "./Parv";
import "./store.css";
/////////////////////
export default function Store({ token }) {
  const [store, setstore] = useState([]);
  const [name, setname] = useState("");
  const [price, setprice] = useState("");
  const [img, setimg] = useState("");
  const [searchArr, setSearchArr] = useState("");
  const history=useHistory()
 
  useEffect(async () => {
    const res = await axios.get("https://tuwiq-projecthuda.herokuapp.com/store", {
      headers: { authorization: "Bearer " + token },
    });
    setstore(res.data);
  }, []);
  const searchTarget = (e) => {
    setSearchArr(e.target.value);
  };
  const search = () => {
    const search1 = store.filter((elm) => {
      if (elm.name.toLowerCase().includes(searchArr.toLocaleLowerCase())) {
        return elm;
      }
          });
    setstore(search1)
  };
  const addToCart = async (id) => {
    const res = await axios.post(
      `https://tuwiq-projecthuda.herokuapp.com/cart/${id}`,{},
   
      { headers: { authorization: "Bearer " + token } }
    );
    console.log(res.data);
  history.push(`/cart/${id}`)

    }
const gotoparv=async(id)=>{
  
  history.push(`/product/${id}`)
}
  return (
    <div className="div1">
   <input type="text" onChange={(e)=>{searchTarget(e)}} />
      <button onClick={()=>{search()}}>search</button>
      {store.map((elem, i) => {
        return (
          <div   className="stordiv" key={i}>
            <p>{elem.name}</p>
            <p>{elem.price}</p>
            <img onClick={()=>{gotoparv(elem._id)}} src={elem.img} alr="no img" />
            <BsFillCartFill onClick={()=>{addToCart(elem._id)}}/>

          </div>
        );
      })}
   
    </div>
  );
    }
