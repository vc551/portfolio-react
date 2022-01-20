import Head from "next/head";
import Nav from "../components/global/Nav";
import TabNav from "../components/global/TabNav";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Main - Vikramjit Singh</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="theme-color" content="#f8f9fa" />
            </Head>
            <Nav
                name="Home"
                style="light"
                bgstyle="none"
				sizestyle="p-3"
            />
            <main className='align-items-center justify-content-center bg-light'>
                <TabNav />
            </main>
        </div>
    )
}