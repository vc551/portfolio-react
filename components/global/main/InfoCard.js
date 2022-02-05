import Image from "next/image";
import Button from "../Button";

export default function InfoCard(props) {
    const cloudflareImageLoader = ({ src, width, quality }) => {
        if (!quality) {
            quality = 75
        }
        return `https://image-handler.vc551.workers.dev?width=${width}&quality=${quality}&image=https://vc551.com${src}`
    }
    
    var image = <></>
    if (props.data?.image) {
        image = <Image
            src={props.data.image}
            alt={props.data.imagealt}
            className="card-img-top"
            width={300}
            height={200}
            layout="responsive"
            loader={cloudflareImageLoader}
        />
    }

    var button = <></>
    if (props.data?.buttontext) {
        button = <Button
            class={props.data.buttonclass}
            glow={props.data.buttonglow}
            link={props.data.buttonlink}
            text={props.data.buttontext}
        />
    }

    var header = <></>
    if (props.data?.header) {
        header = <div className="card-header">
            {props.data.header}
        </div>
    }
    
    var footer = <></>
    if (props.data?.footer) {
        header = <div className="card-footer">
            {props.data.footer}
        </div>
    }

    return (
        <div className="card shadow me-2" style={{ width: 18 + "rem", height: ((props.data?.height) ? props.data.height : 24) + "rem" }}>
            {header}
            {image}
            <div className="card-body" style={{ height: 14 + "rem" }}>
                <h5 className="card-title border-bottom">
                    {props.data.title}
                </h5>
                <h6 className="card-subtitle mb-2 text-muted">
                    {props.data.subtitle}
                </h6>
                <p className="card-text">
                    {props.data.text}
                </p>
                {button}
            </div>
            {footer}
        </div>
    )
}