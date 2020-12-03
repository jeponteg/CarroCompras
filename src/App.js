
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar,
} from 'react-native';
import DishList from './components/DishExample/DishList';
import Navigation from './navigation/Navigation';


const styles = StyleSheet.create({
  dropdownItem: {
    height: 50,
    backgroundColor: '#95a5a6',
    borderColor: 'black',
    borderWidth: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: 20,
  },
  safeArea: {
    flex: 1,
    backgroundColor:'#233240'
  },
});

const App = () => {
  return (
    <>
    <NavigationContainer>
    
       <Navigation/>
     
      </NavigationContainer>  
    </>
  );
};

export default App;
