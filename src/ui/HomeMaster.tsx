// import Home_Primary from "./bottom_Tabs_Main_Pages/Home_Primary"; // DON'T DELETE IT IMPORTANT JUNE 1ST 2022
import React, {
    useCallback,
    useEffect,
    useState
} from "react";


import {BottomTabBarProps, createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Bottom_Tab = createBottomTabNavigator();
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
    Image, Button, TouchableOpacity
} from "react-native";
import {
    EdgeInsets, Rect,
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
import AntDesign from 'react-native-vector-icons/AntDesign';


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





import {NavigationHelpers, ParamListBase, TabNavigationState, useFocusEffect} from "@react-navigation/native";



// import Tabs_Top_Navigation_Component from "./tabsHeaderComponents/Tabs_Top_Navigation_Component";


// import A_Tab, {IXprez_Props} from "./bottom_Tabs_Main_Pages/Ixprez";
// import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import {RouteProp} from "@react-navigation/core/src/types";
import {NavigationState, PartialState} from "@react-navigation/routers/src/types";
import {BottomTabDescriptorMap, BottomTabNavigationEventMap} from "@react-navigation/bottom-tabs/src/types";
import {NavigatorScreenParams} from "@react-navigation/core/lib/typescript/src/types";
import B_Tab from "./bottom_Tabs_Main_Pages/B_Tab";
import D_Tab from "./bottom_Tabs_Main_Pages/D_Tab";
import C_Tab from "./bottom_Tabs_Main_Pages/C_Tab";
import E_Tab from "./bottom_Tabs_Main_Pages/E_Tab";
import A_Tab from "./bottom_Tabs_Main_Pages/A_Tab";
import Entypo from "react-native-vector-icons/Entypo";





export interface Props {
    // navigation:NavigationRoute,
    // props: {},

    navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>,//any,
}

const inActive_Color_Icon= 'red';
const active_Color_Icon = "black";//'#ffffff';
// const commonBackgroundColor= 'red';
const commonBackgroundColor = "white";//'#000000';


const MyTabBar: React.FC<BottomTabBarProps> = ({
                                                   state,
                                                   navigation,
                                                   // route,
                                                   insets,
                                                   descriptors,


                                               }) => {

    return (
        <View style={{ flexDirection: 'row' }}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                // console.log("options: ",options);
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;
                const iconSize_HardCoded= options.tabBarStyle.maxHeight/2;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        // The `merge: true` option makes sure that the params inside the tab screen are preserved
                        //@ts-ignore
                        navigation.navigate({
                            name: route.name,
                            merge: true
                        });
                    }
                };

                const onLongPress = () => {

                    console.log("zzz");

                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (

                    <TouchableOpacity
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        // style={{ flex: 1 }}
                        // @ts-ignore
                        key={label}
                        style={{...options.tabBarStyle}}
                    >



                        <View style={{

                            position: 'relative',
                            // height: t_height/14, //t_height/14,
                            // borderWidth:0.2,
                            // borderColor:'black',

                            minWidth: isFocused?(iconSize_HardCoded*1.6):(iconSize_HardCoded),
                            minHeight: isFocused?(iconSize_HardCoded*1.6):(iconSize_HardCoded),
                            flexDirection: 'column',
                            alignItems: "center",
                            paddingHorizontal: 4,
                            justifyContent: 'center',
                            borderRadius: isFocused?(iconSize_HardCoded/1.3):0,
                            marginHorizontal: 5,
                            backgroundColor: isFocused?'red':'white',//"red":"gold",//'red':'white', // "red":"gold",
                            // minWidth: iconSize_HardCoded*1.1,

                            // marginTop: 2,

                            // maxHeight:options.tabBarStyle.maxHeight,
                            // paddingBottom: isFocused?20:0,
                            bottom: isFocused ? iconSize_HardCoded/1.5: 1,
                            // top: !isFocused?5:0,


                        }}
                        >




                            {/*  IMAGE PORTION Begins HERE..*/}

                            <View
                                style={{

                                    // flex: 0.2,
                                    flexDirection: 'column',
                                    alignItems: "center",
                                    justifyContent: 'flex-start',
                                }}
                            >

                                {
                                    (index===0)?
                                        (
                                            <Ionicons
                                                style={{color:isFocused?'white': active_Color_Icon}}
                                                size={isFocused?iconSize_HardCoded*1.01:iconSize_HardCoded-5} // DESIGN DEPENDS OF THIS SIZE SETTING JUNE 20, 2022
                                                // size={20}
                                                name={'ios-compass-outline'}
                                            />
                                        ):(index===1)?
                                            (
                                                <Ionicons
                                                    style={{color:isFocused?'white': active_Color_Icon}}
                                                    size={isFocused?iconSize_HardCoded*1.01:iconSize_HardCoded-5} // DESIGN DEPENDS OF THIS SIZE SETTING JUNE 20, 2022
                                                    // size={20}
                                                    name={'ios-stats-chart-outline'}
                                                />
                                            ):

                                            (index===2)?(

                                                    <Entypo

                                                        style={{color:isFocused?'white': active_Color_Icon}}
                                                        size={isFocused?iconSize_HardCoded*1.01:iconSize_HardCoded-5} // DESIGN DEPENDS OF THIS SIZE SETTING JUNE 20, 2022
                                                        // size={20}
                                                        name={'plus'}
                                                    />
                                                ): (index===3)?
                                                (
                                                    <Ionicons
                                                        style={{color:isFocused?'white': active_Color_Icon}}
                                                        size={isFocused?iconSize_HardCoded*1.01:iconSize_HardCoded-5} // DESIGN DEPENDS OF THIS SIZE SETTING JUNE 20, 2022
                                                        // size={20}
                                                        name={'ios-notifications-outline'}
                                                    />
                                                ):
                                                (

                                                    <AntDesign

                                                        style={{color:isFocused?'white': active_Color_Icon}}
                                                        size={isFocused?iconSize_HardCoded*1.01:iconSize_HardCoded-5} // DESIGN DEPENDS OF THIS SIZE SETTING JUNE 20, 2022
                                                        // size={20}
                                                        name={'user'}
                                                    />
                                                )




                                }


                            </View>





                            {/*  <View
                                    style={{

                                        // flex: 0.4,
                                        flexDirection: 'column',
                                        alignItems: "center",
                                        justifyContent: 'flex-start',
                                    }}
                                >
                                    <Text style={{
                                        // color: "black",
                                        fontSize: 12,
                                        color: isFocused ? '#673ab7' : '#222'
                                    }}>
                                        {label}
                                    </Text>
                                </View>*/}

                        </View>



                    </TouchableOpacity>



                );
            })}
        </View>
    );
};


const HomeMaster: React.FC<Props> = ({ navigation}) => {



    const dispatch = useAppDispatch();
    const displayWidth = useWindowDimensions().width;




    const displayHeight = useWindowDimensions().height;
    const iconSize = displayHeight / 24;
    const bottomTabsHeight = displayHeight / 9;




    const initialRouteName2= 'C_Tab';
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












            <View

                style={{
                    backgroundColor: 'white',
                    flexDirection: 'column',
                    flex: 10,
                    justifyContent: 'flex-start',
                }}
            >



                <Bottom_Tab.Navigator

                    initialRouteName={initialRouteName2}


                    sceneContainerStyle={{
                        minHeight: displayHeight-bottomTabsHeight,
                        // height: '100%',//displayHeight-bottomTabsHeight,
                        backgroundColor: 'wheat',
                        borderBottomWidth:0.3,
                        borderBottomColor:'black',
                    }}



                    // NavigatorScreenParams
                    // tabBar?: (props: BottomTabBarProps) => React.ReactNode;
                    tabBar={(props:BottomTabBarProps) =>
                        <MyTabBar {...props} />}


                    screenOptions={{

                        tabBarActiveTintColor: active_Color_Icon,
                        tabBarInactiveTintColor: inActive_Color_Icon,


                        tabBarAllowFontScaling: true,

                        lazy:true,

                        tabBarStyle: {
                            position: 'relative',
                            flexDirection:'row',
                            justifyContent: 'center',
                            alignItems:'center',
                            // width: '100%',
                            flex: 1,
                            // position: "absolute",
                            // height: bottomTabsHeight,

                            // position: 'absolute',
                            // left: 0,
                            // right: 0,
                            // bottom: 30,
                            /*
                            borderTopColor: '#8E8E93',
                            borderWidth: 0.3,
                            */

                            maxHeight: bottomTabsHeight, // this value is used by childrens.

                            /*
                            backgroundColor: 'red',
                            borderBottomColor: '#8E8E93',


                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            alignContent: 'center',
                            // minHeight:60,

                            */



                        },



                        /*
                        tabBarShowLabel: false,
                        // tabBarShowLabel: false,
                        tabBarLabelStyle: {
                            fontSize: 12,
                            fontWeight: 'bold',
                            flexDirection: "column-reverse",
                            justifyContent: 'space-between',

                            paddingBottom: 4,
                        },
                        tabBarLabelPosition: "below-icon",
                        */
                    }}

                >

                    <Bottom_Tab.Screen

                        // props={NavigatorScreenParams}
                        // =>
                        // <MyTabBar {...props} />}
                        name="A_Tab"
                        component={A_Tab}



                        options={{
                            tabBarLabel: 'A_Tab',
                            // tabBarShowLabel: true,
                            tabBarShowLabel: false,
                            // tabBarShowLabel: true,
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
                            ),

                            tabBarActiveBackgroundColor: 'red',
                        }}

                    />

                    <Bottom_Tab.Screen
                        name="B_Tab"
                        component={B_Tab}

                        options={{
                            tabBarLabel: 'B_Tab',

                            tabBarShowLabel: false,
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



                            ),

                        }}

                    />

                    <Bottom_Tab.Screen
                        name="C_Tab"
                        component={C_Tab}
                        options={{
                            tabBarLabel: 'C_Tab',
                            tabBarShowLabel: false,
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

                        // screenOptions={{
                        //     tabBarStyle: { position: 'absolute' },
                        // }}
                    />




                    <Bottom_Tab.Screen
                        name="D_Tab"
                        component={D_Tab}
                        options={{
                            tabBarLabel: 'D_Tab',
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
                    <Bottom_Tab.Screen
                        name="E_Tab"
                        component={E_Tab}
                        options={{
                            tabBarLabel: 'E_Tab',
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

                </Bottom_Tab.Navigator>







            </View>






        </SafeArea_View_Context>



    );



};


const HomeMasterStyles = StyleSheet.create({

});

export default HomeMaster;
