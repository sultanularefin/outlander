import React from 'react';
// import RNBootSplash from "react-native-bootsplash";
import {
  LogBox,
  StyleSheet,
} from 'react-native';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);


import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createStackNavigator } from '@react-navigation/stack';

// import Home_Primary from "./readme/Home_Primary.md";
import SplashScreen from "./ui/screens/identity/SplashScreen";
import HomeMaster from "./ui/HomeMaster";
import { ActionSheetProvider } from '@expo/react-native-action-sheet';

import { SafeAreaProvider } from 'react-native-safe-area-context';


// import {StyleSheet} from "react-native";



import {Provider} from "react-redux";
import {store} from './appStore/app/store';



const RootStack = createNativeStackNavigator<RootStackParamList>();

export interface Props {

}



type RootStackParamList = {

  HomeMaster: undefined;
  SplashScreen: undefined;


};





const App: React.FC<Props> = (props) => {

  return (


    <Provider store={store}>





      <SafeAreaProvider>

        <ActionSheetProvider>




          <NavigationContainer>



            <RootStack.Navigator initialRouteName={
              // "Create_Interests"
              // "ProfileEdit"
              "SplashScreen"
              // "Comments"
            }

                                 screenOptions={{
                                   // cardOverlayEnabled: true,

                                   headerTitleStyle: {
                                     fontWeight: 'bold',
                                     // fontSize: rdx_dimension.width>360? 16:14,
                                     fontSize: 16,
                                   },
                                   headerTitleAlign: "center",
                                 }}




            >

              <RootStack.Group

                screenOptions={{


                }}

              >

                <RootStack.Screen
                  name="HomeMaster"

                  component={HomeMaster}

                  options={{

                    headerShown: false,
                    // headerStatusBarHeight: 160,
                    // headerStyle

                  }}


                />


                <RootStack.Screen
                  name="SplashScreen"
                  component={SplashScreen}
                  options={{

                    headerShown: false,

                  }}

                />











              </RootStack.Group>

            </RootStack.Navigator>
          </NavigationContainer>




        </ActionSheetProvider>

      </SafeAreaProvider>



    </Provider>




  );

};


export default App;



const AppStyles = StyleSheet.create({


  // hairLineWidth2: StyleSheet.hairlineWidth,

  commonHeaderStyle64: {
    backgroundColor: 'white',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'black',
  },



});
