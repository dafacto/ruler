import Link from 'next/link';
import PropTypes from 'prop-types';

const Button = ({ children, external, href, ...rest }) => {
  const classes =
    'inline-flex appearance-none items-center px-6 py-3 text-lg font-medium text-gray-900 transition transform rounded-lg bg-ruler sm:px-8 sm:py-5 active:scale-95 hover:scale-105 focus:outline-none focus:scale-105';

  if (external) {
    return (
      <a
        href={href}
        className={classes}
        type='button'
        target='_blank'
        rel='noreferrer noopener'
        {...rest}
      >
        {children}
      </a>
    );
  } else {
    return (
      <Link href={href}>
        <a className={classes} type='button' {...rest}>
          {children}
        </a>
      </Link>
    );
  }
};

Button.defaultProps = {
  external: false,
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  external: PropTypes.bool,
  href: PropTypes.string.isRequired,
};

export default Button;
