import { Component } from 'react';
import { Helmet } from 'react-helmet';
import { v4 as uuidv4 } from 'uuid';
import { GoHeart } from "react-icons/go";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight, MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { ThreeDots } from 'react-loader-spinner';
import './index.css';

const filterData = [
    {
      title: "IDEAL FOR",
      options: [
        { id: uuidv4(), label: "men's clothing" },
        { id: uuidv4(), label: "women's clothing" },
        { id: uuidv4(), label: "electronics" },
        {id: uuidv4(), label:"jewelery"}
      ]
    },
    {
      title: "OCCASION",
      options: [
        { id: uuidv4(), label: "Rainy Season" },
        { id: uuidv4(), label: "Casual" },
        { id: uuidv4(), label: "Wedding" },
        { id: uuidv4(), label: "Party" },
        { id: uuidv4(), label: "Regular" }
      ]
    },
    {
      title: "WORK",
      options: [
        { id: uuidv4(), label: "French Knot" },
        { id: uuidv4(), label: "Zardosi" },
        { id: uuidv4(), label: "Fancy" },
        { id: uuidv4(), label: "Embroidery" }
      ]
    },
    {
      title: "FABRIC",
      options: [
        { id: uuidv4(), label: "Muslin" },
        { id: uuidv4(), label: "Satin Blend" },
        { id: uuidv4(), label: "Satin" },
        { id: uuidv4(), label: "Tericoat" },
        { id: uuidv4(), label: "Linen" },
        { id: uuidv4(), label: "Raw Silk" },
        { id: uuidv4(), label: "Cotton" },
        { id: uuidv4(), label: "Silk" },
        { id: uuidv4(), label: "Cotton Silk" }
      ]
    },
    {
      title: "SEGMENT",
      options: [
        { id: uuidv4(), label: "Silver" },
        { id: uuidv4(), label: "Ethnic" },
        { id: uuidv4(), label: "Contemporary" }
      ]
    },
    {
      title: "SUITABLE FOR",
      options: [
        { id: uuidv4(), label: "Formal Wear" },
        { id: uuidv4(), label: "Western Wear" },
        { id: uuidv4(), label: "Casual Wear" }
      ]
    },
    {
      title: "RAW MATERIALS",
      options: [
        { id: uuidv4(), label: "Silk" },
        { id: uuidv4(), label: "Wool" },
        { id: uuidv4(), label: "Leather" },
        { id: uuidv4(), label: "Cotton" },
        { id: uuidv4(), label: "Cellulosic Fibers" }
      ]
    },
    {
      title: "PATTERN",
      options: [
        { id: uuidv4(), label: "Windowpane" },
        { id: uuidv4(), label: "Pinstripes" },
        { id: uuidv4(), label: "Solid" },
        { id: uuidv4(), label: "Chalk Stripes" },
        { id: uuidv4(), label: "Slim Fit" },
        { id: uuidv4(), label: "Tartan" }
      ]
    }
  ];

const apiStatus = {
    "success":"SUCCESS",
    "failure":"FAILURE",
    "loading":"loading",
    "initial":"initial"
}

class Home extends Component {
    state = {
        productsList: [],
        showFilter: true,
        showSmallScreenFilter: false,
        sort:"",
        expandedGroups: {},
        selectedIdealFor: "", 
        selectedCategories: [],
        status: apiStatus.initial 
    };

    componentDidMount() {
        this.getProducts();
    }

    getProducts = async () => {
        const {selectedIdealFor, selectedCategories,sort } = this.state;
        this.setState({status: apiStatus.loading})

        let url = 'https://fakestoreapi.com/products';
        if (selectedIdealFor) {
            url += `/category/${selectedIdealFor}`;
        }

        const response = await fetch(url);
        const data = await response.json();

        if (response.ok === true) {
            let filteredProductsList = data.map(eachProduct => ({
                id: uuidv4(),
                title: eachProduct.title,
                description: eachProduct.description,
                category: eachProduct.category,
                imageUrl: eachProduct.image,
                price: eachProduct.price,
            }));

            if (selectedCategories.length > 0) {
                filteredProductsList = filteredProductsList.filter(product =>
                    selectedCategories.some(category =>
                        product.description.toLowerCase().includes(category.toLowerCase())
                    )
                );
            }


            if (sort === 'PRICE: LOW TO HIGH') {
                filteredProductsList.sort((a, b) => a.price - b.price);
            } else if (sort === 'PRICE: HIGH TO LOW') {
                filteredProductsList.sort((a, b) => b.price - a.price);
            } else if (sort === 'RECOMMENDED') {
                filteredProductsList.sort((a, b) => a.title.localeCompare(b.title));
            } else if (sort === 'POPULAR') {
                filteredProductsList.sort((a, b) => b.title.localeCompare(a.title));
            } else if (sort === 'NEWEST FIRST') {
                filteredProductsList.sort(() => Math.random() - 0.5);
            }

            this.setState({ productsList: filteredProductsList, status: apiStatus.success });
        }
    }

    

    onClickFilterIcon = () => {
        this.setState(prevState => ({ showFilter: !prevState.showFilter }));
    }
    
    onClickSmallScreenFilter = () => {
        this.setState(prevState => ({ showSmallScreenFilter: !prevState.showSmallScreenFilter }));
    }
    


    onChangeSort = (event) => {
        this.setState(
            { sort: event.target.value },
            this.getProducts
        );
    }

    onClickToggle = (title) => {
        this.setState(prevState => ({
            expandedGroups: {
                ...prevState.expandedGroups,
                [title]: !prevState.expandedGroups[title]
            }
        }));
    };

    onClickFilter = (label, isChecked, title) => {
        if (title === "IDEAL FOR") {
            this.setState(
                {
                    selectedIdealFor: isChecked ? label : "",
                    selectedCategories: []
                },
                this.getProducts
            );
        } else {
            this.setState(prevState => {
                const selectedCategories = isChecked
                    ? [...prevState.selectedCategories, label]
                    : prevState.selectedCategories.filter(category => category !== label);

                return {selectedCategories}
            }, this.getProducts);
        }
    }


    onClickUnselectAll = (title) => {
        this.setState(prevState => ({
            selectedCategories: [],selectedIdealFor:"",
            expandedGroups: { ...prevState.expandedGroups, [title]: false }
        }), this.getProducts);
    };


    renderFilterSection = () => {
        const {expandedGroups} = this.state
            return (
                
                    <div className='filter-section'>
                        <div className='filter-section-customize'>
                            <input type="checkbox" id="customizble" />
                            <label htmlFor='customizble'>CUSTOMIZABLE</label>
                        </div>
                        <hr className='hr-l' />
                        <ul className='filter-section-list'>
                            {filterData.map((group, index) => (
                                <>
                                <li className='filter-section-list' key={index}>
                                    <div className='filter-section-title'>
                                        <h1 className='filter-title'>{group.title}</h1>
                                        {expandedGroups[group.title] ? (
                                            <MdKeyboardArrowUp onClick={() => this.onClickToggle(group.title)} size={30} style={{ marginTop: "15px" }} />
                                        ) : (
                                            <MdKeyboardArrowDown onClick={() => this.onClickToggle(group.title)} style={{ marginTop: "15px" }} size={30} />
                                        )}
                                    </div>
                                    {expandedGroups[group.title] && (
                                        <>
                                            <p>All</p>
                                            <p onClick={() => this.onClickUnselectAll(group.title)}>Unselect all</p>
                                            {group.options.map((option) => (
                                                <div key={option.id}>
                                                    <input
                                                        onChange={(event) => this.onClickFilter(option.label, event.target.checked, group.title)}
                                                        type="checkbox"
                                                        id={option.id}
                                                    />
                                                    <label htmlFor={option.id}>{option.label}</label>
                                                </div>
                                            ))}
                                        </>
                                    )}
                                    
                                </li>
                                <hr className='hr-line' />
                                </>
                            ))}
                            
                        </ul>
                    </div>
            )
    }

    renderSuccessProductsView = () => {
        const {productsList} = this.state

        if (productsList.length === 0) {
            return <p className='no-products-found'>No Products Found</p>;
        }

        return (
        <ul className='home-products-container'>
            {productsList.map(eachItem => (
                <li key={eachItem.id} className='product-container'>
                    <img className='product-image' src={eachItem.imageUrl} alt={eachItem.category} />
                    <h3 className='product-heading'>{eachItem.title}</h3>
                    <div className='product-price-container'>
                        <p>Price: ${eachItem.price}</p>
                        <GoHeart />
                    </div>
                </li>
                ))}
        </ul>
        )}

    renderLoadingView = () => (
        <div>
            <ThreeDots
              height={100}
              width={100}
              radius={1}
              color="blue"
              ariaLabel="puff-loading"
            />
        </div>
    )

    renderProductsList = () => {
        const {status} = this.state
        switch (status) {
            case apiStatus.loading:
                return this.renderLoadingView()
            case apiStatus.success:
                return this.renderSuccessProductsView()
            default:
                return null
        }
    }


    render() {
        const { productsList, showFilter,sort,showSmallScreenFilter } = this.state;
        
        return (
            <div className='home-page-container'>
                <Helmet>
                    <script type="application/ld+json">
                    {`
                    {
                      "@context": "https://schema.org",
                      "@type": "Products",
                      "name": "Product List",
                      "description": "A list of products available on our store.",
                      "url": "https://www.example.com/products"
                    }
                    `}
                    </script>
                </Helmet>
                <div className='home-top-filter-container'>
                    <div className='row-container'>
                        <p>{productsList.length} ITEMS</p>
                        {showFilter ? (
                            <div className='row-container' onClick={this.onClickFilterIcon}>
                                <MdKeyboardArrowLeft size={20} />
                                <p className='filter'>HIDE FILTER</p>
                            </div>
                        ) : (
                            <div className='row-container' onClick={this.onClickFilterIcon}>
                                <MdKeyboardArrowRight size={20} />
                                <p className='filter'>SHOW FILTER</p>
                            </div>
                        )}
                    </div>

                    <div className='row-small-container'>
                        {showSmallScreenFilter ? <p className='sm-filter' onClick={this.onClickSmallScreenFilter}>FILTER</p>:
                        <p className='sm-filter' onClick={this.onClickSmallScreenFilter}>FILTER</p>
                        }
                            
                    </div>
                    <hr className='hr-filter' />
                    <select onChange={this.onChangeSort} value={sort}>
                        <option value='RECOMMENDED'>RECOMMENDED</option>
                        <option value='NEWEST FIRST'>NEWEST FIRST</option>
                        <option value='POPULAR'>POPULAR</option>
                        <option value='PRICE: HIGH TO LOW'>PRICE: HIGH TO LOW</option>
                        <option value='PRICE: LOW TO HIGH'>PRICE: LOW TO HIGH</option>
                    </select>
                </div>
                <hr className='hr' />
                <div className='home-content-container'>
                {showFilter && window.innerWidth > 600 && (
                    <div className='filter-section'>
                        {this.renderFilterSection()}
                    </div>
                )}

            
                {showSmallScreenFilter && window.innerWidth <= 600 && (
                    <>
                        {this.renderFilterSection()}
                    </>
                )}
                    <>
                       {this.renderProductsList()}
                    </>
                </div>
            </div>
        );
    }
}

export default Home;
