import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
// import {feedz_response} from "./feedzSlice";
// import {RootState} from "../app/store";
// import {baseInterface} from "./baseInterface";
// import {MultipleImageHeaderNull_route_date_interface} from "../../bottomTabs/childrens/feedz/imageDisplay/MultipleImageHeaderNull";
// import {ImageModal_Page_one_Image_data_uri_date_interface} from "../../bottomTabs/childrens/feedz/imageDisplay/ImageModal";
import {RootState} from "../../app/store";
import {baseInterface} from "../baseInterface";
import {
    ImageModal_Page_one_Image_data_uri_date_interface
} from "../../../ui/bottom__Tab_Subs/childrens/feedz/imageDisplay/ImageModal";
import {
    MultipleImageHeaderNull_route_date_interface
} from "../../../ui/bottom__Tab_Subs/childrens/feedz/imageDisplay/MultipleImageHeaderNull";

const feedImageBaseURL ="https://tripzchat.com/api_dev/uploads/feed_content/";


export interface tag_and_url_interface{
    tagName: string,
    url: string,
}


export interface add_tag_payload_inteface{
    feedId : number,
    feed_photo : string,
    tag : string,
    url : string,
}


export interface delete_tag_payload_inteface{

    feedId : number,
    feed_photo : string,
    tag : string,
    url : string,
}


export  interface get_Tags_BY_PhotoKEY_and_PostID_inteface{
    feedId : number,
    feed_photo : string,

}

export interface tag_State_interface extends baseInterface{

    get_Tag_byPostID_and_PhotoKEY_response:  tag_and_url_interface[],
    show_Loading_Tags: boolean,
    sizeOFTotalState_Tags: number,

    two_Image__data_For_Tag_State: MultipleImageHeaderNull_route_date_interface,

    one_Image__data_For_Tag_State:ImageModal_Page_one_Image_data_uri_date_interface,

    // message:string,


}

const initialState: tag_State_interface = {
    apiInovocatoinStatus: '',
    isFetching: true,
    isSuccess: false,
    isError: false,
    errorMessage: '',

    isComplete: false,
    get_Tag_byPostID_and_PhotoKEY_response: [],
    show_Loading_Tags: true,
    sizeOFTotalState_Tags: 0,

    two_Image__data_For_Tag_State:
        {
            date:  '',//string, //props.date,
            feedOwnerName: '', //string,
            some_uris: [], //string[],
            tapIndex: 0, //number,
            title: '', //string,//props.content,
            //ADDED FOR TAGGING ON NOVEMBER__22_MONDAY_2021
            feedId: -1, //number,// string, // number
            id : -1, //number,//string, // number,
            loggerID: '',//string,
            postUserID: '',// string,
        },

    one_Image__data_For_Tag_State:
        {
            /*
            date:  '',//string, //props.date,
            feedOwnerName: '', //string,
            some_uris: [], //string[],
            tapIndex: 0, //number,
            title: '', //string,//props.content,
            //ADDED FOR TAGGING ON NOVEMBER__22_MONDAY_2021
            feedId: -1, //number,// string, // number
            id : -1, //number,//string, // number,
            loggerID: '',//string,
            postUserID: '',// string,
*/

            uri: '',
            date: '',
            feedId: -1,
            feedOwnerName: '',
            id: -1,
            loggerID: '',
            postUserID: '',
        },
};




// --4


export const load_Tags_by_post_ID_Image_key = createAsyncThunk(
    'tag/load_tag_test_nov_23',
    // async (userID: string, partnerID: string, ss: number) => {
    async (

        get_Tag_data_by_postID_PhotoKEY__Payload:
            get_Tags_BY_PhotoKEY_and_PostID_inteface,
        thunkAPI) => {

        // console.log("___get_Tag_data_by_postID_PhotoKEY__Payload.feedId___ ", get_Tag_data_by_postID_PhotoKEY__Payload.feedId);
        // console.log("___get_Tag_data_by_postID_PhotoKEY__Payload.feed_photo___ ", get_Tag_data_by_postID_PhotoKEY__Payload.feed_photo);
        // userAndPartner: i_userid_partnerid, thunkAPI) => {




        // export interface i_userid_partnerid {
        //     user_id: string,
        //     partner_id: string,
        // }



        //console.log("userAndPartner.user_id: ======================", userAndPartner.user_id); // logger_user_ID

        //console.log("userAndPartner.partner_id: =======================", userAndPartner.partner_id); // "name": "I.H. Khan",



        const response = await fetch(
            // 'https://tripzchat.com/mongo/api/chat_get_all.php',
            'https://tripzchat.com/api_dev/api/feedz/getFeedPhotoTag',
            {

                signal: thunkAPI.signal,

                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                /*
            body: JSON.stringify({
                user_id: userAndPartner.user_id,
                partner_id: userAndPartner.partner_id,
            }),
                */
                body: JSON.stringify({
                    feedId : get_Tag_data_by_postID_PhotoKEY__Payload.feedId,
                    feed_photo : get_Tag_data_by_postID_PhotoKEY__Payload.feed_photo,
                }),
            });

        const data_for_print = response.json();
        return data_for_print;

    },

);

// ---1

export const get_Tag_with_feed_photo_key_and__PostID_Async  = createAsyncThunk(
    'getTag/postID_PhotoKEY',
    async (

        get_Tag_data_by_postID_PhotoKEY__Payload:
            get_Tags_BY_PhotoKEY_and_PostID_inteface,
        thunkAPI) => {

        // console.log("___get_Tag_data_by_postID_PhotoKEY__Payload.feedId___ ", get_Tag_data_by_postID_PhotoKEY__Payload.feedId);
        // console.log("___get_Tag_data_by_postID_PhotoKEY__Payload.feed_photo___ ", get_Tag_data_by_postID_PhotoKEY__Payload.feed_photo);


        try {
            const response = await fetch(
                'https://tripzchat.com/api_dev/api/feedz/getFeedPhotoTag',
                {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },


                    body: JSON.stringify({
                        feedId : get_Tag_data_by_postID_PhotoKEY__Payload.feedId,
                        feed_photo : get_Tag_data_by_postID_PhotoKEY__Payload.feed_photo,
                    }),
                },
            );
            const data = await response.json();

            // console.log('response _____in tagSlice:[get_Tag_with_feed_photo_key_and__PostID_Async] ', data);
            // console.log('response.status ', response.status);

            // console.log("response.status: ", response.status);
            if (response.status === 200) {




                // console.log("response.status__ again: ", response.status);
                return data;
            }
        } catch (error:any) {
            console.log('Error', error.response.data);
            thunkAPI.rejectWithValue(error.response.data);
        }
    },
);



// ----3


export const delete_tag_async = createAsyncThunk(
    'delete_Tag/postID',
    async (

        delete_Tag_data:
            delete_tag_payload_inteface,
        thunkAPI) => {


        try {
            const response = await fetch(
                // 'https://tripzchat.com/api_dev/api/feedz/feedPhoto/add',
                'https://tripzchat.com/api_dev/api/feedz/feedPhoto/delete',
                {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },


                    body: JSON.stringify({



                        feedId : delete_Tag_data.feedId,
                        feed_photo : delete_Tag_data.feed_photo,
                        tag : delete_Tag_data.tag,
                        url : delete_Tag_data.url,

                    }),
                },
            );
            const data = await response.json();

            if (response.status === 200) {




                return data;
            } else {
                // console.log("not 200 and data: ", data);

                // message": "User Activity Updated.
                if (data.message==="User Activity Updated."){
                    return data;
                    // User Activity Updated
                }

                else {

                    return thunkAPI.rejectWithValue(data);
                }



            }
        } catch (error:any) {
            console.log('Error', error.response.data);
            thunkAPI.rejectWithValue(error.response.data);
        }
    },
);



// delete_tag_async
// ----2
export const add_tag_async = createAsyncThunk(
    'add_Tag/user',
    async (

        report_post_data:
            add_tag_payload_inteface,
        thunkAPI) => {


        try {
            const response = await fetch(
                'https://tripzchat.com/api_dev/api/feedz/feedPhoto/add',
                {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },


                    body: JSON.stringify({



                        feedId : report_post_data.feedId,
                        feed_photo : report_post_data.feed_photo,
                        tag : report_post_data.tag,
                        url : report_post_data.url,

                        /*
                        reporter_id: report_post_data.reporter_id,
                        post_id: report_post_data.post_id,
                        cause: report_post_data.cause,
                        report_type: report_post_data.report_type,
                        */
                    }),
                }
            );
            const data = await response.json();

            if (response.status === 200) {




                return data;
            } else {
                // console.log("not 200 and data: ", data);

                // message": "User Activity Updated.
                if (data.message==="User Activity Updated."){
                    return data;
                    // User Activity Updated
                }

                else {

                    return thunkAPI.rejectWithValue(data);
                }



            }
        } catch (error:any) {
            console.log('Error', error.response.data);
            thunkAPI.rejectWithValue(error.response.data);
        }
    },


);











const clearTags2= (

    state: any,// cant' find suitable replacement.

)=>{




    state.show_Loading_Tags=true;
    state.get_Tag_byPostID_and_PhotoKEY_response=[];


};

const populateTag_data_for_one_Image_by_imageKEY_and_PostID_2= (state:any,
                                                                action: PayloadAction<ImageModal_Page_one_Image_data_uri_date_interface>) => {
    // Redux Toolkit allows us to write "mutating" logic in reducers. It
    // doesn't actually mutate the state because it uses the Immer library,
    // which detects changes to a "draft state" and produces a brand new
    // immutable state based off those changes


    // state.value += 1;

    // console.log("inside <<< populateTag_data_for_multiple_Images>>> and action.payload: ", action.payload);


    // console.log("------____-_----__");
    const temp__one_image_Data: ImageModal_Page_one_Image_data_uri_date_interface = action.payload;


    state.two_Image__data_For_Tag_State = {



        date:  '',//string, //props.date,
        feedOwnerName: '', //string,
        some_uris: [], //string[],
        tapIndex: 0, //number,
        title: '', //string,//props.content,
        //ADDED FOR TAGGING ON NOVEMBER__22_MONDAY_2021
        feedId: -1, //number,// string, // number
        id : -1, //number,//string, // number,
        loggerID: '',//string,
        postUserID: '',// string,
    };
    state.one_Image__data_For_Tag_State = temp__one_image_Data;


    // const actualImage = uri.replace(feedImageBaseURL,"");

    const actualImage = temp__one_image_Data.uri.replace(feedImageBaseURL,"");


    const tempFeedID = (temp__one_image_Data.feedId === -1)
        ? temp__one_image_Data.id // for production
        : temp__one_image_Data.feedId;


    // console.log(`actualImage: [tapIndex]  ${actualImage}`);
    // console.log(`tempFeedID:  : ${tempFeedID}`);

    const zzzz: get_Tags_BY_PhotoKEY_and_PostID_inteface ={

        feedId : tempFeedID,
        feed_photo : actualImage,
    };


    load_Tags_by_post_ID_Image_key(zzzz);



};




const tagSlice = createSlice({
    name: 'tag',
    initialState,
    reducers: {



        populateTag_data_for_one_Image_by_imageKEY_and_PostID_1: populateTag_data_for_one_Image_by_imageKEY_and_PostID_2,
        clearTags1: clearTags2,
        populateTag_data_for_multiple_Images: (state,
                                               action: PayloadAction<MultipleImageHeaderNull_route_date_interface>) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes


            // state.value += 1;

            // console.log("inside <<< populateTag_data_for_multiple_Images>>> and action.payload: ", action.payload);


            // console.log("------____-_----__");
            const temp_Multiple_2__Image_data: MultipleImageHeaderNull_route_date_interface = action.payload;


            // state.two_Image__data_For_Tag_State = tempLoggerPartner_Data;


            state.two_Image__data_For_Tag_State = temp_Multiple_2__Image_data;
            state.one_Image__data_For_Tag_State = {


                uri: '',
                date: '',
                feedId: -1,
                feedOwnerName: '',
                id: -1,
                loggerID: '',
                postUserID: '',
            };




            const actualImage = temp_Multiple_2__Image_data.some_uris[temp_Multiple_2__Image_data.tapIndex].replace(feedImageBaseURL, "");


            const tempFeedID = (temp_Multiple_2__Image_data.feedId === -1)
                ? temp_Multiple_2__Image_data.id // for production
                : temp_Multiple_2__Image_data.feedId;


            // console.log(`actualImage: [tapIndex] ${temp_Multiple_2__Image_data.tapIndex}: ${actualImage}`);
            // console.log(`tempFeedID:  : ${tempFeedID}`);

            const zzzz: get_Tags_BY_PhotoKEY_and_PostID_inteface ={

                feedId : tempFeedID,
                feed_photo : actualImage,
            };
            /*
            const userID_partnerID2: i_userid_partnerid = {
                user_id: tempLoggerPartner_Data.USERID,
                partner_id: tempLoggerPartner_Data.PARTNERID,
            };


            // clear cache data for other users

            // state.value = 111;

            state.all_PartnerChat_Messages = [];
            state.all_partner_chat_read_Messages=[];
            state.status = 'loading';
            state.show_Loading = true;
            state.apiInvocation_Timer = 0;
            state.sizeOFTotalState = 0;

            // console.log("userID: ", userID_partnerID2.user_id);
            // console.log("partnerID: ", userID_partnerID2.partner_id);
*/

            load_Tags_by_post_ID_Image_key(zzzz);



        },


    },
    extraReducers: (builder) => {




        // 3 33

        builder.addCase(delete_tag_async.pending, (state) => {
            state.apiInovocatoinStatus = 'loading';

        }).
        addCase(delete_tag_async.rejected, (state, action) => {

            console.log("_____state.apiInovocatoinStatus add_tag_async = 'failed____'");
            state.apiInovocatoinStatus = "failed";
            state.isFetching = false;
            state.isSuccess= false;
            state.isError= true;
            // state.errorMessage= action.payload; // will be ASSIGNED LATER....

        }).
        addCase(delete_tag_async.fulfilled, (state, action) => {

            state.apiInovocatoinStatus = "idle";


            state.isFetching = false;
            state.isSuccess= true;
            state.isError= false;
            state.errorMessage= '';

            // console.log("action.payload.message [ for delete_tag_async async] ", action.payload);

            // state.report_post_response = action.payload;

            return;
        });



        // 2
        builder.addCase(add_tag_async.pending, (state) => {
            state.apiInovocatoinStatus = 'loading';

        }).
        addCase(add_tag_async.rejected, (state, action) => {

            console.log("_____state.apiInovocatoinStatus add_tag_async = 'failed____'");
            state.apiInovocatoinStatus = "failed";
            state.isFetching = false;
            state.isSuccess= false;
            state.isError= true;
            // state.errorMessage= action.payload; // will be ASSIGNED LATER....

        }).
        addCase(add_tag_async.fulfilled, (state, action) => {

            state.apiInovocatoinStatus = "idle";


            state.isFetching = false;
            state.isSuccess= true;
            state.isError= false;
            state.errorMessage= '';

            console.log("action.payload.message [ for add tag async] ", action.payload);
            // state.report_post_response = action.payload;


            return;
        });


        // 11111
        builder.addCase( get_Tag_with_feed_photo_key_and__PostID_Async.pending, (state) => {
            state.apiInovocatoinStatus = 'loading';

        }).
        addCase( get_Tag_with_feed_photo_key_and__PostID_Async.rejected, (state,
                                                                          action) => {

            console.log("_____state.apiInovocatoinStatus  get_Tag_with_feed_photo_key_and__PostID_Async = 'failed____'");
            state.apiInovocatoinStatus = "failed";
            state.isFetching = false;
            state.isSuccess= false;
            state.isError= true;
            // state.errorMessage= action.payload; // will be ASSIGNED LATER....

        }).
        addCase( get_Tag_with_feed_photo_key_and__PostID_Async.fulfilled, (state, action) => {

            state.apiInovocatoinStatus = "idle";


            state.isFetching = false;
            state.isSuccess= true;
            state.isError= false;
            state.errorMessage= '';

            // console.log("action.payload. [ for get_Tag_with_feed_photo_key_and__PostID_Async] ", action.payload);

            const tagData__BYPostID = action.payload;

            // console.log("tagData__BYPostID: ",tagData__BYPostID);



            if (tagData__BYPostID !== undefined) {

                const allTags_BY_PostID: tag_and_url_interface[]= tagData__BYPostID;



                if((Array.isArray(allTags_BY_PostID) && !allTags_BY_PostID.length)){

                    // if (action.payload.message === "No Post Found"){

                    state.show_Loading_Tags = false;

                    state.get_Tag_byPostID_and_PhotoKEY_response = [];

                }

                    // NEW DATA CAME, THIS CONDITION....
                // else  if (allTags_BY_PostID.length + 1 !== state.get_Tag_byPostID_and_PhotoKEY_response.length) {
                else   {

                    // state.show_Loading_Tags = true;
                    state.sizeOFTotalState_Tags = allTags_BY_PostID.length;



                    const data2 = allTags_BY_PostID.slice(0, allTags_BY_PostID.length);

                    /*
                    const last_Tag_CustomMade = {
                        ...allTags_BY_PostID[allTags_BY_PostID.length - 1],
                        tagName: '----END----',
                    };
                    */

                    // state.get_Tag_byPostID_and_PhotoKEY_response = [...data2,last_Tag_CustomMade];
                    state.get_Tag_byPostID_and_PhotoKEY_response = data2;

                    state.show_Loading_Tags = false;







                }
                //enddd----


            }
            else{

                console.log("at else ____");

                return;
            }


        });




        // 44444---



        builder.addCase( load_Tags_by_post_ID_Image_key.pending, (state) => {
            state.apiInovocatoinStatus = 'loading';

        }).
        addCase( load_Tags_by_post_ID_Image_key.rejected, (state,
                                                           action) => {

            console.log("_____state.apiInovocatoinStatus  load_Tags_by_post_ID_Image_key = 'failed____'");
            state.apiInovocatoinStatus = "failed";
            state.isFetching = false;
            state.isSuccess= false;
            state.isError= true;
            // state.errorMessage= action.payload; // will be ASSIGNED LATER....

        }).
        addCase( load_Tags_by_post_ID_Image_key.fulfilled, (state, action) => {

            state.apiInovocatoinStatus = "idle";


            state.isFetching = false;
            state.isSuccess= true;
            state.isError= false;
            state.errorMessage= '';

            // console.log("action.payload. [ for load_Tags_by_post_ID_Image_key] ", action.payload);

            const tagData__BYPostID = action.payload;

            // console.log("tagData__BYPostID: ",tagData__BYPostID);



            if (tagData__BYPostID !== undefined) {

                const allTags_BY_PostID: tag_and_url_interface[]= tagData__BYPostID;



                if((Array.isArray(allTags_BY_PostID) && !allTags_BY_PostID.length)){

                    // if (action.payload.message === "No Post Found"){

                    state.show_Loading_Tags = false;

                    state.get_Tag_byPostID_and_PhotoKEY_response = [];

                }

                    // NEW DATA CAME, THIS CONDITION....
                // else  if (allTags_BY_PostID.length + 1 !== state.get_Tag_byPostID_and_PhotoKEY_response.length) {
                else   {

                    state.show_Loading_Tags = true;
                    state.sizeOFTotalState_Tags = allTags_BY_PostID.length;



                    const data2 = allTags_BY_PostID.slice(0, allTags_BY_PostID.length);

                    /*
                    const last_Tag_CustomMade = {
                        ...allTags_BY_PostID[allTags_BY_PostID.length - 1],
                        tagName: '----END----',
                    };
                    */

                    // state.get_Tag_byPostID_and_PhotoKEY_response = [...data2,last_Tag_CustomMade];
                    state.get_Tag_byPostID_and_PhotoKEY_response = data2;

                    state.show_Loading_Tags = false;







                }
                //enddd----


            }
            else{

                console.log("at else ____");

                return;
            }


        });










    },
});


export const {
    // increment, decrement,
    // incrementByAmount,
    populateTag_data_for_multiple_Images,
    populateTag_data_for_one_Image_by_imageKEY_and_PostID_1,
    clearTags1,
    // updateAPI_invocation_Timer,
    // selected_chat_closed,
    // invokeSliceToLoadMoreTen,
    // setShow_Loading_State,

} = tagSlice.actions;

// export const report_slice_response = (state: RootState) => state.tagReducer;


export const select_all_Tags_ = (state: RootState) => state.tagReducer.get_Tag_byPostID_and_PhotoKEY_response;

export const show_LoadingState_Tagz = (state: RootState) => state.tagReducer.show_Loading_Tags;

export const exported_Total_size_Tags_State = (state:RootState) => state.tagReducer.sizeOFTotalState_Tags;



export const multiple_image_route_data_through_redux = (state: RootState) => state.tagReducer.two_Image__data_For_Tag_State;

export const only_ONe_image_route_data_through_redux = (state: RootState) => state.tagReducer.one_Image__data_For_Tag_State;

export default tagSlice.reducer;
