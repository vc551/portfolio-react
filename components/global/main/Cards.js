import InfoCard from "./InfoCard";

export default function Cards(props) {
    return (
        <div className="container-fluid d-flex gap-2 overflow-auto py-4">
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