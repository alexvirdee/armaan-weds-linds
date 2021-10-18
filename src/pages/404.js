import React from "react";
import { Link } from "gatsby"

const pageNotFound = () => {
    return (
        <div>
            <h1>Oh no! Page not found</h1>
            <Link to="/">Go Back</Link>
        </div>
    )
}

export default pageNotFound