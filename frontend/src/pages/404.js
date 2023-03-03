import React, { Fragment } from "react";

function Error(){
    return(
        <Fragment>
            <div className="page-404 section--bg" data-bg="asset/img/section/section.jpg">
		<div className="container">
			<div className="row">
				<div className="col-12">
					<div className="page-404__wrap">
						<div className="page-404__content">
							<h1 className="page-404__title">404</h1>
							<p className="page-404__text">The page you are looking for not available!</p>
							<a href="/" className="page-404__btn">go back</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
        </Fragment>
    )
}

export default Error;