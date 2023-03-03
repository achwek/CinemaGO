import React, { Fragment } from 'react'

function Sidebar() {
  return (
    <Fragment>	<div className="sidebar">
    <a href="index.html" className="sidebar__logo">
        <img src="asset/img/logo.svg" alt=""/>
    </a>
    
    <div className="sidebar__user">
        <div className="sidebar__user-img">
            <img src="asset/img/user.svg" alt=""/>
        </div>

        <div className="sidebar__user-title">
            <span>Admin</span>
            <p>Achwek Issawi</p>
        </div>

        <button className="sidebar__user-btn" type="button">
            <i className="icon ion-ios-log-out"></i>
        </button>
    </div>
    
    <div className="sidebar__nav-wrap">
        <ul className="sidebar__nav">
            <li className="sidebar__nav-item">
                <a href="/" className="sidebar__nav-link sidebar__nav-link--active"><i className="icon ion-ios-keypad"></i> <span>Dashboard</span></a>
            </li>

            <li className="sidebar__nav-item">
                <a href="/catalog" className="sidebar__nav-link"><i className="icon ion-ios-film"></i> <span>Catalog</span></a>
            </li>

            <li className="sidebar__nav-item">
                <a className="sidebar__nav-link" data-toggle="collapse" href="#collapseMenu" role="button" aria-expanded="false" aria-controls="collapseMenu"><i className="icon ion-ios-copy"></i> <span>Films</span> <i className="icon ion-md-arrow-dropdown"></i></a>

                <ul className="collapse sidebar__menu" id="collapseMenu">
                    <li><a href="/add-film">Add Film</a></li>
                    <li><a href="/edit-film">Edit Film</a></li>
                </ul>
            </li>

            <li className="sidebar__nav-item">
                <a href="/users" className="sidebar__nav-link"><i className="icon ion-ios-contacts"></i> <span>Users</span></a>
            </li>

            <li className="sidebar__nav-item">
                <a href="/comments" className="sidebar__nav-link"><i className="icon ion-ios-chatbubbles"></i> <span>Comments</span></a>
            </li>

            <li className="sidebar__nav-item">
                <a href="/reviews" className="sidebar__nav-link"><i className="icon ion-ios-star-half"></i> <span>Reviews</span></a>
            </li>

            <li className="sidebar__nav-item">
                <a href="#" className="sidebar__nav-link"><i className="icon ion-ios-arrow-round-back"></i> <span>Back to HotFlix</span></a>
            </li>
        </ul>
    </div>
    
    
<div className="sidebar__copyright">© CINEMGO, 2022—2023. <br/>Create by <a href="" target="_blank"> Group 3A</a></div>

</div></Fragment>
  )
}

export default Sidebar