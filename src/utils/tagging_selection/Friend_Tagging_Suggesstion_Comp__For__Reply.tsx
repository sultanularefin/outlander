import React, {
    useRef,
    useState
} from "react";
import {
    FlatList,
    Pressable,
    TextInput,
    Text,
    View,
    VirtualizedList, RefreshControl, ScrollView
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
import One_Friend_Reply_Comment from "../sub_Comps_Tagging/One_Friend_Reply_Comment";
import {one_comment_Data_xPrez__interface} from "../../appStore/Reducers/commentsSlice";
// import {one_Partner_with_isSelected} from "../../../appStore/Reducers/old/createGroupSlice";


export interface logger_Friend_Suggestion__Props {
    t_Width: number,
    t_Height: number,
    navigation: any,
    method_Close_Frient_Suggestion_Modal:(/*isVisible:boolean*/)=> void,
    reply_Text: string,
    // handle_Done_Pressed:()=> void,

    TextInput__Reply__Ref__2:  React.RefObject<TextInput>,
}

const Friend_Tagging_Suggesstion_Comp__For__Reply: React.FC<logger_Friend_Suggestion__Props> = ({
                                                                                                    t_Width,
                                                                                                    t_Height,
                                                                                                    navigation,
                                                                                                    method_Close_Frient_Suggestion_Modal,
                                                                                                    reply_Text,
                                                                                                    // handle_Done_Pressed,
                                                                                                    TextInput__Reply__Ref__2,

                                                                                                })=> {


    const is_Partner_Loaded_For_Logger_State= useAppSelector(select_partner_LoadedState__Feedz_Friend_Tagging);

    const xprezers_For_Friend_Tagging_Suggesstion: loggers_For_Tagg__Selecting[] = useAppSelector(select_all_partners_Feedz_Friend_Tagging_input);

    const tokenized_Array = reply_Text.split('@');
    const last_search_Text = tokenized_Array[tokenized_Array.length-1];

    // const commentFlatListRef = useRef<VirtualizedList<any>>(null);
    const Reply__Tag__VirtualizedList_Ref = useRef<VirtualizedList<any>>(null);

    // METHOD .....
    const filtered__Friend_items_By_Input_string = (last_search_Text.trim()!=='')
        ? (xprezers_For_Friend_Tagging_Suggesstion.filter(
                (oneItem:loggers_For_Tagg__Selecting) => oneItem.user_name.toLocaleLowerCase().
                    startsWith(last_search_Text.toLocaleLowerCase())
            )
        )
        :xprezers_For_Friend_Tagging_Suggesstion;
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


        await TextInput__Reply__Ref__2?.current?.focus();


    };

    // handlesubmitpress begins here..
    const submit_Button_handler =  () => {

        console.log("not used:");
    };


    const getItemCustom = (data:loggers_For_Tagg__Selecting[], index:number) => ({
        ...data[index],
        // key: `${index}`

        key: `${index}${data[index].id}` //---THESE CAUSING PROBLEMS
    });


    const ListEmpty=()=> (<Text>End Reached</Text>);


    // NHS begins here.....
    return(



        <View style={{
            width: t_Width- 50,
            backgroundColor: 'cyan',
            // height: t_Height/14,
            // flex: 1,
            height: t_Height/10,
        }}
        >

        {/*    {

                filtered__Friend_items_By_Input_string.map((oneItem, index) =>

                    <One_Friend_Reply_Comment
                        height_3={t_Height}
                        index={index}
                        item={oneItem}
                        width_3={t_Width}
                        key={`${index.toString()}`}
                        select_one_Item={select_one_Friend}
                    />
                )
            }*/}

            <VirtualizedList
                // horizontal={true}
                data={filtered__Friend_items_By_Input_string}
                renderItem={({ item, index, separators }) =>
                    (
                        <One_Friend_Reply_Comment
                            height_3={t_Height}
                            index={index}
                            item={item}
                            width_3={t_Width}
                            // key={`${index.toString()}`}
                            select_one_Item={select_one_Friend}
                        />
                    )
                }


                getItemCount= {(data) => data.length}
                getItem={getItemCustom}

                // required ends here...

                indicatorStyle= {'black'}

                ListEmptyComponent= {ListEmpty}
                ref= {Reply__Tag__VirtualizedList_Ref}
            />


        </View>




    );
    // NHS ends here.....
};


export default Friend_Tagging_Suggesstion_Comp__For__Reply;


