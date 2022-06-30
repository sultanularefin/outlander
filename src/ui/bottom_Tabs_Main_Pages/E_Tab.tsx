import React, {
    useRef,
    useState
} from "react";



import {
    ActivityIndicator,
    Alert,
    AppState,
    BackHandler,
    Platform,
    TextInput,
    View,
    VirtualizedList,
    Text,
    useWindowDimensions,
    NativeSyntheticEvent,
    TextInputChangeEventData,
    TextInputContentSizeChangeEventData,
    TextInputSelectionChangeEventData,
    Modal,
    TouchableWithoutFeedback,
    FlatList,
    TouchableOpacity,
    StyleSheet, ImageBackground,
} from "react-native";

import hairlineWidth = StyleSheet.hairlineWidth;




import {useActionSheet} from "@expo/react-native-action-sheet";

import {
    useAppDispatch,
    useAppSelector
} from "../../appStore/app/hooks";

import {
    all_Emotions,
    login__response__with_userName__password,
    select_user_Name__password_login_response
} from "../../appStore/Reducers/authSlice";

import ImagePickerMultiple from "react-native-image-crop-picker";
import Entypo from "react-native-vector-icons/Entypo";
import {unwrapResult} from "@reduxjs/toolkit";
import Snackbar from "react-native-snackbar";

export interface E_Tab_Props{
    navigation: any,
    route: any,

}

const splashImage = require('../../../Image/background/wallpaper.jpg');



const E_Tab: React.FC<E_Tab_Props> = ({
                                                 navigation,
                                                 route,
                                             }) => {



    // --redux/ Redux related hooks begins here
    const dispatch = useAppDispatch();








    return (
        <View style={E_Tab_Styles.container}>

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
                        E_Tab

                    </Text>
                </View>



            </ImageBackground>
        </View>




    );


};





const E_Tab_Styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },

});


export default E_Tab;

