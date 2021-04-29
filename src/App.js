/* eslint-disable no-unused-vars */
import logo from './logo.svg';
import './App.css';
import Card from './card';
import { useState } from 'react';

function App() {
  let products = [
    {
      id : 1,
      name : "Product 1",
      price : 399,
      description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
      rating : 3.5
    },
    {
      id : 2,
      name : "Product 2",
      price : 369,
      description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
      rating : 3
    },
    {
      id : 3,
      name : "Product 3",
      price : 599,
      description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
      rating : 4
    },
    {
      id : 4,
      name : "Product 4",
      price : 449,
      description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
      rating : 4.2
    },
    {
      id : 5,
      name : "Product 5",
      price : 799,
      description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
      rating : 4
    },
    {
      id : 6,
      name : "Product 6",
      price : 999,
      description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
      rating : 4.6
    }
  ]

  const [cart,setCart] = useState([])
  const [total,setTotal] = useState(0)

  let addToCart = (product) => {
    setCart([...cart, product])
    setTotal(total + product.price)
  }

  let removeCart = (item) => {
     setCart(cart.filter(obj => obj.id !== item.id))
     setTotal(total - item.price)
  }

  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <a class="navbar-brand" href="#!">Shop Cart</a>
        <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
        <div class="navbar-collapse collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
               <a class="nav-link" href="#!">
                  Home
               <span class="sr-only">(current)</span>
              </a>
            </li>
          <li class="nav-item"><a class="nav-link" href="#!">About</a></li>
          <li class="nav-item"><a class="nav-link" href="#!">Services</a></li>
          <li class="nav-item"><a class="nav-link" href="#!">Contact</a></li>
          </ul>
        </div>
    </div>
    </nav>
    <div className="container">
      <div className="row">
        <div className="col-lg-3">
        <h1 class="my-4">Shop Name</h1>
        <div class="list-group">
          {
            cart.map((item) => {
               return <div class="list-group-item">
                 {item.name} - ${item.price}
                 <span>
                   <button className="btn btn-sm btn-danger" onClick={() => {
                     removeCart(item)
                   }}>X</button>
                 </span>
                 </div>
            })
          }
         </div>
         <h3>Total - {total}</h3>
      </div>
    <div className="col-lg-9">
      <div class="row">
        {
          products.map((product) => {
            return <Card productData={product} handleCart={addToCart}></Card>
          })
        }
     </div>            
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
