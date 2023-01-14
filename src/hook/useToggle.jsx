import React from 'react';
import { ToggleContext } from '../component/Login/RememberMeToggle';

const useToggle = () => {
  const context = React.useContext(ToggleContext);
  if (context === undefined) throw new Error('useToggle must be used within a <Toggle />');
  return context;
};

export default useToggle;