import styles from "../buttons/Toggle.module.css";

export default function Toggle({ togglePrice }) {
  return (
    <>
      <label className={`${styles.switch}`}>
        <input onChange={togglePrice} type="checkbox" />
        <span className={`${styles.slider} ${styles.round}`}></span>
      </label>
    </>
  );
}
