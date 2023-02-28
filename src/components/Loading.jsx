import React from 'react'
import Spinner from 'react-bootstrap/Spinner';

const Loading = ({ loading, children }) => {

    if (loading) {
        return (
            <div>
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        )
    } else {
        return (
        <>{children}</>
        )
    }


}

export default Loading