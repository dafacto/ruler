import Link from 'next/link';
import cx from 'classnames';
import PropTypes from 'prop-types';

const Heading = ({ children }) => {
  return (
    <h2 className='text-base font-bold text-white sm:text-2xl'>{children}</h2>
  );
};

Heading.propTypes = {
  children: PropTypes.node.isRequired,
};

const Text = ({ children }) => {
  return <p className='text-sm text-gray-400 sm:text-lg'>{children}</p>;
};

Text.propTypes = {
  children: PropTypes.node.isRequired,
};

const Card = ({ href, number, additionalClasses, active, children }) => {
  return (
    <Link href={href}>
      <a
        className={cx(
          'flex-shrink-0 flex h-full max-w-sm px-4 py-4 sm:py-10 mx-auto space-x-5 transition transform border rounded-lg sm:space-x-8 sm:px-10 border-ruler md:max-w-none hover:ring-2 ring-ruler border-opacity-50',
          { 'ring-2': active },
          additionalClasses
        )}
      >
        <div className='text-2xl font-extrabold sm:text-3xl text-ruler'>
          {number}
        </div>
        <div className='space-y-3 sm:space-y-5'>{children}</div>
      </a>
    </Link>
  );
};

Card.defaultProps = {
  active: false,
};

Card.propTypes = {
  href: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  additionalClasses: PropTypes.string,
  active: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Card.Heading = Heading;
Card.Text = Text;

export default Card;
