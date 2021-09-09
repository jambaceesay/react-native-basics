import React, {useEffect, useState} from 'react';
import {
  NativeBaseProvider,
  Box,
  Container,
  VStack,
  Heading,
  HStack,
  Input,
  Button,
  FlatList,
  Text,
  Divider,
  Alert,
  Center,
  Actionsheet,
  useDisclose,
} from 'native-base';
import NotificationC from './components/NotificationC';
import Icon from 'react-native-vector-icons/FontAwesome';
import {NativeRouter, Route, Link} from 'react-router-native';
import AboutPage from './src/pages/AboutPage';
import HomePage from './src/pages/HomePage';
function App() {
  return (
    <NativeRouter>
      <NativeBaseProvider>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
      </NativeBaseProvider>
    </NativeRouter>
  );
}

export default App;
