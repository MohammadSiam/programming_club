import React, { useEffect, useState } from 'react';
import Cart from './Cart/Cart';
import Person from './PersonInfo/Person';
import './Body.css'

const Body = () => {
    const [persons,setPersons] = useState([]);
    const [cart,setCart]=useState([]); 

    
    useEffect(() => {
        fetch('./community.JSON')
            .then(res => res.json())
            .then(data => setPersons(data));
    }, [])

    const handleAddedCart=(person)=>{
        const newCart=[...cart,person];//array copy
        setCart(newCart);
    }

    return (
        <div className="body-container">
            <div className="person-container">
                {
                    persons.map( person =><Person
                     person={person}
                     key={person.key}
                     handleAddedCart={handleAddedCart}

                    ></Person>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}/>
            </div>
        </div>
    );
};

export default Body;