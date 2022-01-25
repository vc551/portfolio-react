import Image from "next/image";
import Button from "../Button";

export default function InfoCard(props) {
    const normalizeSrc = (src) => {
        return src.startsWith("/") ? src.slice(1) : src;
    };

    const cloudflareLoader = ({ src, width, quality }) => {
        const params = [`width=${width}`];
        if (quality) {
            params.push(`quality=${quality}`);
        }
        const paramsString = params.join(",");
        return `/cdn-cgi/image/${paramsString}/${normalizeSrc(src)}`;
    };

    var image = <></>
    if (props.data?.image) {
        image = <Image
            src={props.data.image}
            alt={props.data.imagealt}
            className="card-img-top"
            width={300}
            height={200}
            layout="responsive"
            loader={cloudflareLoader}
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

    return (
        <div className="card shadow" style={{ width: 18 + "rem", height: 24 + "rem" }}>
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
        </div>
    )
}