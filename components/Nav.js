import Button from './Button'
import styles from './Nav.module.css'

export default function Nav(props) {
    return (
        <nav className={`navbar navbar-${props.style} bg-${props.style} px-5 py-3 ${styles.navbar}`}>
            <div className="container-fluid">
                <a className="navbar-brand">
                    {props.name}
                </a>
                <div className="d-flex gap-4">
                    <Button
                        text="Resume"
                        link=""
                        class="info"
                        glow={true}
                    />
                    <Button
                        text="Contact"
                        link=""
                        class="success"
                        glow={true}
                    />
                </div>
            </div>
        </nav>
    )
}