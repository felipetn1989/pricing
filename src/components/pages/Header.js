import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={`${styles.background} grid gap-2.5 text-center text-[0.8125rem] pt-[5.5rem] py-36 rounded-bl-[4rem]`}>
      <h1 className='text-[#293356] text-xl font-extrabold'>Simple, traffic-based pricing</h1>
      <p className='text-[#858fad] px-24 leading-5'>Sign-up for our 30-day trial. No credit card required. </p>
    </header>
  );
}
