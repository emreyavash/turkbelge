import { useEffect, useState } from "react";
import "./product.css"
import { Link } from "react-router-dom";
import axios from "axios";
export default function Product() {
    const [products,setProducts] = useState([]);
    const DeleteProduct =(product)=>{
        axios.post("https://localhost:44354/api/Products/DeleteProduct",product);
    }
    useEffect(()=>{
        axios.get("https://localhost:44354/api/Products/GetAll").then(res => setProducts(res.data)
        ).catch(x=>console.log(x))
    })
    return (
        <div className="row">
            <div className="col-12 productContainer">
                <div className="mainTableHeaderText productHeaderText">
                    <h3>Ürünler</h3>
                </div>
                <div className="addBtnContainer">
                  <Link to="/productAdd"><button className="addBtn">Ekle</button></Link>  
                </div>
                <table className="table ">
                    <thead className="mainTable">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Ürün Adı</th>
                            <th scope="col">Açıklama</th>
                            <th scope="col">Fiyat</th>
                            <th scope="col">Düzenle</th>
                            <th scope="col">Sil</th>

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
                                <td><Link to={`/productDetail/${product.id}`}><button  className="updateBtn">Düzenle</button></Link></td>
                                <td><button onClick={()=>DeleteProduct(product)} className="deleteBtn">Sil</button></td>
                            </tr>
                        ))
                        }
                     
                     
                    </tbody>
                </table>
                <div className="countBox">
                    <p className="countText">Toplam Ürünler : {products.length}</p>
                </div>
            </div>

        </div>
    )
}