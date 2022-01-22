import Image from "next/image";
import Button from "../Button";

export default function InfoCard(props) {
    return (
        <div className="card shadow" style={{width: 18 + "rem"}}>
            <Image
                src={props.data.image}
                alt={props.data.imagealt}
                className="card-img-top"
                width={300}
                height={200}
            />
            <div className="card-body">
                <h5 className="card-title">
                    {props.data.title}
                </h5>
                <p className="card-text">
                    {props.data.text}
                </p>
                <Button
                    class={props.data.buttonclass}
                    glow={props.data.buttonglow}
                    link={props.data.buttonlink}
                    text={props.data.buttontext}
                />
            </div>
        </div>
    )
}