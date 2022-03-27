import "./Error.css";

const Error: React.FC<{ error: string }> = ({ error }) => {
  return (
    <p className="error-block">
      Что-то пошло не так. Давайте попробуйем еще раз?
      <br />
      {error}
    </p>
  );
};

export default Error;
