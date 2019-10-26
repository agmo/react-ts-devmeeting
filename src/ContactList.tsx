import React, {useState} from 'react';
import './ContactList.css';
import {IContact} from "./model";
import Contact from "./Contact";

interface IContactListProps {
    header: string,
    contacts: IContact[]
}

const ContactList: React.FC<IContactListProps> = ({header, contacts}) => {
    let [name, filterContacts] = useState('');
    const filterByName = (event: React.ChangeEvent<HTMLInputElement>) => {
        filterContacts(event.target.value);
    };

    return (
        <div>
            <h2>{header}</h2>
            <p>Filter by last name (case insensitive):</p>
            <input type="text" value={name} onChange={filterByName}/>

            {
                contacts
                    .filter(contact => contact.name.last.toLowerCase().includes(name.toLowerCase()))
                    .map((contact: IContact) => (
                    <Contact contact={contact} key={contact.id}/>
                ))
            }
        </div>
    );
};

export default ContactList;
