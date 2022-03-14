import Head from "next/head";
import Footer from "../../components/global/Footer";
import Section from "../../components/global/main/Section";
import Nav from "../../components/global/Nav";
import TabNav from "../../components/global/TabNav";

import { projectsData } from "../../src/main/projects/cards";

const sections = projectsData.map((data, key) =>
    <Section
        backstyle={data.backstyle}
        textstyle={data.textstyle}
        heading={data.heading}
        paragraph={data.paragraph}
        show={data?.show}
        cards={data.cards}
        key={key}
    />
)

export default function Projects() {
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
                <TabNav projects={true} />
                <div className="container-fluid p-5">
                    <h2 className="display-2 vera">My <strong className="fw-bold">Projects</strong></h2>
                    <p className="lead">Some of the projects that I've worked on.</p>
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