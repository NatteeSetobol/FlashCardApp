import react from 'react'
import { useCookies } from 'react-cookie'

let NavBar:React.FC<unknown> = (props) => {
	const [cookies, setCookie] = useCookies();
	const [isLoggedIn, setIsLoggedIn] = react.useState(false);

	react.useEffect(()=> {

		console.log(cookies);
		if (cookies.JSESSIONID)
		{
			
			setIsLoggedIn(true);
		}		
	}, [])
	
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
			<div className="container-fluid">
				<div className="navbar-header">
					<a className="navbar-brand" href="#">Navbar</a>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
				</div>
				<div className="nav navbar-nav" id="navbarSupportedContent">
					<ul className="nav-nav mr-auto">
						<li className="nav-link">
							<a className="nav-link" href="signup">
								{ 
									isLoggedIn ? ( 
									<>Sign out</> 
									)   
									: (<>Register</> ) 
								}
							</a>
						</li>
					</ul>
				</div>

			</div>
		</nav>
	);
}

export default NavBar;
