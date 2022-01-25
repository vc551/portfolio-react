import Cards from "../Cards";

export default function AboutSection(props) {
    const divname = props.heading.replace(/\s/g, '') + "-dropdown";

    return (
        <div className={`container-fluid bg-${props.backstyle} text-${props.textstyle} p-5`}>
            <h3>{props.heading}</h3>
            <p className="lead">{props.paragraph}</p>
            <button className={`btn btn-link btn-lg text-${props.textstyle}`} type="button" data-bs-toggle="collapse" data-bs-target={"#" + divname} aria-expanded="false" aria-controls={divname}>
                <i className="bi-chevron-down" />
            </button>
            <div className="collapse" id={divname}>
                <Cards cards={props.cards} />
            </div>
        </div>
    )
}