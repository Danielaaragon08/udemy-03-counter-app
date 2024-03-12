import PropTypes from "prop-types";

export const FirsApp = ({ title, subTitle, name }) => {
  return (
    <>
      <h1 data-testid="test-title"> {title} </h1>
      <p>{subTitle}</p>
      <p>{subTitle}</p>
      <p>{name}</p>
    </>
  );
};

FirsApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
};

FirsApp.defaultProps = {
  title: "No hay título",
  subTitle: "No hay subtítulo",
  name: "No hay nombre",
};
