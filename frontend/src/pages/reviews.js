import React, { Fragment } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

function Reviews(){
    return(
        <Fragment>
            <Header></Header>
            <Sidebar></Sidebar>
            	<main className="main">
		<div className="container-fluid">
			<div className="row">
				<div className="col-12">
					<div className="main__title">
						<h2>Reviews</h2>

						<span className="main__title-stat">9,071 Total</span>

						<div className="main__title-wrap">
							<div className="filter" id="filter__sort">
								<span className="filter__item-label">Sort by:</span>

								<div className="filter__item-btn dropdown-toggle" role="navigation" id="filter-sort" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									<input type="button" value="Date created"/>
									<span></span>
								</div>

								<ul className="filter__item-menu dropdown-menu scrollbar-dropdown" aria-labelledby="filter-sort">
									<li>Date created</li>
									<li>Rating</li>
								</ul>
							</div>
						
							<form action="#" className="main__title-form">
								<input type="text" placeholder="Key word.."/>
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
										<div className="main__table-text">Brian Cranston</div>
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
										<div className="main__table-text">Jesse Plemons</div>
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
										<div className="main__table-text">Matt Jones</div>
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
										<div className="main__table-text">Tess Harper</div>
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
										<div className="main__table-text">Jesse Plemons</div>
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
										<div className="main__table-text">Jonathan Banks</div>
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
										<div className="main__table-text">Brian Cranston</div>
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
						<span>10 from 9 071</span>

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
	
	<div id="modal-view" className="zoom-anim-dialog mfp-hide modal modal--view">
		<div className="reviews__autor">
			<img className="reviews__avatar" src="asset/img/user.svg" alt=""/>
			<span className="reviews__name">Best Marvel movie in my opinion</span>
			<span className="reviews__time">24.08.2018, 17:53 by John Doe</span>

			<span className="reviews__rating"><i className="icon ion-ios-star"></i>8.4</span>
		</div>
		<p className="reviews__text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
	</div>
	
	<div id="modal-delete" className="zoom-anim-dialog mfp-hide modal">
		<h6 className="modal__title">Review delete</h6>

		<p className="modal__text">Are you sure to permanently delete this review?</p>

		<div className="modal__btns">
			<button className="modal__btn modal__btn--apply" type="button">Delete</button>
			<button className="modal__btn modal__btn--dismiss" type="button">Dismiss</button>
		</div>
	</div>
        </Fragment>
    )
}

export default Reviews;