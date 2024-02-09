import axios from "axios";
import "../productDetail/productDetail.css"
import { useState } from "react";
export default function ProductAdd() {
  const [image,setImage] = useState("");
  const [base64Data,setBase64Image] = useState("");
  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setBase64Image(reader.result);
    };

    reader.readAsDataURL(file);
  };
  console.log(base64Data)
  const handleSubmit =(event)=>{
    event.preventDefault();
    
    const formData = new FormData();
    formData.append("name",event.target.productName.value);
    formData.append("description",event.target.description.value);
    formData.append("productImagePath",base64Data);
    formData.append("price",event.target.price.value);
    formData.append("userId",event.target.userId.value);

    axios.post("https://localhost:44354/api/Products/AddProduct",formData,{headers: {
      'Content-Type': 'application/json',
    }}).then(x=>{
    console.log(x)
  }).catch(e=>console.log(e));
  }
  
  return (
    <div className="formContainer">
      <form  method='post' onSubmit={handleSubmit} >
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Ürün Adı</label>
          <input type="text" name="productName" className="form-control" id="exampleFormControlInput1" placeholder="Masa" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">Ürün Açıklaması</label>
          <textarea className="form-control" name="description" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlFile1">Ürün Fotoğrafı ekle</label>
          <input type="file" name="Image" accept=".jpg, .jpeg, .png" onChange={handleFileInputChange} className="form-control-file" id="exampleFormControlFile1" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput2">Fiyatı</label>
          <input type="text" name="price" className="form-control" id="exampleFormControlInput2" placeholder="10" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput3">Kullanıcı</label>
          <input type="text" name="userId" className="form-control" id="exampleFormControlInput3" placeholder="1" />
        </div>


        <div className="form-group">
          <button type="submit" className="addBtn">Ekle</button>
        </div>

      </form>

    </div>

  )
}