import React from 'react';
import './App.css';
import Contact from "./Contact";
import {IContact} from "./model";

const contact: IContact = {
    name: {first: 'Brad', last: 'Gibson'},
    phone: '011-962-7516',
    email: 'brad.gibson@example.com',
    location: {street: '9278 new road', city: 'kilcoole', state: 'waterford', postcode: '93027'},
    picture: {large: 'https://randomuser.me/api/portraits/men/75.jpg'}
};

const App: React.FC = () => {
    return (
        <div className="App">
            <Contact contact={contact}/>
        </div>
    );
};

export default App;
