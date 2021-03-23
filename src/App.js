
import './App.css';
import Product from './card';
import { useState } from "react";

function App() {
  let products=[
    {
      name:"Item One",
      price:100,
      description:"Low Price"
    },
    {
      name:"Item Two",
      price:200,
      description:" Affordable Price"
    },
    {
      name:"Item Three",
      price:300,
      description:"High Price"
    },
    {
      name:"Item Four",
      price:700,
      description:" Affordable Price"
    },
    {
      name:"Item Five",
      price:900,
      description:" Affordable Price"
    },
    {
      name:"Item Six",
      price:300,
      description:" Affordable Price"
    },
    {
      name:"Item Seven",
      price:100,
      description:" Affordable Price"
    },
    {
      name:"Item Eight",
      price:600,
      description:" Affordable Price"
    },
    {
      name:"Item Nine",
      price:500,
      description:" Affordable Price"
    }
  ];

  const[cartItem,setCart]=useState([]);
  const[total,setTotal]=useState(0);

  let handlecart= (product)=>{
    setCart([...cartItem,product]);
    setTotal((total+product.price));
  }
  let removeCart=(index)=>{
    setTotal((total-cartItem[index].price))
    cartItem.splice(index,1);
    setCart([...cartItem]);    
  }
  
  

  return (
    <div className="container">
      <div className="row">
        <div className="col-3">
          <div className="cart">
            <h1>Cart Items</h1>
            <div className="cartItemsList">                
                {cartItem.map((product,index)=>{
                  return <div className="list" ><div>{product.name}<br/>Rs {product.price}</div>
                          <div><button className="remove" onClick={()=>removeCart(index)}>Remove</button></div>
                        </div>
                })}              
        
              <span>Cart Total: Rs {total}</span> 
            </div>
          </div>
        </div>
          <div className="col-9">
          
            <div className="row">
              {
                products.map((item,index)=>{
                  return <Product key={index} details={item} handlecart={handlecart} id="card"> </Product>
                })
              }
            </div>
          </div>
      
    </div>
  </div>
  )
}
export default App;
