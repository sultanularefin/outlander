import React, {
    useState,
    useRef,
    useCallback
} from 'react';


// import * as Keychain from 'react-native-keychain';

import {
    View,
    StyleSheet,
    Image,
    Alert,
    Platform,
    SafeAreaView,
    ImageBackground,
    Text,
} from 'react-native';
import {CommonActions, useFocusEffect} from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';

import Snackbar from "react-native-snackbar";


import {useAppDispatch, useAppSelector} from "../../../appStore/app/hooks";

import {
    // get_User_Profile_With_UserID_Async,
    // select_auth_store_data,
    // select_isError_status_data,
    // select_logger_person_data,
    // select_user_Name__password_login_response,
    localStorageInterface,
    clearState,
    weXprez_Logger_User_Interface,
    // populate_logger_offline_status,
    // online_from_splashScreen_page_clear_everything,
    ios_device_in_Redux,
    // AsycStorage_Stored_data_interface,
    login_Request_API_payload_interface,
    login_With_username_Password_Async,
    login__response__with_userName__password,
    // select_logger_person_data2,
    select_logger_person_data,
    check_Notification_invocation_begins_Here,
    // notification_Number_by_Logger_ID_Payload_Interface,
    // select_logger_person_data,
    // localS

} from "../../../appStore/Reducers/authSlice";
import {PayloadAction, unwrapResult} from "@reduxjs/toolkit";

import {KeyValuePair} from "@react-native-async-storage/async-storage/lib/typescript/types";


// import HomeMaster from "../HomeMaster";
import {RouteProp} from "@react-navigation/core/src/types";
import HomeMaster from "../../HomeMaster";





// Logo_Splash_Login\march_29\SPL_FINAL.png"

const splashImage = require('../../../../Image/background/wallpaper.jpg');


// /home/arefin/Programs/byvl/WeXprez/
export interface AuthStateInterface {
    apiInovocatoinStatus: string;
    isFetching: boolean,
    isSuccess: boolean,
    isError: boolean,
    errorMessage: string,

    localStorage: localStorageInterface,

    loggerPerson: weXprez_Logger_User_Interface;// PREVIOUSLY IMPORTED FROM LOGIN SCREEN PAGE. USED THIS INTERFACE PERSON FROM AUTHSLICE
    // ON SEPTEMBER 1ST 2021

}



export interface SplashScreen_Props {
    // navigation:NavigationRoute,
    // props: {
    //
    // },
    navigation: any,

    route: RouteProp<{ params: {
            name:string,
        }
    }, 'params'>
}


const SplashScreen: React.FC<SplashScreen_Props> = ({ navigation,route}) => {

// const SplashScreen: React.FC<SplashScreen_Props> = ({ navigation,}) => {

    const dispatch = useAppDispatch();

    const isIOS= Platform.OS==='ios';



    const [loadingState, setLoadingState] = useState<boolean>(false);

    const {
        apiInovocatoinStatus,
    } = useAppSelector(select_logger_person_data);




    // console.log(" << netInfo.type >> : ", netInfo.type);


    // select_user_Name__password_login_response



    const login_Common_Code__Splash_AND_Login_Screen_Page= async (login_Payload:login_Request_API_payload_interface)=>{


        try {

            setLoadingState(true);

            // console.log("login_Payload inside Splash__Screen:::: in [login_API_Common]",login_Payload);



            const login_with_username_Password_action = await dispatch(login_With_username_Password_Async(login_Payload));

            const login_with_username_Password__response_temp = unwrapResult(login_with_username_Password_action);

            // console.log("login_with_username_Password__response_temp: ",login_with_username_Password__response_temp);

            if (login_with_username_Password__response_temp !== undefined) {

                const login_with_userName_password_response: login__response__with_userName__password = login_with_username_Password__response_temp;


                if (login_with_userName_password_response.login_id){


                    // console.log("login__response: [[login_Common_Code__Splash_AND_Login_Screen_Page]] ",login_with_userName_password_response);

                    const notification_Action= await dispatch(check_Notification_invocation_begins_Here(Number(login_with_userName_password_response.id)));

                    setLoadingState(false);

                    // 999
                    return navigation.dispatch(
                        CommonActions.reset({
                            index: 0,
                            routes: [{name: 'HomeMaster'}],
                        })
                    );


                }

                // {"message": "No User Found.", "success": false}
                else {
                    setLoadingState(false);
                    console.log('at else ');

                    // console.log("at here inside sps screen ...");
                    Snackbar.show({
                        text: `${login_with_userName_password_response.message}`,
                        duration: Snackbar.LENGTH_INDEFINITE,
                        numberOfLines: 3,

                        action: {
                            text: 'close',
                            textColor: 'green',
                            onPress: () => {
                                Snackbar.dismiss();
                            },
                        },
                    });
                }
            }
        } catch (error_in_login__check) {
            console.log("error_in_login__check: ", error_in_login__check);
            setLoadingState(false);
            // setModalVisibleState(false);

        }

    };






    const check_User_SignedIn_WeXprez = async () => {







        // return; // to be uncommented.

        return setTimeout(
            () => {
                return navigation.dispatch(
                    CommonActions.reset({
                        index: 0,
                        routes: [{name: 'HomeMaster'}],
                    })
                );

            },
            3000
        );
    };


    useFocusEffect(
        useCallback(() => {


            // console.log(" << route.params.PARTNERID >>: ", route.params.PARTNERID);



            check_User_SignedIn_WeXprez();




            // clear_all();



        }, [
            /*
            dispatch,
            route?.params?.name,
            navigation,
            netInfo,
            */
            // userDataState.user_id
        ])
    );






    // console.log("at Splash Screen: ");







    if(apiInovocatoinStatus  === "failed") {
        // if (userData.apiInovocatoinStatus === "failed") {
        // NHS F SplashScreen begins here. .....

        console.log("userData.apiInovocatoinStatus === \"failed\"");

        console.log("something went wrong, check internet");

    }






    // if (userData.apiInovocatoinStatus === "loading") {
    // Final  SplashScreen begins here. .....
    return (
        <SafeAreaView style={styles.container}>





            <ImageBackground
                style={{
                    flex: 10,
                    width: '100%',
                    // width: '100%',
                    // flex: 10,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignSelf: 'center',
                    height: '100%',
                    // margin: 100,

                    /*
                     minWidth: displayWidth,
                     // maxHeight: displayHeight-(displayHeight/12),
                     height: displayHeight-(displayHeight/8),
                     */
                }}
                source={splashImage}

                // resizeMode={'contain'}

                resizeMode={'stretch'}



            >

                <View
                    style={{
                        // flex: 7,
                        flexDirection: "column",
                        // height: (netInfo?.isConnected === false)
                        //     ? (displayHeight-28)-170
                        //     : displayHeight-170,

                        height: '100%',
                        backgroundColor: 'transparent',



                        // backgroundColor: 'green',
                        opacity: loadingState
                            ?0.6
                            :1,
                        justifyContent: 'center',
                        /*: comments__Loading_State
                        ?0.6
                        :1,*/

                    }}

                >

                    <Text style={{
                        fontWeight: 'bold',
                        textAlignVertical: 'center',
                        textAlign: "center",
                        // color: 'steelblue',
                        color: 'gold',
                        fontSize: 28,
                    }}>
                        Sultanul Arefin

                    </Text>
                </View>



            </ImageBackground>


        </SafeAreaView>
    );

    // NHS F SplashScreen ENDs here. .....
};
export default SplashScreen;

const styles = StyleSheet.create ({
    activityIndicator: {
        alignItems: 'center',
        height: 80,
    },
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        // backgroundColor: '#ffffff',
        // backgroundColor: '#000000',
        flex: 10,
        justifyContent: 'center',

        // --new


        backgroundColor: 'white',
        // backgroundColor: 'red',
        // height: '100%', // imp
        //width: '100%',

    },

});
