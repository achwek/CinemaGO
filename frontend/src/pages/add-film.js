import React, { Fragment , useState } from "react";
import axios from 'axios'
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";


function AddFilm(){
	const [formData, setFormData] = useState({
		title: "",
		description: "",
		country: "",
		cinema: "",
		categorie: "",
		type: "",
		timestart: "",
		timeend: "",
		age: "",
		image: "",
		video: "",
	  });
	
	  const handleSubmit = async(e) => {
		// Prevent the default submit and page reload
		e.preventDefault();
	
		// Use destructuring to get form data fields from state
		const {
		  title,
		  description,
		  country,
		  cinema,
		  categorie,
		  type,
		  timestart,
		  timeend,
		  age,
		  image,
		  video,
		} = formData;
	
		// Send post request with form data
		await axios.post("http://localhost:5000/api/films", formData)
		.then(response => {
		  console.log(response);
		  // Handle response
		})
		.catch(error => {
		  console.error(error);
		  // Handle error
		});
	  };
	
	  const onChange = (e) => {
		setFormData((prevState) => ({
		  ...prevState,
		  [e.target.name]: e.target.value,
		}));
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
											 value={formData.image} onChange={onChange}
							/>
											<img id="form__img" src="#" alt=" "/>
										</div>
									</div>
								</div>
							</div>

							<div className="col-12 col-md-7 form__content">
								<div className="row row--form">
									<div className="col-12">
										<input type="text" className="form__input" placeholder="Title" name="title" value={formData.title}  onChange={onChange}/>
									</div>

									<div className="col-12">
										<textarea id="text" name="description" className="form__textarea" placeholder="Description" value={formData.description}  onChange={onChange}></textarea>
									</div>

									<div className="col-12 col-sm-6 col-lg-3">
										<input type="text" className="form__input" placeholder="Date Start" name="timestart" value={formData.timestart}  onChange={onChange}/>
									</div>

									<div className="col-12 col-sm-6 col-lg-3">
										<input type="text" className="form__input" placeholder="Date End" name="timeend" value={formData.timeend}  onChange={onChange}/>
									</div>

									

									<div className="col-12 col-sm-6 col-lg-3">
										<input type="text" className="form__input" placeholder="Age" name="age" value={formData.age}  onChange={onChange}/>
									</div>

									<div className="col-12 col-lg-6">
										<select className="js-example-basic-multiple" id="country" multiple="multiple" name="country" onSelect={formData.country}  onChange={onChange}>
										<option value="Afghanistan">Tunis</option>
										<option value="Afghanistan">Ben Arous</option>
										<option value="Afghanistan">Soussa</option>
										<option value="Afghanistan">Mounastir</option>
										<option value="Afghanistan">Mahdia</option>
										<option value="Afghanistan">Bizart</option>

											
										</select>
									</div>
									<div className="col-12  col-lg-6">
										<select className="js-example-basic-single" id="cinema"placeholder="Cinema" name="cinema" onSelect={formData.cinema}  onChange={onChange}>
											<option value=""></option>
											<option value="FullHD">CineMadart</option>
											<option value="HD">Cinéma Amilcar Hannibal</option>
											<option value="FullHD">CineMadart</option>
											<option value="HD">Cinéma Amilcar Hannibal</option>
										</select>
									</div>
									<div className="col-12 col-lg-6">
										<select className="js-example-basic-multiple" id="genre" multiple="multiple" name="categorie" onSelect={formData.categorie}  onChange={onChange}>
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

									<div className="col-12">
										<div className="form__gallery">
											<label id="gallery1" htmlFor="form__gallery-upload">Upload photos Stars</label>
											<input data-name="#gallery1" id="form__gallery-upload" name="gallery"
                                             className="form__gallery-upload" type="file" accept=".png, .jpg, .jpeg" multiple/>
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
										<input id="type1" type="radio" name="type" checked="true" value={formData.type}  onChange={onChange}/>
										<label htmlFor="type1">Movie</label>
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
											 value={formData.video}  onChange={onChange}/>
										</div>
									</div>

									<div className="col-12">
										<input type="text" className="form__input" placeholder="Or add a link"/>
									</div>

									<div className="col-12">
										<button type="submit" className="form__btn" >Add Film</button>
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

export default AddFilm;