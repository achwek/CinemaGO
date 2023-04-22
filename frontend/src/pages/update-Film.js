import React, { Fragment , useState,useEffect } from "react";
import axios from 'axios'
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { storage } from "../config/firebaseConfig";
import { useNavigate } from "react-router-dom"



function UpdateFilm(){
	const [Film, setFilm] = useState([]);

	//const Film update
	const idFilm= localStorage.getItem("idFilm");
	console.log(idFilm);
	// declaration const
	const urlGetFilmById="http://localhost:5000/add-film"
	const urlUpdateFilm ="http://localhost:5000/add-film"
	const urlCountry="http://localhost:5000/country"
	const navigate = useNavigate()
	const [uploadImage, setUploadImage]= useState('');
	const [url, setUrl] = useState('');

	const [uploadVideo ,setUploadVideo]= useState('');
	const [urlV, setUrlV] = useState('');
//images Start
	const [images, setImages] = useState([]);
  const [urls, setUrls] = useState([]);
  //country and cinema
  const [countries, setCountries] = useState([]);
  const [cinemas, setCinemas] = useState([]);

 

//const countryCinema = async axios.get(urlCountry, )

		const [formData, setFormData] = useState({
		title: "",
		description: "",
		country: localStorage.getItem("optionCountry"),
		cinema: localStorage.getItem("optionCinema"),
		categorie: localStorage.getItem("optionCategorie"),
		age:"",
		type: "",
		date:"",
		timestart: "",
		timeend: "",
		image: "",
		video: "",
		imagesStars:[],
	  });
	  const {
		title,
		description,
		country,
		cinema,
		categorie,
		age,
		type,
		date,
		timestart,
		timeend,
		image,
		video,
		imagesStars,
	  } = formData;
	 
	
		//submit button
	  const handleSubmit = async(e) => {

	// Prevent the default submit and page reload
		e.preventDefault();			
		
		//send image firebase

		const uploadTask = storage.ref(`images/${uploadImage.name}`).put(uploadImage);

		await uploadTask.on('state_changed',
		  (snapshot) => {
			// Progress
		  },
		  (error) => {
			// Error
			console.log(error);
		  },
		 	async () => {
			// Completed
			await storage.ref('images').child(uploadImage.name).getDownloadURL().then((downloadUrl) => {
			  setUrl(downloadUrl);
			  console.log(url);
			});
		  }
		);

		// Upload video
		const uploadTaskVideo = storage.ref(`videos/${uploadVideo.name}`).put(uploadVideo);

			await uploadTaskVideo.on('state_changed',
			(snapshot) => {
				// Progress
			},
			(error) => {
				// Error
				console.log(error);
			},
			async() => {
				// Completed
				await storage.ref('videos').child(uploadVideo.name).getDownloadURL().then((downloadUrlV) => {
				setUrlV(downloadUrlV);
				});
			}
			);
				//upload Images Start
						//send list of images to Firebase Storage
		for (let i = 0; i < images.length; i++) {
			const uploadTaskStart = storage.ref(`imagesStart/${images[i].name}`).put(images[i]);
			await uploadTaskStart.on('state_changed',
			(snapshot) => {
				// Progress
			},
			(error) => {
				// Error
				console.log(error);
			},
			async () => {
				// Completed
				const downloadUrlStart = await storage.ref('imagesStart').child(images[i].name).getDownloadURL();
				setUrls((prevUrls) => [...prevUrls, downloadUrlStart]);
				console.log(downloadUrlStart);
			}
			);
		}
		
				// Use destructuring to get form data fields from state
				formData.country = localStorage.getItem("optionCuntry")
				formData.cinema = localStorage.getItem("optionCinema")
				formData.categorie= localStorage.getItem("optiongenre")
				formData.image = url
				formData.video = urlV
				formData.imagesStars = urls
				console.log("url Image"+url)
				console.log("url video"+urlV)
				console.log(formData);
				console.log("liste Images Start"+images)
				console.log("liste Url Images Start"+urls)


		await axios.put(urlUpdateFilm, formData, navigate('/edit-film')
		)
		.then(response => {
		  console.log(response);
		  window.location.reload(true);
		  // Handle response
		})
		.catch(error => {
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

	  //select country 
	  useEffect(() => {
		const fetchCountriesAndFilm = async () => {
		  const responseCountry = await axios.get(urlCountry);
		  setCountries(responseCountry.data);
		  
		  const idFilm = localStorage.getItem("idFilm");
		  const responseFilm = await axios.get(`${urlGetFilmById}/${idFilm}`);
		  setFormData(responseFilm.data);
		   console.log(responseFilm.data);
		};
		fetchCountriesAndFilm();
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
						<h2>Update Film : {formData.title} </h2>
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
										<input type="text" className="form__input" placeholder="Title" name="title"  value={formData.title}  onChange={onChange} required/>
									</div>

									<div className="col-12">
										<textarea id="text" name="description" className="form__textarea" placeholder="Description" value={formData.description}  onChange={onChange} required></textarea>
									</div>

									<div className="col-12 col-sm-6 col-lg-4">
										<input type="date" className="form__input" placeholder="Date " name="date" value={formData.date}  onChange={onChange} required/>
									</div>
									<div className="col-12 col-6 col-lg-3 ">
										<input type="time" className="form__input" placeholder="Time Start" name="timestart" value={formData.timestart}  onChange={onChange} required/>
									</div>

									<div className="col-12 col-sm-6 col-lg-3">
										<input type="time" className="form__input" placeholder="Time End" name="timeend" value={formData.timeend}  onChange={onChange} required/>
									</div>

									

									<div className="col-12 col-sm-6 col-lg-2">
										<input type="text" className="form__input" placeholder="Age" name="age" value={formData.age}  onChange={onChange}/>
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
										<select id="genre" name="categorie" value={formData.categorie}   >
										<option value=""></option>
											<option value="Action" >Action</option>
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

									<div className="col-12">
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
								<ul className="form__radio">
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

									

									<div className="col-12">
										<button type="submit" className="form__btn" >Update Film</button>
									</div>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	</main>
        </Fragment>
    )
}

export default UpdateFilm;