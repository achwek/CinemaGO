export function formatDate(dateString) {
	const date = new Date(dateString);
	const options = { day: '2-digit', month: 'long', year: 'numeric' };
	const frenchLocale = 'fr-FR';
	return date.toLocaleDateString(frenchLocale, options);
  }