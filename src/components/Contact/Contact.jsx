import { useDispatch } from 'react-redux';
import css from './Contact.module.css';
import { deleteContact } from '../../redux/contactsSlice';

export default function Contact({ contact }) {
  const dispatch = useDispatch();

  const deleteHandler = id => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <div className={css.cardWrapper}>
        <div className={css.cardStyle}>
          <p>{contact.name}</p>
          <p>{contact.number}</p>
        </div>
        <button
          className={css.deleteBtn}
          onClick={() => deleteHandler(contact.id)}
        >
          DELETE
        </button>
      </div>
    </>
  );
}
