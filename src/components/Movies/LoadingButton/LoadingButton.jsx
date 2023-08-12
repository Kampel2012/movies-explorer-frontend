import './LoadingButton.css';

function LoadingButton({ handleOnClick }) {
  return (
    <button className="loading-button" onClick={() => handleOnClick()}>
      Ещё
    </button>
  );
}

export default LoadingButton;
