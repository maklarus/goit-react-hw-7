import { useDispatch } from 'react-redux';
import css from './Contact.module.css';
import { deleteContact } from '../../redux/contactsOps';

export default function Contact({ contact }) {
  const dispatch = useDispatch();

  const deleteHandler = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <>
      <div className={css.cardWrapper}>
        <div className={css.cardStyle}>
          <p>{contact.name}</p>
          <p>{contact.number}</p>
        </div>
        <button className={css.deleteBtn} onClick={deleteHandler}>
          DELETE
        </button>
      </div>
    </>
  );
}
