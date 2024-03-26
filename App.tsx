import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SplashScreen} from './src/screens';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './src/navigators/AuthNavigator';

const App = () => {
  const [isShowSplash, setisShowSplash] = useState(true);
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setisShowSplash(false);
    }, 1500);
    return () => clearTimeout(timeOut);
  }, []);
  return isShowSplash ? (
    <SplashScreen />
  ) : (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
};

export default App;
