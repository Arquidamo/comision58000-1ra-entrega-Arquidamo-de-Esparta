import milogo from '../media/img/iggdrasyll.jpg'
import "./componentes.css";
function MiNavbar(){
    return(
                <div className="container container-fluid  fixed-top">
                    <nav className='navbar  navbar-expand-lg bg-body-tertiary'>

                            <ul id='miBrand'>
                                 <li className="navbar-brand">
                                    <img src={milogo} alt="logo">
                                   </img>
                                   <h1>el Arbol de los reinos...</h1>
                                 </li>
                            </ul>

                           <ul id='misEnlaces'>
                                
                                <li className="nav-item"><a href="https://you.com/">you</a> </li>
                                <li className="nav-item"><a href="https://react.dev/">reactjs</a></li>
                                <li className="nav-item"><a href="https://firstpersontetris.com/">tetris</a></li>
                            </ul>
                    </nav>
                </div>
    )
};
export default MiNavbar;