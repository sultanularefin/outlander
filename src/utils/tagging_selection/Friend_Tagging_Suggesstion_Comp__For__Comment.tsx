import React, {
    useRef,
    useState
} from "react";
import {

    FlatList,

    Pressable, TextInput,


    View
} from "react-native";

import FTI from "react-native-vector-icons/Feather";


// import {one_Partner_with_isSelected} from "../../../../appStore/Reducers/createGroupSlice";
import {useAppDispatch, useAppSelector} from "../../appStore/app/hooks";
import {
    Friend_Tagging_selection_update_in_Commentz_insertion,

    loggers_For_Tagg__Selecting,
    select_all_partners_Feedz_Friend_Tagging_input,
    select_partner_LoadedState__Feedz_Friend_Tagging,
    update___comment_As_Friend_Selected,
} from "../../appStore/Reducers/Home_Slice";
import One_Friend
    from "../../ui/bottom__Tab_Subs/childrens/feedz/childrenOf_Feedz_Tab/feedz_Typing_Friend_Suggestoin/One_Friend";
// import {one_Partner_with_isSelected} from "../../../appStore/Reducers/old/createGroupSlice";


export interface logger_Friend_Suggestion__Props {
    t_Width: number,
    t_Height: number,
    navigation: any,
    method_Close_Frient_Suggestion_Modal:(/*isVisible:boolean*/)=> void,
    feedz_Text: string,
    // handle_Done_Pressed:()=> void,

    TextInput_CommentRef__2:  React.RefObject<TextInput>,
}

const Friend_Tagging_Suggesstion_Comp__For__Comment: React.FC<logger_Friend_Suggestion__Props> = ({
                                                                                                      t_Width,
                                                                                                      t_Height,
                                                                                                      navigation,
                                                                                                      method_Close_Frient_Suggestion_Modal,
                                                                                                      feedz_Text,
                                                                                                      // handle_Done_Pressed,
                                                                                                      TextInput_CommentRef__2,

                                                                                                  })=> {


    const is_Partner_Loaded_For_Logger_State= useAppSelector(select_partner_LoadedState__Feedz_Friend_Tagging);

    const xprezers_For_Friend_Tagging_Suggesstion: loggers_For_Tagg__Selecting[] = useAppSelector(select_all_partners_Feedz_Friend_Tagging_input);



    // console.log("xprezers_For_Friend_Tagging_Suggesstion: ",xprezers_For_Friend_Tagging_Suggesstion);


    const tokenized_Array = feedz_Text.split('@');
    const last_search_Text = tokenized_Array[tokenized_Array.length-1];



    // console.log("feedz_Text: ",feedz_Text);
    // console.log("tokenized_Array: ",tokenized_Array);
    // console.log("last_search_Text: ",last_search_Text);

    // METHOD .....
    const filtered__Friend_items_By_Input_string = (last_search_Text.trim()!=='')
        ? (xprezers_For_Friend_Tagging_Suggesstion.filter(
                (oneItem:loggers_For_Tagg__Selecting) => oneItem.user_name.toLocaleLowerCase().
                    startsWith(last_search_Text.toLocaleLowerCase())
            ).slice(0,5)
        )
        :xprezers_For_Friend_Tagging_Suggesstion.slice(0,5);
    // METHOD .....

    // Redux related code above render begins here...
    const dispatch = useAppDispatch();
    //  Redux related code above render imports ends here....

    const select_one_Friend = async (
        index: number,
        checkedState: boolean,
        userName: string,
        userID: number,//string
    ) => {

        const payLoad_update_member: Friend_Tagging_selection_update_in_Commentz_insertion = {

            index: index,
            checkedState: checkedState,
            userName: userName,
            userID: userID,
        };


        // console.log("__payLoad_update_Tagged_user_in_Commentz: ",payLoad_update_member);

        method_Close_Frient_Suggestion_Modal();

        dispatch(update___comment_As_Friend_Selected(payLoad_update_member));


        await TextInput_CommentRef__2?.current?.focus();


    };

    // handlesubmitpress begins here..
    const submit_Button_handler =  () => {

        console.log("not used:");
    };

    // NHS begins here.....
    return(



        <View style ={{
            flexDirection: 'row',
            height: t_Height/5,
            borderRadius: 5,
            borderWidth: 2,
            borderColor: '#707070',
            // backgroundColor: "white",
        }}
        >

            <View
                style={{
                    flexDirection: "column",
                    justifyContent: "flex-start", //  1 --better.
                    height: t_Height/7,
                    // flex: 0.5,
                }}
            >

                <View
                    style={{
                        /*
                        flexDirection: "column",
                        justifyContent: "flex-start", //  1 --better.
                        backgroundColor: "snow",

                        */

                        flexDirection: "row",
                        flexWrap: "wrap",
                        justifyContent: "center", //  1 --better.


                        height: t_Height/7,
                        width:  t_Width,

                    }}
                >


                    {


                        (filtered__Friend_items_By_Input_string.map(
                                (oneItem, index) =>

                                    (
                                        <One_Friend
                                            height_3={t_Height}
                                            index={index}
                                            item={oneItem}
                                            key={`${index.toString()}`}
                                            select_one_Item={select_one_Friend}

                                        />
                                    )
                            )
                        )

                    }
                    {/* <FlatList
                        horizontal={false}
                        data={filtered__Friend_items_By_Input_string}
                        renderItem={({ item, index, separators }) =>
                            <One_Friend

                                height_3={t_Height}
                                index={index}
                                item={item}
                                key={`${index.toString()}`}
                                select_one_Item={select_one_Friend}

                            />
                        }
                        keyExtractor={(item: one_Partner_with_isSelected) => item.user_id}
                        numColumns={2}
                    />*/}


                </View>

                {/*done button begins here..*/}

                <Pressable
                    onPress={ ()=>method_Close_Frient_Suggestion_Modal()}
                    style={({ pressed }) => [
                        {

                            backgroundColor: pressed
                                ? 'lightslategrey'
                                : 'black',

                            borderRadius: 8,
                            flexDirection: 'row',
                            alignItems: 'center',
                            alignSelf: 'flex-end',
                            alignContent: 'flex-end',
                            justifyContent: 'center',
                            width:  80,
                            marginRight: 5,
                            borderColor: 'grey',
                            borderWidth: 2,
                            height:  t_Height/23,
                        },
                    ]}>
                    {({ pressed }) => (
                        <View  style={{
                            borderColor: 'blue',
                            flexDirection: "row",
                        }}
                        >
                            <View  style={{

                                flexDirection: "row",
                                justifyContent: "center",
                                alignItems: "center",

                            }}>

                                <FTI
                                    name='x-circle'
                                    size={25}
                                    style={{
                                        // color: 'black',
                                        top: '.8%',
                                        color: 'white',

                                    }}
                                />
                            </View>

                        </View>

                    )}
                </Pressable>
                {/*done button ends here..*/}
            </View>
        </View>
    );
    // NHS ends here.....
};


export default Friend_Tagging_Suggesstion_Comp__For__Comment;


