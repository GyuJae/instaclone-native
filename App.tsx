import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {LoggedOutNav} from './navigators';

const App = () => {
  return (
    <NavigationContainer>
      <LoggedOutNav />
    </NavigationContainer>
  );
};

export default App;
