import { register } from '../src/lib/firebase';
import Register from '../src/components/Register';

jest.mock('../src/lib/firebase');

function tick() {
    return new Promise((resolve) => {
      setTimeout(resolve, 0);
    });
  }


describe('first Test for Register', () => {
	let viewContainer;
	let form;
	let labelForEmail;
	let inputForEmail;
	let labelForPassword;
	let inputForPassword;
	let inputForSend;
	let errorMessage;
	let succcessMessage;

	beforeEach(() => {
		document.body.appendChild(Register());
		viewContainer = document.getElementById('viewContainer');
		form = document.getElementById('form');
		labelForEmail = document.getElementById('labelForEmail');
		inputForEmail = document.getElementById('inputForEmail');
		labelForPassword = document.getElementById('labelForPassword');
		inputForPassword = document.getElementById('inputForPassword');
		inputForSend = document.getElementById('inputForSend');
		errorMessage = document.getElementById('errorMessage');
		succcessMessage = document.getElementById('succcessMessage');
	});

	it('Debería mostrar un error', async () => {
		register.mockImplementationOnce((email, password) => {
			return Promise.reject(
				new Error('Firebase: Error (auth/invalid-email).'),
			);
		});
        
		inputForSend.click();
        await tick();
		expect(errorMessage.innerHTML).toBe(
			'Firebase: Error (auth/invalid-email).'
		);
	});

    it('Debería mostrar exito', async () => 
    {
		register.mockImplementationOnce((email, password) => {
			return Promise.resolve({
                user: { userCredential: 12345, email: email}
            });
		});

        inputForEmail.value = 'email@verify.com';
        inputForPassword.value = '123456';
        
		inputForSend.click();
        await tick();
		expect(succcessMessage.innerHTML).toBe(
			'email@verify.com'
		);
	});
});
