import mifoto from '../media/img/logo.png';
function Mifooter({nombre,mail,año}){
     nombre="Arquidamo de Esparta";
     mail= "arquidamo.de.esparta@gmail.com";
     año= 2023 
         return(
            <div className="navbar fixed-bottom" id="mifooter">
                  <ul>
                    <li className="navbrand"><img src={mifoto} alt={nombre}>
                    
                    </img>

                    </li>
                    <li className="nav-item"><h2 className="title">{nombre}</h2>
                   </li>
                    <li className="nav-item subtitle">
                        {mail}</li>
                    <li className="nav-item">{año}</li>
                  </ul>

            </div>
         )  

};
export default Mifooter;
