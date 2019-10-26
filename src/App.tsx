import React from 'react';
import './App.css';

interface ILocation {
    street: string,
    city: string,
    state: string,
    postcode: string
}

interface IName {
    first: string,
    last: string
}

interface IPicture {
    large?: string,
    medium?: string,
    thumbnail?: string
}

interface IContact {
    name: IName,
    phone: string,
    email: string,
    location: ILocation,
    picture: IPicture
}

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
            <div className="contact-card">
                <h1>{contact.name.first} {contact.name.last}</h1>
                <img src={contact.picture.large} alt={`${contact.name.first} ${contact.name.last}`}
                     title={`${contact.name.first} ${contact.name.last}`}/>
                <p>{contact.location.street}</p>
                <p>{contact.location.city} {contact.location.postcode}</p>
                <p>{contact.location.state}</p>
                <p>{contact.email}</p>
                <p>{contact.phone}</p>
            </div>
        </div>
    );
};

export default App;
