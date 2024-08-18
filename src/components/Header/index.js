import { Helmet } from "react-helmet";
import { CiSearch } from "react-icons/ci";
import { GoHeart } from "react-icons/go";
import { BsBagDash } from "react-icons/bs";
import { BsPerson } from "react-icons/bs";
import { IoReorderThree } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

import './index.css'

const Header = () => (
    <div className="header-page-container">
        <Helmet>
            <title>Metta Muse shopping center</title>
            <meta name="description" content="Explore a wide range of products from Metta Muse. High-quality fashion, electronics, and Jewelery." />
            <script type="application/ld+json">
            {`
            {
              "@context": "https://schema.org",
              "@type": "store-head",
              "name": "Metta Muse",
              "url": "https://www.example.com",
              "logo": "https://res.cloudinary.com/dsukslmgr/image/upload/v1713616641/Logo_y.jpg",
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
        <div className="lorem-ipsum-container">
            <div>
                <img src="https://res.cloudinary.com/dsukslmgr/image/upload/v1723962158/element-4_hwcliv.png" alt="Lorem ipsum dolor" />
                <span className="span-lorem" >Lorem ipsum dolor</span>
            </div>
            <div className="display-lorem" >
                <img src="https://res.cloudinary.com/dsukslmgr/image/upload/v1723962158/element-4_hwcliv.png" alt="Lorem ipsum dolor" />
                <span className="span-lorem" >Lorem ipsum dolor</span>
            </div>
            <div className="display-lorem">
                <img src="https://res.cloudinary.com/dsukslmgr/image/upload/v1723962158/element-4_hwcliv.png" alt="Lorem ipsum dolor" />
                <span className="span-lorem" >Lorem ipsum dolor</span>
            </div>
        </div>
        <div className="logo-container" >
            
            <div className="three-line-container">
                <IoReorderThree className="reorder-three" />
                <img className="logo-image" src="https://res.cloudinary.com/dsukslmgr/image/upload/v1713616641/Logo_y.jpg" alt="logo" />
            </div>
            <h1 className="logo-heading" >LOGO</h1>
            <div className="header-icons-container" >
                <CiSearch size={30} style={{marginRight:"10px"}} aria-label="Search" />
                <GoHeart size={30} style={{marginRight:"10px"}} aria-label="Wishlist" />
                <BsBagDash size={30} style={{marginRight:"10px"}} aria-label="Cart" />
                <BsPerson className="icons-display" size={30} style={{marginRight:"10px"}} aria-label="Account" />
                <p  className="header-choose-language icons-display" >ENG</p>
                <MdOutlineKeyboardArrowDown className="icons-display" size={20} />
            </div>
        </div>
        <div className="header-navigations-container" >
            <p className="navigations" >SHOP</p>
            <p className="navigations">SKILLS</p>
            <p className="navigations">STORIES</p>
            <p className="navigations">ABOUT</p>
            <p className="navigations">CONTACT US</p>
        </div>
        <hr className="hr" />
    </div>
)

export default Header