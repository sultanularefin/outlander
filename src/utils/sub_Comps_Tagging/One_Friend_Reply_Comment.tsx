import {
    Image,
    Pressable,
    Text, TouchableOpacity,
    // TouchableOpacity,
    View
} from "react-native";

import React from "react";
import {loggers_For_Tagg__Selecting} from "../../appStore/Reducers/Home_Slice";

const profileImageLocal = require('../../../Image/avatar.jpg');

interface One_Friend_Reply_Comment_Props{

    height_3: number,
    width_3: number,
    // item: one_Partner_with_isSelected,
    item: loggers_For_Tagg__Selecting,

    index:number,

    select_one_Item:(
        index:number,
        checkedState:boolean,
        userName: string,
        userID: number,//string
    )=> void

}


const One_Friend_Reply_Comment: React.FC<One_Friend_Reply_Comment_Props> = ({
                                                                                height_3,
                                                                                item,
                                                                                index,
                                                                                select_one_Item,
                                                                                width_3,

                                                                            })=> {


    const button_Pressed=()=>{


        return  select_one_Item(
            index,
            item.isSelected,
            item.user_name,
            item.id
        );

    }

    return(


        <View  style={{

            marginTop: 5,
            maxWidth: (width_3/2.5)
        }}
        >
            <Pressable

                onPress={button_Pressed}
                style={({ pressed }) => [
                    {
                        backgroundColor: pressed
                            ? 'seashell'
                            : 'transparent',
                        borderColor: 'gold',
                        paddingLeft: 3,
                        flexDirection: "row",
                        borderWidth: 2,
                        height: height_3/17,
                        borderRadius: ((height_3/17)/2),
                        marginRight: 4,

                    },

                ]}

            >
                <View style={{
                    flexDirection: "row",
                }} >
                    <View
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'column',
                        }}
                    >

                        {
                            (item.profile_image==="")?
                                (
                                    <Image
                                        style={{
                                            height: height_3/28,
                                            width: height_3/28,
                                            borderRadius: (height_3/28)/2,
                                            backgroundColor: '#f2f2f2',
                                        }}
                                        source={profileImageLocal}
                                    />
                                )
                                :
                                (
                                    <Image
                                        style={{
                                            borderWidth: 1,
                                            borderColor: '#000a10',
                                            alignSelf: 'center',
                                            width:  height_3/28,
                                            height: height_3/28,
                                            borderRadius: (height_3/28)/2,
                                        }}
                                        source={{uri: item.profile_image}}
                                    />
                                )

                        }

                    </View>
                    <View  style={{
                        // borderColor: 'gold',
                        marginHorizontal: 5,
                        // marginTop: 5,
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",

                    }}>
                        <Text
                            style={{
                                fontSize: 12,
                                fontWeight: "500",
                                justifyContent: 'center',
                                alignItems: 'center',
                                color: 'red',
                            }}
                        >
                            {item.full_name}
                        </Text>
                    </View>
                </View>

            </Pressable>
        </View>

    );

};

export default One_Friend_Reply_Comment;
