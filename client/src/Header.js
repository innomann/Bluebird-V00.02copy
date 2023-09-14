import React from "react";
import "./Header.css";

const Header = () => {

  return (
    <div>
    <header class="header" data-header>
        <div class="container">
            <a href="/" class="logo">
                <img src="https://raw.githubusercontent.com/codewithsadee/wren/783c2a783deb6f6460a055db5fd4fff4e7c897ea/assets/images/logo.svg" width="119" height="37" alt="Wren logo"/>
            </a>

            <nav class="navbar" data-navbar>
                <div class="navbar-top">
                    <a href="/" class="logo">
                        <img src="https://raw.githubusercontent.com/codewithsadee/wren/783c2a783deb6f6460a055db5fd4fff4e7c897ea/assets/images/logo.svg" width="119" height="37" alt="Wren logo"/>
                    </a>
                    <button class="nav-close-btn" aria-label="close menu" data-nav-toggler>
                        <ion-icon name="close-outline" aria-hidden="true"></ion-icon>
                    </button>
                </div>

                <ul class="navbar-list">
                    <li>
                        <a href="#home" class="navbar-link hover-1" data-nav-toggler>Home</a>
                    </li>
                    <li>
                        <a href="#topics" class="navbar-link hover-1" data-nav-toggler>Topics</a>
                    </li>
                    <li>
                        <a href="#featured" class="navbar-link hover-1" data-nav-toggler>Featured Post</a>
                    </li>
                    <li>
                         <a href="#recent" class="navbar-link hover-1" data-nav-toggler>Recent Post</a>
                    </li>
                    <li>
                        <a href="#" class="navbar-link hover-1" data-nav-toggler>Contact</a>
                    </li>
                </ul>

                <div class="navbar-bottom">
                    <div class="profile-card">
                        <img src="https://images.freeimages.com/images/large-previews/ce9/natural-frame-1439402.jpg" width="48" height="48" alt="Steven" class="profile-banner"/>

                        <div>
                            <p class="card-title">Hello Steven !</p>
                            <p class="card-subtitle">
                                You have 3 new messages
                            </p>
                        </div>
                    </div> 
                    
                    <ul class="link-list">
                        <li>
                            <a href="#" class="navbar-bottom-link hover-1">Profile</a>
                        </li>
                        <li>
                            <a href="#" class="navbar-bottom-link hover-1">Articles Saved</a>
                        </li>
                        <li>
                            <a href="#" class="navbar-bottom-link hover-1">Add New Post</a>
                        </li>
                        <li>
                            <a href="#" class="navbar-bottom-link hover-1">My Likes</a>
                        </li>
                        <li>
                            <a href="#" class="navbar-bottom-link hover-1">Account Setting</a>
                        </li>
                        <li>
                            <a href="#" class="navbar-bottom-link hover-1">Sign Out</a>
                        </li>
                    </ul>
                </div>

                <p class="copyright-text">
                    Copyright 2022 © Wren - Personal Blog Template.
                    Developed by codewithsadee
                </p>
            </nav>

            <a href="#" class="btn btn-primary">Subscribe</a>

            <button class="nav-open-btn" aria-label="open menu" data-nav-toggler>
                <ion-icon name="menu-outline" aria-hidden="true"></ion-icon>
            </button>
        </div>
    </header> 
    </div>
  );
};
export default Header;
