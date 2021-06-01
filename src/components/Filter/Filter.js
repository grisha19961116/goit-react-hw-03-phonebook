import style from './Filter.module.css';
const Filter = ({ listenerOnChange, filter }) => {
  return (
    <input
      className={style.input__filter}
      type="text"
      name="filter"
      value={filter}
      onChange={({ target }) => listenerOnChange(target.value)}
      placeholder="Enter name for Search"
    />
  );
};
export default Filter;
