import React from 'react';
import './ContactList.css';
import {IContact} from "./model";
import Contact from "./Contact";

interface IContactListProps {
    contacts: IContact[]
}

const ContactList: React.FC<IContactListProps> = ({contacts}) => {
    return (
        <div>
            <h1>Contacts</h1>
            {
                contacts.map((contact: IContact) => (
                    <Contact contact={contact} key={contact.id}/>
                ))
            }
        </div>
    );
}

export default ContactList;
