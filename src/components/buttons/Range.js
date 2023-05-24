export default function Range({
  name,
  min,
  max,
  defaultValue,
  handleOnChange,
}) {
  return (
    <input
      type="range"
      name={name}
      id={name}
      min={min}
      max={max}
      defaultValue={defaultValue}
      onChange={handleOnChange}
    />
  );
}
