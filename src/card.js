export default function Card(props){
    return <>
    <div class="col-lg-4 col-md-6 mb-4">
     <div class="card h-100">
      <a href="#!"><img class="card-img-top" src="https://via.placeholder.com/700x400" alt="..."/></a>
         <div class="card-body">
         <h4 class="card-title"><a href="#!">{props.productData.name}</a></h4>
         <h5>${props.productData.price}</h5>
       <p class="card-text">{props.productData.description}</p>
           </div>
     <div class="card-footer"><small class="text-muted">★ ★ ★ ★ ☆</small>
     <span>
         <button className="btn btn-xs btn-primary" onClick={() => {
             props.handleCart(props.productData)
         }}>Add Cart</button>
     </span>
     </div>
     </div>
     </div>

    </>
}