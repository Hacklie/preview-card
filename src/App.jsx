import "./style.css";

function App() {
  return (
    <>
      <div className="center">
        <div className="product-preview">
          <div className="product-preview__image">
            <img
              src="assets/image-product-desktop.jpg"
              alt="Gabrielle Chanel Parfum"
            />
          </div>
          <div className="product-preview__info">
            <h2 className="product-preview__info-sub-heading">Perfume</h2>
            <h1 className="product-preview__info-heading">
              Gabrielle Essence Eau De Parfum
            </h1>
            <p className="product-preview__info-description">
              A floral, solar and voluptous interpretation composed by Olivier
              Polge, Perfumer-Creator for the House of CHANEL.
            </p>
            <div className="product-preview__info-prices">
              <p className="product-preview__info-prices-price">$149.99</p>
              <p className="product-preview__info-prices-oldprice">$169.99</p>
            </div>
            <button className="product-preview__info-btn">
              <img src="assets/icon-cart.svg" alt="" />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
