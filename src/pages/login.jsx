import Title from '../components/title';
import '../assets/css/login.css';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Login(props) {
	return (
		<main>
			<div className="login-box">
				<Title title={props.title} />
				<div id="login-content">

					<div className="login-form">
						<div className="login-header">
							<img src="../main-logo.png" />

							<span style={{ color: '#6c757d' }}>Seja Bem-Vindo(a)!</span>

							<div className="form-login">
								<form>

									{
										props.admin ? 
										<div className="input">
											<div className="mail">
												<FontAwesomeIcon icon={faEnvelope} />
											</div>
											<div className="code_admin">
												<FontAwesomeIcon icon={faLock} />
											</div>
											<input type="email" required placeholder="Digite seu Email" />
											<input type="password" required placeholder="Digite sua Senha" />
										</div>
										: 

										<div className="input">
											<div className="code">
												<FontAwesomeIcon icon={faLock} />
											</div>
											<input type="text" maxLength="9" required placeholder="Digite seu Código" />
										</div>
									}

									<div className="did-forget" style={{ display: 'flex' }}>
										<a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal">Esqueceu sua senha?</a>
									</div>

									<div className="form-login-bt">
										<button className="btn btn-primary">Entrar</button>
									</div>
								</form>

							</div>

						</div>
					</div>

					<div className="login-illustration" style={{ backgroundImage: `url(${props.illustration})` }}></div>

				</div>
			</div>
		</main>
	)
}