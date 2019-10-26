import React from 'react';
import './Contact.css';
import {IContact} from "./model";

interface IContactProps {
    contact: IContact
}

const Contact: React.FC<IContactProps> = ({contact}) => {
    return (
        <div className="contact-card">
            <h1>{contact.name.first} {contact.name.last}</h1>
            <img src={contact.picture.large} alt={`${contact.name.first} ${contact.name.last}`}
                 title={`${contact.name.first} ${contact.name.last}`}/>
            <p>{contact.location.street}</p>
            <p>{contact.location.city} {contact.location.postcode}</p>
            <p>{contact.location.state}</p>
            <p>{contact.email}</p>
            <p>{contact.phone}</p>

            {
                contact.tags.map((tag: string) => (
                    <span className="tag" key={tag}>{tag}</span>
                ))
            }
        </div>
    );
};

export default Contact;
