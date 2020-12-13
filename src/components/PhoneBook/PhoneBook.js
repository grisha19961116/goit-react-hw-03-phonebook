import style from './PhoneBook.module.css';
import ContactForm from './ContactForm/ContactForm.js';
export default function PhoneBook() {
  return (
    <div className={style.wrapper}>
      <ContactForm />
    </div>
  );
}
