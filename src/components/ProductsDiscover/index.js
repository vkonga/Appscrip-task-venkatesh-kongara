import { Helmet } from 'react-helmet'
import './index.css'

const ProductsDiscover = () => (
    <div className='productsdiscover-container' >
        <Helmet>
            <script type="application/ld+json">
            {`
            {
              "@context": "https://schema.org",
              "@type": "Store Desc",
              "name": "Discover Our Products",
              "description": "Explore our diverse range of products including clothing, electronics, and more.",
              "url": "https://www.example.com/discover-products"
            }
            `}
            </script>
        </Helmet>
        <div className='home-shop' >
            <p className='home' >HOME <span className='line'>|</span><span className='shop'>SHOP</span></p>
        </div>
        <h2 className='discoverproducts-heading' >DISCOVER OUR PRODUCTS</h2>
        <p className='discoverproducts-description' >lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus<br />
        scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
        </p>
        <hr className='hr' />
    </div>
)

export default ProductsDiscover