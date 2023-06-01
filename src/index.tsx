import * as React from 'react';
import { PaperProvider } from 'react-native-paper';

import Button from './Button';
import Icon from './Icon';
import Input from './Input';
import View from './View';

export { Button, Icon, Input, View };

const ComponentsProvider = ({ children }: any) => {
  <PaperProvider>{children}</PaperProvider>;
};

export default ComponentsProvider;
