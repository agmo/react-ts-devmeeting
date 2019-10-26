import React from 'react';
import './ContactList.css';
import {IContact} from "./model";
import Contact from "./Contact";

interface IContactListProps {
    header: string,
    contacts: IContact[]
}

const ContactList: React.FC<IContactListProps> = ({header, contacts}) => {
    return (
        <div>
            <h2>{header}</h2>
            {
                contacts.map((contact: IContact) => (
                    <Contact contact={contact} key={contact.id}/>
                ))
            }
        </div>
    );
}

export default ContactList;
