import React, { Fragment } from 'react'

function forgotPassword() {
  return (
    <Fragment>
        <div className="sign section--bg" data-bg="asset/img/section/section.jpg">
		<div className="container">
			<div className="row">
				<div className="col-12">
					<div className="sign__content">
						<form action="#" className="sign__form">
							<a href="/" className="sign__logo">
								<img src="asset/img/logo.svg" alt=""/>
							</a>

							<div className="sign__group">
								<input type="text" className="sign__input" placeholder="Email"/>
							</div>

							<div className="sign__group sign__group--checkbox">
								<input id="remember" name="remember" type="checkbox" checked="checked"/>
								<label for="remember">I agree to the <a href="#">Privacy Policy</a></label>
							</div>
							
							<button className="sign__btn" type="button">Send</button>

							<span className="sign__text">We will send a password to your Email</span>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
    </Fragment>
  )
}

export default forgotPassword;