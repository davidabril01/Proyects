import { useState } from 'react'
import './App.css'
import "./reset.css"
import mailIcon from "./assets/icons/envelope-solid.svg";
import passwordIcon from "./assets/icons/lock-solid.svg"

function App() {
  return (
    <>
      <body className='Login__background'>
        <div className='Login__layout'>
          <div className='layout__content'>
            <div className='content__title'>
              <h1 className='title__text'>Login</h1>
            </div>

            <div className='content__email'>
              <input className='emain__input' type="text" placeholder="Email" />
              <img className="emain__Icon" src={mailIcon}></img>
            </div>

            <div>
            <div className='content__password'>
              <input className='emain__input' type="text" placeholder="Password" />
              <img className="password__Icon" src={passwordIcon}></img>
            </div>

            <div className='content__remember'>
              <input className="remember__checkbox" type="checkbox" value="Recordarme" name="recordarme"></input>
              <span className='remember__text'>I agree to the terms & conditions</span>
            </div>
            </div>

            <div className='content__button'>Login</div>

            <div className="content__sign-up">Don't Have An Account?<a className="sign-up__link" href="#">Sign Up</a></div>

          </div>
        </div>
      </body>
    </>
  )
}

export default App
