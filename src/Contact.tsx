import React, {useState} from 'react';
import './Contact.css';
import {IContact} from "./model";

interface IContactProps {
    contact: IContact
}

const Contact: React.FC<IContactProps> = ({contact}) => {
    // let shouldBeExpanded = false;
    let [isVisible, setVisibility] = useState(false);
    let [isExpanded, setExpanded] = useState(false);

    const toggleDisplay = () => {
        if (!isExpanded) {
            setVisibility(!isVisible);
        }
    };

    const keepDetailsExpanded = () => {
        setExpanded(isExpanded = true);
        setVisibility(isVisible = true);
    };

    return (
        <div className="contact-card">
            <h1>{contact.name.first} {contact.name.last} </h1>
            <br/>
            <button onClick={keepDetailsExpanded}>Always show contact details</button>

            <img src={contact.picture.large} alt={`${contact.name.first} ${contact.name.last}`}
                 title={`${contact.name.first} ${contact.name.last}`} onMouseOver={toggleDisplay}
                 onMouseOut={toggleDisplay}/>
            {
                isVisible && (<div>
                    <p>{contact.location.street}</p>
                    <p>{contact.location.city} {contact.location.postcode}</p>
                    <p>{contact.location.state}</p>
                    <p>{contact.email}</p>
                    <p>{contact.phone}</p>
                </div>)
            }

            <div>
                {
                    contact.tags.map((tag: string) => (
                        <span className="tag" key={tag}>{tag}</span>
                    ))
                }
            </div>
        </div>
    );
};

export default Contact;
