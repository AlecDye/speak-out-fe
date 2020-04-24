import axios from 'axios';
import API_URL from '../config/apiUrl';

axios.defaults.withCredentials = true;

export const LOGGEDIN_START = 'LOGGEDIN_START';
export const LOGGEDIN_SUCCESS = 'LOGGEDIN_SUCCESS';
export const LOGGEDIN_FAILURE = 'LOGGEDIN_FAILURE';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

// export const LOGOUT_START = 'LOGOUT_START';
// export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
// export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

export const loggedIn = (history, location) => {
	return dispatch => {
		dispatch({ type: LOGGEDIN_START });

		axios
			.get(`${API_URL}/user`)
			.then(res => {
				dispatch({ type: LOGGEDIN_SUCCESS, payload: res.data });
				// if (!res.data.authenticated && location.pathname === '/dashboard') {
				// 	history.push('/login');
				// } else if (res.data.authenticated) {

					console.log("action creator is pushing to dashboard (loggedIn)");
					// history.push('/dashboard');
				// }
			})
			.catch(err => {
				let wrongCredentials = true;
				dispatch({ type: LOGGEDIN_FAILURE, payload: wrongCredentials });
			});
	};
};

export const logIn = (user, history) => {
	return dispatch => {
		dispatch({ type: LOGIN_START });

		axios
			.post(`${API_URL}/api/auth/login`, user)
			.then(res => {
				// SETTING THE USER TYPE TO LOCAL STORAGE SO THAT IT DOES NOT GET LOST IF USER RELOADS THE PAGE


				// temp workaround until JWT is ready: set userType to "admin" if username is "admin"
				let userType = "parent";

				if (user.username === "admin")
					{ userType = "admin"; }

				localStorage.setItem('userType', userType);
				
				dispatch({ type: LOGIN_SUCCESS, payload: res.data });
				console.log("action creator is pushing to dashboard (logIn)", res.data);
				localStorage.setItem('token', res.data.token);
				history.push('/dashboard');
			})
			.catch(err => {
				dispatch({ type: LOGIN_FAILURE, payload: 'Error' });
			});
	};
};

// export const logOut = history => {
// 	return dispatch => {
// 		dispatch({ type: LOGOUT_START });

// 		axios
// 			.get(`${API_URL}/api/auth/logout`)
// 			.then(res => {
// 				dispatch({ type: LOGOUT_SUCCESS, payload: res.data });
// 				localStorage.removeItem('userType');
// 				history.push('/');
// 			})
// 			.catch(err => {
// 				dispatch({ type: LOGOUT_FAILURE, payload: 'Error' });
// 			});
// 	};
// };
