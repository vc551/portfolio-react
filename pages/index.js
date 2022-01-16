import Head from 'next/head'
import Nav from '../components/Nav'

export default function Home() {
	return (
		<div className='bg-dark text-white'>
			<Head>
				<title>Vikramjit Singh</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Nav name="Welcome"/>

			<main className='bg-dark'>
				Hello
			</main>
			
		</div>
	)
}
