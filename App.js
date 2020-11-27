import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, ImageBackground, StatusBar } from 'react-native';

const App = () => {
  return(
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar hidden={true}/>
      <ImageBackground source={require('./Images/sign_up_bg.jpeg')} style={styles.backgroundImage} imageStyle={{ resizeMode: 'stretch' }}>

      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
  backgroundImage: {
    flex: 1
  }
});

export default App;