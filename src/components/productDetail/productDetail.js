import { useEffect, useState } from "react"
import "./productDetail.css"
import axios from "axios";
import { useParams } from "react-router-dom";
export default function ProductDetail() {
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  const [name,setName] = useState("");
  const [description,setDescription] = useState("");
  const [price,setPrice] = useState("");
  const [image2,setImage2] = useState("");
  const [userId,setUrId] = useState("");
  const [base64Data,setBase64Image] = useState("");
  console.log(name)
  console.log(description)
  console.log(price)
  console.log(image2)
  console.log(userId)
  console.log(base64Data)


  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setBase64Image(reader.result);
    };

    reader.readAsDataURL(file);
  };
  const handleSubmit =(event)=>{
    event.preventDefault();
    
    console.log(event)
    const formData = new FormData();
    formData.append("name",name);
    formData.append("description",description);
    formData.append("productImagePath",base64Data ===null ? image2 : base64Data);
    formData.append("price",price);
    formData.append("userId",userId);
    formData.append("id",id);

    console.log(formData);
    axios.post("https://localhost:44354/api/Products/UpdateProduct",formData,{headers: {
      'Content-Type': 'application/json',
    }}).then(x=>{
    console.log(x)
  }).catch(e=>console.log(e));
  }
  useEffect(() => {
    axios.get(`https://localhost:44354/api/Products/GetProductById?id=${id}`).then(res =>{
      setName(res.data.name);
      setPrice(res.data.price);
      setDescription(res.data.description);
      setUrId(res.data.userId);
      setImage2(res.data.productImagePath)
      setProduct(res.data)

    } );
  }, [])
  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit} method="post">
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Ürün Adı</label>
          <input type="text" className="form-control" value={name} onChange={(event)=> setName(event.target.value)}  id="exampleFormControlInput1" placeholder="Masa" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">Ürün Açıklaması</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" value={description} onChange={(event)=> setDescription(event.target.value)} rows="3"></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlFile2">Ürün Fotoğrafı </label>
          <img src={image2} className="rounded float-left form-control-file" style={{width:200, height:200}} id="exampleFormControlFile2" alt="..." />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlFile1">Ürün Fotoğrafı ekle</label>
          <input type="file" accept=".jpg, .jpeg, .png"  onChange={handleFileInputChange} className="form-control-file" id="exampleFormControlFile1" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput2">Fiyatı</label>
          <input type="text" className="form-control" id="exampleFormControlInput2" value={price} onChange={(event)=> setPrice(event.target.value)} placeholder="10" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput3">Kullanıcı</label>
          <input type="text" className="form-control" id="exampleFormControlInput3" value={userId} onChange={(event)=> setUrId(event.target.value)} placeholder="1" />
        </div>


        <div className="form-group">
          <button className="updateBtn">Güncelle</button>
        </div>

      </form>

    </div>

  )
}