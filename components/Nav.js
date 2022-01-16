import Button from "./Button"

export default function Nav(props) {
    return (
        <nav className="navbar navbar-dark bg-dark px-5 py-3">
            <div className="container-fluid">
                <a className="navbar-brand">
                    {props.name}
                </a>
                <div className="d-flex gap-4">
                    <Button
                        text="Resume"
                        link=""
                        class="info"
                    />
                    <Button
                        text="Contact"
                        link=""
                        class="success"
                    />
                </div>
            </div>
        </nav>
    )
}