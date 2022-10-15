import "../styles/template-two-styles.css";

const TemplateTwo = () => {
  return (
    <div>
      <div>
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/612187/mc-logo-white.svg"
          className="logo"
          width={192}
        />
        <div className="browser">
          <div className="controls">
            <i />
            <i />
            <i />
          </div>
          <div className="eye" />
          <div className="eye" />
          <div className="mouth">
            <div className="lips" />
            <div className="lips" />
            <div className="lips" />
            <div className="lips" />
            <div className="lips" />
            <div className="lips" />
            <div className="lips" />
            <div className="lips" />
          </div>
        </div>
        <h1>Unfortunately, something has gone wrong.</h1>
        <p>
          We're unable to fulfill your request. Rest assured we have been
          notified and are looking into the issue. Please refresh your browser.
          If the error continues, please contact our{" "}
          <a href="http://mcause.us/supportticket">support team</a>.
        </p>
      </div>
    </div>
  );
};

export default TemplateTwo;
