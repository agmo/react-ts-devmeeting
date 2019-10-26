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
        picture: {large: 'https://randomuser.me/api/portraits/men/75.jpg'}
    },
    {
        id: 1,
        name: {first: 'Deann', last: 'Martin'},
        phone: '(850)-364-8448',
        email: 'deann.martin@example.com',
        location: {street: '8155 Preston Rd', city: 'kilcoole', state: 'waterford', postcode: '93027'},
        picture: {large: 'https://randomuser.me/api/portraits/women/6.jpg'}
    }
];

const App: React.FC = () => {
    return (
        <div className="App">
            <ContactList contacts={contacts}/>
        </div>
    );
};

export default App;
