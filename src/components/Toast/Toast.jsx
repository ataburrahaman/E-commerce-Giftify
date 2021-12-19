import { Link } from 'react-router-dom';

import './Toast.css';
export const Toast = ({ message, type }) => {
	
	return type === 'Login' ? (
		<div className={`toast ${message ? 'show-toast' : ''}`}>
			You are not logged in, Please{' '}
			<Link to='/login' className='toast-login'>
				LOGIN
			</Link>
		</div>
	) : (
		<div className={`toast ${type ? 'show-toast' : ''}`}>
			{message}{' '}
		</div>
	);
};