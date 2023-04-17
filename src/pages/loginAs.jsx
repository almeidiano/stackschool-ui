import { Link } from 'react-router-dom';
import '../assets/css/loginAs.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function LoginAs() {
    return (
    <main>
		<div className="login-as-box">
			<div className="login-title-img">
				<img src="./main-logo.png" />
			</div>
			<div className="login-as-title">
				<h3>Fazer Login como:</h3>
			</div>
			<div className="loginAs-content-container">
				<div className="loginAs-content">
                    <Link to='/student/login' className='btn btn-primary'>ALUNO(A)</Link>
                    <Link to='/teacher/login' className='btn btn-primary'>PROFESSOR(A)</Link>
					<Link to='/admin/login' className='btn btn-primary'>ADMINISTRADOR(A)</Link>
				</div>
			</div>
		</div>
	</main>
    )
}