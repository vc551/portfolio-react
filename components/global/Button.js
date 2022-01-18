import Link from 'next/link';
import styles from './glow.module.css'

export default function Button(props) {
    
    var classes = `btn `
    classes += `btn-${props.class} `
    classes += props.glow ? `${styles[`glow-${props.class}`]} ` : ` `
    classes += props?.other

    return (
        <Link href={props.link}>
            <button
                type="button"
                className={classes}
            >
                {props.text}
            </button>
        </Link>
    )
}