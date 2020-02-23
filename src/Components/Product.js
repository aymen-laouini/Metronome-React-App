import React from "react";

function Product (props) {
    return(
        <div>
            <h1>{props.product.name}</h1>
            <h3>{props.product.price} - {props.product.description}</h3>
        </div>
    )
}

export default Product;