import Cards from "./Cards";

export default function Section(props) {
    const divname = props.heading.replace(/\s/g, '') + "-dropdown";
    const show = props?.show ? "show" : ""

    return (
        <div className={`container-fluid bg-${props.backstyle} text-${props.textstyle} pt-5 pb-4`}>
            <div className="px-5">
            <h3>{props.heading}</h3>
            <p className="lead">{props.paragraph}</p>
            <button className={`btn btn-link btn-lg text-${props.textstyle}`} type="button" data-bs-toggle="collapse" data-bs-target={"#" + divname} aria-expanded="false" aria-controls={divname}>
                <i className="bi-chevron-down" />
            </button>
            </div>
            <div className={`collapse ${show} ps-4`} id={divname}>
                <Cards cards={props.cards} />
            </div>
        </div>
    )
}