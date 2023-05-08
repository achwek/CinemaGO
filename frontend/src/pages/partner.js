import React, { Fragment , useState,useEffect } from "react";
import axios from 'axios'


export default function Partner(){
    const urlPartner="http://localhost:5000/api/partner"

    const [formData, setFormData] = useState({
		
		partner:"",
		
	  });
    //Partner
const [partners, setPartners] = useState([]);

// Add Partner
const [dataPartner, setDataPartner] = useState({
   firstName: "",
   lastName: "",
   email: "",
});
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
 //select country 
 useEffect(() => {
    const fetchData = async () => {
         const responsePart = await axios.get(urlPartner);
         setPartners(responsePart.data);
    }
    fetchData();
  }, []);

    return(
        <>
        	
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
        </>
    )
}