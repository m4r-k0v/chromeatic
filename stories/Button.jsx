import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary, backgroundColor, size, label, ...props }) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
      <>
          NEW change
          To account for the inconvenience caused by this situation falling on the weekend, your compensation will consist of the following components:
          Your daily salary will be paid out at a rate of 150%.
          <ul>
              <li>You will receive a fixed amount of 500 euros.</li>
              <li>Any trip expenses incurred will be fully compensated.</li>
              <li>We appreciate your flexibility and dedication in addressing this urgent matter. Rest assured that your commitment will be recognized and appropriately rewarded.
              </li>
          </ul>

          Thank you for your understanding.
      </>
  );
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};
