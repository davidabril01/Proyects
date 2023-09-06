import "./LogIn.css"
import Login_layout from "./Login_layout";
import background from "../images/paloma.png"

function LogIn() {
    return (
        <div>
            <div className="background">
                <h1 className="background__title">Llogivet</h1>
                <img className="background__image" src={background}>
                </img>
            </div>
            <Login_layout />
        </div>
    );
}
export default LogIn;