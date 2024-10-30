import { Button } from '@consta/uikit/Button';
import PropTypes from 'prop-types';

/* eslint-disable react/prop-types */
export const U_Button = ({label}) => {
  return (
    <Button label={label} view="ghost" />
  )
}

U_Button.PropTypes = {
  label: PropTypes.string,
}