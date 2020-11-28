import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, ImageBackground, StatusBar } from 'react-native';
import { Item, Input, Button } from 'native-base';

const App = () => {
  return(
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar hidden={true}/>
      <ImageBackground source={require('./Images/sign_up_bg.jpeg')} style={styles.backgroundImage} imageStyle={{ resizeMode: 'stretch' }}>

      <View style={styles.mainContentContainer}>
        
        <View style={{ height: '30%' }}>
          <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 40 }}>
            Sign Up
          </Text>
        </View>

        <View style={{ width: '100%', height: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <Item rounded style={{ backgroundColor: '#fff', paddingLeft: 10, height: '18%' }}>
            <Input placeholder='Full Name' />
          </Item>

          <Item rounded style={{ backgroundColor: '#fff', paddingLeft: 10, height: '18%' }}>
            <Input placeholder='Gender' />
          </Item>

          <Item rounded style={{ backgroundColor: '#fff', paddingLeft: 10, height: '18%' }}>
            <Input placeholder='Email' />
          </Item>

          <Item rounded style={{ backgroundColor: '#fff', paddingLeft: 10, height: '18%' }}>
            <Input placeholder='Password' secureTextEntry />
          </Item>

        </View>

        <Button rounded style={{ width: '100%', backgroundColor: '#fff',
           alignItems: 'center', flexDirection: 'column' }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#f88a00' }} >
            Sign Up
          </Text>
        </Button>

      </View>

      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  backgroundImage: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  mainContentContainer: {
    width: '90%',
    height: '80%',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
});

export default App;