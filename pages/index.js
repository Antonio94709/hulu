import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Results from '../components/Results'
import requests from '../utils/request'

export default function Home({ result }) {
  console.log(result)
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
      <Results result={result}/>
    </div>
  )
}

export async function getServerSideProps(context){
  const genre = context.query.genre;

  const request = await fetch(`https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url}`
  ).then((res)=> res.json())
  
  return {
    props: {
      result : request.results,
    }
  }
}
// 1:30

