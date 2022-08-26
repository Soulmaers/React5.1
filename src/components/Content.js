
import PropTypes from "prop-types"

export default function Content(props) {



    return (
        <div className="card">
            {props.children}
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.text}</p>
                <a href={props.link} className="btn btn-primary">{props.linkText}</a>
            </div>
        </div >


    )



}

Content.propTypes = {
    props: PropTypes.object
}