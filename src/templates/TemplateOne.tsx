import '../styles/template-one-styles.css';

const TemplateOne = () => {
  return (
    <div>
      <div id="error">Error</div>
      <div className="error-num">
        500
        <div className="error-num__clip">500</div>
      </div>
      <p id="desc">Uh oh, there seems to be a problem.</p>
      <p>
        Let me help you find{" "}
        <a href="https://codepen.io/" target="_blank">
          a way out
        </a>
      </p>
    </div>
  );
};

export default TemplateOne;
