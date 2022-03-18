import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Results from '../components/Results'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Hulu 2</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* header */}
      <Header/>

      {/* nav */}
      <Nav/>

      {/* results */}
      <Results/>
    </div>
  )
}
