import React, {useState} from 'react';
import './ContactList.css';
import {IContact} from "./model";
import Contact from "./Contact";

interface IContactListProps {
    header: string,
    contacts: IContact[]
}

const ContactList: React.FC<IContactListProps> = ({header, contacts}) => {
    let [filter, setContactsFilter] = useState('');
    const applyFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
        setContactsFilter(event.target.value.toLowerCase());
    };

    const contactMatchesFilter = (contact: IContact) => {
        return contact.name.first.toLowerCase().includes(filter) ||
            contact.name.last.toLowerCase().includes(filter) ||
            contact.location.street.toLowerCase().includes(filter) ||
            contact.location.city.toLowerCase().includes(filter) ||
            contact.location.state.toLowerCase().includes(filter) ||
            contact.location.postcode.toLowerCase().includes(filter) ||
            contact.email.toLowerCase().includes(filter) ||
            contact.tags.some(tag => tag.toLowerCase().includes(filter)) ||
            contact.phone.toLowerCase().includes(filter);
    };

    return (
        <div>
            <h2>{header}</h2>
            <p>Filter contacts:</p>
            <input type="text" value={filter} onChange={applyFilter}/>

            {
                contacts
                    .filter(contactMatchesFilter)
                    .map((contact: IContact) => (
                    <Contact contact={contact} key={contact.id}/>
                ))
            }
        </div>
    );
};

export default ContactList;
