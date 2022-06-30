
```tsx
// import Home_Primary from "./bottom_Tabs_Main_Pages/Home_Primary"; // DON'T DELETE IT IMPORTANT JUNE 1ST 2022
import React, {
    useCallback,
    useEffect,
    useState
} from "react";


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
import {
    LogBox,
    Platform,
    useWindowDimensions,
    View,
    StyleSheet,
    Text,
    Alert,
    BackHandler,
    AppState,
    AppStateStatus,
    // SafeAreaView,
    Image, Button
} from "react-native";
import {Rect,
    SafeAreaView as SafeArea_View_Context,
    useSafeAreaFrame,
    // useSafeAreaInsets
} from 'react-native-safe-area-context';





// C:\Users\arefin\trpz\WeXprez\Image\bottom_Tab_Icons
LogBox.ignoreLogs([

    'Task orphaned',
]);




import Zocial from 'react-native-vector-icons/Zocial';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import Ionicons from 'react-native-vector-icons/Ionicons';




import {
    useAppDispatch,
    useAppSelector} from "../appStore/app/hooks";
import {
    get_User_Profile_With_UserID_Async,
    populate_logger_offline_state_in_redux_for_offline_use,
    weXprez_Logger_User_Interface,
    select_logger_person_data2,
    select_offlineStatus,
    check_Internet_State_Again,
} from "../appStore/Reducers/authSlice";



import NetInfo, {
    NetInfoState,
    useNetInfo
} from "@react-native-community/netinfo";

import {useFocusEffect} from "@react-navigation/native";



// import Tabs_Top_Navigation_Component from "./tabsHeaderComponents/Tabs_Top_Navigation_Component";


import Ixprez from "./bottom_Tabs_Main_Pages/Ixprez";
// import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";




export interface Props {
    // navigation:NavigationRoute,
    // props: {},
    navigation:any,
}


const HomeMaster: React.FC<Props> = ({ navigation}) => {



    const dispatch = useAppDispatch();
    const displayWidth = useWindowDimensions().width;

    const inActive_Color_Icon= 'red';
    const active_Color_Icon = "black";//'#ffffff';
    // const commonBackgroundColor= 'red';
    const commonBackgroundColor = "white";//'#000000';
    const displayHeight = useWindowDimensions().height;
    const iconSize = displayHeight / 24;
    const bottomTabsHeight = displayHeight / 11;
    const [userIdState, setUserIdState] = useState(0);
    // const [badgeCountState, setBadgeCountState] = useState(0);

    const [is_Online_State, setIs_Online_State] = useState(true);

    const offLineState = useAppSelector(select_offlineStatus);



    // const dimensionsData:Rect = useSafeAreaFrame();








    // Redux/ redux related code begins here...

    // const dispatch = useAppDispatch();
    const loggerPerson: weXprez_Logger_User_Interface = useAppSelector(select_logger_person_data2);
    // const appState = useRef(AppState.currentState);
    const netInfo = useNetInfo();





    // Redux/ redux related code ends here...






    useFocusEffect(
        useCallback( () => {




            const checkUserSignedIn =  () => {


                try {
                    const userId2 = loggerPerson.id;


                    setUserIdState(userId2 === null ? 0 : userId2);



                } catch (error) {
                    console.log('error in userToken checking: ', error);
                }



            };

            // Subscribe
            const unsubscribe_From_Internet_connetivity = NetInfo.addEventListener( (state:NetInfoState) => {


                if(state.isConnected === false){

                    // console.log("setIs_Online_State(false);: ","setIs_Online_State(false)");

                    const offline:{offline: boolean}={
                        offline:true
                    };
                    dispatch(populate_logger_offline_state_in_redux_for_offline_use(offline));
                    setIs_Online_State(false);

                }

                if(state.isConnected === true){
                    // console.log("setIs_Online_State(true);: ","setIs_Online_State(true)");

                    const offline:{offline: boolean}={
                        offline:false
                    };
                    dispatch(populate_logger_offline_state_in_redux_for_offline_use(offline));
                    setIs_Online_State(true);
                }

            });






            const appState_subscription_Bottom_Tabs_Main = AppState.addEventListener("change",  (nextAppState:AppStateStatus) => {


                /*
                if (
                    appState.current.match(/inactive|background/) &&
                    nextAppState === "active"
                ) {
                    console.log("App has come to the foreground!");

                    console.log("nextAppState: at __appState_subscription_Bottom_Tabs_Main__:",nextAppState);
                    // INVOKE THIS AGAIN:
                    unsubscribe_From_Internet_connetivity();
                }

                */

                // console.log("nextAppState: at __appState_subscription_Bottom_Tabs_Main__:",nextAppState);
                // INVOKE THIS AGAIN:
                unsubscribe_From_Internet_connetivity();







            });


            const unsubscribe_tab_Press_Event = navigation.addListener('tabPress', (event:any) => {


                if(offLineState){
                    dispatch(check_Internet_State_Again(null));

                }



                // Prevent default behavior
                // event.preventDefault();

                // Do something manually
                // ...
            });

            checkUserSignedIn();


            unsubscribe_From_Internet_connetivity(); // put here on january _24

            return () => {


                appState_subscription_Bottom_Tabs_Main.remove();

            };




        }, [
            netInfo,
            navigation,
            offLineState,
            dispatch,
        ]),
    );


    /*
    const  MyTabBar=({ navigation })=> {
        return (
            <Button
                title="Go somewhere"
                onPress={() => {
                    // Navigate using the `navigation` prop that you received
                    navigation.navigate('SomeScreen');
                }}
            />
        );
    };
    */




    const initialRouteName2= 'Ixprez';
    // 'Posts_OF_Following_Users';
    // 'Xprez_Tab_Screen';
    // const initialRouteName2 = 'TaskHome';


    return (


        // SafeAreaView important for different IOS devices


        // <SafeArea_View_Context
        // style={HomeMasterStyles.container}


        <SafeArea_View_Context

            style={{

                flexDirection: 'column',
                justifyContent: 'flex-start',
                flex: 10,
            }}

        >




            <View style={{

                flexDirection: 'column',
                flex: 0.8,
                justifyContent: 'flex-start',
                marginBottom: 10,

            }}>

                <View
                    style={{
                        flexDirection: 'row',
                        // height: displayHeight / 12,
                        width: displayWidth,
                    }}
                >

                   {/* <Tabs_Top_Navigation_Component
                        navigation ={navigation}
                        logger_ID={userIdState}
                        height_T={displayHeight/12}
                    />*/}
                </View>
            </View>



            { (is_Online_State)
                ?null
                :(
                    <View
                        style={{
                            flexDirection: 'column',
                            justifyContent: 'flex-start',
                            flex:0.4,
                            // height: 28,
                            backgroundColor: 'red',
                            width: displayWidth,
                            paddingLeft: 20,
                            // flex: 1,
                            // paddingTop: 10,
                            // justifyContent: "center",
                            // alignContent: "center",
                            alignItems: "center",

                        }}
                    >
                        <Text style={{color: "white"}}> You are offline</Text>
                    </View>
                )

            }



            <View

                style={{
                    backgroundColor: 'white',
                    flexDirection: 'column',
                    flex: 9.3,
                    justifyContent: 'flex-start',
                }}
            >


                <Tab.Navigator

                    // tabBar={props=>{...props}}
                    //tabBar={props => <MyTabBar {...props} />}

                    // tabBar={props =>
                    // props => <MyTabBar {...props} />
                    // tabBar={}
                    initialRouteName={initialRouteName2}
                    detachInactiveScreens={true}

                    screenOptions={{

                        tabBarActiveTintColor: active_Color_Icon,
                        tabBarInactiveTintColor: inActive_Color_Icon,


                        tabBarAllowFontScaling: true,

                        lazy:true,

                        tabBarStyle: {
                            position: "relative",
                            height: bottomTabsHeight,

                            backgroundColor: commonBackgroundColor,
                            borderBottomColor: '#8E8E93',
                            borderTopColor: '#8E8E93',

                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            alignContent: 'center',
                            minHeight:60,



                        },

                        tabBarShowLabel: true,
                        // tabBarShowLabel: false,
                        tabBarLabelStyle: {
                            fontSize: 12,
                            fontWeight: 'bold',
                            flexDirection: "column-reverse",
                            justifyContent: 'space-between',

                            paddingBottom: 4,
                        },
                        tabBarLabelPosition: "below-icon",



                    }}





                    // tabBar={props => <MyTabBar {...props} />}





                >






                    <Tab.Screen
                        name="Ixprez"
                        component={Ixprez}


                        options={{
                            // tabBarLabel: 'Ixprez',
                            // tabBarShowLabel: true,
                            // tabBarShowLabel: false,
                            tabBarShowLabel: true,
                            headerShown: false,

                            tabBarIcon: (
                                {
                                    focused,
                                    color,
                                    size,
                                }) => (
                                <Ionicons
                                    style={[{color: active_Color_Icon}]}
                                    size={focused?iconSize*2:iconSize}
                                    name={'ios-notifications-outline'}
                                />
                               /* <Image
                                    style={{
                                        height: iconSize,
                                        width: iconSize,
                                    }}
                                    source={Ixprez_Image}
                                />*/



                            ),

                            tabBarActiveBackgroundColor: 'red',
                        }}
                    />

                    <Tab.Screen
                        name="Wexprez"
                        component={Ixprez}
                        options={{
                            tabBarLabel: 'Wexprez',
                            tabBarShowLabel: true,
                            headerShown: false,

                            tabBarIcon: ({
                                             focused,
                                             color,
                                             size,
                                         }) => (

                                <Ionicons
                                    style={[{color: active_Color_Icon}]}
                                    size={focused?iconSize*2:iconSize}
                                    name={'ios-notifications-outline'}
                                />

                                /*<Image
                                    style={{
                                        height: iconSize,
                                        width: iconSize,
                                    }}
                                    source={Wexprez_Image}
                                />*/

                            ),

                        }}
                    />

                    <Tab.Screen
                        name="Following"
                        component={Ixprez}
                        options={{
                          tabBarLabel: 'Following',
                            tabBarShowLabel: true,
                            headerShown: false,

                            tabBarIcon: ({
                                             focused,
                                             color,
                                             size,
                                         }) => (


                                <Ionicons
                                    style={[{color: active_Color_Icon}]}
                                    size={focused?iconSize*2:iconSize}
                                    name={'ios-notifications-outline'}
                                />

                           /*     <Image
                                    style={{
                                        height: iconSize,
                                        width: iconSize,

                                        //backgroundColor: "#f2f2f2"
                                    }}
                                    source={Following_Image}
                                />*/
                            ),


                        }}
                    />




                    <Tab.Screen
                        name="Follower"
                        component={Ixprez}
                        options={{
                          tabBarLabel: 'Follower',
                            // tabBarShowLabel: true,
                            tabBarShowLabel: true,
                            headerShown: false,

                            tabBarIcon: ({
                                             focused,
                                             color,
                                             size,
                                         }) => (

                                <Ionicons
                                    style={[{color: active_Color_Icon}]}
                                    size={focused?iconSize*2:iconSize}
                                    name={'ios-notifications-outline'}
                                />
                             /*   <Image
                                    style={{
                                        height: iconSize,
                                        width: iconSize,
                                    }}
                                    source={Follower_Image}
                                />*/

                            ),


                        }}
                    />




                    {/*<Tab.Screen name="Home" component={HomeScreen} options={{ tabBarBadge: 3 }} />*/}





                    {/*Other Users Posts begins here*/}
                    <Tab.Screen
                        name="Others"
                        component={Ixprez}
                        options={{
                          tabBarLabel: 'Others',
                          // tabBarShowLabel: false,
                            tabBarShowLabel: true,
                            headerShown: false,

                            tabBarIcon: ({
                                             focused,
                                             color,
                                             size,
                                         }) => (

                                  <Ionicons
                                       style={[{color: active_Color_Icon}]}
                                       size={focused?iconSize*2:iconSize}
                                       name={'ios-notifications-outline'}
                                   />

                              /*  <Image
                                    style={{
                                        height: iconSize,
                                        width: iconSize,

                                        //backgroundColor: "#f2f2f2"
                                    }}
                                    source={Others_Image}
                                />*/



                            ),


                        }}
                    />

                    {/*Other Users Posts begins here*/}





                </Tab.Navigator>



            </View>






        </SafeArea_View_Context>



    );



};


const HomeMasterStyles = StyleSheet.create({

});

export default HomeMaster;

```
