import Link from 'next/link';
import cx from 'classnames';
import PropTypes from 'prop-types';

const Heading = ({ children }) => {
  return (
    <h2 className='text-base font-bold text-white sm:text-xl'>{children}</h2>
  );
};

Heading.propTypes = {
  children: PropTypes.node.isRequired,
};

const Text = ({ children }) => {
  return <p className='text-sm text-gray-400 sm:text-base'>{children}</p>;
};

Text.propTypes = {
  children: PropTypes.node.isRequired,
};

const Card = ({ href, number, additionalClasses, active, children }) => {
  return (
    <Link href={href}>
      <a
        className={cx(
          'relative flex-shrink-0 flex flex-col items-center h-full max-w-xs sm:max-w-sm md:max-w-none p-8 pt-10 sm:p-10 sm:pt-12 mx-auto transition rounded-lg group hover:ring-2 ring-ruler border-opacity-50 bg-gray-900',
          { 'ring-2': active },
          additionalClasses
        )}
      >
        <div
          className={cx(
            'absolute flex items-center justify-center w-12 h-12 -top-6 text-xl font-extrabold tracking-normal transition border-2 rounded-full border-ruler',
            { 'bg-ruler text-gray-900': active },
            {
              'bg-gray-900 text-ruler group-hover:text-gray-900 group-hover:bg-ruler': !active,
            }
          )}
        >
          {number}
        </div>
        <div className='space-y-3 text-center'>{children}</div>
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
