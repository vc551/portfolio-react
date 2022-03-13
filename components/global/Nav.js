import Link from 'next/link'
import Button from './Button'
import styles from './Nav.module.css'

export default function Nav(props) {
    var brand = <any className="navbar-brand"></any>
    if (props?.name) {
        brand = <a className="navbar-brand">{props.name}</a>
    }
    if (props?.link) {
        brand = <Link href={props.link}>{brand}</Link>
    }
    return (
        <nav className={`navbar fixed-top navbar-${props.style} bg-${(props?.bgstyle) ? (props.bgstyle) : (props.style)} ${(props?.sizestyle) ? (props.sizestyle) : `px-5 py-3`} ${styles.navbar} ${props?.other}`}>
            <div className="container-fluid">
                {brand}
                <div className="d-flex gap-4">
                    <Button
                        text="Resume"
                        link="/assets/resume.pdf"
                        class="primary"
                        glow={true}
                    />
                    <Button
                        text="Contact"
                        link="mailto:contact@vc551.com?subject=Contacted%20by%20vc551.com"
                        class="success"
                        glow={true}
                    />
                </div>
            </div>
        </nav>
    )
}