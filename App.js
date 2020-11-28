import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, ImageBackground, 
         StatusBar, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { Item, Input } from 'native-base';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const App = () => {
  return(
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar hidden={true}/>
      <KeyboardAvoidingView behavior='position' style={{ flex: 1 }} keyboardVerticalOffset={-hp('20%')} >
      <ImageBackground source={require('./Images/sign_up_bg.jpeg')} style={styles.backgroundImage} imageStyle={{ resizeMode: 'stretch' }}>

      <View style={styles.mainContentContainer}>
        
        <View style={{ height: '30%', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }}>
          <Text style={{ color: '#fff', fontWeight: '800', fontSize: wp('11%') }}>
            Sign Up
          </Text>
          <TouchableOpacity>
            <FontAwesomeIcon icon={faPlusCircle} size={wp('28%')} style={{ color: '#fff' }} />
          </TouchableOpacity>
        </View>
        
        <View style={{ width: '100%', height: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <Item rounded style={{ backgroundColor: '#fff', paddingLeft: wp('3%'), height: '18%' }}>
            <Input placeholder='Full Name' autoCapitalize='words' />
          </Item>

          <Item rounded style={{ backgroundColor: '#fff', paddingLeft: wp('3%'), height: '18%' }}>
            <Input placeholder='Gender' />
          </Item>

          <Item rounded style={{ backgroundColor: '#fff', paddingLeft: wp('3%'), height: '18%' }}>
            <Input placeholder='Email' autoCapitalize='none' />
          </Item>

          <Item rounded style={{ backgroundColor: '#fff', paddingLeft: wp('3%'), height: '18%' }}>
            <Input placeholder='Password' secureTextEntry autoCapitalize='none' />
          </Item>

        </View>

        <TouchableOpacity style={{ width: '100%', height: '9%', backgroundColor: '#fff',
           alignItems: 'center', flexDirection: 'column', justifyContent: 'center',
           borderRadius: wp('10%') }} onPress={() => console.log('Hello')} activeOpacity={0.5}
             >
          <Text style={{ fontSize: wp('6.5%'), fontWeight: '800', color: '#f88a00' }} >
            Sign Up
          </Text>
        </TouchableOpacity>

      </View>

      </ImageBackground>
      </KeyboardAvoidingView>
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
    minHeight: hp('100%')
  },
  mainContentContainer: {
    width: '90%',
    height: '80%',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
});

export default App;