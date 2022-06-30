

import React from "react";

import {
    Image,
    TouchableHighlight,
    View,
    Text, StyleSheet,
} from "react-native";
import {Toggle_Direction_Button_Styles} from "./Toggle_Button";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Entypo from "react-native-vector-icons/Entypo";


// import {Button_Styles} from "../../screens/identity/settingsPages/settings_Page_online_offline/Settings_Page_Common";


export interface Direction_Button__Props {
    // navigation_2: any,
    direction_Button_Pressed:()=>void,
    someConst_Height: number,
}

// navigation_2= {navigation}
// direction_Button_Pressed={go_To_profileEdit}


// const edit_Profile_Image = require('../../../../Image/editprofile.png');



const Direction_Button: React.FC<Direction_Button__Props> = ({
                                                                 // navigation_2,
                                                                 direction_Button_Pressed,
                                                                 someConst_Height,


                                                             })=> {



    return(

        <TouchableHighlight
            style={Toggle_Direction_Button_Styles.touchable_Button_Outer_Styles}


            onPress={direction_Button_Pressed}
        >


            <Entypo
                style={{paddingRight: 5}}
                name='direction'
                size={25}

                color={"white"}
                key="direction"


            />

        </TouchableHighlight>
    );
};

export default Direction_Button;




