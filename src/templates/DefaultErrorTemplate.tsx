import '../styles/default-error-template-styles.css';

const DefaultErrorTemplate = () => {
  return (
    <div>
      <div className="face">
        <div className="band">
          <div className="red" />
          <div className="white" />
          <div className="blue" />
        </div>
        <div className="eyes" />
        <div className="dimples" />
        <div className="mouth" />
      </div>
      <h1>Oops! Something went wrong!</h1>
      <div className="btn">Return to Home</div>
    </div>
  );
};




export default DefaultErrorTemplate;
