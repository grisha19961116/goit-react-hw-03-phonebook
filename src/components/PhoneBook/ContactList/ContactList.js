import style from './ContactList.module.css';
export default function ContactList({
  propContactsFilter,
  filterByInput,
  clickOn,
  reset,
}) {
  if (propContactsFilter === []) {
    return null;
  }
  return (
    <ul>
      {propContactsFilter.length > 0 &&
        propContactsFilter.map(({ id, nickName, number }) => {
          const li = (
            <li key={id}>
              <span className={style.li__span}>{nickName} : </span>
              <span className={style.li__span}>{number}</span>
              <span className={style.li__span__button}>
                <button
                  type="click"
                  id={id}
                  className={style.button__delete}
                  onClick={even => {
                    clickOn(even);
                    reset();
                  }}
                >
                  Delete!
                </button>
              </span>
            </li>
          );
          if (filterByInput === '') {
            return li;
          } else if (nickName.toLowerCase() === filterByInput.toLowerCase()) {
            return li;
          }
        })}
    </ul>
  );
}
