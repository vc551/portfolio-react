import InfoCard from "./InfoCard";

export default function Cards(props) {
    return (
        <div className="container d-flex gap-2">
            {props.cards.map((data, key) => {
                {
                    return (
                        <div className="text-dark"><InfoCard data={data} /></div>
                    )
                }
            })}
        </div>
    )
}