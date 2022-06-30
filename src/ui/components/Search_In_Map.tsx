import React, {useState} from "react";
import {
    Alert,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import {useAppDispatch, useAppSelector} from "../../appStore/app/hooks";

import Entypo from "react-native-vector-icons/Entypo";
// import {
//     search__API_Through_Redux_Async, search__PayLoad_Interface,
//     select_Search__Value_State, update__Search___State__To__True,
//     update__Search__String__Text
// } from "../../appStore/Reducers/Search__Slice";
import MTI from "react-native-vector-icons/MaterialCommunityIcons";
import {
    login__response__with_userName__password,
    select_user_Name__password_login_response
} from "../../appStore/Reducers/authSlice";



export interface Search_In_Map_Props{

    // name_String: string,
    item_Height: number,
    phone_Width: number,
    navigation2: any,


    search_Input_Ref:  React.RefObject<TextInput>,



}




const Search_In_Map: React.FC<Search_In_Map_Props> = (
    props: Search_In_Map_Props,

)=> {

    const dispatch = useAppDispatch();

    // const search_String_Value_State: string = useAppSelector(select_Search__Value_State);


    const [search_String_Value_State, set_Search_String_Value_State] = useState<string>("");

    // const search_String_Value_State="000 000 000";


    const localStorage:login__response__with_userName__password = useAppSelector(select_user_Name__password_login_response);

    const update_Search_String_Value_State= (search_Text: string) => {


        set_Search_String_Value_State(search_Text);
        // return;
        /*
        dispatch(update__Search__String__Text(search_Text));
        * */


    };

    const clear_SearcH_Input=()=>{

        set_Search_String_Value_State("");
        props.search_Input_Ref?.current?.clear();

    };

    const dispatch__Search_API_T_Redux=/*async*/ () => {



        return Alert.alert("Search Button Not Implemented");


        /*
        const custom_Search__PayLoad: search__PayLoad_Interface={

            search_String:search_String_Value_State,
            logger_ID: localStorage.id,
        };
        await dispatch(update__Search___State__To__True(true));

        await dispatch(search__API_Through_Redux_Async(custom_Search__PayLoad));


        */
    };


    return(


        <View
            style={{
                // backgroundColor: 'lightslategrey',
                width: '100%',
                justifyContent: 'flex-start',
                flexDirection: 'row',

                height: props.item_Height,
                paddingLeft: 20,
                // backgroundColor: 'transparent',
            }}
        >





            <View
                style={{
                    width: '94%',
                    // phone_Width/6): is back_Arrow___width,  Send Circle_width: is :60
                    // paddingRight: 10,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    height: props.item_Height,
                    alignSelf: 'center',

                }}
            >
                <View style={{
                    flexDirection: 'row',
                    // flex: 70,
                    backgroundColor: 'white',
                    // borderTopLeftRadius: 10,
                    borderRadius: 4,
                    height: '100%',
                    borderColor: '#c8d6e5',
                    borderWidth: 2,
                    justifyContent: 'flex-start',


                }}>


                    <View style={{
                        flexDirection: 'column',
                        // flex: 10,
                        // justifyContent: 'center',
                        paddingLeft: 5,
                        // height: props.item_Height/12,
                        alignSelf: 'center',
                        justifyContent: 'center',
                        // backgroundColor: 'gold',
                    }}>
                        <Ionicons style={{paddingRight: 5}}
                                  name='ios-search'
                                  size={25}
                            // color='#ffffff'
                            //       color='black'
                                  color={"lightslategrey"}
                                  key="ios-search"


                        />
                    </View>

                    <TextInput

                        style={

                            {
                                // flex: 60,
                                // backgroundColor: 'lightslategrey',
                                // backgroundColor: 'black',
                                // backgroundColor: 'red',
                                paddingLeft: 0,
                                // color: '#ffffff',
                                fontWeight: 'normal',
                                fontSize: 16,
                                // height: props.item_Height/12,
                                height: '100%',//props.item_Height/13,// should be bigger than 12, root height
                                alignSelf: 'center',
                                justifyContent: 'center',
                                flexDirection: 'column',
                            }
                        }
                        placeholder='Find Places'

                        placeholderTextColor ={'black'}
                        //@ts-ignore
                        // ref={forwardedRef}
                        ref = {props.search_Input_Ref}
                        onChangeText={
                            (value:string) => {
                                update_Search_String_Value_State(value);

                                // setSearch(value);
                            }}
                        autoCorrect={false}
                        textContentType={'none'}
                        keyboardType={'default'}
                        autoCapitalize={'none'}
                        // returnKeyType={'next'}
                        returnKeyType={"search"}
                        // value = {props.filter_Active_Partners_Through_TextInput_State2}
                        onSubmitEditing={dispatch__Search_API_T_Redux}
                        value={search_String_Value_State}

                    />








                </View>

            </View>










        </View>


    );


};
export default Search_In_Map;












// }
// );
// export default SearchInput_Follower_Of_Logger;
