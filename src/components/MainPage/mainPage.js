import { useEffect, useState } from "react"
import axios from 'axios';
import "./mainPage.css"
export default function MainPage() {
    const [products, setProducts] = useState([])
    const [users,setUsers] = useState([])
    useEffect(() => {
        axios.get("https://localhost:44354/api/Products/GetAll").then(res => setProducts(res.data)
        ).catch(x=>console.log(x))
        axios.get("https://localhost:44354/api/Users/GetAllUsers").then(res=>setUsers(res.data))
        
    }, [])
    return (
        <div className="row mainPageContainer">
            <div className="col-12 mainHeader">
                <h1 className="mainText">Anasayfa</h1>
            </div>
            <div className="col-6 mainProductBox">

                <div className="mainTableHeaderText"><h4>Ürünler</h4></div>
                <table className="table ">
                    <thead className="mainTable">

                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Ürün Adı</th>
                            <th scope="col">Açıklama</th>
                            <th scope="col">Fiyat</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products === undefined ? 
                            <div>...Loading</div>:
                           products.map((product) => (
                            <tr key={product.id}>
                                <th scope="row">{ product.id }</th>
                                <td>{ product.name }</td>
                                <td>{ product.description }</td>
                                <td>{ product.price }</td>
                            </tr>
                        ))
                        }
                        


                    </tbody>
                </table>
                <div className="countBox">
                    <p className="countText">Toplam ürünler : {products.length}</p>
                </div>
            </div>
            <div className="col-6 mainUserBox">
                <div className="mainTableHeaderText"><h4>Kullanıcılar</h4></div>
                <table className="table ">
                    <thead className="mainTable">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Ad</th>
                            <th scope="col">Soyad</th>
                            <th scope="col">Email</th>
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