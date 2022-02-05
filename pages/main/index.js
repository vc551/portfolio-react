import Head from "next/head";
import Footer from "../../components/global/Footer";
import AboutSection from "../../components/global/main/index/AboutSection";
import Nav from "../../components/global/Nav";
import TabNav from "../../components/global/TabNav";

import { sectionsData } from "../../src/main/index/cards";

const sections = sectionsData.map((data, key) =>
    <AboutSection
        backstyle={data.backstyle}
        textstyle={data.textstyle}
        heading={data.heading}
        paragraph={data.paragraph}
        cards={data.cards}
        key={key}
    />
)

export default function Home() {
    return (
        <div>
            <Head>
                <title>About - Vikramjit Singh</title>
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
                <TabNav about={true} />
                <div className="container-fluid p-5">
                    <h2 className="display-2 vera"><strong className="fw-bold">About</strong> Me</h2>
                    <p className="lead">I've always a computer enthusiast, which led to me becoming a software developer.</p>
                    <p>I've worked with various technologies in various CS domains. Here are some of the things that I'm more interested in, and some of my qualifications in those specific fields.</p>
                </div>
                {sections}
            </main>

            <Footer
                style="light"
                bgstyle="light"
                other="show-background-image"
            />
        </div>
    )
}