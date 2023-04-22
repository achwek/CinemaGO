import React, { Fragment , useState,useEffect } from "react";
import axios from 'axios'
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { storage } from "../config/firebaseConfig";
import { useNavigate } from "react-router-dom"

import {formatDate} from "./formatDate";


function AddFilm(){

	// declaration const
	const urlAddFilm ="http://localhost:5000/api/film"
	const urlCountry="http://localhost:5000/api/country"
	const urlPartner="http://localhost:5000/api/partner"
	const navigate = useNavigate()
	const [uploadImage, setUploadImage]= useState('');
	const [url, setUrl] = useState('');
	// Create state variables for progress and progress message
const [uploadProgress, setUploadProgress] = useState(0);
const [progressMessage, setProgressMessage] = useState("");
  //Liste Date
  const [listDate, setListDate] = useState([]);

  const [dateS, setDateS] = useState({
    date: '',
    timestart: '',
    timeend: ''
  });

//video
	const [uploadVideo ,setUploadVideo]= useState('');
	const [urlV, setUrlV] = useState('');
//images Start
	const [images, setImages] = useState([]);
  const [urls, setUrls] = useState([]);
  //country and cinema
  const [countries, setCountries] = useState([]);
  const [cinemas, setCinemas] = useState([]);
//Partner
const [partners, setPartners] = useState([]);

 // Add Partner
 const [dataPartner, setDataPartner] = useState({
	firstName: "",
	lastName: "",
	email: "",
});



//onChange For Partner
const handleChange = (e) => {
    // Récupérer le nom du champ et sa valeur
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    // Mettre à jour l'état en conséquence
    setDataPartner({
      ...dataPartner, // Copier l'objet dataPartner existant
      [fieldName]: fieldValue // Mettre à jour la propriété correspondante
    });
  };

// Fonction pour mettre à jour les données du formulaire
const onChangeDate = (e) => {
	const { name, value } = e.target;
	setDateS(prevDateS => ({ ...prevDateS, [name]: value }));
  };
  
  const handleSubmitPartner = async (e) => {
	e.preventDefault(); // Empêcher la soumission du formulaire
  
	// Récupérer les valeurs des champs du formulaire
	const firstName = e.target.firstName.value;
	const lastName = e.target.lastName.value;
	const email = e.target.email.value;
  
	// Faire une requête HTTP avec les données du formulaire
	try {
	  // Construire l'objet de données à envoyer dans la requête
	  const data = {
		firstName: firstName,
		lastName: lastName,
		email: email
	  };
  
	  // Envoyer la requête POST à l'API avec les données du formulaire
	  const response = await axios.post(urlPartner, data);
  	setDataPartner({
		firstName: "",
		lastName: "",
		email: ""
		// Reset other form fields as needed
	});

	try {
		const responsePart = await axios.get(urlPartner);
		setPartners(responsePart.data);
		console.log(responsePart.data);
	} catch (error) {
		// Handle error
		console.error(error);
	}
	} catch (error) {
	  // Erreur lors de la requête HTTP
	  console.error('Erreur lors de la soumission du formulaire :', error.message);
	  // Gérer l'erreur de soumission du formulaire
	}
  };
  


  //function pour ajouter liste date
// Fonction pour ajouter les données dans la liste ListDate
const handleAddToList = () => {
	console.log(dateS);
	 
	if (dateS.date !== '' && dateS.timestart !== '' && dateS.timeend !== '') {
		const  newDate = {
		date: dateS.date,
		timestart: dateS.timestart,
		timeend: dateS.timeend
	  };
	  setListDate(prevListDate => [...prevListDate, newDate]); // Update with newDate instead of dateS

	  setDateS({
		date: '',
		timestart: '',
		timeend: ''
	  });
	 console.log(listDate)
	 formatDate.listDate = listDate;
	}

};

  
	  


//const countryCinema = async axios.get(urlCountry, )

		const [formData, setFormData] = useState({
		title: "",
		description: "",
		country: "",
		cinema: "",
		categorie: "",
		partner:"",
		age:"",
		type: "",
		date:"",
		timestart: "",
		timeend: "",
		image: "",
		video: "",
		imagesStars:[],
		listDates: [],
	  });
	  const {
		title,
		description,
		country,
		cinema,
		categorie,
		partner,
		age,
		type,
		date,
		timestart,
		timeend,
		image,
		video,
		imagesStars,
		listDates ,
	  } = formData;
	 
	
		//submit button
	//submit button
const handleSubmit = async (e) => {
	e.preventDefault(); // Prevent the default submit and page reload
  
			// Send image to Firebase Storage
			const uploadTask = storage.ref(`images/${uploadImage.name}`).put(uploadImage);

		uploadTask.on(
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
		}
		);

		
// Upload video to Firebase Storage
const uploadTaskVideo = storage.ref(`videos/${uploadVideo.name}`).put(uploadVideo);

uploadTaskVideo.on(
  "state_changed",
  (snapshot) => {
    // Handle upload progress
    // You can access the progress using snapshot.bytesTransferred and snapshot.totalBytes
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log(`Upload progress: ${progress}%`);
  },
  (error) => {
    // Handle upload error
    console.log(error);
  },
  async () => {
    // Handle upload success
    const downloadUrlV = await storage.ref("videos").child(uploadVideo.name).getDownloadURL();
    setUrlV(downloadUrlV);
  }
);

  
	// Upload Images Start to Firebase Storage
	const urls = []; // Create an array to store download URLs
// Send list of images to Firebase Storage
for (let i = 0; i < images.length; i++) {
  const uploadTaskStart = storage.ref(`imagesStart/${images[i].name}`).put(images[i]);
  uploadTaskStart.on(
    "state_changed",
    (snapshot) => {
      // Handle upload progress
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      // Update state with progress percentage
      setUploadProgress(progress);
      // Update progress message
      setProgressMessage(`Uploading image ${i + 1} of ${images.length}: ${progress.toFixed(2)}%`);
    },
    (error) => {
      // Handle upload error
      console.log(error);
    },
    async () => {
      // Handle upload success
      const downloadUrlStart = await storage.ref("imagesStart").child(images[i].name).getDownloadURL();
      urls.push(downloadUrlStart);
      console.log(downloadUrlStart);
      // Check if all images are uploaded
  
  if (urls.length == images.length) {
			// Use destructuring to get form data fields from state
			console.log("date: " + formData.date);
			console.log("url Image" + url);
			console.log("url video" + urlV);
			console.log(formData);
			console.log("liste Images Start" + images);
			console.log("liste Url Images Start" + urls);
  
			// Create an object 
			formData.country = localStorage.getItem("optionCuntry")
				formData.cinema = localStorage.getItem("optionCinema")
				formData.categorie= localStorage.getItem("optiongenre")
				formData.partner= localStorage.getItem("optionpartner")
				formData.image = url
				formData.video = urlV
				formData.imagesStars = urls
				console.log("url Image"+url)
				console.log("url video"+urlV)
				console.log(formData);
				console.log("liste Images Start"+images)
				console.log("liste Url Images Start"+urls)
			// Send POST request to server
			await axios
			  .post(urlAddFilm, formData)
			  .then((response) => {
				console.log(response);
				window.location.reload(true);
				// Handle response
			  })
			  .catch((error) => {
				console.error(error);
				// Handle error
			  });
		  }
		}
	  );
	}
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

	  //select country 
	  useEffect(() => {
		const fetchData = async () => {
			const response = await axios.get(urlCountry);
			const responsePart = await axios.get(urlPartner);
			setCountries(response.data);
			setPartners(responsePart.data);
		}
		fetchData();
	  }, []);
	
  
    return(
        <Fragment>
            <Header></Header>
            <Sidebar></Sidebar>
            <main className="main">
		<div className="container-fluid">
			<div className="row">
				<div className="col-12">
					<div className="main__title">
						<h2>Add New Film</h2>
					</div>
				</div>
				
				<div className="col-12">
					<form action="#" className="form"  method="post" onSubmit={handleSubmit}>
						<div className="row row--form">
							<div className="col-12 col-md-5 form__cover">
								<div className="row row--form">
									<div className="col-12 col-sm-6 col-md-12">
										<div className="form__img">
											<label htmlFor="form__img-upload">Upload cover (270 x 400)</label>
											<input id="form__img-upload" name="image" type="file" accept=".png, .jpg, .jpeg" 
											  onChange={(e)=>{
												setUploadImage(e.target.files[0])
											 }}
							required/>
											<img id="form__img" src="#" alt=" "/>
										</div>
									</div>
								</div>
							</div>

							<div className="col-12 col-md-7 form__content">
								<div className="row row--form">
									<div className="col-12">
										<input type="text" className="form__input" placeholder="Title" name="title" value={formData.title}  onChange={onChange} required/>
									</div>

									<div className="col-12">
										<textarea id="text" name="description" className="form__textarea" placeholder="Description" value={formData.description}  onChange={onChange} required></textarea>
									</div>

									
									

									
									<div className="col-12 col-lg-6">
									<select id="country" name="country" value={formData.country}  >
												<option value=""></option>
												{countries.map(country => {
													localStorage.setItem(country.name, JSON.stringify(country.cinema));
													return (
													<option key={country._id} value={country.name} data-key={country.key}>
														{country.name}
													</option>
													);
												})}
											</select>
									</div>

									<div className="col-12  col-lg-6">
										<select id="cinema" name="cinema" value={formData.cinema} >
											<option value=""> </option>
										</select>
									</div>
									<div className="col-12 col-lg-6">
										<select id="genre" name="categorie" value={formData.categorie}  >
										<option value=""></option>
											<option value="Action">Action</option>
											<option value="Animation">Animation</option>
											<option value="Comedy">Comedy</option>
											<option value="Crime">Crime</option>
											<option value="Drama">Drama</option>
											<option value="Fantasy">Fantasy</option>
											<option value="Historical">Historical</option>
											<option value="Horror">Horror</option>
											<option value="Romance">Romance</option>
											<option value="Science-fiction">Science-fiction</option>
											<option value="Thriller">Thriller</option>
											<option value="Western">Western</option>
											<option value="Otheer">Otheer</option>
										</select>
									</div>
									<div className="col-12 col-lg-6">
									<select id="partner" name="partner" value={formData.partner}  >
												<option value=""></option>
												{partners.map(partner => {
													//localStorage.setItem(JSON.stringify(partner));
													return (
													<option  value={partner._id}>
														{partner.firstName+" "+partner.lastName}
													</option>
													);
												})}
											</select>
									</div>
									<div className="col-12 col-sm-6 col-lg-2">
										<input type="text" className="form__input" placeholder="Age" name="age" value={formData.age}  onChange={onChange}/>
									</div>

									<div className="col-10">
										<div className="form__gallery">
											<label id="gallery1" htmlFor="form__gallery-upload">Upload photos Stars</label>
											<input data-name="#gallery1" id="form__gallery-upload" name="gallery"
                                             className="form__gallery-upload" type="file" accept=".png, .jpg, .jpeg" onChange={(event) => {
												setImages(event.target.files);
											  }} multiple/>
										</div>
									</div>
								</div>
							</div>

							<div className="col-12">
								<ul className="form__radio">u
									<li>
										<span>Types:</span>
									</li>
									<li>
										<input id="type1" type="radio"  name="type" checked={formData.type === "Movie"} value="Movie"  onChange={onChange} required/>
										<label htmlFor="type1" selected>Movie</label>
									</li>
								
								</ul>
							</div>
							
							<div className="col-12">
								<div className="row row--form">
									<div className="col-12">
										<div className="form__video">
											<label id="movie1" for="form__video-upload">Upload video</label>
											<input data-name="#movie1" id="form__video-upload" name="video"
                                             className="form__video-upload" type="file" accept="video/mp4,video/x-m4v,video/*"
											   onChange={(e)=>{
												setUploadVideo(e.target.files[0])
											 }}/>
										</div>
									</div>

									<div className="col-12 col-sm-6 col-lg-4">
										<input type="date" className="form__input" placeholder="Date " name="date" value={dateS.date}  onChange={onChangeDate} required/>
									</div>
									<div className="col-12 col-6 col-lg-3 ">
										<input type="time" className="form__input" placeholder="Time Start" name="timestart" value={dateS.timestart}  onChange={onChangeDate} required/>
									</div>

									<div className="col-12 col-sm-6 col-lg-3">
										<input type="time" className="form__input" placeholder="Time End" name="timeend" value={dateS.timeend}  onChange={onChangeDate} required/>
									</div>
									<div className="col-1">
										<button type="button" className="form__btn" onClick={handleAddToList} >+</button>
									</div>
				<div className="col-12">
					<div className="dashbox">
						<div className="dashbox__title">
							<h3><i className=""></i> List Date</h3>

							
						</div>

						<div className="dashbox__table-wrap">
							<table className="main__table main__table--dash">
								<thead>
									<tr>
										<th>Date</th>
										<th>Time Start</th>
										<th>Time End</th>
									</tr>
								</thead>
									<tbody>
									{listDate.map(date => (
										
										<tr>
										<td>
											<div className="main__table-text">{date.date}</div>
										</td>
										<td>
											<div className="main__table-text">{date.timestart}</div>
										</td>
										<td>
											<div className="main__table-text">{date.timeend}</div>
										</td>
										</tr>
									))}
									</tbody>
							</table>
						</div>
					</div>
				</div>
				
			

									<div className="col-12">
										<button type="submit" className="form__btn" >Add Film</button>
									</div>
									 {/* Render progress bar only when upload is in progress */}
    {uploadProgress > 0 && (
      <div>
        {/* Render progress bar */}
        <progress value={uploadProgress} max={100} />
        {/* Render progress message */}
        <p>{progressMessage}</p>
      </div>
    )}
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
		<div className="tab-content" id="myTabContent">
					<div className="tab-pane fade show active" id="tab-1" role="tabpanel" aria-labelledby="1-tab">
						<div className="col-12">
							<div className="row">
								<div className="col-12 col-lg-6">
									<form action="#" className="form " method="post" onSubmit={handleSubmitPartner}>
										<div className="row row--form">
											<div className="col-12">
												<h4 className="form__title">Add New Partner</h4>
											</div>

											
											<div className="col-12 col-md-6 col-lg-12 col-xl-6">
												<div className="form__group">
													<input id="firstName" type="text" name="firstName" className="form__input" placeholder="First Name" value={dataPartner.firstName}  onChange={handleChange} required/>
												</div>
											</div>
											<div className="col-12 col-md-6 col-lg-12 col-xl-6">
												<div className="form__group">
													<input id="lastName" type="text" name="lastName" className="form__input" placeholder="Last Name" value={dataPartner.lastName}  onChange={handleChange} required/>
												</div>
											</div>
											
											<div className="col-12 col-md-6 col-lg-12 col-xl-6">
												<div className="form__group">
													<input id="email" type="text" name="email" className="form__input" placeholder="email@email.com" value={dataPartner.email}  onChange={handleChange} required/>
												</div>
											</div>
											

											
										

											<div className="col-12">
											<button className="form__btn" type="submit">Add Partner</button>
														</div>
										</div>
									</form>
								</div>
							
								
							</div>
						</div>	
					</div>

					
					
				</div>
	</main>
        </Fragment>
    )
}

export default AddFilm;