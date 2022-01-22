import Head from "next/head";
import InfoCard from "../../components/global/main/InfoCard";
import Nav from "../../components/global/Nav";
import TabNav from "../../components/global/TabNav";

import { Education } from "../../src/qualificationsdata";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Main - Vikramjit Singh</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="theme-color" content="#f8f9fa" />
            </Head>
            <Nav
                name={<i className='bi-house'></i>}
                style="light"
                bgstyle="none"
				sizestyle="p-3"
                link="/"
            />
            <main className='align-items-center justify-content-center bg-light'>
                <TabNav />
                <div className="">
                    <h1 className="display-1 vera">I'm Vikramjit <strong className="fw-bold">Singh</strong></h1>
                    <p className="lead">I'm a computer enthusiast, which helped me become a software developer.</p>
                    <p>I've always had a knack for good UI design. Now I've also had the basic, but essential professional training to make my UI/UX design even better.</p>
                </div>
            </main>
        </div>
    )
}