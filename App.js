import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, ImageBackground, 
         StatusBar, KeyboardAvoidingView, ScrollView, TouchableOpacity } from 'react-native';
import { Item, Input } from 'native-base';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

const App = () => {
  return(
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar hidden={true}/>
      <ImageBackground source={require('./Images/sign_up_bg.jpeg')} style={styles.backgroundImage} imageStyle={{ resizeMode: 'stretch' }}>

      <View style={styles.mainContentContainer}>
        
        <View style={{ height: '30%', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }}>
          <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 40 }}>
            Sign Up
          </Text>
          <TouchableOpacity>
            <FontAwesomeIcon icon={faPlusCircle} size={100} style={{ color: '#fff' }} />
          </TouchableOpacity>
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

        <TouchableOpacity style={{ width: '100%', height: '9%', backgroundColor: '#fff',
           alignItems: 'center', flexDirection: 'column', justifyContent: 'center',
           borderRadius: 30 }} onPress={() => console.log('Hello')} activeOpacity={0.5}
             >
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#f88a00' }} >
            Sign Up
          </Text>
        </TouchableOpacity>

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
    alignItems: 'center',
    minHeight: 640
  },
  mainContentContainer: {
    width: '90%',
    height: '80%',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
});

export default App;