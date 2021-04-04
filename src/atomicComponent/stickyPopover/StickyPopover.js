import './index.scss';

function StickyPopover() {
  return (
    <div className="stickyPopover-wrapper">
      <div className="stickyPopover-innerWrap">
          <div className="left-head">
            <span className="info-text">Store made with</span>
            <div className="logo-wrap">
              <img src="../../../images/logo.svg" className="company-logo"/>
            </div>
          </div>
          <div className="right-head">
            <span className="download-text">DOWNLOAD APP</span>
          </div>

      </div>
    </div>
  );
}

export default StickyPopover;
