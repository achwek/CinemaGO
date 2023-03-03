import React, { Fragment } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

function Users(){
    return(
        <Fragment>
            <Header></Header>
            <Sidebar></Sidebar>
            	<main className="main">
		<div className="container-fluid">
			<div className="row">
				<div className="col-12">
					<div className="main__title">
						<h2>Users</h2>

						<span className="main__title-stat">3,702 Total</span>

						<div className="main__title-wrap">
							<div className="filter" id="filter__sort">
								<span className="filter__item-label">Sort by:</span>

								<div className="filter__item-btn dropdown-toggle" role="navigation" id="filter-sort" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									<input type="button" value="Date created"/>
									<span></span>
								</div>

								<ul className="filter__item-menu dropdown-menu scrollbar-dropdown" aria-labelledby="filter-sort">
									<li>Date created</li>
									<li>Pricing plan</li>
									<li>Status</li>
								</ul>
							</div>
							
							<form action="#" className="main__title-form">
								<input type="text" placeholder="Find user.."/>
								<button type="button">
									<i className="icon ion-ios-search"></i>
								</button>
							</form>
							
						</div>
					</div>
				</div>
			
				<div className="col-12">
					<div className="main__table-wrap">
						<table className="main__table">
							<thead>
								<tr>
									<th>ID</th>
									<th>BASIC INFO</th>
									<th>USERNAME</th>
									<th>PRICING PLAN</th>
									<th>COMMENTS</th>
									<th>REVIEWS</th>
									<th>STATUS</th>
									<th>CRAETED DATE</th>
									<th>ACTIONS</th>
								</tr>
							</thead>

							<tbody>
								<tr>
									<td>
										<div className="main__table-text">23</div>
									</td>
									<td>
										<div className="main__user">
											<div className="main__avatar">
												<img src="asset/img/user.svg" alt=""/>
											</div>
											<div className="main__meta">
												<h3>John Doe</h3>
												<span>email@email.com</span>
											</div>
										</div>
									</td>
									<td>
										<div className="main__table-text">Username</div>
									</td>
									<td>
										<div className="main__table-text">Premium</div>
									</td>
									<td>
										<div className="main__table-text">13</div>
									</td>
									<td>
										<div className="main__table-text">1</div>
									</td>
									<td>
										<div className="main__table-text main__table-text--green">Approved</div>
									</td>
									<td>
										<div className="main__table-text">24 Oct 2021</div>
									</td>
									<td>
										<div className="main__table-btns">
											<a href="#modal-status" className="main__table-btn main__table-btn--banned open-modal">
												<i className="icon ion-ios-lock"></i>
											</a>
											<a href="edit-user.html" className="main__table-btn main__table-btn--edit">
												<i className="icon ion-ios-create"></i>
											</a>
											<a href="#modal-delete" className="main__table-btn main__table-btn--delete open-modal">
												<i className="icon ion-ios-trash"></i>
											</a>
										</div>
									</td>
								</tr>
								<tr>
									<td>
										<div className="main__table-text">24</div>
									</td>
									<td>
										<div className="main__user">
											<div className="main__avatar">
												<img src="asset/img/user.svg" alt=""/>
											</div>
											<div className="main__meta">
												<h3>John Doe</h3>
												<span>email@email.com</span>
											</div>
										</div>
									</td>
									<td>
										<div className="main__table-text">Username</div>
									</td>
									<td>
										<div className="main__table-text">Free</div>
									</td>
									<td>
										<div className="main__table-text">1</div>
									</td>
									<td>
										<div className="main__table-text">15</div>
									</td>
									<td>
										<div className="main__table-text main__table-text--green">Approved</div>
									</td>
									<td>
										<div className="main__table-text">24 Oct 2021</div>
									</td>
									<td>
										<div className="main__table-btns">
											<a href="#modal-status" className="main__table-btn main__table-btn--banned open-modal">
												<i className="icon ion-ios-lock"></i>
											</a>
											<a href="edit-user.html" className="main__table-btn main__table-btn--edit">
												<i className="icon ion-ios-create"></i>
											</a>
											<a href="#modal-delete" className="main__table-btn main__table-btn--delete open-modal">
												<i className="icon ion-ios-trash"></i>
											</a>
										</div>
									</td>
								</tr>
								<tr>
									<td>
										<div className="main__table-text">25</div>
									</td>
									<td>
										<div className="main__user">
											<div className="main__avatar">
												<img src="asset/img/user.svg" alt=""/>
											</div>
											<div className="main__meta">
												<h3>John Doe</h3>
												<span>email@email.com</span>
											</div>
										</div>
									</td>
									<td>
										<div className="main__table-text">Username</div>
									</td>
									<td>
										<div className="main__table-text">Premium</div>
									</td>
									<td>
										<div className="main__table-text">6</div>
									</td>
									<td>
										<div className="main__table-text">6</div>
									</td>
									<td>
										<div className="main__table-text main__table-text--green">Approved</div>
									</td>
									<td>
										<div className="main__table-text">24 Oct 2021</div>
									</td>
									<td>
										<div className="main__table-btns">
											<a href="#modal-status" className="main__table-btn main__table-btn--banned open-modal">
												<i className="icon ion-ios-lock"></i>
											</a>
											<a href="edit-user.html" className="main__table-btn main__table-btn--edit">
												<i className="icon ion-ios-create"></i>
											</a>
											<a href="#modal-delete" className="main__table-btn main__table-btn--delete open-modal">
												<i className="icon ion-ios-trash"></i>
											</a>
										</div>
									</td>
								</tr>
								<tr>
									<td>
										<div className="main__table-text">26</div>
									</td>
									<td>
										<div className="main__user">
											<div className="main__avatar">
												<img src="asset/img/user.svg" alt=""/>
											</div>
											<div className="main__meta">
												<h3>John Doe</h3>
												<span>email@email.com</span>
											</div>
										</div>
									</td>
									<td>
										<div className="main__table-text">Username</div>
									</td>
									<td>
										<div className="main__table-text">Free</div>
									</td>
									<td>
										<div className="main__table-text">11</div>
									</td>
									<td>
										<div className="main__table-text">15</div>
									</td>
									<td>
										<div className="main__table-text main__table-text--red">Banned</div>
									</td>
									<td>
										<div className="main__table-text">24 Oct 2021</div>
									</td>
									<td>
										<div className="main__table-btns">
											<a href="#modal-status" className="main__table-btn main__table-btn--banned open-modal">
												<i className="icon ion-ios-lock"></i>
											</a>
											<a href="edit-user.html" className="main__table-btn main__table-btn--edit">
												<i className="icon ion-ios-create"></i>
											</a>
											<a href="#modal-delete" className="main__table-btn main__table-btn--delete open-modal">
												<i className="icon ion-ios-trash"></i>
											</a>
										</div>
									</td>
								</tr>
								<tr>
									<td>
										<div className="main__table-text">27</div>
									</td>
									<td>
										<div className="main__user">
											<div className="main__avatar">
												<img src="asset/img/user.svg" alt=""/>
											</div>
											<div className="main__meta">
												<h3>John Doe</h3>
												<span>email@email.com</span>
											</div>
										</div>
									</td>
									<td>
										<div className="main__table-text">Username</div>
									</td>
									<td>
										<div className="main__table-text">Basic</div>
									</td>
									<td>
										<div className="main__table-text">0</div>
									</td>
									<td>
										<div className="main__table-text">0</div>
									</td>
									<td>
										<div className="main__table-text main__table-text--green">Approved</div>
									</td>
									<td>
										<div className="main__table-text">24 Oct 2021</div>
									</td>
									<td>
										<div className="main__table-btns">
											<a href="#modal-status" className="main__table-btn main__table-btn--banned open-modal">
												<i className="icon ion-ios-lock"></i>
											</a>
											<a href="edit-user.html" className="main__table-btn main__table-btn--edit">
												<i className="icon ion-ios-create"></i>
											</a>
											<a href="#modal-delete" className="main__table-btn main__table-btn--delete open-modal">
												<i className="icon ion-ios-trash"></i>
											</a>
										</div>
									</td>
								</tr>
								<tr>
									<td>
										<div className="main__table-text">28</div>
									</td>
									<td>
										<div className="main__user">
											<div className="main__avatar">
												<img src="asset/img/user.svg" alt=""/>
											</div>
											<div className="main__meta">
												<h3>John Doe</h3>
												<span>email@email.com</span>
											</div>
										</div>
									</td>
									<td>
										<div className="main__table-text">Username</div>
									</td>
									<td>
										<div className="main__table-text">Free</div>
									</td>
									<td>
										<div className="main__table-text">2</div>
									</td>
									<td>
										<div className="main__table-text">1</div>
									</td>
									<td>
										<div className="main__table-text main__table-text--green">Approved</div>
									</td>
									<td>
										<div className="main__table-text">24 Oct 2021</div>
									</td>
									<td>
										<div className="main__table-btns">
											<a href="#modal-status" className="main__table-btn main__table-btn--banned open-modal">
												<i className="icon ion-ios-lock"></i>
											</a>
											<a href="edit-user.html" className="main__table-btn main__table-btn--edit">
												<i className="icon ion-ios-create"></i>
											</a>
											<a href="#modal-delete" className="main__table-btn main__table-btn--delete open-modal">
												<i className="icon ion-ios-trash"></i>
											</a>
										</div>
									</td>
								</tr>
								<tr>
									<td>
										<div className="main__table-text">29</div>
									</td>
									<td>
										<div className="main__user">
											<div className="main__avatar">
												<img src="asset/img/user.svg" alt=""/>
											</div>
											<div className="main__meta">
												<h3>John Doe</h3>
												<span>email@email.com</span>
											</div>
										</div>
									</td>
									<td>
										<div className="main__table-text">Username</div>
									</td>
									<td>
										<div className="main__table-text">Cinematic</div>
									</td>
									<td>
										<div className="main__table-text">65</div>
									</td>
									<td>
										<div className="main__table-text">0</div>
									</td>
									<td>
										<div className="main__table-text main__table-text--green">Approved</div>
									</td>
									<td>
										<div className="main__table-text">24 Oct 2021</div>
									</td>
									<td>
										<div className="main__table-btns">
											<a href="#modal-status" className="main__table-btn main__table-btn--banned open-modal">
												<i className="icon ion-ios-lock"></i>
											</a>
											<a href="edit-user.html" className="main__table-btn main__table-btn--edit">
												<i className="icon ion-ios-create"></i>
											</a>
											<a href="#modal-delete" className="main__table-btn main__table-btn--delete open-modal">
												<i className="icon ion-ios-trash"></i>
											</a>
										</div>
									</td>
								</tr>
								<tr>
									<td>
										<div className="main__table-text">30</div>
									</td>
									<td>
										<div className="main__user">
											<div className="main__avatar">
												<img src="asset/img/user.svg" alt=""/>
											</div>
											<div className="main__meta">
												<h3>John Doe</h3>
												<span>email@email.com</span>
											</div>
										</div>
									</td>
									<td>
										<div className="main__table-text">Username</div>
									</td>
									<td>
										<div className="main__table-text">Premium</div>
									</td>
									<td>
										<div className="main__table-text">0</div>
									</td>
									<td>
										<div className="main__table-text">0</div>
									</td>
									<td>
										<div className="main__table-text main__table-text--red">Banned</div>
									</td>
									<td>
										<div className="main__table-text">24 Oct 2021</div>
									</td>
									<td>
										<div className="main__table-btns">
											<a href="#modal-status" className="main__table-btn main__table-btn--banned open-modal">
												<i className="icon ion-ios-lock"></i>
											</a>
											<a href="edit-user.html" className="main__table-btn main__table-btn--edit">
												<i className="icon ion-ios-create"></i>
											</a>
											<a href="#modal-delete" className="main__table-btn main__table-btn--delete open-modal">
												<i className="icon ion-ios-trash"></i>
											</a>
										</div>
									</td>
								</tr>
								<tr>
									<td>
										<div className="main__table-text">31</div>
									</td>
									<td>
										<div className="main__user">
											<div className="main__avatar">
												<img src="asset/img/user.svg" alt=""/>
											</div>
											<div className="main__meta">
												<h3>John Doe</h3>
												<span>email@email.com</span>
											</div>
										</div>
									</td>
									<td>
										<div className="main__table-text">Username</div>
									</td>
									<td>
										<div className="main__table-text">Premium</div>
									</td>
									<td>
										<div className="main__table-text">13</div>
									</td>
									<td>
										<div className="main__table-text">1</div>
									</td>
									<td>
										<div className="main__table-text main__table-text--green">Approved</div>
									</td>
									<td>
										<div className="main__table-text">24 Oct 2021</div>
									</td>
									<td>
										<div className="main__table-btns">
											<a href="#modal-status" className="main__table-btn main__table-btn--banned open-modal">
												<i className="icon ion-ios-lock"></i>
											</a>
											<a href="edit-user.html" className="main__table-btn main__table-btn--edit">
												<i className="icon ion-ios-create"></i>
											</a>
											<a href="#modal-delete" className="main__table-btn main__table-btn--delete open-modal">
												<i className="icon ion-ios-trash"></i>
											</a>
										</div>
									</td>
								</tr>
								<tr>
									<td>
										<div className="main__table-text">32</div>
									</td>
									<td>
										<div className="main__user">
											<div className="main__avatar">
												<img src="asset/img/user.svg" alt=""/>
											</div>
											<div className="main__meta">
												<h3>John Doe</h3>
												<span>email@email.com</span>
											</div>
										</div>
									</td>
									<td>
										<div className="main__table-text">Username</div>
									</td>
									<td>
										<div className="main__table-text">Free</div>
									</td>
									<td>
										<div className="main__table-text">1</div>
									</td>
									<td>
										<div className="main__table-text">15</div>
									</td>
									<td>
										<div className="main__table-text main__table-text--red">Banned</div>
									</td>
									<td>
										<div className="main__table-text">24 Oct 2021</div>
									</td>
									<td>
										<div className="main__table-btns">
											<a href="#modal-status" className="main__table-btn main__table-btn--banned open-modal">
												<i className="icon ion-ios-lock"></i>
											</a>
											<a href="edit-user.html" className="main__table-btn main__table-btn--edit">
												<i className="icon ion-ios-create"></i>
											</a>
											<a href="#modal-delete" className="main__table-btn main__table-btn--delete open-modal">
												<i className="icon ion-ios-trash"></i>
											</a>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			
				<div className="col-12">
					<div className="paginator-wrap">
						<span>10 from 3 702</span>

						<ul className="paginator">
							<li className="paginator__item paginator__item--prev">
								<a href="#"><i className="icon ion-ios-arrow-back"></i></a>
							</li>
							<li className="paginator__item"><a href="#">1</a></li>
							<li className="paginator__item paginator__item--active"><a href="#">2</a></li>
							<li className="paginator__item"><a href="#">3</a></li>
							<li className="paginator__item"><a href="#">4</a></li>
							<li className="paginator__item paginator__item--next">
								<a href="#"><i className="icon ion-ios-arrow-forward"></i></a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</main>
	
	<div id="modal-status" className="zoom-anim-dialog mfp-hide modal">
		<h6 className="modal__title">Status change</h6>

		<p className="modal__text">Are you sure about immediately change status?</p>

		<div className="modal__btns">
			<button className="modal__btn modal__btn--apply" type="button">Apply</button>
			<button className="modal__btn modal__btn--dismiss" type="button">Dismiss</button>
		</div>
	</div>
	
	<div id="modal-delete" className="zoom-anim-dialog mfp-hide modal">
		<h6 className="modal__title">User delete</h6>

		<p className="modal__text">Are you sure to permanently delete this user?</p>

		<div className="modal__btns">
			<button className="modal__btn modal__btn--apply" type="button">Delete</button>
			<button className="modal__btn modal__btn--dismiss" type="button">Dismiss</button>
		</div>
	</div>
        </Fragment>
    )
}

export default Users;