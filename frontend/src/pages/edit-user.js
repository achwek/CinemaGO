import React, { Fragment } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

function EditUser(){
    return(
        <Fragment>
            <Header></Header>
            <Sidebar></Sidebar>
            	<main className="main">
		<div className="container-fluid">
			<div className="row">
				<div className="col-12">
					<div className="main__title">
						<h2>Edit user</h2>
					</div>
				</div>
				
				<div className="col-12">
					<div className="profile__content">
						<div className="profile__user">
							<div className="profile__avatar">
								<img src="asset/img/user.svg" alt=""/>
							</div>
							<div className="profile__meta profile__meta--green">
								<h3>John Doe <span>(Approved)</span></h3>
								<span>HotFlix ID: 23562</span>
							</div>
						</div>
						
						<ul className="nav nav-tabs profile__tabs" id="profile__tabs" role="tablist">
							<li className="nav-item">
								<a className="nav-link active" data-toggle="tab" href="#tab-1" role="tab" aria-controls="tab-1" aria-selected="true">Profile</a>
							</li>

							<li className="nav-item">
								<a className="nav-link" data-toggle="tab" href="#tab-2" role="tab" aria-controls="tab-2" aria-selected="false">Comments</a>
							</li>

							<li className="nav-item">
								<a className="nav-link" data-toggle="tab" href="#tab-3" role="tab" aria-controls="tab-3" aria-selected="false">Reviews</a>
							</li>
						</ul>
					
						<div className="profile__mobile-tabs" id="profile__mobile-tabs">
							<div className="profile__mobile-tabs-btn dropdown-toggle" role="navigation" id="mobile-tabs" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								<input type="button" value="Profile"/>
								<span></span>
							</div>

							<div className="profile__mobile-tabs-menu dropdown-menu" aria-labelledby="mobile-tabs">
								<ul className="nav nav-tabs" role="tablist">
									<li className="nav-item"><a className="nav-link active" id="1-tab" data-toggle="tab" href="#tab-1" role="tab" aria-controls="tab-1" aria-selected="true">Profile</a></li>

									<li className="nav-item"><a className="nav-link" id="2-tab" data-toggle="tab" href="#tab-2" role="tab" aria-controls="tab-2" aria-selected="false">Comments</a></li>

									<li className="nav-item"><a className="nav-link" id="3-tab" data-toggle="tab" href="#tab-3" role="tab" aria-controls="tab-3" aria-selected="false">Reviews</a></li>
								</ul>
							</div>
						</div>
						
						<div className="profile__actions">
							<a href="#modal-status3" className="profile__action profile__action--banned open-modal"><i className="icon ion-ios-lock"></i></a>
							<a href="#modal-delete3" className="profile__action profile__action--delete open-modal"><i className="icon ion-ios-trash"></i></a>
						</div>
					</div>
				</div>
			
				<div className="tab-content" id="myTabContent">
					<div className="tab-pane fade show active" id="tab-1" role="tabpanel" aria-labelledby="1-tab">
						<div className="col-12">
							<div className="row">
								<div className="col-12 col-lg-6">
									<form action="#" className="form form--profile">
										<div className="row row--form">
											<div className="col-12">
												<h4 className="form__title">Profile details</h4>
											</div>

											<div className="col-12 col-md-6 col-lg-12 col-xl-6">
												<div className="form__group">
													<label className="form__label" for="username">Username</label>
													<input id="username" type="text" name="username" className="form__input" placeholder="User 123"/>
												</div>
											</div>

											<div className="col-12 col-md-6 col-lg-12 col-xl-6">
												<div className="form__group">
													<label className="form__label" for="email">Email</label>
													<input id="email" type="text" name="email" className="form__input" placeholder="email@email.com"/>
												</div>
											</div>

											<div className="col-12 col-md-6 col-lg-12 col-xl-6">
												<div className="form__group">
													<label className="form__label" for="firstname">First Name</label>
													<input id="firstname" type="text" name="firstname" className="form__input" placeholder="John"/>
												</div>
											</div>

											<div className="col-12 col-md-6 col-lg-12 col-xl-6">
												<div className="form__group">
													<label className="form__label" for="lastname">Last Name</label>
													<input id="lastname" type="text" name="lastname" className="form__input" placeholder="Doe"/>
												</div>
											</div>

											<div className="col-12 col-md-6 col-lg-12 col-xl-6">
												<div className="form__group">
													<label className="form__label" for="subscription">Subscription</label>
													<select className="js-example-basic-single" id="subscription">
														<option value="Basic">Basic</option>
														<option value="Premium">Premium</option>
														<option value="Cinematic">Cinematic</option>
													</select>
												</div>
											</div>

											<div className="col-12 col-md-6 col-lg-12 col-xl-6">
												<div className="form__group">
													<label className="form__label" for="rights">Rights</label>
													<select className="js-example-basic-single" id="rights">
														<option value="User">User</option>
														<option value="Moderator">Moderator</option>
														<option value="Admin">Admin</option>
													</select>
												</div>
											</div>

											<div className="col-12">
												<button className="form__btn" type="button">Save</button>
											</div>
										</div>
									</form>
								</div>
							
								<div className="col-12 col-lg-6">
									<form action="#" className="form form--profile">
										<div className="row row--form">
											<div className="col-12">
												<h4 className="form__title">Change password</h4>
											</div>

											<div className="col-12 col-md-6 col-lg-12 col-xl-6">
												<div className="form__group">
													<label className="form__label" for="oldpass">Old Password</label>
													<input id="oldpass" type="password" name="oldpass" className="form__input"/>
												</div>
											</div>

											<div className="col-12 col-md-6 col-lg-12 col-xl-6">
												<div className="form__group">
													<label className="form__label" for="newpass">New Password</label>
													<input id="newpass" type="password" name="newpass" className="form__input"/>
												</div>
											</div>

											<div className="col-12 col-md-6 col-lg-12 col-xl-6">
												<div className="form__group">
													<label className="form__label" for="confirmpass">Confirm New Password</label>
													<input id="confirmpass" type="password" name="confirmpass" className="form__input"/>
												</div>
											</div>

											<div className="col-12">
												<button className="form__btn" type="button">Change</button>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>	
					</div>

					<div className="tab-pane fade" id="tab-2" role="tabpanel" aria-labelledby="2-tab">
						<div className="col-12">
							<div className="main__table-wrap">
								<table className="main__table">
									<thead>
										<tr>
											<th>ID</th>
											<th>ITEM</th>
											<th>AUTHOR</th>
											<th>TEXT</th>
											<th>LIKE / DISLIKE</th>
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
												<div className="main__table-text"><a href="#">I Dream in Another Language</a></div>
											</td>
											<td>
												<div className="main__table-text">John Doe</div>
											</td>
											<td>
												<div className="main__table-text">Lorem Ipsum is simply dummy text...</div>
											</td>
											<td>
												<div className="main__table-text">12 / 7</div>
											</td>
											<td>
												<div className="main__table-text">24 Oct 2021</div>
											</td>
											<td>
												<div className="main__table-btns">
													<a href="#modal-view" className="main__table-btn main__table-btn--view open-modal">
														<i className="icon ion-ios-eye"></i>
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
												<div className="main__table-text"><a href="#">Benched</a></div>
											</td>
											<td>
												<div className="main__table-text">John Doe</div>
											</td>
											<td>
												<div className="main__table-text">Lorem Ipsum is simply dummy text...</div>
											</td>
											<td>
												<div className="main__table-text">67 / 22</div>
											</td>
											<td>
												<div className="main__table-text">24 Oct 2021</div>
											</td>
											<td>
												<div className="main__table-btns">
													<a href="#modal-view" className="main__table-btn main__table-btn--view open-modal">
														<i className="icon ion-ios-eye"></i>
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
												<div className="main__table-text"><a href="#">Whitney</a></div>
											</td>
											<td>
												<div className="main__table-text">John Doe</div>
											</td>
											<td>
												<div className="main__table-text">Lorem Ipsum is simply dummy text...</div>
											</td>
											<td>
												<div className="main__table-text">44 / 5</div>
											</td>
											<td>
												<div className="main__table-text">24 Oct 2021</div>
											</td>
											<td>
												<div className="main__table-btns">
													<a href="#modal-view" className="main__table-btn main__table-btn--view open-modal">
														<i className="icon ion-ios-eye"></i>
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
												<div className="main__table-text"><a href="#">Blindspotting</a></div>
											</td>
											<td>
												<div className="main__table-text">John Doe</div>
											</td>
											<td>
												<div className="main__table-text">Lorem Ipsum is simply dummy text...</div>
											</td>
											<td>
												<div className="main__table-text">20 / 6</div>
											</td>
											<td>
												<div className="main__table-text">24 Oct 2021</div>
											</td>
											<td>
												<div className="main__table-btns">
													<a href="#modal-view" className="main__table-btn main__table-btn--view open-modal">
														<i className="icon ion-ios-eye"></i>
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
												<div className="main__table-text"><a href="#">I Dream in Another Language</a></div>
											</td>
											<td>
												<div className="main__table-text">John Doe</div>
											</td>
											<td>
												<div className="main__table-text">Lorem Ipsum is simply dummy text...</div>
											</td>
											<td>
												<div className="main__table-text">8 / 132</div>
											</td>
											<td>
												<div className="main__table-text">24 Oct 2021</div>
											</td>
											<td>
												<div className="main__table-btns">
													<a href="#modal-view" className="main__table-btn main__table-btn--view open-modal">
														<i className="icon ion-ios-eye"></i>
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
												<div className="main__table-text"><a href="#">Benched</a></div>
											</td>
											<td>
												<div className="main__table-text">John Doe</div>
											</td>
											<td>
												<div className="main__table-text">Lorem Ipsum is simply dummy text...</div>
											</td>
											<td>
												<div className="main__table-text">6 / 1</div>
											</td>
											<td>
												<div className="main__table-text">24 Oct 2021</div>
											</td>
											<td>
												<div className="main__table-btns">
													<a href="#modal-view" className="main__table-btn main__table-btn--view open-modal">
														<i className="icon ion-ios-eye"></i>
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
												<div className="main__table-text"><a href="#">Whitney</a></div>
											</td>
											<td>
												<div className="main__table-text">John Doe</div>
											</td>
											<td>
												<div className="main__table-text">Lorem Ipsum is simply dummy text...</div>
											</td>
											<td>
												<div className="main__table-text">10 / 0</div>
											</td>
											<td>
												<div className="main__table-text">24 Oct 2021</div>
											</td>
											<td>
												<div className="main__table-btns">
													<a href="#modal-view" className="main__table-btn main__table-btn--view open-modal">
														<i className="icon ion-ios-eye"></i>
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
												<div className="main__table-text"><a href="#">Blindspotting</a></div>
											</td>
											<td>
												<div className="main__table-text">John Doe</div>
											</td>
											<td>
												<div className="main__table-text">Lorem Ipsum is simply dummy text...</div>
											</td>
											<td>
												<div className="main__table-text">13 / 14</div>
											</td>
											<td>
												<div className="main__table-text">24 Oct 2021</div>
											</td>
											<td>
												<div className="main__table-btns">
													<a href="#modal-view" className="main__table-btn main__table-btn--view open-modal">
														<i className="icon ion-ios-eye"></i>
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
												<div className="main__table-text"><a href="#">I Dream in Another Language</a></div>
											</td>
											<td>
												<div className="main__table-text">John Doe</div>
											</td>
											<td>
												<div className="main__table-text">Lorem Ipsum is simply dummy text...</div>
											</td>
											<td>
												<div className="main__table-text">12 / 7</div>
											</td>
											<td>
												<div className="main__table-text">24 Oct 2021</div>
											</td>
											<td>
												<div className="main__table-btns">
													<a href="#modal-view" className="main__table-btn main__table-btn--view open-modal">
														<i className="icon ion-ios-eye"></i>
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
												<div className="main__table-text"><a href="#">Benched</a></div>
											</td>
											<td>
												<div className="main__table-text">John Doe</div>
											</td>
											<td>
												<div className="main__table-text">Lorem Ipsum is simply dummy text...</div>
											</td>
											<td>
												<div className="main__table-text">67 / 22</div>
											</td>
											<td>
												<div className="main__table-text">24 Oct 2021</div>
											</td>
											<td>
												<div className="main__table-btns">
													<a href="#modal-view" className="main__table-btn main__table-btn--view open-modal">
														<i className="icon ion-ios-eye"></i>
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
								<span>10 from 23</span>

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

					<div className="tab-pane fade" id="tab-3" role="tabpanel" aria-labelledby="3-tab">
						<div className="col-12">
							<div className="main__table-wrap">
								<table className="main__table">
									<thead>
										<tr>
											<th>ID</th>
											<th>ITEM</th>
											<th>AUTHOR</th>
											<th>TEXT</th>
											<th>RATING</th>
											<th>LIKE / DISLIKE</th>
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
												<div className="main__table-text"><a href="#">I Dream in Another Language</a></div>
											</td>
											<td>
												<div className="main__table-text">John Doe</div>
											</td>
											<td>
												<div className="main__table-text">Lorem Ipsum is simply dummy text...</div>
											</td>
											<td>
												<div className="main__table-text main__table-text--rate"><i className="icon ion-ios-star"></i> 7.9</div>
											</td>
											<td>
												<div className="main__table-text">12 / 7</div>
											</td>
											<td>
												<div className="main__table-text">24 Oct 2021</div>
											</td>
											<td>
												<div className="main__table-btns">
													<a href="#modal-view2" className="main__table-btn main__table-btn--view open-modal">
														<i className="icon ion-ios-eye"></i>
													</a>
													<a href="#modal-delete2" className="main__table-btn main__table-btn--delete open-modal">
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
												<div className="main__table-text"><a href="#">Benched</a></div>
											</td>
											<td>
												<div className="main__table-text">John Doe</div>
											</td>
											<td>
												<div className="main__table-text">Lorem Ipsum is simply dummy text...</div>
											</td>
											<td>
												<div className="main__table-text main__table-text--rate"><i className="icon ion-ios-star"></i> 8.6</div>
											</td>
											<td>
												<div className="main__table-text">67 / 22</div>
											</td>
											<td>
												<div className="main__table-text">24 Oct 2021</div>
											</td>
											<td>
												<div className="main__table-btns">
													<a href="#modal-view2" className="main__table-btn main__table-btn--view open-modal">
														<i className="icon ion-ios-eye"></i>
													</a>
													<a href="#modal-delete2" className="main__table-btn main__table-btn--delete open-modal">
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
												<div className="main__table-text"><a href="#">Whitney</a></div>
											</td>
											<td>
												<div className="main__table-text">John Doe</div>
											</td>
											<td>
												<div className="main__table-text">Lorem Ipsum is simply dummy text...</div>
											</td>
											<td>
												<div className="main__table-text main__table-text--rate"><i className="icon ion-ios-star"></i> 6.0</div>
											</td>
											<td>
												<div className="main__table-text">44 / 5</div>
											</td>
											<td>
												<div className="main__table-text">24 Oct 2021</div>
											</td>
											<td>
												<div className="main__table-btns">
													<a href="#modal-view2" className="main__table-btn main__table-btn--view open-modal">
														<i className="icon ion-ios-eye"></i>
													</a>
													<a href="#modal-delete2" className="main__table-btn main__table-btn--delete open-modal">
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
												<div className="main__table-text"><a href="#">Blindspotting</a></div>
											</td>
											<td>
												<div className="main__table-text">John Doe</div>
											</td>
											<td>
												<div className="main__table-text">Lorem Ipsum is simply dummy text...</div>
											</td>
											<td>
												<div className="main__table-text main__table-text--rate"><i className="icon ion-ios-star"></i> 9.1</div>
											</td>
											<td>
												<div className="main__table-text">20 / 6</div>
											</td>
											<td>
												<div className="main__table-text">24 Oct 2021</div>
											</td>
											<td>
												<div className="main__table-btns">
													<a href="#modal-view2" className="main__table-btn main__table-btn--view open-modal">
														<i className="icon ion-ios-eye"></i>
													</a>
													<a href="#modal-delete2" className="main__table-btn main__table-btn--delete open-modal">
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
												<div className="main__table-text"><a href="#">I Dream in Another Language</a></div>
											</td>
											<td>
												<div className="main__table-text">John Doe</div>
											</td>
											<td>
												<div className="main__table-text">Lorem Ipsum is simply dummy text...</div>
											</td>
											<td>
												<div className="main__table-text main__table-text--rate"><i className="icon ion-ios-star"></i> 5.5</div>
											</td>
											<td>
												<div className="main__table-text">8 / 132</div>
											</td>
											<td>
												<div className="main__table-text">24 Oct 2021</div>
											</td>
											<td>
												<div className="main__table-btns">
													<a href="#modal-view2" className="main__table-btn main__table-btn--view open-modal">
														<i className="icon ion-ios-eye"></i>
													</a>
													<a href="#modal-delete2" className="main__table-btn main__table-btn--delete open-modal">
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
												<div className="main__table-text"><a href="#">Benched</a></div>
											</td>
											<td>
												<div className="main__table-text">John Doe</div>
											</td>
											<td>
												<div className="main__table-text">Lorem Ipsum is simply dummy text...</div>
											</td>
											<td>
												<div className="main__table-text main__table-text--rate"><i className="icon ion-ios-star"></i> 7.0</div>
											</td>
											<td>
												<div className="main__table-text">6 / 1</div>
											</td>
											<td>
												<div className="main__table-text">24 Oct 2021</div>
											</td>
											<td>
												<div className="main__table-btns">
													<a href="#modal-view2" className="main__table-btn main__table-btn--view open-modal">
														<i className="icon ion-ios-eye"></i>
													</a>
													<a href="#modal-delete2" className="main__table-btn main__table-btn--delete open-modal">
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
												<div className="main__table-text"><a href="#">Whitney</a></div>
											</td>
											<td>
												<div className="main__table-text">John Doe</div>
											</td>
											<td>
												<div className="main__table-text">Lorem Ipsum is simply dummy text...</div>
											</td>
											<td>
												<div className="main__table-text main__table-text--rate"><i className="icon ion-ios-star"></i> 9.0</div>
											</td>
											<td>
												<div className="main__table-text">10 / 0</div>
											</td>
											<td>
												<div className="main__table-text">24 Oct 2021</div>
											</td>
											<td>
												<div className="main__table-btns">
													<a href="#modal-view2" className="main__table-btn main__table-btn--view open-modal">
														<i className="icon ion-ios-eye"></i>
													</a>
													<a href="#modal-delete2" className="main__table-btn main__table-btn--delete open-modal">
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
												<div className="main__table-text"><a href="#">Blindspotting</a></div>
											</td>
											<td>
												<div className="main__table-text">John Doe</div>
											</td>
											<td>
												<div className="main__table-text">Lorem Ipsum is simply dummy text...</div>
											</td>
											<td>
												<div className="main__table-text main__table-text--rate"><i className="icon ion-ios-star"></i> 6.2</div>
											</td>
											<td>
												<div className="main__table-text">13 / 14</div>
											</td>
											<td>
												<div className="main__table-text">24 Oct 2021</div>
											</td>
											<td>
												<div className="main__table-btns">
													<a href="#modal-view2" className="main__table-btn main__table-btn--view open-modal">
														<i className="icon ion-ios-eye"></i>
													</a>
													<a href="#modal-delete2" className="main__table-btn main__table-btn--delete open-modal">
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
												<div className="main__table-text"><a href="#">I Dream in Another Language</a></div>
											</td>
											<td>
												<div className="main__table-text">John Doe</div>
											</td>
											<td>
												<div className="main__table-text">Lorem Ipsum is simply dummy text...</div>
											</td>
											<td>
												<div className="main__table-text main__table-text--rate"><i className="icon ion-ios-star"></i> 7.9</div>
											</td>
											<td>
												<div className="main__table-text">12 / 7</div>
											</td>
											<td>
												<div className="main__table-text">24 Oct 2021</div>
											</td>
											<td>
												<div className="main__table-btns">
													<a href="#modal-view2" className="main__table-btn main__table-btn--view open-modal">
														<i className="icon ion-ios-eye"></i>
													</a>
													<a href="#modal-delete2" className="main__table-btn main__table-btn--delete open-modal">
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
												<div className="main__table-text"><a href="#">Benched</a></div>
											</td>
											<td>
												<div className="main__table-text">John Doe</div>
											</td>
											<td>
												<div className="main__table-text">Lorem Ipsum is simply dummy text...</div>
											</td>
											<td>
												<div className="main__table-text main__table-text--rate"><i className="icon ion-ios-star"></i> 8.6</div>
											</td>
											<td>
												<div className="main__table-text">67 / 22</div>
											</td>
											<td>
												<div className="main__table-text">24 Oct 2021</div>
											</td>
											<td>
												<div className="main__table-btns">
													<a href="#modal-view2" className="main__table-btn main__table-btn--view open-modal">
														<i className="icon ion-ios-eye"></i>
													</a>
													<a href="#modal-delete2" className="main__table-btn main__table-btn--delete open-modal">
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
								<span>10 from 32</span>

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
			</div>
		</div>
	</main>
	
	<div id="modal-view" className="zoom-anim-dialog mfp-hide modal modal--view">
		<div className="comments__autor">
			<img className="comments__avatar" src="asset/img/user.svg" alt=""/>
			<span className="comments__name">John Doe</span>
			<span className="comments__time">30.08.2018, 17:53</span>
		</div>
		<p className="comments__text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
		<div className="comments__actions">
			<div className="comments__rate">
				<span><i className="icon ion-md-thumbs-up"></i>12</span>

				<span>7<i className="icon ion-md-thumbs-down"></i></span>
			</div>
		</div>
	</div>
	
	<div id="modal-delete" className="zoom-anim-dialog mfp-hide modal">
		<h6 className="modal__title">Comment delete</h6>

		<p className="modal__text">Are you sure to permanently delete this comment?</p>

		<div className="modal__btns">
			<button className="modal__btn modal__btn--apply" type="button">Delete</button>
			<button className="modal__btn modal__btn--dismiss" type="button">Dismiss</button>
		</div>
	</div>
	
	<div id="modal-view2" className="zoom-anim-dialog mfp-hide modal modal--view">
		<div className="reviews__autor">
			<img className="reviews__avatar" src="asset/img/user.svg" alt=""/>
			<span className="reviews__name">Best Marvel movie in my opinion</span>
			<span className="reviews__time">24.08.2018, 17:53 by John Doe</span>

			<span className="reviews__rating"><i className="icon ion-ios-star"></i>8.4</span>
		</div>
		<p className="reviews__text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
	</div>
	
	<div id="modal-delete2" className="zoom-anim-dialog mfp-hide modal">
		<h6 className="modal__title">Review delete</h6>

		<p className="modal__text">Are you sure to permanently delete this review?</p>

		<div className="modal__btns">
			<button className="modal__btn modal__btn--apply" type="button">Delete</button>
			<button className="modal__btn modal__btn--dismiss" type="button">Dismiss</button>
		</div>
	</div>

	<div id="modal-status3" className="zoom-anim-dialog mfp-hide modal">
		<h6 className="modal__title">Status change</h6>

		<p className="modal__text">Are you sure about immediately change status?</p>

		<div className="modal__btns">
			<button className="modal__btn modal__btn--apply" type="button">Apply</button>
			<button className="modal__btn modal__btn--dismiss" type="button">Dismiss</button>
		</div>
	</div>
	
	<div id="modal-delete3" className="zoom-anim-dialog mfp-hide modal">
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

export default EditUser;