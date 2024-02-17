import PropTypes from 'prop-types'

function Button({ text, url }) {
  return (
    <>
      <a href={url} className="btn">
        {text}
      </a>
    </>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

export default Button;
