import React, { Fragment } from 'react'

function Header() {
  return (
    <Fragment>
        <header className="header">
		<div className="header__content">
			<a href="/" className="header__logo">
				<img src="asset/img/logo.svg" alt=""/>
			</a>
		
			<button className="header__btn" type="button">
				<span></span>
				<span></span>
				<span></span>
			</button>
		</div>
	</header>
    </Fragment>
  )
}

export default Header