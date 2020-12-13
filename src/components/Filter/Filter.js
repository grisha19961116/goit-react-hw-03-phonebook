import style from './Filter.module.css';
const Filter = ({ filter, onChange }) => {
  return (
    <input
      className={style.input__filter}
      type="text"
      name="filter"
      value={filter}
      onChange={({ target }) => onChange(target.value)}
      placeholder="Enter name for Search"
    />
  );
};
export default Filter;
