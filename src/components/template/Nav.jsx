import React from "react";
import { Link } from "react-router-dom";

export default props => 
    <aside className="bg-dark text-white p-3 vh-100">
        <nav className="nav flex-column">
            <Link to="/" className="nav-link text-white d-flex align-items-center">
                <i className="fa fa-home me-2"></i> Home
            </Link>
            <Link to="/users" className="nav-link text-white d-flex align-items-center">
                <i className="fa fa-users me-2"></i> Users
            </Link>
        </nav>
    </aside>
