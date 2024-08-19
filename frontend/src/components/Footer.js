import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <div className="footer-column">
                    <h3>Abstract</h3>
                    <p>Branches</p>
                </div>
                <div className="footer-column">
                    <h3>Resources</h3>
                    <p>Blog</p>
                    <p>Help Center</p>
                    <p>Release Notes</p>
                    <p>Status</p>
                </div>
                <div className="footer-column">
                    <h3>Community</h3>
                    <p>Twitter</p>
                    <p>LinkedIn</p>
                    <p>Facebook</p>
                    <p>Dribbble</p>
                    <p>Podcast</p>
                </div>
                <div className="footer-column">
                    <h3>Company</h3>
                    <p>About Us</p>
                    <p>Careers</p>
                    <p>Legal</p>
                    <p>Contact Us</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Abstract Studio Design, Inc. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
