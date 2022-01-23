import Link from "next/link";

export default function TabNav(props) {
    return (
        <div className='container-fluid nav-tabs-padding justify-content-center d-flex'>
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className={`page-item ${(props?.about) ? `active` : ` `}`}>
                        <Link href="/main/"><a className="page-link" aria-current="page">About</a></Link>
                    </li>
                    <li className={`page-item ${(props?.qualifications) ? `active` : ` `}`}>
                        <Link href="/main/qualifications"><a className="page-link">Qualifications</a></Link>
                    </li>
                    <li className={`page-item ${(props?.projects) ? `active` : ` `}`}>
                        <Link href="/main/projects"><a className="page-link">Projects</a></Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}