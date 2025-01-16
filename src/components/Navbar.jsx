import { NavLink, useMatch } from "react-router";

export default function Navbar() {
  return (
    <div className="p-3 bg-primary w-100 z-3">
      <ul className="d-flex align-items-center px-0 mb-0">
        <li className="me-auto">
          <NavLink
            to="/"
            className="link-offset-2 link-underline link-underline-opacity-0 text-light"
          >
            Sac project
          </NavLink>
        </li>
        {!useMatch("/") && (
          <li className="p-2">
            <NavLink
              to="/"
              className="link-offset-2 link-underline link-underline-opacity-0 text-light icon-link-hover link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover"
            >
              Home
            </NavLink>
          </li>
        )}
        {!useMatch("/partecipants") && (
          <li className="p-2">
            <NavLink
              to="/partecipants"
              className="link-offset-2 link-underline link-underline-opacity-0 text-light icon-link-hover link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover"
            >
              Partecipanti
            </NavLink>
          </li>
        )}
      </ul>
    </div>
  );
}
