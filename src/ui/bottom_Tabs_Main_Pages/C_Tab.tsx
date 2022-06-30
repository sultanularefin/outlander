import React, {
    useCallback,
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
    StyleSheet, ImageBackground, Appearance,
} from "react-native";

import hairlineWidth = StyleSheet.hairlineWidth;




import {useActionSheet} from "@expo/react-native-action-sheet";

import {
    useAppDispatch,
    useAppSelector
} from "../../appStore/app/hooks";

import {
    all_Emotions, emotion_and_resource_array,
    login__response__with_userName__password, OneStructure_interface,
    select_user_Name__password_login_response
} from "../../appStore/Reducers/authSlice";

import ImagePickerMultiple from "react-native-image-crop-picker";
import Entypo from "react-native-vector-icons/Entypo";
import {unwrapResult} from "@reduxjs/toolkit";
import Snackbar from "react-native-snackbar";
import Search_In_Map from "../components/Search_In_Map";
import {useFocusEffect} from "@react-navigation/native";
import Toggle_Button from "../components/Toggle_Button";
import Direction_Button from "../components/Direction_Button";

export interface C_Tab_Props{
    navigation: any,
    route: any,

}
// import { MapContainer, TileLayer, useMap } from 'react-leaflet'


// import { useColorScheme } from 'react-native';
import One_Structure_In_Map from "../components/structures/One_Structure_In_Map";
const map_BG = require('../../../Image/background/imp_map.jpg');
// import MapboxGL from '@rnmapbox/maps';
// import config from './../../utils/config';

const C_Tab: React.FC<C_Tab_Props> = ({
                                                 navigation,
                                                 route,
                                             }) => {



    // --redux/ Redux related hooks begins here
    const dispatch = useAppDispatch();



    const displayWidth = useWindowDimensions().width;

    const displayHeight = useWindowDimensions().height;
    // MapboxGL.setAccessToken(config.get('accessToken'));

    const TextBox_Height= displayHeight/13;


    const  ref___For__Search__In__Search__Page = useRef<TextInput>(null);


    const [theme, setTheme] = useState<string>('light');//('light' | 'dark');

    const themeChangeListener = useCallback(() => {
        // setTheme(Appearance.getColorScheme());

        const colorScheme = Appearance.getColorScheme();
        if (colorScheme === 'dark') {
            setTheme('light');

            Alert.alert(`dark to 'light' mode Selected but will not be reflected to app`);
            // Use dark color scheme
        }
        else{

            setTheme('dark');

            Alert.alert(`'light' to 'dark' mode Selected but will not be reflected to app`);
        }
    }, []);

    /*
    useEffec(() => {
        Appearance.addChangeListener(themeChangeListener);
        return () => Appearance.removeChangeListener(themeChangeListener);
    }, [themeChangeListener]);
    */

    console.log({ theme });



    useFocusEffect(
        useCallback(() => {


            // console.log(" << route.params.PARTNERID >>: ", route.params.PARTNERID);



            //@ts-ignore
            const invoke_Distribution_Point_Details_API = async () => {


                try {


                    if (Platform.OS==='android') {
                        const isGranted = await MapboxGL.requestAndroidLocationPermissions();
                        this.setState({
                            isAndroidPermissionGranted: isGranted,
                            isFetchingAndroidPermission: false,
                        });
                    }


                } catch (error) {
                    console.log('error in userToken checking: (8)', error);
                }



            };

            // invoke_Distribution_Point_Details_API();

            const unsubscribe_Appearance_Change_Listener = Appearance.addChangeListener(themeChangeListener);


            return () => {


                unsubscribe_Appearance_Change_Listener.remove();

            };

            // return () => Appearance.removeChangeListener(themeChangeListener);




            // Keyboard.removeListener("keyboardDidShow", keyboardDidShow);
            // Keyboard.removeListener("keyboardDidHide", keyboardDidHide);
            // unsubscribe_KeyboardDidShow.remove()
            //
            // ;

            // const unsubscribe_KeyboardDidShow = Keyboard.addListener("keyboardDidShow", keyboard_Did_Show);
            // const unsubscribe_keyboardDidHide = Keyboard.addListener("keyboardDidHide", keyboard_Did_Hide);





        }, [
            themeChangeListener
        ])
    );




    const direction_Button_Pressed_2 = ()=> {
        Alert.alert("You pressed the diretion button");


    };

    const update_Dark_Or_Normal_Mode_1 =()=>{

        // console.log("at -___update_Dark_Or_Normal_Mode_1");
        console.log("at -___direction_Button_Pressed_2");
        return themeChangeListener();

    };

    const new_Structure_Selected=(index:number)=>{

        console.log("__index__ : ",index);

        const slected_Structure= emotion_and_resource_array[index];

        Alert.alert(`you selected: ${slected_Structure.structure_Name}`);



    };

    return (
        <View style={C_Tab_Styles.container}>



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
                source={map_BG}

                // resizeMode={'contain'}

                resizeMode={'stretch'}



            >


                <View
                    style={{
                        // flex: 7,
                        paddingTop: TextBox_Height/2,
                        flexDirection: "column",
                        // height: (netInfo?.isConnected === false)
                        //     ? (displayHeight-28)-170
                        //     : displayHeight-170,

                        height: '100%',
                        backgroundColor: 'transparent',




                        justifyContent: 'flex-start',
                        /*: comments__Loading_State
                        ?0.6
                        :1,*/

                    }}

                >



                    <Search_In_Map
                        item_Height={TextBox_Height}
                        phone_Width={displayHeight}
                        navigation2 ={navigation}

                        search_Input_Ref={ref___For__Search__In__Search__Page}
                        /*
                        save_OR__Leave__Before_Leave={}
                        clear_SearcH_Input={}
                        update__Master_Loading_State={}
                        */
                        />







                    {/*TOGGLE AND DIRECTION BUTTONS ---BEGINS--- HERE*/}

                    <Toggle_Button
                        update_Dark_Or_Normal_Mode_2={update_Dark_Or_Normal_Mode_1}
                        someConst_Height={TextBox_Height}
                        current_Mode={theme}

                    >
                    </Toggle_Button>

                    <Direction_Button
                        direction_Button_Pressed={direction_Button_Pressed_2}
                        someConst_Height={TextBox_Height}

                    >

                    </Direction_Button>
                    {/*TOGGLE AND DIRECTION BUTTONS --ENDS--- HERE*/}



                   {/* <Text style={{
                        fontWeight: 'bold',
                        textAlignVertical: 'center',
                        textAlign: "center",
                        // color: 'steelblue',
                        color: 'red',
                        fontSize: 28,
                    }}>
                        C_Tab

                    </Text>*/}


                    <FlatList
                        data={emotion_and_resource_array}

                        renderItem={({
                                         item,
                                         index
                                     }) => (
                           /* <Logger_Archived_Fil_B_Emtn_Flat_List_Item
                                item={item}
                                index={index}
                                t_width={w_width}
                                t_height={t_height}
                                selected_emotion_index={current_Filtering__Index__For__Archived_Posts}

                                listRef_22={listRef_22}

                            />*/

                            <One_Structure_In_Map
                                current_Structure={item}
                                t_width={displayWidth}
                                t_height={displayHeight}
                                selected_emotion_index={new_Structure_Selected}
                                someConst_Height={TextBox_Height}
                                />

                        )}



                        keyExtractor={(item:OneStructure_interface) => `${item.index}-${item.structure_Name}`}

                        style={{


                            height: '100%',  // 12% for Emotion, 6% for Search Button 100-18= 82 from 86 to 80 on june_19
                            width: '100%',
                            // marginBottom: 10,
                            // marginTop:10,
                            // paddingHorizontal: 8,
                            // backgroundColor:'gold',
                            // opacity: 0.1,



                        }}

                        // ListHeaderComponent={Header_OF_Emotion}
                        horizontal={true}
                    />
                </View>



            </ImageBackground>

        </View>




    );


};





const C_Tab_Styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },

});


export default C_Tab;

