import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Navigation from './Navigation';

function App() {
  return (
    <NavigationContainer>
      {/*<AppStack />*/}
      <Navigation />
    </NavigationContainer>
  )
};

export default App;