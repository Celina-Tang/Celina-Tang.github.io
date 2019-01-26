import React from 'react'
import resume from '../assets/Resume-Celina-Hao-Tang.pdf'

export default class Info extends React.Component {
    render() {
        return (
            <div className="jumbotron">
            <h1 className="display-4">Celina Tang</h1>
            <p className="lead"> 3A Software Engineering at University of Waterloo</p>
            <hr className="my-4"/>
            <p className="lead">
                <a className="btn btn-primary btn-lg" href={resume} role="button">Resume</a>
            </p>
            </div>
        )
    }
}
