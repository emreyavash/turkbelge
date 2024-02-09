import "./navbar.css"
import { Link } from "react-router-dom";

export default function Navbar() {

    return (
            <div className="row navRow">
                    <div className="linkContainer" ><Link className="navLink" to="/">Anasayfa</Link></div>
                    <div className="linkContainer" ><Link className="navLink" to="/products">Ürünler</Link></div>
                    <div className="linkContainer"><Link className="navLink" to="/users">Kullanıcılar</Link></div>

            </div>
                
          
    )

}