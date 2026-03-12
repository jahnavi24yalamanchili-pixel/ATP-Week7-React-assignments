import React from "react";
function Product({name,price,brand,description,image}){
    return(
        <div className="font-semibold bg-gray-50 text-center">
            <img src={image} alt="" />
            
             <p>Name: {name}</p>
              <p>Price: {price}</p>
               <p>Brand: {brand}</p>
                <p>Description: {description}</p>
                
        </div>

    )
}
export default Product;