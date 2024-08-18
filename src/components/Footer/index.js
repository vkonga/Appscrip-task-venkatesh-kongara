import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import { MdOutlineCopyright } from "react-icons/md";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import './index.css';

class Footer extends Component {
    
        state = {
            toggleMettaMuse: true,
            toggleQuickLinks: true,
            toggleFollowUs: true,
            isSmallScreen: window.matchMedia("(max-width: 600px)").matches
        };
    componentDidMount() {
        this.handleResize();
        window.addEventListener('resize', this.handleResize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }

    handleResize = () => {
        this.setState({ isSmallScreen: window.matchMedia("(max-width: 600px)").matches });
    };

    toggleSection = (section) => {
        if (this.state.isSmallScreen) {
            this.setState((prevState) => ({
                [section]: !prevState[section]
            }));
        }
    }

    render() {
        const { toggleMettaMuse, toggleQuickLinks, toggleFollowUs, isSmallScreen } = this.state;

        return (
            <footer className='footer-container'>
                <Helmet>
                    <script type="application/ld+json">
                        {`
                        {
                        "@context": "https://schema.org",
                        "@type": "Store",
                        "name": "Metta Muse",
                        "address": {
                            "@type": "address",
                            "addressLocality": "New York",
                            "addressRegion": "US",
                            "postalCode": "NY2030",
                            "addressCountry": "USA"
                        },
                        "contactPoint": {
                            "@type": "contact-online",
                            "contactType": "Customer Service",
                            "telephone": "+44 221 133 5360",
                            "email": "customercare@mettamuse.com"
                        }
                        }
                        `}
                    </script>
                </Helmet>
                <div className='footer-row-container'>
                    <div className='footer-signup-container'>
                        <h1 className='footer-heading'>BE THE FIRST TO KNOW</h1>
                        <p className='footer-paragraph'>Sign up for updates from Metta Muse.</p>
                        <div className='footer-signup-form-container'>
                            <input className='footer-input' type="email" placeholder='Enter your e-mail...' />
                            <button className='footer-button'>SUBSCRIBE</button>
                        </div>
                    </div>
                    <hr className='hr-footer' />
                    <div className='footer-column-container'>
                        <div className='contact-us'>
                            <h1 className='footer-heading'>CONTACT US</h1>
                            <p className='footer-paragraph'>
                                +44 221 133 5360 <br className='display-none' />
                                <span className='footer-customer'>•</span> customercare@mettamuse.com
                            </p>
                        </div>
                        <hr className='hr-footer' />
                        <div>
                            <h1 className='footer-heading'>CURRENCY</h1>
                            <div className='footer-currency-container'>
                                <img className="footer-icons" src="https://res.cloudinary.com/dsukslmgr/image/upload/v1713698008/United_States_of_America_US_k9nvbd.png" alt="usa" />
                                <li className='footer-paragraph'>USD</li>
                            </div>
                            <p>Transactions will be completed in Euros and a currency reference is available on hover.</p>
                        </div>
                        <hr className='hr-footer' />
                    </div>
                </div>
                <hr className='hr-f' />
                <div className='footer-row-container'>
                    <div className='footer-column-container'>
                        <div className="footer-heading footer-follow">
                            Metta Muse
                            {isSmallScreen && (
                                <span className='toggle' onClick={() => this.toggleSection('toggleMettaMuse')}>
                                    {toggleMettaMuse ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
                                </span>
                            )}
                        </div>
                        {(toggleMettaMuse || !isSmallScreen) && (
                            <div>
                                <p className='footer-paragraph'>About Us</p>
                                <p className='footer-paragraph'>Stories</p>
                                <p className='footer-paragraph'>Artisans</p>
                                <p className='footer-paragraph'>Boutiques</p>
                                <p className='footer-paragraph'>Contact Us</p>
                                <p className='footer-paragraph'>EU Compliances Docs</p>
                            </div>
                        )}
                    </div>
                    <hr className='hr-footer' />
                    <div className='footer-column-container'>
                        <div className="footer-heading footer-follow">
                            QUICK LINKS
                            {isSmallScreen && (
                                <span className='toggle' onClick={() => this.toggleSection('toggleQuickLinks')}>
                                    {toggleQuickLinks ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
                                </span>
                            )}
                        </div>
                        {(toggleQuickLinks || !isSmallScreen) && (
                            <div>
                                <p className='footer-paragraph'>Orders & Shipping</p>
                                <p className='footer-paragraph'>Join/Login as a Seller</p>
                                <p className='footer-paragraph'>Payment & Pricing</p>
                                <p className='footer-paragraph'>Return & Refunds</p>
                                <p className='footer-paragraph'>FAQs</p>
                                <p className='footer-paragraph'>Privacy Policy</p>
                                <p className='footer-paragraph'>Terms & Conditions</p>
                            </div>
                        )}
                    </div>
                    <hr className='hr-footer' />
                    <div className='footer-column-container'>
                        <div className="footer-heading footer-follow">
                            FOLLOW US
                            {isSmallScreen && (
                                <span className='toggle' onClick={() => this.toggleSection('toggleFollowUs')}>
                                    {toggleFollowUs ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
                                </span>
                            )}
                        </div>
                            {(toggleFollowUs || !isSmallScreen) && (
                            <div>
                                <img className='footer-icons' src="https://res.cloudinary.com/dsukslmgr/image/upload/v1713699410/Insta_xqhik1.png" alt="instagram" />
                                <img className='footer-icons' src="https://res.cloudinary.com/dsukslmgr/image/upload/v1713699471/a_debwld.png" alt="linkedin" />
                            </div>
                            )}
                        
                        <hr className='hr-footer' />
                        <div>
                            <h1 className='footer-heading'>Metta Muse ACCEPTS</h1>
                            <img className='footer-icons' src="https://res.cloudinary.com/dsukslmgr/image/upload/v1713699755/Group_136188_dygvyi.png" alt="gpay" />
                            <img className='footer-icons' src="https://res.cloudinary.com/dsukslmgr/image/upload/v1713699772/Group_136190_shlkde.png" alt="mastercard" />
                            <img className='footer-icons' src="https://res.cloudinary.com/dsukslmgr/image/upload/v1713699780/Group_136192_vwpgib.png" alt="paypal" />
                            <img className='footer-icons' src="https://res.cloudinary.com/dsukslmgr/image/upload/v1713699796/Group_136193_awztip.png" alt="american express" />
                            <img className='footer-icons' src="https://res.cloudinary.com/dsukslmgr/image/upload/v1713699805/Group_136194_euk7gt.png" alt="apple pay" />
                            <img className='footer-icons' src="https://res.cloudinary.com/dsukslmgr/image/upload/v1713699813/Group_136195_hfcxds.png" alt="pay" />
                        </div>
                        
                    </div>
                    
                </div>
                <p className="footer-copyright-paragraph">
                    Copyright <MdOutlineCopyright /> 2023 Metta Muse. ALL rights reserved
                </p>
            </footer>
        );
    }
}

export default Footer;
