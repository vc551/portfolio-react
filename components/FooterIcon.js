import Link from "next/link";
import styles from './FooterIcon.module.css'

export default function FooterIcon(props) { 
    return (
    <Link href={props.link}>
        <img
            src={`/icons/${props.filename}`}
            height={30}
            width={30}
            className={`col ${styles[`footer-icon-${props.style}`]}`}
        />
    </Link>
    )
}