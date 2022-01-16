import Link from 'next/link';
import styles from './glow.module.css'

export default function Button(props) {
    return (
        <Link href={props.link}>
            <button
                type="button"
                className={`btn btn-${props.class} ${styles[`glow-${props.class}`]}`}
            >
                {props.text}
            </button>
        </Link>
    )
}