import styles from '../buttons/Range.module.css'

export default function Range({
  name,
  min,
  max,
  defaultValue,
  handleOnChange,
}) {
  return (
    <label htmlFor={name}>
      <input
        className={`w-[17.5rem] h-5 cursor-pointer ${styles}`}
        type="range"
        name={name}
        id={name}
        min={min}
        max={max}
        defaultValue={defaultValue}
        onChange={handleOnChange}
      />
    </label>
  );
}
