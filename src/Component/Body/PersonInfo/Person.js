import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Person.css'

const Person = (props) => {
    const element = <FontAwesomeIcon icon={faShoppingCart} />

    const { name, company, Image, age, expericence, salary } = props.person;

    console.log(name);
    return (
        <div className="person-card">
            <div className="card">
                <img src={Image} alt="" />
                <div className="person-details">
                    <h4>Name: <b>{name}</b></h4>
                    <p><b>Age: </b>{age}</p>
                    <p><b>Experience: </b>{expericence}</p>
                    <p><b>Company: </b>{company}</p>
                    <p><b>Salary: </b>{salary}</p>
                    <button 
                    
                    onClick={()=>props.handleAddedCart(props.person)}
                    className="buy-button"
                    >{element} Hired Now</button>
                </div>
            </div>
        </div>
    );
};

export default Person;