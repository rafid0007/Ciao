import React from 'react';
import './footer.styles.scss';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer_top'>
                <div className="footer_logo">
                    C
                </div>
                <div className="footer_copyright">All rights reserved &copy; Mostafa Rafid</div>
            </div>
            <hr className='footer_divider'/>
            <div className='footer_bottom'>
                <p className="footer_quote">"Don't be into trends. Don't make fashion own you, but you decide what you are, what you want to express by the way you dress and the way to live."</p>
                <p className="footer_quote_author">—Gianni Versace</p>
            </div>
        </div>
    );
};

export default Footer;