import $ from 'jQuery'
export function readSelect(selectedCountry, formData, setFormData) {
	$('#country').attr('value', selectedCountry);
	setFormData({ ...formData, country: selectedCountry });
  }