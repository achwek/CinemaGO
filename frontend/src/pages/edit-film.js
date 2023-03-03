import React, { Fragment } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

function EditFilm(){
    return(
        <Fragment>
<Header/>

<Sidebar/>

	<main className="main">
		<div className="container-fluid">
			<div className="row">
				<div className="col-12">
					<div className="main__title">
						<h2>Films</h2>

						<span className="main__title-stat">14,452 Total</span>

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
									<li>Views</li>
								</ul>
							</div>
							
							<form action="#" className="main__title-form">
								<input type="text" placeholder="Find movie / tv series.."/>
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
									<th>TITLE</th>
									<th>RATING</th>
									<th>CATEGORY</th>
									<th>VIEWS</th>
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
										<div className="main__table-text"><a href="#">I Dream in Another Language</a></div>
									</td>
									<td>
										<div className="main__table-text main__table-text--rate"><i className="icon ion-ios-star"></i> 7.9</div>
									</td>
									<td>
										<div className="main__table-text">Movie</div>
									</td>
									<td>
										<div className="main__table-text">1392</div>
									</td>
									<td>
										<div className="main__table-text main__table-text--green">Visible</div>
									</td>
									<td>
										<div className="main__table-text">24 Oct 2021</div>
									</td>
									<td>
										<div className="main__table-btns">
											<a href="#modal-status" className="main__table-btn main__table-btn--banned open-modal">
												<i className="icon ion-ios-lock"></i>
											</a>
											<a href="#" className="main__table-btn main__table-btn--view">
												<i className="icon ion-ios-eye"></i>
											</a>
											<a href="#" className="main__table-btn main__table-btn--edit">
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
										<div className="main__table-text"><a href="#">Benched</a></div>
									</td>
									<td>
										<div className="main__table-text main__table-text--rate"><i className="icon ion-ios-star"></i> 7.1</div>
									</td>
									<td>
										<div className="main__table-text">Movie</div>
									</td>
									<td>
										<div className="main__table-text">1093</div>
									</td>
									<td>
										<div className="main__table-text main__table-text--red">Hidden</div>
									</td>
									<td>
										<div className="main__table-text">24 Oct 2021</div>
									</td>
									<td>
										<div className="main__table-btns">
											<a href="#modal-status" className="main__table-btn main__table-btn--banned open-modal">
												<i className="icon ion-ios-lock"></i>
											</a>
											<a href="#" className="main__table-btn main__table-btn--view">
												<i className="icon ion-ios-eye"></i>
											</a>
											<a href="#" className="main__table-btn main__table-btn--edit">
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
										<div className="main__table-text"><a href="#">Whitney</a></div>
									</td>
									<td>
										<div className="main__table-text main__table-text--rate"><i className="icon ion-ios-star"></i> 6.3</div>
									</td>
									<td>
										<div className="main__table-text">TV Show</div>
									</td>
									<td>
										<div className="main__table-text">723</div>
									</td>
									<td>
										<div className="main__table-text main__table-text--green">Visible</div>
									</td>
									<td>
										<div className="main__table-text">24 Oct 2021</div>
									</td>
									<td>
										<div className="main__table-btns">
											<a href="#modal-status" className="main__table-btn main__table-btn--banned open-modal">
												<i className="icon ion-ios-lock"></i>
											</a>
											<a href="#" className="main__table-btn main__table-btn--view">
												<i className="icon ion-ios-eye"></i>
											</a>
											<a href="#" className="main__table-btn main__table-btn--edit">
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
										<div className="main__table-text"><a href="#">Blindspotting</a></div>
									</td>
									<td>
										<div className="main__table-text main__table-text--rate"><i className="icon ion-ios-star"></i> 8.4</div>
									</td>
									<td>
										<div className="main__table-text">TV Show</div>
									</td>
									<td>
										<div className="main__table-text">2457</div>
									</td>
									<td>
										<div className="main__table-text main__table-text--green">Visible</div>
									</td>
									<td>
										<div className="main__table-text">24 Oct 2021</div>
									</td>
									<td>
										<div className="main__table-btns">
											<a href="#modal-status" className="main__table-btn main__table-btn--banned open-modal">
												<i className="icon ion-ios-lock"></i>
											</a>
											<a href="#" className="main__table-btn main__table-btn--view">
												<i className="icon ion-ios-eye"></i>
											</a>
											<a href="#" className="main__table-btn main__table-btn--edit">
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
										<div className="main__table-text"><a href="#">I Dream in Another Language</a></div>
									</td>
									<td>
										<div className="main__table-text main__table-text--rate"><i className="icon ion-ios-star"></i> 7.9</div>
									</td>
									<td>
										<div className="main__table-text">Movie</div>
									</td>
									<td>
										<div className="main__table-text">1392</div>
									</td>
									<td>
										<div className="main__table-text main__table-text--green">Visible</div>
									</td>
									<td>
										<div className="main__table-text">24 Oct 2021</div>
									</td>
									<td>
										<div className="main__table-btns">
											<a href="#modal-status" className="main__table-btn main__table-btn--banned open-modal">
												<i className="icon ion-ios-lock"></i>
											</a>
											<a href="#" className="main__table-btn main__table-btn--view">
												<i className="icon ion-ios-eye"></i>
											</a>
											<a href="#" className="main__table-btn main__table-btn--edit">
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
										<div className="main__table-text"><a href="#">Benched</a></div>
									</td>
									<td>
										<div className="main__table-text main__table-text--rate"><i className="icon ion-ios-star"></i> 7.1</div>
									</td>
									<td>
										<div className="main__table-text">TV Show</div>
									</td>
									<td>
										<div className="main__table-text">1093</div>
									</td>
									<td>
										<div className="main__table-text main__table-text--red">Hidden</div>
									</td>
									<td>
										<div className="main__table-text">24 Oct 2021</div>
									</td>
									<td>
										<div className="main__table-btns">
											<a href="#modal-status" className="main__table-btn main__table-btn--banned open-modal">
												<i className="icon ion-ios-lock"></i>
											</a>
											<a href="#" className="main__table-btn main__table-btn--view">
												<i className="icon ion-ios-eye"></i>
											</a>
											<a href="#" className="main__table-btn main__table-btn--edit">
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
										<div className="main__table-text"><a href="#">Whitney</a></div>
									</td>
									<td>
										<div className="main__table-text main__table-text--rate"><i className="icon ion-ios-star"></i> 6.3</div>
									</td>
									<td>
										<div className="main__table-text">Cartoon</div>
									</td>
									<td>
										<div className="main__table-text">723</div>
									</td>
									<td>
										<div className="main__table-text main__table-text--green">Visible</div>
									</td>
									<td>
										<div className="main__table-text">24 Oct 2021</div>
									</td>
									<td>
										<div className="main__table-btns">
											<a href="#modal-status" className="main__table-btn main__table-btn--banned open-modal">
												<i className="icon ion-ios-lock"></i>
											</a>
											<a href="#" className="main__table-btn main__table-btn--view">
												<i className="icon ion-ios-eye"></i>
											</a>
											<a href="#" className="main__table-btn main__table-btn--edit">
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
										<div className="main__table-text"><a href="#">Blindspotting</a></div>
									</td>
									<td>
										<div className="main__table-text main__table-text--rate"><i className="icon ion-ios-star"></i> 8.4</div>
									</td>
									<td>
										<div className="main__table-text">Movie</div>
									</td>
									<td>
										<div className="main__table-text">2457</div>
									</td>
									<td>
										<div className="main__table-text main__table-text--green">Visible</div>
									</td>
									<td>
										<div className="main__table-text">24 Oct 2021</div>
									</td>
									<td>
										<div className="main__table-btns">
											<a href="#modal-status" className="main__table-btn main__table-btn--banned open-modal">
												<i className="icon ion-ios-lock"></i>
											</a>
											<a href="#" className="main__table-btn main__table-btn--view">
												<i className="icon ion-ios-eye"></i>
											</a>
											<a href="#" className="main__table-btn main__table-btn--edit">
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
										<div className="main__table-text"><a href="#">I Dream in Another Language</a></div>
									</td>
									<td>
										<div className="main__table-text main__table-text--rate"><i className="icon ion-ios-star"></i> 7.9</div>
									</td>
									<td>
										<div className="main__table-text">Movie</div>
									</td>
									<td>
										<div className="main__table-text">1392</div>
									</td>
									<td>
										<div className="main__table-text main__table-text--green">Visible</div>
									</td>
									<td>
										<div className="main__table-text">24 Oct 2021</div>
									</td>
									<td>
										<div className="main__table-btns">
											<a href="#modal-status" className="main__table-btn main__table-btn--banned open-modal">
												<i className="icon ion-ios-lock"></i>
											</a>
											<a href="#" className="main__table-btn main__table-btn--view">
												<i className="icon ion-ios-eye"></i>
											</a>
											<a href="#" className="main__table-btn main__table-btn--edit">
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
										<div className="main__table-text"><a href="#">Benched</a></div>
									</td>
									<td>
										<div className="main__table-text main__table-text--rate"><i className="icon ion-ios-star"></i> 7.1</div>
									</td>
									<td>
										<div className="main__table-text">Movie</div>
									</td>
									<td>
										<div className="main__table-text">1093</div>
									</td>
									<td>
										<div className="main__table-text main__table-text--red">Hidden</div>
									</td>
									<td>
										<div className="main__table-text">24 Oct 2021</div>
									</td>
									<td>
										<div className="main__table-btns">
											<a href="#modal-status" className="main__table-btn main__table-btn--banned open-modal">
												<i className="icon ion-ios-lock"></i>
											</a>
											<a href="#" className="main__table-btn main__table-btn--view">
												<i className="icon ion-ios-eye"></i>
											</a>
											<a href="#" className="main__table-btn main__table-btn--edit">
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
						<span>10 from 14 452</span>

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
		<h6 className="modal__title">Item delete</h6>

		<p className="modal__text">Are you sure to permanently delete this item?</p>

		<div className="modal__btns">
			<button className="modal__btn modal__btn--apply" type="button">Delete</button>
			<button className="modal__btn modal__btn--dismiss" type="button">Dismiss</button>
		</div>
	</div>
        </Fragment>
    )
}

export default EditFilm;