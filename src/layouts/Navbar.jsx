import { NavLink } from 'react-router';

export default function Navbar() {
    return (
        <div className="p-3 bg-primary">
            <ul className="d-flex align-items-center px-0">
                <li className="me-auto">
                    <NavLink
                        to="/"
                        className="link-offset-2 link-underline link-underline-opacity-0 text-light"
                    >
                        LOGO
                    </NavLink>
                </li>
                <li className="p-2">
                    <NavLink
                        to="/"
                        className="link-offset-2 link-underline link-underline-opacity-0 text-light icon-link-hover link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover"
                    >
                        To Road
                    </NavLink>
                </li>
                <li className="p-2">
                    <NavLink
                        to="#"
                        className="link-offset-2 link-underline link-underline-opacity-0 text-light icon-link icon-link-hover link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover"
                    >
                        To Travelers
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}
