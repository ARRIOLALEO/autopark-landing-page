import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Hero from '../Components/hero/Hero'
import Cars from '../Components/Cars/Cars'
import {useAppContext} from '../Components/context'
import Menu  from "../Components/menu"


export default function Home() {
  const {showMenu , showMenuOn } = useAppContext()
  return (
    <>
      <Head>
      <title>Car rent in Kyrgyzstan</title>
      <meta name="keywords" content="Car rent  in Kyrgyzstan, rent a car, car rent."/>
      <meta name="description" content="Car rent in Kyrgyzstan is very convenient for the tourists and those who came to our beautiful country for a business, rent a car, car rent."/>
      <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu showTheMenu = {showMenu}/>
<nav className="nav">
  <div className="nav-center">
    <div className="nav-header">
      <img src="/images/autopark.png" alt="" className="nav-logo"/>
      <button className="btn toggle-btn" onClick={()=> showMenuOn()} aria-label="open the menu">
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path></svg>
     </button>
    </div>
    
  </div>
</nav>

 <Hero/>
 <Cars/>
<section className="information-bottom">
<h3>Car rent without a driver</h3>

<p>Car rent without a driver is very convenient for the tourists and those who came to our beautiful country for a business. If you use our services you will understand that car rent without a driver is a very convenient of moving around. In our company you can select the best car that will fit your desires. Car rent without a driver will help you to enjoy the freedom of movement. Our company guarantees high quality services of this kind.</p>
<p>Our company offers car rental services in Bishkek for many years and guarantees you the best conditions and an excellent stay in our country. We have a large selection of cars for rent in Kyrgyzstan. All our cars are in good condition, which guarantees your safety on the roads of Kyrgyzstan. Our car rental experts are ready to give you advice and answer any questions you may have about rent of cars in Kyrgyzstan. To use our services of car rent in Bishkek, you need to be over 25 years old, have a passport and driver's license. That's all! Within 5 minutes in our office or wherever you want to you we fulfill documents of car rent in Kyrgyzstan, then you will be given the keys - and your chosen car with a full tank of gasoline will be at your disposal! On our cars for rent you can go to wonderful places such as Issyk Kul, Son-Kul, Osh, Jalal-Abad, etc. Besides car rental services in Bishkek, you can also book with us and other tourist services such as hotels, tours, to make your stay in our country the most enjoyable and interesting. Our clients and partners are always happy with our quality service and excellent cars for rent in Kyrgyzstan.</p>
</section>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/images/autopark.png" alt=""  className={styles.logo} />
        </a>
      </footer>
    </>
  )
}
