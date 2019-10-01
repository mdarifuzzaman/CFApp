import React from 'react'
import {Link} from 'react-router-dom';

export default function Error() {
    return (
        <div>
            <h1>An error has occured</h1>
            <Link to="/">
                Return Home
            </Link>
        </div>
    )
}
