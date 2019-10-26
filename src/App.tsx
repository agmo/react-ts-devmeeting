import React from 'react';
import './App.css';
import {IContact} from "./model";
import ContactList from "./ContactList";

const contacts: IContact[] = [
    {
        id: 0,
        name: {first: 'Brad', last: 'Gibson'},
        phone: '011-962-7516',
        email: 'brad.gibson@example.com',
        location: {street: '9278 new road', city: 'kilcoole', state: 'waterford', postcode: '93027'},
        picture: {large: 'https://randomuser.me/api/portraits/men/75.jpg'},
        tags: ['IT', 'Cloud', 'expert', 'Docker'],
        favourite: false
    },
    {
        id: 1,
        name: {first: 'Deann', last: 'Martin'},
        phone: '(850)-364-8448',
        email: 'deann.martin@example.com',
        location: {street: '8155 Preston Rd', city: 'kilcoole', state: 'waterford', postcode: '93027'},
        picture: {large: 'https://randomuser.me/api/portraits/women/6.jpg'},
        tags: ['HR', 'expert', 'recruitment'],
        favourite: false
    },
    {
        id: 2,
        name: {first: 'Tamara', last: 'Thompson'},
        phone: '(850)-364-8448',
        email: 'tamara.thompson@example.com',
        location: {street: '8155 Preston Rd', city: 'kilcoole', state: 'waterford', postcode: '93027'},
        picture: {large: 'https://randomuser.me/api/portraits/women/16.jpg'},
        tags: ['IT', 'front-end', 'React'],
        favourite: true
    },
    {
        id: 3,
        name: {first: 'Courtney', last: 'Martin'},
        phone: '(850)-364-8448',
        email: 'courtney.martin@example.com',
        location: {street: '8155 Preston Rd', city: 'kilcoole', state: 'waterford', postcode: '93027'},
        picture: {large: 'https://randomuser.me/api/portraits/women/20.jpg'},
        tags: ['IT', 'front-end', 'Angular'],
        favourite: true
    }
];

const favouriteContacts = contacts.filter((contact: IContact) => contact.favourite);

const App: React.FC = () => {
    return (
        <div className="App">
            <h1>Contacts</h1>
            <ContactList contacts={contacts} header='All'/>
            <ContactList contacts={favouriteContacts} header='Favourites'/>
        </div>
    );
};

export default App;
