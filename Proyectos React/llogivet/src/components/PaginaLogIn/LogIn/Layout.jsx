import "./Layout.css"

function Layout() {
    return (
        <div className="layout">
            <main className="layout__content">
                <h2 className="content__title">Log<span className="title__color">In</span></h2>
                <div className="content__principal">
                    <div className="content__email-label">Email Address</div>
                    <div className="content__email">
                        <input className="email__input" type="text"></input>
                    </div>
                    <div className="content__password-label">Password</div>
                    <div className="content__password" type="password">
                        <input className="password__input" type="text"></input>
                        <svg className="password__show-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.906 9.76489C18.0251 7.63323 14.2633 5 10 5C5.73668 5 1.84953 7.63323 0.0940439 9.76489C-0.031348 10.0157 -0.031348 10.3918 0.0940439 10.5172C1.97492 12.8997 5.86207 15.4075 10 15.4075C14.2633 15.4075 18.1505 12.7743 19.906 10.6426C20.0313 10.3918 20.0313 10.0157 19.906 9.76489ZM14.0125 10.1411C14.0125 12.3981 12.2571 14.1536 10 14.1536C7.74295 14.1536 5.98746 12.3981 5.98746 10.1411C5.98746 7.88401 7.74295 6.12853 10 6.12853C12.2571 6.12853 14.0125 8.0094 14.0125 10.1411Z" fill="#3b3b3e"></path><path d="M7.99371 10.141C7.99371 11.2696 8.87146 12.1473 9.99998 12.1473C11.1285 12.1473 12.0063 11.2696 12.0063 10.141C12.0063 9.01251 11.1285 8.13477 9.99998 8.13477C8.87146 8.13477 7.99371 9.1379 7.99371 10.141Z" fill="#3b3b3e"></path><path d="M17.5434 2.88667L3.35706 17.073L4.2437 17.9596L18.43 3.77331L17.5434 2.88667Z" fill="#3b3b3e"></path><path d="M16.6693 1.99995L2.48297 16.1863L3.36962 17.0729L17.5559 2.88659L16.6693 1.99995Z" fill="white"></path></svg>
                    </div>
                    <div className="content__check-section">
                        <input className="check-section__checkbox" type="checkbox" value="Recordarme" name="recordarme"></input>
                        <span className="check-section__remember-label">Remember me</span>
                        <a className="check-section__forget-label" href="#">Forget Password?</a>
                    </div>
                </div>
                <div className="content__secondary">
                    <button className="content__button">Log In</button>
                    <span className="content__or-span">Or</span>
                    <button className="content__google-button">Log in with Google</button>
                    <button className="content__facebook-button">Log in with Facebook</button>
                </div>
                <div className="content__sign-up">Don't Have An Account? <a className="sign-up__link" href="/SignIn">Sign Up</a></div>
            </main>
        </div>
    );
}
export default Layout;