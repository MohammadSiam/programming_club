import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart}=props;
    
    const totalReduce=(previous,person)=>previous+person.salary;
    const total=cart.reduce(totalReduce,0);
    //let total = 0;
    // for(const person of cart ){
    //     total=total+person.salary;
    // }
    //console.log(props.cart);

    let name =" ";
    for(const person of cart){
        name=name+person.name;
    }
    return (
        <div className="ordered-item">
            <h2>Order Summary</h2>
            <p>Item Order:{props.cart.length}</p>
            <p>Item Name:{props.cart.name}</p>
            <p>Total:{total}</p>
        </div>
    );
};

export default Cart;