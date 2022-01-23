import Image from "next/image";
import Button from "../Button";

export default function InfoCard(props) {
    var image = <></>
    if (props.data?.image) {
        image = <Image
            src={props.data.image}
            alt={props.data.imagealt}
            className="card-img-top"
            width={300}
            height={200}
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
        <div className="card shadow" style={{ width: 18 + "rem" }}>
            {image}
            <div className="card-body">
                <h5 className="card-title border-bottom">
                    {props.data.title}
                </h5>
                <p className="card-text">
                    {props.data.text}
                </p>
                {button}
            </div>
        </div>
    )
}