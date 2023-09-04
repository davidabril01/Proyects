import "./LogIn.css"
import Layout from "./LogIn/Layout";
import background from "../images/paloma.png"

function LogIn() {
    return (
        <div>
            <div className="background">
                <img className="background-image" src={background}>
                </img>

            </div>
            <Layout />
        </div>
    );
}
export default LogIn;