import { useState } from "react";
import "./UserIn.css"
import Login_layout from "./Login_layout";
import background from "../images/paloma.png"
import SignIn_layout from "./SignIn_layout"

function UserIn() {
    const [showLoginLayout, setShowLoginLayout] = useState(true);

    const toggleLayout = () => {
        setShowLoginLayout(!showLoginLayout);
    };
    return (
        <div>
            <div className="UserIn__background">
                <h1 className="background__title">Llogivet</h1>
                <img className="background__image" src={background}>
                </img>
            </div>
            {showLoginLayout ? (
        <Login_layout toggleLayout={toggleLayout} />
      ) : (
        <SignIn_layout toggleLayout={toggleLayout} />
      )}
        </div>
    );
}
export default UserIn;