import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { filteredContacts } from '../../redux/contactsSlice';

export default function ContactList() {
  const contacts = useSelector(filteredContacts);

  return (
    <>
      <ul className={css.cardList}>
        {contacts.map(contact => (
          <li key={contact.id} className={css.cardListItem}>
            <Contact contact={contact}></Contact>
          </li>
        ))}
      </ul>
    </>
  );
}
