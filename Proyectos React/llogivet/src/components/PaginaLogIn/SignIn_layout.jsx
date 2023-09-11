import "./SignIn_layout.css"
function SignIn_layout({ toggleLayout }) {
    return (
        <div className="SignIn_layout">
            <div className="Slayout__box">
                <main className="Slayout__content">
                    <h2 className="Scontent__title">Sign<span className="title__color">In</span></h2>
                    <div className="Scontent__sign-in">Already Have An Account? <a className="sign-up__link" href="#" onClick={toggleLayout}>Sign Up</a></div>
                    <div className="Scontent__principal">
                        <div className="Scontent__user-info">
                            <div className="Suser-info__first-name">
                                <div className="Sfirst-name__label">Frist Name</div>
                                <div className="Sfirst-name__input">
                                    <input className="Sinput__text" type="text"></input>
                                </div>
                            </div>
                            <div className="Suser-info__last-name">
                                <div className="Slast-name__label">Last Name</div>
                                <div className="Slast-name__input">
                                    <input className="Sinput__text" type="text"></input>
                                </div>
                            </div>
                        </div>
                        <div className="Scontent__user-mail">
                            <div className="Scontent__email-label">Email Address</div>
                            <div className="Scontent__email">
                                <input className="Semail__input" type="text"></input>
                            </div>
                            <div className="Scontent__password-label">Password</div>
                            <div className="Scontent__password" type="password">
                                <input className="Spassword__input" type="text"></input>
                                <svg className="Spassword__show-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.906 9.76489C18.0251 7.63323 14.2633 5 10 5C5.73668 5 1.84953 7.63323 0.0940439 9.76489C-0.031348 10.0157 -0.031348 10.3918 0.0940439 10.5172C1.97492 12.8997 5.86207 15.4075 10 15.4075C14.2633 15.4075 18.1505 12.7743 19.906 10.6426C20.0313 10.3918 20.0313 10.0157 19.906 9.76489ZM14.0125 10.1411C14.0125 12.3981 12.2571 14.1536 10 14.1536C7.74295 14.1536 5.98746 12.3981 5.98746 10.1411C5.98746 7.88401 7.74295 6.12853 10 6.12853C12.2571 6.12853 14.0125 8.0094 14.0125 10.1411Z" fill="#3b3b3e"></path><path d="M7.99371 10.141C7.99371 11.2696 8.87146 12.1473 9.99998 12.1473C11.1285 12.1473 12.0063 11.2696 12.0063 10.141C12.0063 9.01251 11.1285 8.13477 9.99998 8.13477C8.87146 8.13477 7.99371 9.1379 7.99371 10.141Z" fill="#3b3b3e"></path><path d="M17.5434 2.88667L3.35706 17.073L4.2437 17.9596L18.43 3.77331L17.5434 2.88667Z" fill="#3b3b3e"></path><path d="M16.6693 1.99995L2.48297 16.1863L3.36962 17.0729L17.5559 2.88659L16.6693 1.99995Z" fill="white"></path></svg>
                            </div>
                            <div className="Scontent__check-section">
                                <input className="Scheck-section__checkbox" type="checkbox" value="Recordarme" name="recordarme"></input>
                                <span className="Scheck-section__remember-label">You have to agree with our <a className="title__color" href="#">Terms and conditions</a></span>
                            </div>
                        </div>
                    </div>
                    <div className="Scontent__secondary">
                        <button className="Scontent__button">Log In</button>
                        <div className="Scontent__or-span">Or</div>
                        <button className="Scontent__google-button">Log in with Google</button>
                        <button className="Scontent__facebook-button">Log in with Facebook</button>
                    </div>
                </main>
            </div>
        </div>
    );
}
export default SignIn_layout;