import Head from 'next/head'
import Nav from '../components/Nav'
import Button from '../components/Button'
import Footer from '../components/Footer'

export default function Home() {
	return (
		<div className='full-height'>
			<Head>
				<title>Vikramjit Singh</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Nav 
				name="Welcome" 
				style="dark" 
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
						<div className='col border-end text-end px-4 d-flex align-items-center'>
							<h1 className="display-1 vera"><em>Hi,</em> I'm <strong className='fw-bold'>Vikramjit</strong></h1>
						</div>
						<div className='col px-4'>
							<h3 className='py-2'>Learner. Creator. Developer. </h3>
							<p className='lead py-1'>Computer Science, BS, Arizona State University, 2022</p>
							<p className='py-1 opacity-75'>Systems Engineer</p>
							<p className='py-1 opacity-75'>Network Engineer</p>
							<p className='py-1 opacity-75'>UI/UX Design</p>
							<p className='py-1 opacity-75'>Embedded Systems</p>
						</div>
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
			/>

		</div>
	)
}
