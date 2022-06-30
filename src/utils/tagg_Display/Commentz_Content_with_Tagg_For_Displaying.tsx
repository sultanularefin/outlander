import {
    Text, TouchableOpacity,
    View
} from "react-native";
import React from "react";


import {useAppSelector} from "../../appStore/app/hooks";


import {
    loggers_For_Tagg__Displaying,
    // loggers_For_Tagg__Displaying,

    select_all_WeXprez_Users__For_Tagging_Display,

} from "../../appStore/Reducers/Home_Slice";

export interface Feedz_Content_with_Tagging_Props{

    comment_Content:string,
    navigation:any,
    extra_Display_data: string,
    userID: number,//string,
    default_Color: string,
}

const Commentz_Content_with_Tagg_For_Displaying: React.FC<Feedz_Content_with_Tagging_Props> = ({
                                                                                                   comment_Content,
                                                                                                   navigation,
                                                                                                   extra_Display_data,
                                                                                                   userID,
                                                                                                   default_Color,
                                                                                               }) => {



    // console.log("__comment_Content__: ",comment_Content);
    const itemList:any=[];


    const all_tripzChat_user_for_Friend_Tagging_Showing: loggers_For_Tagg__Displaying[]
        = useAppSelector(select_all_WeXprez_Users__For_Tagging_Display);



    // console.log("__all_tripzChat_user_for_Friend_Tagging_Showing__: ",all_tripzChat_user_for_Friend_Tagging_Showing.length);




    const decode_Feedz_content_with_Friends_userID_To_Name= (
        feedz_Content:string,
        all_Friends: loggers_For_Tagg__Displaying[]
        // friend_name_as_tag:string
    )=> {


        let temp_Feedz_Content = feedz_Content;

        all_Friends.forEach((tagged_one_Partner:loggers_For_Tagg__Displaying) => {

            temp_Feedz_Content = temp_Feedz_Content.replace(new RegExp(`@:${tagged_one_Partner.id}`, 'g'), `@${tagged_one_Partner.user_name}:`);
        });


        return temp_Feedz_Content;

    };


    if (!comment_Content.includes('@:')) {

        // console.log('no @: found_________________',comment_Content);
        return (

            <View style={{

                flexDirection: "row",
                justifyContent: "flex-start",
                flexWrap: 'wrap',
                alignContent: 'flex-start',
                alignItems: 'flex-start',
                alignSelf: 'flex-start',
            }}>
                <Text style={{
                    fontSize: 14,
                    color: `${default_Color}`,
                }}>{extra_Display_data}{(extra_Display_data.trim()==="")?"":": "}{comment_Content}</Text>
            </View>
        );

    }
    else{




        // console.log("at___decode_Feedz_content_with_Friends_userID_To_Name___:__else_____","____________________return_____");

        const userID_Regex_for_exec_method = new RegExp(/@:{1}([\d]{0,24}):{1}/myu, 'g');



        const comment_Content_With_Tagged_Friends= `${comment_Content}`;

        // console.log("______\n -??? comment_Content_With_Tagged_Friends:______\n \n \n ", comment_Content_With_Tagged_Friends);

        const indices:[string, string][]=[];

        let result:any=[];

        while (( result = userID_Regex_for_exec_method.exec(comment_Content_With_Tagged_Friends))) {

            indices.push(result);

        }


        // console.log("__indices__: ",indices);


        const all_tagged__user_in_comment:number[] = indices.map((one_indices:[string, string])=>Number(one_indices[1]));

        // console.log("all_tagged__user_in_comment: ",all_tagged__user_in_comment);



        const all_tagged_Partner_Details:loggers_For_Tagg__Displaying[]=[];


        const check__this_user_ID_in__Frined_List_Logger=(one_user_ID:number)=>{
            // console.log(`one_user_ID: , ${one_user_ID}____and type: ${typeof one_user_ID}`);
            const found = all_tripzChat_user_for_Friend_Tagging_Showing.find(
                (element:loggers_For_Tagg__Displaying,
                 // one_Partner_with_isSelected
                ) => element.id === one_user_ID
            );

            // console.log("found: ",found);
            if (found){

                all_tagged_Partner_Details.push(found);

            }

        };

        // console.log("all_tagged_Partner_Details: ",all_tagged_Partner_Details);


        all_tagged__user_in_comment.map((one_user_ID:number)=>check__this_user_ID_in__Frined_List_Logger(one_user_ID));

        const Custom_View_Touchable_Opacity_logger_Names =all_tagged_Partner_Details.map((tagged_one_Partner:
                                                                                              // one_Partner_with_isSelected
                                                                                              loggers_For_Tagg__Displaying
                ,index:number) => {


                return (

                    <TouchableOpacity
                        key={`${tagged_one_Partner.id}${tagged_one_Partner.user_name}${index}`}
                        onPress={ ()=> navigation.navigate ('PartnerProfile', {
                            PARTNERID: tagged_one_Partner.id,
                        })
                        }

                    >
                        <Text style={{
                            color: 'blue',
                            textAlign: "left"
                        }}> {tagged_one_Partner.user_name}
                        </Text>

                    </TouchableOpacity>

                );

            }

        );


        const indices_of_Regex_start_end:number[]=[];



        const userID_Regex_for_test_method_with_for_loop = new RegExp(/@:{1}([\d]{0,24}):{1}/myu, 'g'); // commented on april__25
        // {1}([\d]{0,24}):{1}
        // {1}([\d]{0,24}):{1}

        // const userID_Regex_for_test_method_with_for_loop2 = /@:{1}[a-f\d]{10,24}:{1}/my;  // g works


        const userID_Regex_for_test_method_with_for_loop2 = /@:{1}[\d]{0,24}:{1}/my;  // g works

        // FOR LOOP begins HERE..


        for (let initial = 0; initial < comment_Content_With_Tagged_Friends.length; initial++) {


            userID_Regex_for_test_method_with_for_loop2.lastIndex = initial;



            userID_Regex_for_test_method_with_for_loop2.test(comment_Content_With_Tagged_Friends);



            if (userID_Regex_for_test_method_with_for_loop2.lastIndex !== initial) {

                // console.log(`userID_Regex_for_test_method_with_for_loop.lastIndex: ${userID_Regex_for_test_method_with_for_loop2.lastIndex}: initial: ${initial}`);
                if (userID_Regex_for_test_method_with_for_loop2.lastIndex > initial) {

                    indices_of_Regex_start_end.push(initial,userID_Regex_for_test_method_with_for_loop2.lastIndex);
                    initial = userID_Regex_for_test_method_with_for_loop2.lastIndex;


                }
            }
            else {
                // console.log(`\n at else: ${userID_Regex_for_test_method_with_for_loop2.lastIndex} `, comment_Content_With_Tagged_Friends[initial]);


            }


        }

        // FOR LOOP ENDS HERE..

        let indices_of_Regex_start_end_final:number[]=[];


        if ((indices_of_Regex_start_end[0]!==0) && (indices_of_Regex_start_end[indices_of_Regex_start_end.length]<comment_Content_With_Tagged_Friends.length)){
            indices_of_Regex_start_end_final= [0,...indices_of_Regex_start_end,comment_Content_With_Tagged_Friends.length];
        }else if(indices_of_Regex_start_end[0]!==0){

            indices_of_Regex_start_end_final= [0,...indices_of_Regex_start_end];

        }

        else if(indices_of_Regex_start_end[indices_of_Regex_start_end.length]<comment_Content_With_Tagged_Friends.length){

            indices_of_Regex_start_end_final= [...indices_of_Regex_start_end,comment_Content_With_Tagged_Friends.length];

        }

        else {
            indices_of_Regex_start_end_final= [...indices_of_Regex_start_end,comment_Content_With_Tagged_Friends.length];

        }

        let another__index_for_start_end_array=0;

        all_tagged_Partner_Details.forEach((
            item:loggers_For_Tagg__Displaying,
            // one_Partner_with_isSelected,
            index:number)=>{

            // console.log("indices_of_Regex_start_end_final[another__index_for_start_end_array+1]: ", indices_of_Regex_start_end_final[another__index_for_start_end_array+1]);
            // console.log("indices_of_Regex_start_end_final[another__index_for_start_end_array]: ", indices_of_Regex_start_end_final[another__index_for_start_end_array]);
            // console.log("indices_of_Regex_start_end_final: ",indices_of_Regex_start_end_final);
            // console.log("all_tagged_Partner_Details[index].id: ", all_tagged_Partner_Details[index].id);

            if(
                (
                    (
                        indices_of_Regex_start_end_final[another__index_for_start_end_array+1]-
                        indices_of_Regex_start_end_final[another__index_for_start_end_array]
                    )
                    ===
                    (
                        all_tagged_Partner_Details[index].id.toString().length+3 // 3 for @:{id}:
                    )
                )
                &&
                (comment_Content_With_Tagged_Friends[indices_of_Regex_start_end_final[another__index_for_start_end_array+1]]!=="@")
            ){
                // TARGET to show user with touchable navigation... @"some_user_length_23+3=26:





                itemList.push(Custom_View_Touchable_Opacity_logger_Names[index]);

                another__index_for_start_end_array +=1;


                // SOMETHING WRONG IN HERE..... FEBRUARY___09__2022
                itemList.push( <Text key={`${userID}last`} style={{
                    textAlign: "left",
                    color: `${default_Color}`,
                }} >{comment_Content_With_Tagged_Friends.substring(indices_of_Regex_start_end_final[another__index_for_start_end_array],
                    indices_of_Regex_start_end_final[1+another__index_for_start_end_array])}
                </Text>);

                another__index_for_start_end_array +=1;

                // SOMETHING WRONG IN HERE..... FEBRUARY___09__2022


            }
            else{


                itemList.push(<Text style={{
                    textAlign: "left",
                    color: `${default_Color}`,
                }} key={index}>{comment_Content_With_Tagged_Friends.substring(
                    indices_of_Regex_start_end_final[another__index_for_start_end_array],indices_of_Regex_start_end_final[1+another__index_for_start_end_array]
                ).trim()}</Text>);

                itemList.push(Custom_View_Touchable_Opacity_logger_Names[index]);
                another__index_for_start_end_array +=2;
            }

        });

        // console.log("another__index_for_start_end_array: ",another__index_for_start_end_array);


        // commennted at 3:44 pm....
        itemList.push( <Text key={`${userID}last`} style={{
            textAlign: "left",
            color: `${default_Color}`,
        }}>{comment_Content_With_Tagged_Friends.substring(
            indices_of_Regex_start_end_final[another__index_for_start_end_array],
            indices_of_Regex_start_end_final[another__index_for_start_end_array+1]
        )
        }</Text>);


    }




    if (extra_Display_data.trim()==="") {

        // console.log("extra display data is empty___");

        return (
            <View
                style={{

                    flexDirection:"row",
                    flexWrap: 'wrap',
                    justifyContent: "flex-start",
                    // alignItems:"flex-start",

                    // backgroundColor: 'crimson',
                }}>

                {/*{itemList}*/}



                <View style={{
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    flexWrap: 'wrap',
                }}>

                    {itemList.map((item:string,index:number)=>{
                        return (
                            <View key={`${index}${item}${userID}${index}`} style={{
                                flexDirection: "row",
                                justifyContent: "flex-start",
                                flexWrap: 'wrap',
                            }}>{item}</View>
                        );
                    })}
                </View>
            </View>
        );
    }
    else{



        // console.log("itemList:  booster shot || extraText Present || ----",itemList);

        return (
            <View
                style={{
                    flexDirection:"row",
                    flexWrap: 'wrap',
                    justifyContent: "flex-start",
                }}>

                <View style={{
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    flexWrap: 'wrap',
                    alignItems: "flex-start",
                }}>
                    <Text style={{color: "black",}}>{extra_Display_data}{(extra_Display_data.trim()==="")?"":": "}</Text>

                    {itemList.map((item:string,index:number)=>{
                        return <View key={`${index}${item}${userID}${index}`} style={{
                            flexDirection: "row",
                            justifyContent: "flex-start",
                            alignItems: "flex-start",
                        }}>{item}</View>;
                    })}


                </View>

            </View>
        );
    }

};

export default Commentz_Content_with_Tagg_For_Displaying;
