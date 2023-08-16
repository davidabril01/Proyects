import "./LoadingPage.css"
import LogoCappy from "./components/images/LogoCappy.svg"


function LoadingPage() {
  return (
    <div className="LoadingPage">
      <img className="LoadingPage__image" src={LogoCappy}/>
      <button className="LoadingPage__button" onClick={() => window.location.href = "/Component/pagina1"}>Inicio</button>
    </div>
  );
}

export default LoadingPage;
