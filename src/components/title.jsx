import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"

export default function Title(props) {
    return (
        <div className="login-title">
            <h3> <Link to='/'><FontAwesomeIcon icon={faCircleArrowLeft} /></Link> {props.title}</h3>
        </div>
    )
}