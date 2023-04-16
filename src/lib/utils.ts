export function formatDate(date: Date) {
	const newDate = new Date(date); // make sure the date field to be formatted is in a date format
	return new Intl.DateTimeFormat('en', { dateStyle: 'full' }).format(newDate);
}
