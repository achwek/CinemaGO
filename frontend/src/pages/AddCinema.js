import React, { Fragment , useState,useEffect } from "react";
import axios from 'axios'
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { storage } from "../config/firebaseConfig";
import { useNavigate } from "react-router-dom"

import {formatDate} from "./formatDate";


function AddCinema(){

	// declaration const
	const urlCinema="http://localhost:5000/api/cinema"
	const [uploadImage, setUploadImage]= useState('');
	const [url, setUrl] = useState('');
	// Create state variables for progress and progress message
const [uploadProgress, setUploadProgress] = useState(0);
const [progressMessage, setProgressMessage] = useState("");
  

		const [formData, setFormData] = useState({
		name: "",
		description: "",
		dateCreation:"",
		capacite:"",
		address:"",
		email:"",
		tel:"",
		site:"",
		urlLogo: "",
		
	  });
	  const {
		title,
		description,
		dateCreation,
		capacite,
		address,
		email,
		tel,
		site,
		urlLogo,
		
	  } = formData;
	 
	
		//submit button
	//submit button
	const handleSubmit = async (e) => {
		e.preventDefault(); // Prevent the default submit and page reload
	
		// Send image to Firebase Storage
		const uploadTask = storage.ref(`images/${uploadImage.name}`).put(uploadImage);
	
		await uploadTask.on(
			"state_changed",
			(snapshot) => {
				// Handle upload progress
				// You can access the progress using snapshot.bytesTransferred and snapshot.totalBytes
			},
			(error) => {
				// Handle upload error
				console.log(error);
			},
			async () => {
				// Handle upload success
				const downloadUrl = await storage.ref("images").child(uploadImage.name).getDownloadURL();
				setUrl(downloadUrl);
				console.log(url);
	


  });
 
	
          // Use destructuring to get form data fields from state
          console.log("date: " + formData.date);
          console.log("url Image" + url);
          console.log(formData);

          // Create an object 
           formData.urlLogo = url
        

          // Send POST request to server
          await axios
            .post(urlCinema, formData)
            .then((response) => {
              console.log(response);
              window.location.reload(true);
              // Handle response
            })
            .catch((error) => {
              console.error(error);
              // Handle error
            });
        
      
	


		
  };
  
	 
	  const onChange = (event) => {		
		const target = event.target;
		const value = target.type === "checkbox" ? target.checked : target.value;
		const name = target.name;
	
		
		  setFormData({
			...formData,
			[name]: value,
		  });
		
	  };
 
    return(
        <Fragment>
            <Header></Header>
            <Sidebar></Sidebar>
            <main className="main">
		<div className="container-fluid">
			<div className="row">
				<div className="col-12">
					<div className="main__title">
						<h2>Add New Cinema</h2>
					</div>
				</div>
				
				<div className="col-12">
					<form action="#" className="form"  method="post" onSubmit={handleSubmit}>
						<div className="row row--form">
							<div className="col-10 col-md-5 form__cover">
								<div className="row row--form">
									<div className="col-12 col-sm-6 col-md-12">
										<div className="form__img_logo">
											<label htmlFor="form__img-upload">Upload image or logo</label>
											<input id="form__img-upload" name="image" type="file" accept=".png, .jpg, .jpeg" 
											  onChange={(e)=>{
												setUploadImage(e.target.files[0])
											 }}
							 />
											<img id="form__img" src="#" alt=" "/>
										</div>
									</div>
								</div>
							</div>

							<div className="col-12 col-md-7 form__content">
								<div className="row row--form">
									<div className="col-12">
										<input type="text" className="form__input" placeholder="Name" name="name" value={formData.name}  onChange={onChange} required/>
									</div>

									<div className="col-12">
										<textarea id="text" name="description" className="form__textarea" placeholder="Description" value={formData.description}  onChange={onChange} required></textarea>
									</div>
									<div className="col-12">
										<input type="text" className="form__input" placeholder="Address" name="address" value={formData.address}  onChange={onChange} required/>
									</div>
									<div className="col-12 col-lg-6">
									<div className="form__group">
									
                        <input id="email" type="email" name="email" className="form__input" placeholder="email@email.com" value={formData.email} onChange={onChange}  />
                      </div>
					  </div>
					  <div className="col-12 col-lg-6">
					  <div className="form__group">
                        <input id="tel" type="text" name="tel" className="form__input" placeholder="Tel" value={formData.email} onChange={onChange}  />
                      </div>
					  </div>
					 
								
									<div className="col-12 col-sm-6 col-lg-3">
										<input type="text" className="form__input" placeholder="Creation Date " name="date" />
									</div>
									
									<div className="col-12 col-sm-6 col-lg-3">
										<input type="text" className="form__input" placeholder="Capacity" name="capacite" value={formData.capacite}  onChange={onChange}/>
									</div>
									<div className="col-12 col-sm-6 col-lg-6">
										<input type="text" className="form__input" placeholder="Site" name="site" value={formData.site}  onChange={onChange}/>
									</div>
								
									
									

								
									
									
									
								</div>
								
							</div>

						
							
						
								
							
						</div>
						<div className="col-12">
										<button type="submit" className="form__btn" >Add Cinema</button>
									</div>
					</form>
				</div>
			</div>
		</div>
		
	</main>
        </Fragment>
    )
}

export default AddCinema;