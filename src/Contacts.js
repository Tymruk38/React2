import './Contacts.css';
import Contact from "./components/Contact";
import { useState } from 'react';

const initContacts = [{
  firstName: "Барней",
  lastName: "Стинсовський",
  phone: "+380956319521",
  gender: "male"
}, {
  firstName: "Робін",
  lastName: "Щербатська",
  phone: "+380931460123",
  gender: "female"
}, {
  firstName: "Анонімний",
  lastName: "Анонімус",
  phone: "+380666666666"
}, {
  firstName: "Лілія",
  lastName: "Олдровна",
  phone: "+380504691254",
  gender: "female"
}, {
  firstName: "Маршен",
  lastName: "Еріксонян",
  phone: "+380739432123",
  gender: "male"
}, {
  firstName: "Теодор",
  lastName: "Мотсбес",
  phone: "+380956319521",
  gender: "male"
}];

function Contacts() {
  const [contacts, setContacts] = useState(initContacts);


  const onChangeHandler = (event) => {
    const filteredContacts = initContacts.filter((contact) => {
      return contact.firstName.indexOf(event.target.value) !== -1 || contact.lastName.indexOf(event.target.value) !== -1;

    });
    setContacts(filteredContacts)
    console.log(event.target.value)
  }

  return (
    <div className="App">
      <input type="text" onChange={onChangeHandler} />
      <div className="Contacts">
        {contacts.map((contact, index) => {
          return <Contact contact={contact} key={index} />;
        })}
      </div>
    </div>
  );
}

export default Contacts;