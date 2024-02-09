import { useEffect, useState } from "react";
import "./user.css"
import { Link } from "react-router-dom";
import axios from "axios";
export default function User(){
    const [users,setUsers] = useState([])
    useEffect(() => {
    
        axios.get("https://localhost:44354/api/Users/GetAllUsers").then(res=>setUsers(res.data))
        
    }, [])
    return(
        <div className="row">
        <div className="col-12 productContainer">
            <div className="mainTableHeaderText productHeaderText">
                <h3>Kullanıcılar</h3>
            </div>
            <div className="addBtnContainer">
                <button className="addBtn">Ekle</button>
            </div>
            <table className="table ">
                <thead className="mainTable">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">İsim</th>
                        <th scope="col">Soyisim</th>
                        <th scope="col">Email</th>
                        <th scope="col">Düzenle</th>
                        <th scope="col">Sil</th>

                    </tr>
                </thead>
                <tbody>
                {
                            users === undefined ? 
                            <div>...Loading</div>:
                            users.map((user) => (
                            <tr key={user.id}>
                                <th scope="row">{ user.id }</th>
                                <td>{ user.firstName }</td>
                                <td>{ user.lastName }</td>
                                <td>{ user.email }</td>
                                <td><button className="updateBtn">Düzenle</button></td>
                                <td><button className="deleteBtn">Sil</button></td>
                            </tr>
                        ))
                        }
                    
                </tbody>
            </table>
            <div className="countBox">
                <p className="countText">Toplam Kullanıcılar : {users.length}</p>
            </div>
        </div>

    </div>
    )
}