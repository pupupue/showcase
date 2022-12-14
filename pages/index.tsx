import Head from 'next/head'
import FirstSection from '../Components/FirstSection/FirstSection'
import Footer from '../Components/Footer/Footer'
import FourthSection from '../Components/FourthSection/FourthSection'
import Header from '../Components/Header/Header'
import SecondSection from '../Components/SecondSection/SecondSection'
import SubscribeSection from '../Components/SubscribeSection/SubscribeSection'
import ThirdSection from '../Components/ThirdSection/ThirdSection'
import ContentWrapper from '../Components/Wrapper/ContentWrapper'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div style={{ backgroundImage: "url(/images/bg-4.png)" }} className='flex bg-light flex-1'>

      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />

      </Head>
      <ContentWrapper>
        <Header />
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <SubscribeSection />
        <Footer />
      </ContentWrapper>
    </div>
  )
}
