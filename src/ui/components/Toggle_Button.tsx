

import React from "react";

import {
    Image,
    TouchableHighlight,
    View,
    Text,
    StyleSheet,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

// import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export interface Toggle_Button__Props {
    // navigation_2: any,
    current_Mode: string,
    update_Dark_Or_Normal_Mode_2:()=>void,
    someConst_Height: number,
}




// const edit_Profile_Image = require('../../../../Image/editprofile.png');



const Toggle_Button: React.FC<Toggle_Button__Props> = ({
                                                           // navigation_2,
                                                           current_Mode,
                                                           update_Dark_Or_Normal_Mode_2,
                                                           someConst_Height,


                                                       })=> {



    return(

        <TouchableHighlight
            style={Toggle_Direction_Button_Styles.touchable_Button_Outer_Styles}

            onPress={update_Dark_Or_Normal_Mode_2}
        >

            {
                current_Mode==="dark"?(
                    <MaterialCommunityIcons
                        style={{paddingRight: 5}}
                        name='toggle-switch-off'
                        size={25}

                        color={"white"}
                        key="toggle-switch-outline"


                    />
                ):(
                    <MaterialCommunityIcons
                        style={{paddingRight: 5}}
                        name='toggle-switch-outline'
                        size={25}

                        color={"white"}
                        key="ios-toggle-sharp"


                    />
                )

            }




        </TouchableHighlight>
    );
};

export default Toggle_Button;




export const Toggle_Direction_Button_Styles= StyleSheet.create({


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


