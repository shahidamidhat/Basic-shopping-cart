
import React from "react";


function Product(props){
    return (
        <div className="col-4">
            <div className="card mb-5 mb-lg-0">
                <div className="image"></div>
                <div className="card-body">
                    <h3 className="itemname">
                        {props.details.name}
                    </h3>
                    <h5 className="price">
                        Price: Rs {props.details.price}
                    </h5>
                    <p className="description">
                        {props.details.description}
                    </p>
                    <div className="footer">
                        <button className="add" id="addbtn" onClick={()=>props.handlecart(props.details)}>Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Product;

