import { useHistory } from "react-router-dom"
import React, {useEffect,useState} from "react";
import { Member} from "./../models/member"
import { apiLogin } from "../remote/loginApi"
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { useLoginMutation } from "../services/login"
import '../css/login.css'

const Login:React.FC<unknown> = () => {
	const [ userEmail, setUserEmail] = useState<string>('');
	const [ userPassword, setUserPassword] = useState<string>('');
	const [  Login, { data, error,isLoading, isSuccess, isError }  ] = useLoginMutation()
	const [ didClick, setDidClick] = useState<boolean>(false);
	let history = useHistory();

	useEffect(()=> {
		setDidClick(false);
	}, [])


	const handleClick = () => {
		//checkLogin();
		const member = new Member(0,userEmail, userPassword);
        Login(member);
		setUserEmail("");
		setUserPassword("");
		setDidClick(true);
	};

	const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>)=> {
		setUserEmail(e.target.value);
	}

	const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUserPassword(e.target.value);
	}

	if (isSuccess)
	{
		if (data)
		{
			if (!data.error)
			{
				history.push("/index");
			} else {
				if (didClick)
				{
					toast.error(data.error);
					setDidClick(false);
				}
			}
		}
	}

	return (
	
		<div id="main">
				<div>

					<div className="comp">
						<div className="compbox">
							<label className="col-form-label col-form-label-sm">
								Username:
							</label>
						</div>
						<div className="compbox">
							<input type="name" className="form-control form-control-sm" id="email" placeholder="username" onChange={onEmailChange} value={userEmail} /> 
						</div>
					</div>

					<div className="comp">
						<div className="compbox">
							<label className="col-form-label col-form-label-sm">
								Password :
							</label>
						</div>
						<div className="compbox">
							<input type="password" className="form-control form-control-sm" id="password" placeholder="password" onChange={onPasswordChange} value={userPassword}  /> 
						</div>
					</div>
				</div>


				<div className="comp">
					<div className="compbox blankspot">
					</div>
					<div className="compbox">
						 <button type="submit" className="btn btn-primary pull-right" onClick={handleClick} >Submit</button>
					</div>
				</div>

                { isError ? (
            
						<> Sorry, an Error has occured.   </>
					) : isSuccess ? (
						<> 					   
						</>
					) : isLoading ? (
						<div>
							loading...
					     </div>
					): null
                }

		</div>
		   );
}

export default Login;
