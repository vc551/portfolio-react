//Next Imports
import Head from 'next/head'

//Global Components
import Nav from '../components/global/Nav'
import Button from '../components/global/Button'
import Footer from '../components/global/Footer'

//Page Specific Components
import WrittenContent from '../components/index/WrittenContent'

export default function Home() {
	return (
		<div className='full-height'>
			<Head>
				<title>Vikramjit Singh</title>
				<link rel="icon" href="/favicon.ico" />
				<meta name="theme-color" content="#212529" />
			</Head>
			<Nav
				name=""
				style="dark"
				bgstyle="none"
				sizestyle="p-5"
			/>

			<style global jsx>{`
				#__next {
					height: 100%;
					background-im
				}

				body {
					background-image: url("/images/landing-bg.jpeg");
					background-size: cover;
					background-attachment: fixed;
					background-position: center center;
				}
			`}</style>

			<main className='text-white d-flex align-items-center justify-content-center show-background-image'>
				<div className='container d-grid'>
					<div className='row py-4'>
						<WrittenContent />
					</div>
					<div className='row py-2 px-4'>
						<Button
							text="Enter"
							link="/main"
							class="primary"
							glow={true}
							other="btn-lg p-1 fs-3"
						/>
					</div>
				</div>
			</main>

			<Footer
				style="dark"
				bgstyle="none"
				other="show-background-image"
			/>

		</div>
	)
}
