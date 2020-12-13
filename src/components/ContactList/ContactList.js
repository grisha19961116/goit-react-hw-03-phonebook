import style from './ContactList.module.css';

const ContactList = ({ contacts, onRemove }) => {
  if (contacts.length === 0) return null;
  return (
    <ul>
      {contacts.map(({ id, name, phone }) => {
        return (
          <li key={id}>
            {name} : {phone}{' '}
            <button
              onClick={() => onRemove(id)}
              className={style.button__delete}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
export default ContactList;
