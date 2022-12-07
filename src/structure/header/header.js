import './header.css'

let Header = ({text}) => {
    return(
        <div className="headerContainer">
            <div className="headerLeters">
                {text}
            </div>
        </div>
    )
}

export default Header;