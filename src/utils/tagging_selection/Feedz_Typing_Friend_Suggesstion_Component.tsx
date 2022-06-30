import React, {
    useRef,
    useState
} from "react";
import {
    FlatList,
    Image,
    Pressable,
    Text, TextInput,
    View
} from "react-native";




import Snackbar from "react-native-snackbar";
import {
    useAppDispatch,
    useAppSelector
} from "../../appStore/app/hooks";

import One_Friend from "../../ui/bottom__Tab_Subs/childrens/feedz/childrenOf_Feedz_Tab/feedz_Typing_Friend_Suggestoin/One_Friend";


// import {one_Partner_with_isSelected} from "../../../../../appStore/Reducers/old/createGroupSlice";

import {
    select_partner_LoadedState__Feedz_Friend_Tagging,
    // Friend_Tagging_selection_update_in_Feedz_insertion,
    select_all_partners_Feedz_Friend_Tagging_input,
    update__Feedz_Tagging_Friend,
    loggers_For_Tagg__Selecting, Friend_Tagging_selection_update_in_Feedz_insertion,
} from "../../appStore/Reducers/Home_Slice";




export interface logger_Friend_Suggestion__Props {

    t_Width: number,
    t_Height: number,
    navigation: any,
    method_Close_Frient_Suggestion_Modal:(/*isVisible:boolean*/)=> void,
    feedz_Text: string,
    search_Text: string,

    TextInput_feed_contentRef__2:  React.RefObject<TextInput>,
}

const Feedz_Typing_Friend_Suggesstion_Component: React.FC<logger_Friend_Suggestion__Props> = ({
                                                                                                  t_Width,
                                                                                                  t_Height,
                                                                                                  navigation,
                                                                                                  method_Close_Frient_Suggestion_Modal,
                                                                                                  feedz_Text,
                                                                                                  search_Text,
                                                                                                  TextInput_feed_contentRef__2,

                                                                                              })=> {





    const is_Partner_Loaded_For_Logger_State= useAppSelector(select_partner_LoadedState__Feedz_Friend_Tagging);

    const allPartners_no_of_Logger_For_Friend_Tagging_Suggesstion: loggers_For_Tagg__Selecting[] =
        useAppSelector(select_all_partners_Feedz_Friend_Tagging_input);


    // console.log("___2222___",allPartners_no_of_Logger_For_Friend_Tagging_Suggesstion);



    const tokenized_Array = feedz_Text.split('@');

    console.log("search_Text: ",search_Text);

    // console.log("allPartners_no_of_Logger_For_Friend_Tagging_Suggesstion: ",allPartners_no_of_Logger_For_Friend_Tagging_Suggesstion);
    const last_search_Text =  tokenized_Array[tokenized_Array.length-1]; //search_Text;// tokenized_Array[tokenized_Array.length-1];



    const filtered__Friend_items_By_Input_string = (last_search_Text.trim()!=='')
        ? (
            allPartners_no_of_Logger_For_Friend_Tagging_Suggesstion.filter(
                (oneItem:loggers_For_Tagg__Selecting) => oneItem.user_name.toLocaleLowerCase().
                    startsWith(last_search_Text.toLocaleLowerCase())
            )
        )
        :allPartners_no_of_Logger_For_Friend_Tagging_Suggesstion;

    // console.log("filtered__Friend_items_By_Input_string: ",filtered__Friend_items_By_Input_string);



    // Redux related code above render begins here...
    const dispatch = useAppDispatch();
    //  Redux related code above render imports ends here....


    // select_one_Item:(index:number, checkedState:boolean, userName: string,userID: string)=> void
    // const select_one_Item__2 = (index:number, checkedState:boolean, userName: string,userID: string) => {
    const select_one_Item__2 = async (index:number, checkedState:boolean, userName: string,userID: number) => {

        const payLoad_update_member: Friend_Tagging_selection_update_in_Feedz_insertion = {

            index:index,
            checkedState:checkedState,
            userName: userName,
            userID:userID,
        };

        // 999
        method_Close_Frient_Suggestion_Modal();

        // console.log("___payLoad_update_member___: ",payLoad_update_member);



        await dispatch(update__Feedz_Tagging_Friend(payLoad_update_member));

        TextInput_feed_contentRef__2?.current?.focus();

    };


    // handlesubmitpress begins here..
    const submit_Button_handler = async () => {



    };

    // NHS begins here.....
    return(



        <View style ={{
            flexDirection: 'row',
            height: t_Height/5,
            // margin: 10,
            borderRadius: 5,
            borderWidth: 2,
            borderColor: '#707070',
            backgroundColor: "white",
        }}
        >

            <View
                style={{
                    flexDirection: "column",
                    // flexWrap: "wrap",
                    justifyContent: "flex-start", //  1 --better.
                    // justifyContent: "flex-start", // 2
                    // backgroundColor: "tomato",
                    height: t_Height/7,
                }}
            >

                <View
                    style={{
                        flexDirection: "column",
                        // flexWrap: "wrap",
                        justifyContent: "flex-start", //  1 --better.
                        // justifyContent: "flex-start", // 2
                        // backgroundColor: "orange",
                        backgroundColor: "snow",
                        height: t_Height/7,
                        width:  t_Width,
                    }}
                >



                    <FlatList
                        horizontal={false}
                        data={filtered__Friend_items_By_Input_string}
                        renderItem={({ item, index, separators }) =>
                            <One_Friend

                                height_3={t_Height}
                                index={index}
                                item={item}
                                key={`${index.toString()}`}
                                select_one_Item={select_one_Item__2}

                            />
                        }
                        keyExtractor={(item: loggers_For_Tagg__Selecting) => `${item.id}`}
                        numColumns={2}
                    />
                </View>

                {/*done button begins here..*/}


            </View>

        </View>
    );

    // NHS ends here.....
};


export default Feedz_Typing_Friend_Suggesstion_Component;


