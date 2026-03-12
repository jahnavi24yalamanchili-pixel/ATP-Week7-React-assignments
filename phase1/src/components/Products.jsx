import React from "react";
import products from "../data";
import Product from "./Product";
function Products(){
    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
            {
                products.map(i=>(<Product
                     key={i.productId} 
                     productId={i.productId}
                     name={i.name} 
                     price={i.price} 
                     brand={i.brand}
                     description={i.description}
                     image={i.image}/>))
            }
        </div>
    )
}
export default Products;