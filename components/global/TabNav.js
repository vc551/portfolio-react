import Link from "next/link";

export default function TabNav(props) {
    return (
        <div className='container-fluid nav-tabs-padding justify-content-center d-flex'>
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item active">
                        <Link href="#"><a className="page-link" aria-current="page">About</a></Link>
                    </li>
                    <li className="page-item">
                        <Link href="#"><a className="page-link" aria-current="page">Professional</a></Link>
                    </li>
                    <li className="page-item">
                        <Link href="#"><a className="page-link" aria-current="page">Projects</a></Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}