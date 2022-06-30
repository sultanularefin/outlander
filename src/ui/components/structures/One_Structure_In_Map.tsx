

import React from "react";

import {
    Image,
    TouchableHighlight,
    View,
    Text,
    StyleSheet,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {OneStructure_interface} from "../../../appStore/Reducers/authSlice";

// import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export interface One_Structure_In_Map__Props {
    // navigation_2: any,
    // current_Mode: string,
    // update_Dark_Or_Normal_Mode_2:()=>void,
    // someConst_Height: number,




    current_Structure:OneStructure_interface,
    t_width:number,
    t_height:number,
    selected_emotion_index:(some_New_Index: number)=>void,
    someConst_Height:number,



    // OneStructure_interface
}




// const edit_Profile_Image = require('../../../../Image/editprofile.png');



const One_Structure_In_Map: React.FC<One_Structure_In_Map__Props> = ({

                                                                         current_Structure,
                                                                         t_width,
                                                                         t_height,
                                                                         selected_emotion_index,
                                                                         someConst_Height,


                                                                     })=> {




    const button_pressed=()=>{

        return selected_emotion_index(current_Structure.index);
    };

    return(

        <TouchableHighlight
            style={{
                // ...Toggle_Direction_Button_Styles.touchable_Button_Outer_Styles,

                width: 50,
                height: 50,

                flexDirection: 'column',
                justifyContent: 'flex-start',
                // elevation: 4,
                /*

                alignItems: 'center',
                marginBottom: 20,
                borderRadius: 30,
                margin: 10,
                shadowColor: 'white',
                shadowOpacity: 0.8,
                shadowOffset: {
                    height: 2,
                    width: -2,
                },


                backgroundColor: 'black',
                alignSelf:'flex-end',
                 */



                position:'relative',
                top:current_Structure.position[0],
                left:current_Structure.position[1],
            }}

            onPress={button_pressed}
        >
                <View
                    style={{

                        // flex: 0.2,
                        flexDirection: 'column',
                        alignItems: "center",
                        justifyContent: 'flex-start',
                    }}
                >
                    <Image
                        style={{
                            width:  24,
                            height: 24,
                        }}
                        source={current_Structure.url_Link}
                    />
                </View>

                {/*  IMAGE PORTION ENDS HERE..*/}

                {/* EMOTION TITLE PORTION BEGINS HERE..*/}

              {/*  <View
                    style={{

                        // flex: 0.4,
                        flexDirection: 'column',
                        alignItems: "center",
                        justifyContent: 'flex-start',
                    }}
                >
                    <Text style={{
                        color: "black",
                        fontSize: 12,
                    }}>
                        {current_Structure.structure_Name}
                    </Text>
                </View>*/}

                {/* EMOTION TITLE PORTION Ends HERE..*/}









        </TouchableHighlight>
    );
};

export default One_Structure_In_Map;




export const Toggle_Direction_Button_Styles= StyleSheet.create({

    // iconImage: {
    //     width: 35,
    //     height: 35,
    //     justifyContent: 'center',
    // },
    // icon: {
    //     width: 35,
    //     height: 35,
    //     color: '#ffffff',
    //     fontSize: 32,
    //     textAlign: 'center',
    //     justifyContent: 'center',
    // },
    touchable_Button_Outer_Styles:{
        width: 50,
        height: 50,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        borderRadius: 30,
        margin: 10,
        shadowColor: 'white',
        shadowOpacity: 0.8,
        shadowOffset: {
            height: 2,
            width: -2,
        },
        elevation: 4,

        backgroundColor: 'black',
        alignSelf:'flex-end',
    }

});


