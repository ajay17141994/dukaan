import './index.scss';

function Header() {
  return (
    <div className="header-wrapper">
        <div className="header-innerwrap">
            <div className="img-wrapper">
                <img 
                    src="../../../images/header-ic.png"
                    className="header-ic"
                />
            </div>
            <div className="info-wrap">
                <div className="info-innerwrap">
                    <div className="heading">Mano Super Market</div>
                    <div className="sub-heading">
                        <span class="trusted-icwrap"><img src="../../../images/trusted-ic.svg" className="trusted-ic"/></span>
                        <span className="trusted-ictext">TRUSTED SELLER</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="searchbar-wrap">
            <div className="searchbar-innerwrap">
                <input 
                    type="text"
                    placeholder="Search for products…"
                    className="search-input"
                />
            </div>
        </div>
    </div>
  );
}

export default Header;
