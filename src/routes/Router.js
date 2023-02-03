import { Home } from '../components/Home';
import { Profile } from '../components/Profile';
import Register from '../components/Register';

const routes = {
	'/': Register(onNavigate),
	'/profile': Profile(onNavigate),
};

function onNavigate (pathname) {
	const rootDiv = document.getElementById('root');

	window.history.pushState({}, pathname, window.location.origin + pathname);
	while (rootDiv.firstChild) {
		rootDiv.removeChild(rootDiv.firstChild);
	}
	rootDiv.appendChild(routes[pathname]());
};

const component = routes[window.location.pathname];

window.onpopstate = () => {
	const rootDiv = document.getElementById('root');
	while (rootDiv.firstChild) {
		rootDiv.removeChild(rootDiv.firstChild);
	}
	rootDiv.appendChild(component);
};

window.onload = () => {
	const rootDiv = document.getElementById('root');
	while (rootDiv.firstChild) {
		rootDiv.removeChild(rootDiv.firstChild);
	}
	rootDiv.appendChild(component);
};
