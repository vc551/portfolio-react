import Head from "next/head";
import Footer from "../../components/global/Footer";
import Nav from "../../components/global/Nav";
import TabNav from "../../components/global/TabNav";

export default function Qualifications() {
    return (
        <div>
            <Head>
                <title>Projects - Vikramjit Singh</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="theme-color" content="#f8f9fa" />
            </Head>
            <Nav
                name={<i className='bi-house' />}
                style="light"
                bgstyle="none"
                sizestyle="p-3"
                link="/"
            />
            <main className='align-items-center justify-content-center bg-light'>
                <TabNav qualifications={true} />
                <div className="container-fluid p-5">
                    <h2 className="display-2 vera">My <strong className="fw-bold">Qualifications</strong></h2>
                    <p className="lead">Some of my professional and academic qualifications</p>
                </div>
            </main>

            <Footer
                style="light"
                bgstyle="light"
                other="show-background-image"
            />
        </div>
    )
}