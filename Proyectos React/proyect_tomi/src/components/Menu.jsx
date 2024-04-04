import './Menu.scss';
import icono from "../images/letra-l.png"
function Menu() {

  return (
    <div className="menu">
      <img className='menu__logo' src={icono}></img>
      <a className="menu__name" href='/'>La esquinita</a>
    </div>
  );
}

export default Menu;