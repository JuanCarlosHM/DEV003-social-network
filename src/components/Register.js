import { register } from '../lib/firebase';

export default (onNavigate) => 
{
	const viewContainer = document.createElement('div');
	const form = document.createElement('form');
	const labelForEmail = document.createElement('label');
	const inputForEmail = document.createElement('input');
	const labelForPassword = document.createElement('label');
	const inputForPassword = document.createElement('input');
	const inputForSend = document.createElement('input');
	const errorMessage = document.createElement('p');
	const succcessMessage = document.createElement('p');

	form.setAttribute('id', 'form');
	labelForEmail.setAttribute('id', 'labelForEmail');
	inputForEmail.setAttribute('id', 'inputForEmail');
	labelForPassword.setAttribute('id', 'labelForPassword');
	inputForPassword.setAttribute('id', 'inputForPassword');
	inputForSend.setAttribute('id', 'inputForSend');
	errorMessage.setAttribute('id', 'errorMessage');
	succcessMessage.setAttribute('id', 'succcessMessage');
	inputForSend.setAttribute('type', 'submit');

	form.append(
		labelForEmail,
		inputForEmail,
		labelForPassword,
		labelForPassword,
		inputForPassword,
		inputForSend,
		errorMessage,
		succcessMessage,
	);

	viewContainer.appendChild(form);

	form.addEventListener('submit', (e) => {
		e.preventDefault();

		register(inputForEmail.value, inputForPassword.value)
			.then((response) => {
                console.log(response)
				succcessMessage.innerHTML = response.user.email;
			})
			.catch((e) => {
				errorMessage.innerHTML = e.message;
			});
	});

	return viewContainer;
};
