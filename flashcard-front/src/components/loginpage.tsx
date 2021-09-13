import React from 'react'
import Login from './login';

const LoginPage:React.FC<unknown> = () => {
	return (
		<div className="container">
			<div className="row">
				<div className="col-6 col-md-4">
				</div>
				<div className="col-6 col-md-4">
					<Login />
				</div>
				<div className="col-6 col-md-4">
				</div>
			</div>
		</div>
	);
}

export default LoginPage;
