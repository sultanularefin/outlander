import {
    createSlice,
    createAsyncThunk,
    PayloadAction,
} from '@reduxjs/toolkit';
// import * as Keychain from 'react-native-keychain';
import {RootState} from "../app/store";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {baseInterface} from "./baseInterface";


import {Alert, Image, Platform} from "react-native";

import moment from "moment";
import { Image_Response__Image_Picker_Package_Interface } from "../../ui/screens/identity/ProfileEdit";
import { one_Emotion__For__selecting_Emotion_In__Post__Interface } from "./Home_Slice";



export interface weXprez_Logger_User_Interface {

    // // MODIFIED ON APRIL___28_ PC
    bio: string;
    birth_date:  Date; //string; // should be Date other wise Date Picker Package/components will not work.
    country: string;
    cover_image: string;
    created_at: string;
    email: string;
    full_name: string;
    id: number; //string; from string
    interest: string[];
    login_id: number; //string; from string
    mobile_no: string;
    profile_image: string;
    sex: string;

    // married Status: 0 for not selected, "N/A", "Single", "Married".
    updated_at: string;
    user_name: string;
    verify_status: number;//string; from string....

    // cover_image
    vote_status: string;
    vote_up: number,
    vote_down: number,
    // MODIFIED ON APRIL___28_

    //added locally on april, 27
    otp_verify: boolean,
    email_verify: boolean,
    //above are added locally on april, 27





    // new api check may_11, 2022, added:

    // marital_status: string;
    status: number;  //status: number,//string; number //active (1), inactive, permanent block, not verified, other numbers.
    marital_status: string,//number;//string; //number;//string; from any










}

export interface update_cover_payload_interface {


    user_id: number;//string


    cover__image_Data: Image_Response__Image_Picker_Package_Interface | null,//string,

}



export interface update_profile_payload_interface {

    bio: string;
    birth_date:  Date; //string; // should be Date other wise Date Picker Package/components will not work.
    country: string;

    email: string;
    full_name: string;
    // id: number;//string
    user_id: number;//string
    // "user_id": "2",

    mobile_no: string;
    sex: string;

    user_name: string;
    // FURTHER TESTING REQUIRED DON'T DELETE below  COMMENTED FIELDS
    /*
     interest: string[];
     verify_status: number;//string;
     login_id: string;
     created_at: string;
     id: string;
     status: string; //number;//string;
     updated_at: string;
     */
    // FURTHER TESTING REQUIRED DON'T DELETE ABOVE  COMMENTED FIELDS

    // imagesState:

    married_Status_String: string,

    image_Data: Image_Response__Image_Picker_Package_Interface | null,//string,

}

export interface profile_update_response_interface {
    // profile_update_success_response:  {"message": "Profile Updated Successfully.", "success": true}

    message: string,
    success: string,

}






export interface registration_interface {
    name: string,
    mobile_no: string,
    email: string,
    password: string,
    image: {
        uri: "",
    },
    // imageData: ''

}

export interface AsycStorage_Stored_data_interface{

    login_id: number; //string; //string to number;
    user_name: string;
    full_name: string;
    email: string;
    mobile_no: string; // above are for success-__-. // 05
}

export interface login__response__with_userName__password {

    login_id: number; //string; //string to number;
    user_name: string;
    full_name: string;
    email: string;
    mobile_no: string; // above are for success-__-. // 05
    id: number;//string;


    message?: string;   //  // {"message": "No User Found.", "success": false}
    success: boolean;

    userImageURI: string;// this is not present.... june 05, 2022
    profile_image: string; // this is present -----june 05, 2022
    user_id: string;


}

// export interface Auth_State_Interface extends baseInterface{
export interface delta extends login__response__with_userName__password{

    password: string;
}

export interface registration_Request_API_payload_interface extends registration_input_interface{

}

export interface Registration_Resonse_interface{

    success: boolean,
    message: string,

}


export interface notification_Number_by_Logger_ID_Payload_Interface{

    logger_ID: number,
}

export interface notification_Counter_Value_Response_Interface extends notification_Number_by_Logger_ID_Payload_Interface{

    value: number,
}


export interface login_Request_API_payload_interface {
    userName: string,
    // email: string,
    password: string,
}


export interface userId_newAND_OLD_passwordInterface {
    userID: string,
    old_Password: string,
    new_Password: string,

}

export interface email_password_login_responseInterface2{
    id: string;
    user_id: string;
    email: string;
    mobile_no: string;
    password: string;
    user_profile_photo: string;
    last_login: string;
    created_at: string;
    updated_at: string;
    temp_block_time: string;
    email_verify: number; //string;
    verify_token: string;//number; //string;
    otp_verify: number;
    name: string;
    address: string;
    profession: string;
    status: number;//string;
    message: string;
    interest: string[];

}

export interface forget_Password_response_Interface{

    message: string;
}


export interface Password_update_Interface{

    message: string;
}

export interface localStorageInterface{
    email: string,
    userID: string,
    userName: string,
    mobileNumber: string,
    userImageURI: string,
    token: string,
}



export interface settings__un_Vote_payload_interface{

    user_id: number, // "user_id": "1",  // logger_ID or User__ID who is votting
    vote_id: number,//"38",  // "vote_id": "35", // user_ID for whom someone is votting.
    // type: string,// "up"
    previous_Type: string,
}
export interface  customized__UN____Vote__BY_Logger__Response extends settings__un_Vote_payload_interface{
    //{"success":true,"message":"Unvoted Successfully."}
    success: boolean,
    message: string,

}

// /home/arefin/Programs/eazm__/RN_68_Vocally/Image/structures_in_Map/book_1.jpg
// /home/arefin/Programs/eazm__/RN_68_Vocally/Image/structures_in_Map/cheeseburger_1.jpg
// /home/arefin/Programs/eazm__/RN_68_Vocally/Image/structures_in_Map/coffee_1.jpg
// /home/arefin/Programs/eazm__/RN_68_Vocally/Image/structures_in_Map/hamburger_1.jpg
// /home/arefin/Programs/eazm__/RN_68_Vocally/Image/structures_in_Map/ice_cream_1.jpg
// /home/arefin/Programs/eazm__/RN_68_Vocally/Image/structures_in_Map/ice_Cream_Container_1.jpg
// /home/arefin/Programs/eazm__/RN_68_Vocally/Image/structures_in_Map/pouring_tea_1.jpg
// /home/arefin/Programs/eazm__/RN_68_Vocally/Image/structures_in_Map/soda_1.jpg

export interface OneStructure_interface{
    structure_Name: string,
    url_Link: string,
    index: number,
    position: number[],//[8, 5] as const,
    // TOP AND LEFT
}
export const emotion_and_resource_array:OneStructure_interface[]=

  [
      {
          "structure_Name": "book",
          "url_Link": require("../../../Image/structures_in_Map/book_1.jpg"),
          "index": 0,
          "position": [10,20] as const,
      },
      {
          "structure_Name": "Cheese_Burger",
          "url_Link": require("../../../Image/structures_in_Map/cheeseburger_1.jpg"),
          "index": 1,
          "position": [90,20] as const,
      },
      {
          "structure_Name": "Coffee",
          "url_Link": require("../../../Image/structures_in_Map/coffee_1.jpg"),
          "index": 2,
          "position": [190,220] as const,
      },
      {
          "structure_Name": "hamburger",
          "url_Link": require("../../../Image/structures_in_Map/hamburger_1.jpg"),
          "index": 3,
          "position": [40,220] as const,
      },
      {
          "structure_Name": "ice_cream",
          "url_Link": require("../../../Image/structures_in_Map/ice_cream_1.jpg"),
          "index": 4,
          "position": [80,70] as const,
      },
      {
          "structure_Name": "ice_Cream_Container",
          "url_Link": require("../../../Image/structures_in_Map/ice_Cream_Container_1.jpg"),
          "index": 5,
          "position": [80,150] as const,
      },
      {
          "structure_Name": "pouring_tea",
          "url_Link": require("../../../Image/structures_in_Map/pouring_tea_1.jpg"),
          "index": 6,
          "position": [180,250] as const,
      },
      {
          "structure_Name": "soda",
          "url_Link": require("../../../Image/structures_in_Map/soda_1.jpg"),
          "index": 7,
          "position": [10,290] as const,
      },
  ];

export const all_Emotions: one_Emotion__For__selecting_Emotion_In__Post__Interface[] = emotion_and_resource_array;


export const report_Resource_Subjects_Array=

  [
      {
          "report_Title": "Hate Speech",
          "index": 0
      },
      {
          "report_Title": "Racism",
          "index": 1
      },

      {
          "report_Title": "Threats",
          "index": 2
      },
      {
          "report_Title": "Vulgar",
          "index": 3
      },
      {
          "report_Title": "Adult",
          "index": 4
      },
      {
          "report_Title": "Others",
          "index": 5
      },
  ];





export interface settings__UP_Vote_payload_interface{

    user_id: number, // "user_id": "1",  // logger_ID or User__ID who is votting
    vote_id: number,//"38",  // "vote_id": "35", // user_ID for whom someone is votting.
    type: string,// "up"
    previouse_Type: string,



}

export interface  customized_up__Vote__BY_Logger__Response extends settings__UP_Vote_payload_interface{
    success: boolean,
    message: string,
}


export interface one_Disliker__or__Down_Voter_Interface{

    id: number; //string;
    user_id: number; //string;
    user_name: string;
    full_name: string;
    profile_image: string;

    // LOCALLY ADDED ON MAY__07_2022, PROBABLY NOT NEEDED.

    is_following: number;// obj.is_following,
    is_Blocked: number;
}

export interface one__up_Voter__data__interface{

    id: number;// string;
    user_id: number;// string;
    user_name: string;
    full_name: string;
    profile_image: string;


    // locally added on may__05_2022

    is_following: number;// obj.is_following,
    is_Blocked: number;
}



export const down_Voters__or__Dislikers__of_Logger_Profile__Lazy_Loading_value= 5;

export const up_Voters__of_Logger_Lazy_Loading_value= 5;



export interface Auth_State_Interface extends baseInterface{




    loggerPerson: weXprez_Logger_User_Interface;

    userName_Password_Login_Response: login__response__with_userName__password, //email_password_login_responseInterface2;


    isOffline: boolean;
    IOS_Device: boolean;




    // ---up voters or liker list begins

    all_Up_Voters_of_Logger_data: one__up_Voter__data__interface[];
    all_Read_Up_Voters_of_Logger_data: one__up_Voter__data__interface[];
    show_Loading__Up_Voters_of_Logger: boolean;
    size_OF_Total___Up_Voters_of_Logger: number;

    end_Reached___Up__Voters__of__Logger: boolean,
    read_Count_State_Up_Voters_of_Logger: number,


    all__up_Voters_Search__String_Value_State: string,

    // up voters or liker list ends


    // down__Voters--dislikers
    // part 1


    // ---down voters or disliker list begins may_07_2022

    all_Down_Voters_or_DIslikers__of_Logger_data: one_Disliker__or__Down_Voter_Interface[];
    all_Read_Dislikers_of_Logger_data: one_Disliker__or__Down_Voter_Interface[];
    show_Loading__Dislikers__of_Logger: boolean;
    size_OF_Total___Dislikers_of_Logger: number;

    end_Reached__Dislikers__of__Logger: boolean,
    read_Count_State_DisLikers_of_Logger: number,


    all__Dislikers_Search__String_Value_State: string,

    // ---down voters or disliker list ---neds---- may_07_2022



    // down__Voters--dislikers


    // added on may__25_2022

    notification_Count_Response_And_Logger_ID: notification_Counter_Value_Response_Interface,












}

const initialState: Auth_State_Interface = {

    apiInovocatoinStatus: '',
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: '',
    isComplete: false,

    loggerPerson:{

        bio: '',
        birth_date: new Date(),//'',// SHOULD BE DATE OTHER WISE DATE PICKER PACKAGES WILL NOT WORK. // march__20_2022
        country: '',
        cover_image: '',
        created_at: '',
        email: '',
        full_name: '',
        id: 0,//'',
        interest: [],//string[];
        login_id: 0,//'',
        mobile_no: '',
        profile_image: '',
        sex: '',
        marital_status: '', //number;//'',
        updated_at: '', //could be date or string
        user_name: '',
        verify_status: 0,//'',
        vote_status: '',
        vote_up: 0,
        vote_down: 0,

        otp_verify: false,
        email_verify: false,
        status: 0,  //status: number,//string; number //active (1), inactive, permanent block, not verified, other numbers.



    },

    userName_Password_Login_Response:{
        login_id: 0, //string; //string to number;
        user_name: '',
        full_name: '',
        email: '',
        mobile_no: '', // above are for success-__-. // 05
        id: 0,//'',

        message: '',
        success: false,

        userImageURI: "", //added on march__15_2022 // .->.-_ // not present ,, ,,, response from server is "profile_image" check ed on june 05, 2022
        profile_image: "",
        user_id: "1",

    },



    isOffline: false,

    IOS_Device: true,


    // this below are for up--voters--

    all_Up_Voters_of_Logger_data: [],
    all_Read_Up_Voters_of_Logger_data: [],
    show_Loading__Up_Voters_of_Logger: false,
    size_OF_Total___Up_Voters_of_Logger: 0,
    end_Reached___Up__Voters__of__Logger: false,
    read_Count_State_Up_Voters_of_Logger: 0,


    all__up_Voters_Search__String_Value_State: "", // added on april__21

    // ---this above are for up-voters-ends -here


    // for down voters of logger profile
    // part 06

    all_Down_Voters_or_DIslikers__of_Logger_data: [],
    all_Read_Dislikers_of_Logger_data: [],
    show_Loading__Dislikers__of_Logger: false,
    size_OF_Total___Dislikers_of_Logger: 0,
    end_Reached__Dislikers__of__Logger: false,
    read_Count_State_DisLikers_of_Logger: 0,


    all__Dislikers_Search__String_Value_State: "", // added on april__21


    // ends -here --for down voters of logger profile

    // notification_Count_Response_by_Logger_ID
    notification_Count_Response_And_Logger_ID:{
        logger_ID:0,
        value: 0,

    },


};


export const getRandomArbitrary= (min:number, max:number) => Math.floor(Math.random() * (max - min) + min);

export const generateTitle= (length:number) => {

    let _result = '';
    let iterator = 0;
    const _allowedChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0127456789';

    while (iterator < Math.round(length)) {
        //Get random int
        const randomInt = getRandomArbitrary(0, _allowedChars.length);


        _result += _allowedChars[randomInt];

        iterator +=1;
    }

    return _result;
};


// ## part 07 may__07 begins here filter, search, clear

// added on may__05__22
const Disliker_Filter_By_Full_Name_String__2 =  (
    state:any,
    action: PayloadAction<string>) => {
    const temp_up__Voter_Full_Name_String: string = action.payload;



    const all_TEmp__Up_Voters__For__Filtering= state.all_Down_Voters_or_DIslikers__of_Logger_data;

    // 999
    const filtered__UP__Voters: one_Disliker__or__Down_Voter_Interface[] = (all_TEmp__Up_Voters__For__Filtering.length !==0)
        ? (all_TEmp__Up_Voters__For__Filtering.filter((oneItem:one_Disliker__or__Down_Voter_Interface) =>
                oneItem.full_name.toLocaleLowerCase().match(temp_up__Voter_Full_Name_String.toLocaleLowerCase())
            )
        )
        :all_TEmp__Up_Voters__For__Filtering;

    state.all_Read_Dislikers_of_Logger_data = filtered__UP__Voters;


    state.show_Loading__Dislikers__of_Logger=false;

    state.all__Dislikers_Search__String_Value_State = temp_up__Voter_Full_Name_String;
};




export const invoke_Redux__To_Load__more__Dislikers= (
    state: any,
    // cant' find suitable replacement.
)=>{

    console.log("at ___invoke_Redux__To_Load__more__Dislikers");
    // console.log("state.end_Reached___follower__of__Logger", state.end_Reached___follower__of__Logger);
    // console.log("state.size_OF_Total___follower__of__Logger: ",state.size_OF_Total___follower__of__Logger);

    if (state.end_Reached__Dislikers__of__Logger){

        return;
    }

    state.show_Loading__Dislikers__of_Logger=true;

    const is__Read_Count_State_Increment_able_UP__Voters = (state.size_OF_Total___Dislikers_of_Logger /
        ((state.read_Count_State_DisLikers_of_Logger + 1) * down_Voters__or__Dislikers__of_Logger_Profile__Lazy_Loading_value)) > 1;


    // console.log("is__Read_Count_State_Increment_able_UP__Voters: ",is__Read_Count_State_Increment_able_UP__Voters);

    const incrementedTemp_ReadCountState= state.read_Count_State_DisLikers_of_Logger;

    if (is__Read_Count_State_Increment_able_UP__Voters) {

        //console.log("at here_____ [is__Read_Count_State_Increment_able_UP__Voters]", is__Read_Count_State_Increment_able_UP__Voters);
        const newData = state.all_Down_Voters_or_DIslikers__of_Logger_data.slice(((incrementedTemp_ReadCountState) * down_Voters__or__Dislikers__of_Logger_Profile__Lazy_Loading_value),
            ((incrementedTemp_ReadCountState + 1) * down_Voters__or__Dislikers__of_Logger_Profile__Lazy_Loading_value));

        const tempReadCountState: number = (1 + state.read_Count_State_DisLikers_of_Logger);

        state.all_Read_Dislikers_of_Logger_data = state.all_Read_Dislikers_of_Logger_data.concat(newData);
        state.read_Count_State_DisLikers_of_Logger = tempReadCountState;
        state.show_Loading__Dislikers__of_Logger = false;


    }
    else {

        // console.log("else");
        const data2 = state.all_Down_Voters_or_DIslikers__of_Logger_data.slice(((incrementedTemp_ReadCountState) * down_Voters__or__Dislikers__of_Logger_Profile__Lazy_Loading_value),
            state.size_OF_Total___Dislikers_of_Logger+1);// +1 added on august_11_2021
        state.all_Read_Dislikers_of_Logger_data = state.all_Read_Dislikers_of_Logger_data.concat(data2);
        state.end_Reached__Dislikers__of__Logger =true;
        // state.endReachedState = true;
        state.show_Loading__Dislikers__of_Logger = false;


    }

};




// added on may__05_2022
const clear__Dislikers_Of_Logger_FIltering_Text = (state:any,
                                                   action: PayloadAction<string>)=>{

    const all__UP_Voters_For__Filtering= state.all_Down_Voters_or_DIslikers__of_Logger_data;

    state.all_Read_Dislikers_of_Logger_data = all__UP_Voters_For__Filtering;

    state.read_Count_State_DisLikers_of_Logger = all__UP_Voters_For__Filtering.length;
    state.end_Reached__Dislikers__of__Logger =true;

    state.show_Loading__Dislikers__of_Logger=false;

    state.all__Dislikers_Search__String_Value_State = ""; //logger__Thoughts;
};



export const filter_All_By_Character_Dislikers_of_Logger_Page_2 =(
    state: any,
    action: PayloadAction<string>
)=>{

    const temp_selected_Character = action.payload;

    // if (temp_selected_Character !== undefined){



    // 999
    const all__UP_Voters_data_Temp = state.all_Down_Voters_or_DIslikers__of_Logger_data;


    const filter_Up_Voters_By__character = (temp_selected_Character!=='')
        ? (all__UP_Voters_data_Temp.filter((oneItem:one_Disliker__or__Down_Voter_Interface) => oneItem.full_name.toLocaleLowerCase().
            startsWith(temp_selected_Character.toLocaleLowerCase())))
        :all__UP_Voters_data_Temp;



    state.all_Read_Dislikers_of_Logger_data = filter_Up_Voters_By__character;

    state.show_Loading__Dislikers__of_Logger=false;

    // }

};

// ## part 07 may__07 ends here filter, search, clear


// added on may__05__22
const up__Voter_Filter_By_Full_Name_String__2 =  (
    state:any,
    action: PayloadAction<string>) => {
    const temp_up__Voter_Full_Name_String: string = action.payload;



    const all_TEmp__Up_Voters__For__Filtering= state.all_Up_Voters_of_Logger_data;

    // 999
    const filtered__UP__Voters: one__up_Voter__data__interface[] = (all_TEmp__Up_Voters__For__Filtering.length !==0)
        ? (all_TEmp__Up_Voters__For__Filtering.filter((oneItem:one__up_Voter__data__interface) =>
                oneItem.full_name.toLocaleLowerCase().match(temp_up__Voter_Full_Name_String.toLocaleLowerCase())
            )
        )
        :all_TEmp__Up_Voters__For__Filtering;

    state.all_Read_Up_Voters_of_Logger_data = filtered__UP__Voters;


    state.show_Loading__Up_Voters_of_Logger=false;

    state.all__up_Voters_Search__String_Value_State = temp_up__Voter_Full_Name_String;
};




// added on may__05_2022
const clear__UP_Voters_Of_Logger_FIltering_Text = (state:any,
                                                   action: PayloadAction<string>)=>{

    const all__UP_Voters_For__Filtering= state.all_Up_Voters_of_Logger_data;

    state.all_Read_Up_Voters_of_Logger_data = all__UP_Voters_For__Filtering;

    state.read_Count_State_Up_Voters_of_Logger = all__UP_Voters_For__Filtering.length;
    state.end_Reached___Up__Voters__of__Logger =true;

    state.show_Loading__Up_Voters_of_Logger=false;

    state.all__up_Voters_Search__String_Value_State = ""; //logger__Thoughts;
};



export const filter_All_By_Char_Up_Voters_of_Logger_Page_2 =(
    state: any,
    action: PayloadAction<string>
)=>{

    const temp_selected_Character = action.payload;

    // if (temp_selected_Character !== undefined){



    // 999
    const all__UP_Voters_data_Temp = state.all_Up_Voters_of_Logger_data;


    const filter_Up_Voters_By__character = (temp_selected_Character!=='')
        ? (all__UP_Voters_data_Temp.filter((oneItem:one__up_Voter__data__interface) => oneItem.full_name.toLocaleLowerCase().
            startsWith(temp_selected_Character.toLocaleLowerCase())))
        :all__UP_Voters_data_Temp;



    state.all_Read_Up_Voters_of_Logger_data = filter_Up_Voters_By__character;

    state.show_Loading__Up_Voters_of_Logger=false;

    // }

};


const initailState0 = initialState;




//WHEN LOGGING WITH ROLE THIS INVOKED, FEB__28,2022
const update_vault_with_login_with_userName_Response = async (
    payload_with_role_Response_for_With_Many_Role: delta,
    // password: string,


) => {

    // const location=[41.008240 ,28.978359] as const;
    const login_id_2:[string, string] = ["login_id", payload_with_role_Response_for_With_Many_Role.login_id.toString()]; // feb_28_monday__2022
    const user_name_2:[string, string] = ["user_name", payload_with_role_Response_for_With_Many_Role.user_name]; // feb_28_monday__2022
    const email_2:[string, string] = ["email", payload_with_role_Response_for_With_Many_Role.email]; // feb_28_monday__2022
    const full_name_2:[string, string] = ["full_name", payload_with_role_Response_for_With_Many_Role.full_name]; // feb_28_monday__2022
    const mobile_no_2:[string, string] = ["mobile_no", payload_with_role_Response_for_With_Many_Role.mobile_no]; // feb_28_monday__2022
    const pw_2:[string, string] = ["pw", payload_with_role_Response_for_With_Many_Role.password]; // feb_28_monday__2022



    try {
        await AsyncStorage.multiSet([

            login_id_2,
            // firstPair,

            user_name_2,
            email_2,
            full_name_2,
            mobile_no_2,
            pw_2

        ]);
    } catch(error_in_Async__Storage:any) {

        console.log("error_in_Async__Storage __update_vault_with_login_with_userName_Response: ",error_in_Async__Storage);


        //save error
    }





    try {
        const values__Wex_cred = await AsyncStorage.multiGet([
            'login_id',
            'user_name',
            'email',
            'full_name',
            'mobile_no'
        ]);

        // console.log("values__Wex_cred: ",values__Wex_cred);

    } catch (error_in_multiget:any) {
        console.log("error_in_multiget!___update_vault_with_login_with_userName_Response", error_in_multiget);
    }



};

// -1 create before or in march _16_2022
export const register_with_WXX = createAsyncThunk(

    'users/register_with_WXX',

    async (reg_payload_:registration_Request_API_payload_interface, thunkAPI) => {
        try {

            console.log("________userID:_________at[register_with_WXX]=> ___ ", reg_payload_);

            const response = await fetch(
                // 'https://wexprez.com/wex_api/api/user/login',
                'https://wexprez.com/wex_api/api/user/registration',
                {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({


                        user_name: reg_payload_.userName,
                        full_name: reg_payload_.userFull_Name,
                        mobile_no: reg_payload_.userMobile,

                        email: reg_payload_.userEmail,
                        password: reg_payload_.userPassword,

                    }),
                },
            );

            const data = await response.json();

            console.log("response.status: ",response.status);
            // console.log('response _____in authSlice: ', data);
            if ((response.status === 200)||(response.status === 201)) {

                console.log("register_with_WXX:", data);

                const temp_Reg_data:Registration_Resonse_interface = data;



                console.log("temp_Reg_data: ",temp_Reg_data);
                // Registration_Resonse_interface


                // return;


                if(temp_Reg_data.success){


                    // console.log("at temp_data_by_login_with__userName_password");


                    /*
                    const modified__login_With_UserName_Password: Registration_Resonse_interface=

                        {
                            ...temp_data_by_login_with__userName_password,
                            login_id: Number(temp_data_by_login_with__userName_password.login_id),

                        };

                    const payLoad_delta:delta={
                        ...modified__login_With_UserName_Password,
                        password: user_Name_nd__Password.password,

                    };
                    await update_vault_with_login_with_userName_Response(
                        payLoad_delta

                    );

                    console.log("modified__login_With_UserName_Password: ",modified__login_With_UserName_Password);
                    */
                    return temp_Reg_data;
                }

                //   else if (temp_data_by_login_with__userName_password.success === false){
                else if (!temp_Reg_data.success){

                    // Alert.alert(`${temp_data_by_login_with__userName_password.message}`);
                    // console.log("Password not match. ___in ___AuthSlice");

                    return temp_Reg_data;
                }


                else{
                    console.log("at final else of login__","____ll");

                    return temp_Reg_data;

                }


            } else {
                console.log("__data__: ",data);

                return thunkAPI.rejectWithValue(data);
            }
        } catch (error: any) {
            console.log('Error___', error.response.data);
            thunkAPI.rejectWithValue(error.response.data);
        }
    }
);


// 0 create on or before march 16_2022
export const login_With_username_Password_Async = createAsyncThunk(

    'users/loginWithEmailPassword',

    async (user_Name_nd__Password:login_Request_API_payload_interface, thunkAPI) => {
        try {

            // console.log("________userID:_________at[user_Name_nd__Password]=> ___ ", user_Name_nd__Password);

            const response = await fetch(
                'https://wexprez.com/wex_api/api/user/login',
                {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        user_name: user_Name_nd__Password.userName,
                        password: user_Name_nd__Password.password,
                    }),
                },
            );


            const data = await response.json();

            console.log("response.status: ",response.status);
            // console.log('response _____in authSlice: ', data);
            if (response.status === 200) {

                // console.log("user_Name_nd__Password:", data);

                const temp_data_by_login_with__userName_password:login__response__with_userName__password = data;


                if(temp_data_by_login_with__userName_password.login_id){


                    // console.log("at temp_data_by_login_with__userName_password");


                    const modified__login_With_UserName_Password: login__response__with_userName__password=

                        {
                            ...temp_data_by_login_with__userName_password,
                            login_id: Number(temp_data_by_login_with__userName_password.login_id),

                        };



                    const payLoad_delta:delta={
                        ...modified__login_With_UserName_Password,
                        password: user_Name_nd__Password.password,

                    };
                    await update_vault_with_login_with_userName_Response(
                        payLoad_delta

                    );



                    // console.log("modified__login_With_UserName_Password: ",modified__login_With_UserName_Password);

                    return modified__login_With_UserName_Password;




                }

                //   else if (temp_data_by_login_with__userName_password.success === false){
                else if (!temp_data_by_login_with__userName_password.success){

                    // Alert.alert(`${temp_data_by_login_with__userName_password.message}`);
                    // console.log("Password not match. ___in ___AuthSlice");

                    return temp_data_by_login_with__userName_password;
                }


                else{
                    console.log("at final else of login__","____ll");

                    return temp_data_by_login_with__userName_password;





                }


            } else {
                console.log("__data__: ",data);

                return thunkAPI.rejectWithValue(data);
            }
        } catch (error: any) {
            console.log('Error___', error.response.data);
            thunkAPI.rejectWithValue(error.response.data);
        }
    }
);








// 02 created around march 16_2022
// populate_logger_offline_status
export const get_User_Profile_With_UserID_Async = createAsyncThunk(
    'users/profile',
    async (
        userID: number,//string,//number,//string,
        thunkAPI) => {
        try {
            console.log("userID in ", userID);

            const response = await fetch(
                'https://wexprez.com/wex_api/api/user/get_user_profile',
                {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        user_id: userID,
                    }),
                }
            );
            const data = await response.json();
            // console.log('response _____in authSlice (getUserProfile): ', data.status);
            // console.log("loggerPerson_temp: ", loggerPerson_temp.status);
            if (response.status === 200) {

                const temp_get_user_Profile_data= data;

                // console.log("data profile_ dAta: ",data);





                const modified__logger_Profile_Data:weXprez_Logger_User_Interface=

                    {
                        ...temp_get_user_Profile_data,
                        /*
                        ...temp_get_user_Profile_data,
                        buzz_countdown: Number(temp_get_user_Profile_data.buzz_countdown),
                        buzz_req_countdown: Number(temp_get_user_Profile_data.buzz_req_countdown),
                        email_verify: Number(temp_get_user_Profile_data.email_verify),
                        otp_verify: Number(temp_get_user_Profile_data.otp_verify),
                        ref_counter: Number(temp_get_user_Profile_data.ref_counter),
                        status: Number(temp_get_user_Profile_data.status),
                        trip_countdown: Number(temp_get_user_Profile_data.trip_countdown),
                        buzz_req_available: Number(temp_get_user_Profile_data.buzz_req_available),
                        */
                    };


                // console.log("temp_get_user_Profile_data: ",temp_get_user_Profile_data);
                //
                // return;


                return modified__logger_Profile_Data;
            } else {
                return thunkAPI.rejectWithValue(data);
            }
        } catch (error:any) {
            console.log('Error', error.response.data);
            thunkAPI.rejectWithValue(error.response.data);
        }
    }
);




// -002 MIGHT BE NEEDED IN FUTURE WITH IMAGE UPLAD IN TRIPZCHAT FOR WEXPRZ
export const create_user_in_registration_page = createAsyncThunk(

    'users/create_user_in_registration_page',
    async (
        userData:registration_interface,


        thunkAPI) => {
        try {

            // console.log(" << userData: >> ", userData);


            // --------- ----------- ----------- VERSION 1 BEGINS HERE  -------- ----------- -----------
            const myHeaders = new Headers();
            myHeaders.append("Authorization", "Bearer access-token");
            // myHeaders.append("otherHeader", "foo");
            // myHeaders.append("Content-Type", "multipart/form-data;");
            // multipart/form-data
            // : "multipart/form-data; ",

            const formData = new FormData();



            /*
            console.log("  \n\n\n ",);

            console.log(" << userData: >> ", userData);
            console.log(" << userData.name >> ", userData.name);
            console.log(" << userData.mobile_no >> ", userData.mobile_no);
            console.log(" << userData.email >> ",  userData.email);
            console.log(" << userData.password >> ", userData.password);
            console.log(" << userData.image.uri: >> ", userData.image.uri);

            console.log(" \n\n\n ", );
            */



            formData.append('image', {
                uri: userData.image.uri,
                filename: 'image.png',
                type: 'image/png',


                //data: userData.imageData, // this could be neeeded...
            });



            // esponse _____in authSlice:  {"message":"Email already exists."}





            formData.append("name", userData.name);
            formData.append("mobile_no", userData.mobile_no);
            formData.append("email", userData.email);
            formData.append("password", userData.password);

            const registrationURL =
                "https://tripzchat.com/api_dev/api/user/registration";
            // "http://192.168.0.103:3000/upload";





            const requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: formData,
                redirect: 'follow'
            };



            const response = await fetch(registrationURL, requestOptions);




            // const data2 = await response.text(); /// THIS IS IMPORTANT... not in this case..

            const data2 = await response.json();
            // console.log('response _____in authSlice: ', data2);

            // console.log( "____ *** response.text()); *** ____", response.text());

            // console.log("  << status: authSlice with userID >> ", response.status);
            if (response.status === 200) {

                // console.log("status: authSlice with userID  ", response.status);

                // localStorage.setItem('token', data.token);

                return data2;
            } else {
                return thunkAPI.rejectWithValue(data2);
            }


        } catch (error:any) {
            console.log('Error', error.response.data);
            thunkAPI.rejectWithValue(error.response.data);
        }
    }
);



// begins-- cover...

export const update_logger_Cover__Photo_payload = createAsyncThunk(

    'users/update_logger_Cover__Photo_payload',
    async(
        logger_profile__Cover_edit_data: update_cover_payload_interface,

        thunkAPI
    ) => {
        try {




            // else{

            if(logger_profile__Cover_edit_data.cover__image_Data !== null){

                console.log("imagesState.uri, ", logger_profile__Cover_edit_data.cover__image_Data.uri);
                console.log("imagesState.type, ", logger_profile__Cover_edit_data.cover__image_Data.type);


                const heavY_Data = new FormData();

                heavY_Data.append('image', {
                    //     data.append('myFile', {
                    // eslint-disable-next-line no-useless-concat
                    // name: `${`${imagesState.title}.${imagesState.mime.split('/')[1]}`}`,
                    // name: imagesState[0].title,
                    // name:
                    name: 'image',
                    filename: 'image.png',
                    type: logger_profile__Cover_edit_data.cover__image_Data.type,
                    uri: Platform.OS === 'ios' ?
                        logger_profile__Cover_edit_data.cover__image_Data.uri.replace('file://', '')
                        : logger_profile__Cover_edit_data.cover__image_Data.uri,
                });



                heavY_Data.append("user_id", `${logger_profile__Cover_edit_data.user_id}`);
                // data.append("full_name", "Arefin Sultan (Mobile)");
                // data.append("country", "Bangladesh");
                // data.append("bio", "outlander");
                // data.append("sex", "Male");
                // data.append("status", "Single");
                // data.append("birth_date", "1997-08-21");



                const url ="https://wexprez.com/wex_api/api/user/upload_cover_image";

                // "https://wexprez.com/wex_api/api/user/profile_update";





                // VERSION 02 BEGINS HERE....---------------------------------------


                const requestOptions = {


                    method: 'POST',
                    headers: {
                        // "Content-Type": "multipart/form-data; ",
                        Authorization: 'Bearer access-token',
                        otherHeader: 'foo',
                        'Content-Type': 'multipart/form-data',
                    },
                    body: heavY_Data,
                    redirect: 'follow',
                    // redirect: 'follow'
                };






                // 999
                const response_with_file_image= await fetch(url, requestOptions);

                const data2 = await response_with_file_image.json();

                // console.log('profile_update__response: ', data2);
                // console.log("response_with_file_image.status: ",response_with_file_image.status)

                if ((response_with_file_image.status === 200) || (response_with_file_image.status === 201)) {


                    // console.log("_profile_update_success_response: ", data2);

                    // console.log("status: authSlice with userID  ", response.status);

                    // localStorage.setItem('token', data.token);


                    return data2;
                }

                else {
                    console.log("profile not updated successfully: ");
                    return thunkAPI.rejectWithValue(data2);
                }



                // }
            }

            else{

                console.log("---image cover null");
            }




        } catch (error:any) {
            console.log('Error', error.response.data);
            thunkAPI.rejectWithValue(error.response.data);
        }
    }
);
// end convers-__



export const update_logger_profile_without_interest_payload = createAsyncThunk(

    'users/update_logger_profile_without_interest_payload',
    async(
        logger_profile_edit_data: update_profile_payload_interface,

        thunkAPI
    ) => {
        try {


            // if(Object.keys(profile_Image_State_I_Picker).length >0){
            if (logger_profile_edit_data.image_Data === null) {

                console.log("__user id: ",logger_profile_edit_data.user_id);
                console.log(`logger_profile_edit_data.image_Data === null: ${logger_profile_edit_data.image_Data === null}`);




                const someDate = logger_profile_edit_data.birth_date;
                const current_Date =  (`0${someDate.getDate()}`).slice(-2); //d.getDate();
                const curr_month = (`0${someDate.getMonth() + 1}`).slice(-2); //Months are zero based  // ("0" + (this.getMonth() + 1)).slice(-2)
                const curr_year = someDate.getFullYear();

// console.log(` RPG => ${curr_year}-${curr_month}-${current_Date}`);

                const newDateSelected=  `${curr_year}-${curr_month}-${current_Date}`;

                console.log("newDateSelected: ",newDateSelected); //"1992-12-31"

                const data = new FormData();

                data.append("bio",          `${logger_profile_edit_data.bio}`);
                data.append("birth_date",   `${newDateSelected}`);



                data.append("country",      `${logger_profile_edit_data.country}`);
                data.append("full_name",     `${logger_profile_edit_data.full_name}`);
                data.append("marital_status",`${logger_profile_edit_data.married_Status_String}`);

                data.append("sex",           `${logger_profile_edit_data.sex}`);

                data.append("user_id",      `${logger_profile_edit_data.user_id}`); // with out string it doesn't work.

                const url = "https://wexprez.com/wex_api/api/user/profile_update";


                const requestOptions = {


                    method: 'POST',
                    headers: {
                        // "Content-Type": "multipart/form-data; ",
                        Authorization: 'Bearer access-token',
                        otherHeader: 'foo',
                        'Content-Type': 'multipart/form-data',
                    },
                    body: data,
                    redirect: 'follow',
                    // redirect: 'follow'
                };

                const response= await fetch(url, requestOptions);




                const data22 = await response.json();
                console.log('profile_update__response: ', data22);
                if ((response.status === 200) || (response.status === 201)) {


                    // console.log("_profile_update_success_response: ", data);

                    // console.log("status: authSlice with userID  ", response.status);

                    // localStorage.setItem('token', data.token);


                    return data22;
                }

                else {
                    console.log("profile not updated successfully: ");
                    return thunkAPI.rejectWithValue(data22);
                }

            }

            else{

                console.log("imagesState.uri, ", logger_profile_edit_data.image_Data.uri);
                console.log("imagesState.type, ", logger_profile_edit_data.image_Data.type);


                const data = new FormData();

                data.append('image', {
                    //     data.append('myFile', {
                    // eslint-disable-next-line no-useless-concat
                    // name: `${`${imagesState.title}.${imagesState.mime.split('/')[1]}`}`,
                    // name: imagesState[0].title,
                    // name:
                    name: 'image',
                    filename: 'image.png',
                    type: logger_profile_edit_data.image_Data.type,
                    uri: Platform.OS === 'ios' ?
                        logger_profile_edit_data.image_Data.uri.replace('file://', '')
                        : logger_profile_edit_data.image_Data.uri,
                });



                data.append("user_id",      `${logger_profile_edit_data.user_id}`); // with out string it doesn't work.
                data.append("bio",          `${logger_profile_edit_data.bio}`);
                data.append("birth_date",   `${logger_profile_edit_data.birth_date}`);
                data.append("country",      `${logger_profile_edit_data.country}`);
                data.append("full_name",     `${logger_profile_edit_data.full_name}`);

                data.append("sex",           `${logger_profile_edit_data.sex}`);
                data.append("marital_status",`${logger_profile_edit_data.married_Status_String}`);

                // data.append("image", fileInput.files[0], "[PROXY]");

                // 70-18-8B-81-D9-89
                // F4-60-E2-AC-1C-2A


                const url =
                    // "https://tripzchat.com/api_dev/api/user/testImageUpload";
                    // "https://tripzchat.com/api_dev/api/user/testImageUpload";
                    // "http://localhost:3000/upload";
                    // "http://192.168.0.103:3000/upload";
                    "https://wexprez.com/wex_api/api/user/profile_update";



                // return;

                // VERSION 01 BEGINS HERE..............................
                /*
                const response = await fetch(url, {
                    method: "post",
                    body: data,
                    headers: {
                        "Content-Type": "multipart/form-data; ",
                    },
                });


                console.log("response: ", response);
                setImageState(initialImagesState);



                */



                // VERSION 02 BEGINS HERE....---------------------------------------


                const requestOptions = {


                    method: 'POST',
                    headers: {
                        // "Content-Type": "multipart/form-data; ",
                        Authorization: 'Bearer access-token',
                        otherHeader: 'foo',
                        'Content-Type': 'multipart/form-data',
                    },
                    body: data,
                    redirect: 'follow',
                    // redirect: 'follow'
                };


                /* await fetch(url, requestOptions).
                     then((response5) => response5.text()).
                     then( (result) =>{

                         console.log("result.photoUrl: ", JSON.parse(result));



                         // 999





                     }).catch(
                         (error3:any) => console.log('error', error3)
                     );*/



                // 999
                const response_with_file_image= await fetch(url, requestOptions);

                const data2 = await response_with_file_image.json();

                // console.log('profile_update__response: ', data2);
                // console.log("response_with_file_image.status: ",response_with_file_image.status)

                if ((response_with_file_image.status === 200) || (response_with_file_image.status === 201)) {


                    // console.log("_profile_update_success_response: ", data2);

                    // console.log("status: authSlice with userID  ", response.status);

                    // localStorage.setItem('token', data.token);


                    return data2;
                }

                else {
                    console.log("profile not updated successfully: ");
                    return thunkAPI.rejectWithValue(data);
                }

                /*


                if ((result.status === 200) || (response.status === 201)) {


                    console.log("_profile_update_success_response: ", data);

                    // console.log("status: authSlice with userID  ", response.status);

                    // localStorage.setItem('token', data.token);


                    return data;
                }

                else {
                    console.log("profile not updated successfully: ");
                    return thunkAPI.rejectWithValue(data);
                }
                */

            }


        } catch (error:any) {
            console.log('Error', error.response.data);
            thunkAPI.rejectWithValue(error.response.data);
        }
    }
);






export const update_password_async = createAsyncThunk(

    'users/updatePassword',
    async (
        userId_newAND_OLD_password:userId_newAND_OLD_passwordInterface,

        // userID:string
        /*{ email, password }*/
        thunkAPI) => {
        try {


            const response = await fetch(
                'https://tripzchat.com/api_dev/api/user/changePassword',

                {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        // userId: userID,

                        user_id: userId_newAND_OLD_password.userID,
                        new_password: userId_newAND_OLD_password.new_Password,
                        old_password: userId_newAND_OLD_password.old_Password,



                    }),
                }
            );
            const data = await response.json();
            // console.log('response _____in authSlice: ', data);
            if (response.status === 200) {

                // console.log("status: authSlice with userID  ", response.status);

                // localStorage.setItem('token', data.token);


                return data;
            } else {
                return thunkAPI.rejectWithValue(data);
            }
        } catch (error:any) {
            console.log('Error', error.response.data);
            thunkAPI.rejectWithValue(error.response.data);
        }
    }
);




// 11 --number added on may_8
export const un___Vote_bY_Logger_on_Settings_Page=  createAsyncThunk(
    'users/un___Vote_bY_Logger_on_Settings_Page',
    async (


        settings___un_Vote__By____Logger__payload: settings__un_Vote_payload_interface,

        thunkAPI
    ) => {

        try {
            const response = await fetch(

                'https://wexprez.com/wex_api/api/user/user_unvote',

                {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },

                    body: JSON.stringify ({

                        user_id: settings___un_Vote__By____Logger__payload.user_id, // "user_id": "1",  // logger_ID or User__ID who is votting
                        vote_id: settings___un_Vote__By____Logger__payload.vote_id,//"38",  // "vote_id": "35", // user_ID for whom someone is votting.
                        // type: settings_OF__Logger_upvote_payload.type,//



                    }),
                },
            );
            const data = await response.json();
            // console.log('un__vote response::: ', data);

            if ((response.status === 200) ||(response.status === 201)) {



                const customized_un_Vote_Response_Data: customized__UN____Vote__BY_Logger__Response={

                    user_id: settings___un_Vote__By____Logger__payload.user_id, // "user_id": "1",  // logger_ID or User__ID who is votting
                    vote_id: settings___un_Vote__By____Logger__payload.vote_id,//"38",  // "vote_id": "35", // user_ID for whom someone is votting.
                    // type: settings_OF__Logger_upvote_payload.type,// "up"
                    previous_Type: settings___un_Vote__By____Logger__payload.previous_Type,
                    success: data.success,          //5.

                    message: data.message,

                };

                // DON'T UNCOMMENT THEM:

                if(data.success){

                    return customized_un_Vote_Response_Data;
                }
                else{

                    console.log("___un___Vote_bY_Logger_on_Settings_Page_--_-__vote unsuccessful");
                }

            } else {
                return thunkAPI.rejectWithValue(data);
            }
        } catch (error:any) {
            console.log('Error', error.response.data);
            thunkAPI.rejectWithValue(error.response.data);
        }
    }
);




// added on may__5_2022:

// 12..
export const up__Vote_bY_Logger_on_Settings_Page=  createAsyncThunk(
    'users/up__Vote_bY_Logger_on_Settings_Page',
    async (


        settings_OF__Logger_upvote_payload: settings__UP_Vote_payload_interface,

        thunkAPI
    ) => {

        try {
            const response = await fetch(

                'https://wexprez.com/wex_api/api/user/user_vote',
                {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },

                    body: JSON.stringify ({

                        user_id: settings_OF__Logger_upvote_payload.user_id, // "user_id": "1",  // logger_ID or User__ID who is votting
                        vote_id: settings_OF__Logger_upvote_payload.vote_id,//"38",  // "vote_id": "35", // user_ID for whom someone is votting.
                        type: settings_OF__Logger_upvote_payload.type,//


                    }),
                },
            );
            const data = await response.json();
            // console.log('activity/vote response::: ', data);

            if ((response.status === 200) ||(response.status === 201)) {



                const customized_up_Down_Vote_Response_Data: customized_up__Vote__BY_Logger__Response={

                    user_id: settings_OF__Logger_upvote_payload.user_id, // "user_id": "1",  // logger_ID or User__ID who is votting
                    vote_id: settings_OF__Logger_upvote_payload.vote_id,//"38",  // "vote_id": "35", // user_ID for whom someone is votting.
                    type: settings_OF__Logger_upvote_payload.type,// "up"
                    success: data.success,          //5.

                    previouse_Type: settings_OF__Logger_upvote_payload.previouse_Type,
                    message: data.message,

                };

                // DON'T UNCOMMENT THEM:

                if(data.success){

                    return customized_up_Down_Vote_Response_Data;
                }
                else{

                    console.log("___-___up__Vote_bY_Logger_on_Settings_Page_____---____vote unsuccessful");
                }

            } else {
                return thunkAPI.rejectWithValue(data);
            }
        } catch (error:any) {
            console.log('Error', error.response.data);
            thunkAPI.rejectWithValue(error.response.data);
        }
    }
);



//12 added on may__20,2022:


export const get_all_Likers_of_Logger_Profile = createAsyncThunk(
    'users/get_all_Likers_of_Logger_Profile',
    async (
        userID: number,//string,

        thunkAPI) => {



        console.log("____userID___: ",userID);
        try {


            // console.log("at <<get_all_active_partners>> and userID: ",userID);

            const response = await fetch(
                'https://wexprez.com/wex_api/api/user/user_voteUp_list',
                // 'https://wexprez.com/wex_api/api/user/followers',
                // 'https://tripzchat.com/api_dev/api/myPartner/getAllPartner',
                {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },

                    body: JSON.stringify({
                            // partner_id: userID,
                            "user_id": userID,
                        }
                    ),


                }
            );
            const data = await response.json();

            // console.log("data: ", data);
            // console.log("response.status: ", response.status);



            if (response.status === 200) {


                return data;
            } else {
                return thunkAPI.rejectWithValue(data);
            }
        } catch (error:any) {
            console.log('Error', error.response.data);
            thunkAPI.rejectWithValue(error.response.data);
        }
    }
);


// 13. added on may__07_2022 all dislikers of logger profile


export const get_all___Down_Voters__Dis_Likers_of_Logger_Profile = createAsyncThunk(
    'users/get_all___Down_Voters__Dis_Likers_of_Logger_Profile',
    async (
        userID: number,//string,

        thunkAPI) => {

        console.log("____userID___: ",userID);
        try {
            const response = await fetch(
                'https://wexprez.com/wex_api/api/user/user_voteDown_list',
                {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                            "user_id": userID,
                        }
                    ),
                }
            );
            const data = await response.json();

            if (response.status === 200) {
                return data;
            } else {
                return thunkAPI.rejectWithValue(data);
            }
        } catch (error:any) {
            console.log('Error', error.response.data);
            thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

// 13 ends dislikers list---may_07_2022

// 13, notification number begins here
export const check_Notification_invocation_begins_Here = createAsyncThunk(
    'users/check_Notification_invocation_begins_Here',
    async (
        notification_Number_Payload: number,//notification_Number_by_Logger_ID_Payload_Interface,
        thunkAPI) => {
        try {

            // console.log("notification_Number_Payload: ",notification_Number_Payload);
            // console.log("notification_Number_Payload: ",typeof notification_Number_Payload);
            // console.log("________userID:_________at[user_Name_nd__Password]=> ___ ", user_Name_nd__Password);

            const response = await fetch(
                'https://wexprez.com/wex_api/api/notification/get_all_count',
                {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        // user_id: notification_Number_Payload.logger_ID,
                        user_id: notification_Number_Payload
                    }),
                },
            );

            // console.log("response: -___--___----____---_-----__",response);

            // return;
            // const data = await response.text();
            // console.log("response.status: -___--___----____---_-----__ For_Notification",response.status);
            const data = await response.json();



            // console.log("data: ",data);


            // console.log('response _____in authSlice: ', data);
            if (response.status === 200) {



                // return data;


                const temp_Notification_Response_Value:notification_Counter_Value_Response_Interface={

                    logger_ID: notification_Number_Payload,
                    value: data,
                };

                // console.log("temp_Notification_Response_Value: ",temp_Notification_Response_Value);

                return temp_Notification_Response_Value;



            } else {
                console.log("__data__: ",data);

                return thunkAPI.rejectWithValue(data);
            }
        } catch (error: any) {
            console.log('Error___', error.response.data);
            thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

// 13 notification number ends here



export const logout5 = createAsyncThunk(
    'auth/logout5',
    async (

        thunkAPI) => {
        try {

            await AsyncStorage.clear();


        } catch (error:any) {
            console.log('Error', error.response.data);

        }
    }
);


const conversionfactory =(interest:any) => {

    console.log("interest : ", typeof interest);

    console.log("interest: ",interest);


    // const stringifiedData= JSON.stringify(interest);
    const stringifiedData= interest.toString();
    // console.log("stringifiedData: ",stringifiedData);


    const interest_from_realm=(stringifiedData !== "")
        ?stringifiedData.split(',').map((oneInterestName:string, index2:number) => (
                `${oneInterestName}`
                // `${feedImageBaseURL}${oneImageName}`
            )
        )
        :([]);
    //["Acrobatics","Acting","Aerobics","Aeroplanes","Angel Investment","Animals","Animation","Art Collecting"]

// const conversionfactory =(string) => {

    // console.log("typeof string: ",typeof string);

    // console.log("JSON.stringify(): ",JSON.stringify(string));


    console.log("interest_from_realm: ",interest_from_realm);
    return interest_from_realm;
    // return ["AXG","RPG"];
    // return JSON.stringify(interest);// string[]
    // return string;

    /*
    feed_photos: (obj.feed_photos.length !== 0)
    // feed_photos: (obj.feed_photos !== "")
    ?obj.feed_photos.split(',').map((oneImageName:string, index2:number) => (
        `${oneImageName}`
            // `${feedImageBaseURL}${oneImageName}`
        )
    )
    :([]),
    */
};
// const




const updateLocalStorage= async (

    email:string,
    imageURL:string,
    name:string,
    phone:string,
    token:string,
    userID: string,
) => {

    await AsyncStorage.setItem ('user_id', userID);
    await AsyncStorage.setItem ('profilePhoto', imageURL);
    await AsyncStorage.setItem ('email', email);
    await AsyncStorage.setItem ('userName', name);


};

const ios_device_in_Redux2 = (
    state: any,
    action: PayloadAction<{is_Ios_Device: boolean}>
) => {
    const is_ios_Device: {is_Ios_Device: boolean} = action.payload;


    state.IOS_Device= is_ios_Device.is_Ios_Device;



};



const update_mobile_phone_number_2 = (state: any,
                                      action: PayloadAction<string>) => {


    const old_profile_data = state.loggerPerson;

    const new__phone = action.payload;

    old_profile_data.mobile_no = new__phone;

    state.loggerPerson= old_profile_data;


};

const update__Married_Status_2= (state: any,
                                 action: PayloadAction<string>) => {

    const old_profile_data = state.loggerPerson;

    const updated_Married__Status = action.payload;

    old_profile_data.marital_status = updated_Married__Status;
    // console.log("-at updated_gender_2: and $$updated_gender: ",updated_Married__Status);

    state.loggerPerson= old_profile_data;

};


const update_gender_2 = (state: any,
                         action: PayloadAction<string>) => {


    const old_profile_data = state.loggerPerson;

    const updated_gender = action.payload;

    old_profile_data.sex = updated_gender;
    console.log("-at updated_gender_2: and $$updated_gender: ",updated_gender);

    state.loggerPerson= old_profile_data;


};


const update_email__2 = (state: any,
                         action: PayloadAction<string>) => {


    const old_profile_data = state.loggerPerson;

    const new_email = action.payload;

    old_profile_data.email = new_email;

    state.loggerPerson= old_profile_data;


};



const update_country__2 =(state: any,
                          action: PayloadAction<string>) => {


    const old_profile_data = state.loggerPerson;

    const new_country = action.payload;

    old_profile_data.country = new_country;

    state.loggerPerson= old_profile_data;


};

const update_full_name__2 =(state: any,
                            action: PayloadAction<string>) => {

    console.log("at update_full_name__2");


    const old_profile_data = state.loggerPerson;

    const new_full_name = action.payload;

    old_profile_data.full_name = new_full_name;

    state.loggerPerson= old_profile_data;


};



const update_user_name__2 =(state: any,
                            action: PayloadAction<string>) => {


    const old_profile_data = state.loggerPerson;

    const new_user_name = action.payload;

    old_profile_data.user_name = new_user_name;

    state.loggerPerson= old_profile_data;


};



const update_Bio_2 = (state: any,
                      action: PayloadAction<string>) => {


    const old_profile_data = state.loggerPerson;

    const new_bio = action.payload;

    old_profile_data.bio = new_bio;

    state.loggerPerson= old_profile_data;


};



const update_logger_Birth_Date_2 = (state: any,
                                    action: PayloadAction<Date>) => {


    const old_profile_data = state.loggerPerson;

    const new_birth_date = action.payload;

    old_profile_data.birth_date = new_birth_date;

    state.loggerPerson= old_profile_data;


    /*

    // const temp__readFeedzData = state.readFeedzData;
    const temp__readFeedzData = state.feedzData;

    const oneDate_To_Filter: Date = action.payload;
    // ===new Date().toDateString()

    // console.log(" << oneDate_To_Filter >> : ", oneDate_To_Filter);
    // console.log(" <<new Date() >> ", new Date());





    // console.log(" << at else : >>", );


    // const allFeedz0 = allFeedz;

    // console.log( " << allFeedz0.length >> ",allFeedz0.length);
    // << oneDate_To_Filter >> :  2021-09-28T13:36:52.169Z
    // const oneDate_To_Filter= "2021-09-28T13:36:52.169Z";

    const someDate = new Date(oneDate_To_Filter);
    const current_Date =  (`0${someDate.getDate()}`).slice(-2); //d.getDate();
    const curr_month = (`0${someDate.getMonth() + 1}`).slice(-2); //Months are zero based  // ("0" + (this.getMonth() + 1)).slice(-2)
    const curr_year = someDate.getFullYear();

    // console.log(` RPG => ${curr_year}-${curr_month}-${current_Date}`);

    const newDateSelected=  `${curr_year}-${curr_month}-${current_Date}`;

    for (let step = 0; step < temp__readFeedzData.length; step++) {
        // console.log(temp__readFeedzData[step].datetime);
    }


    const RPG_Filtered = temp__readFeedzData.filter((oneItem:one_feedz_Data_interface) => oneItem.datetime === newDateSelected);



    // console.log(" << RPG_Filtered.length >> : ", RPG_Filtered.length);
    state.readFeedzData =RPG_Filtered;

    state.sizeOFTotalState_feedz= RPG_Filtered.length;
    state.endReachedState_feedz=true;

    */


};



export const invoke_Redux__To_Load__more__Up__Voters= (
    state: any,
    // cant' find suitable replacement.
)=>{

    console.log("at ___invoke_Redux__To_Load__more__Up__Voters");
    // console.log("state.end_Reached___follower__of__Logger", state.end_Reached___follower__of__Logger);
    // console.log("state.size_OF_Total___follower__of__Logger: ",state.size_OF_Total___follower__of__Logger);

    if (state.end_Reached___Up__Voters__of__Logger){

        return;
    }

    state.show_Loading__Up_Voters_of_Logger=true;

    const is__Read_Count_State_Increment_able_UP__Voters = (state.size_OF_Total___Up_Voters_of_Logger /
        ((state.read_Count_State_Up_Voters_of_Logger + 1) * up_Voters__of_Logger_Lazy_Loading_value)) > 1;


    // console.log("is__Read_Count_State_Increment_able_UP__Voters: ",is__Read_Count_State_Increment_able_UP__Voters);

    const incrementedTemp_ReadCountState= state.read_Count_State_Up_Voters_of_Logger;

    if (is__Read_Count_State_Increment_able_UP__Voters) {

        //console.log("at here_____ [is__Read_Count_State_Increment_able_UP__Voters]", is__Read_Count_State_Increment_able_UP__Voters);
        const newData = state.all_Up_Voters_of_Logger_data.slice(((incrementedTemp_ReadCountState) * up_Voters__of_Logger_Lazy_Loading_value),
            ((incrementedTemp_ReadCountState + 1) * up_Voters__of_Logger_Lazy_Loading_value));

        const tempReadCountState: number = (1 + state.read_Count_State_Up_Voters_of_Logger);

        state.all_Read_Up_Voters_of_Logger_data = state.all_Read_Up_Voters_of_Logger_data.concat(newData);
        state.read_Count_State_Up_Voters_of_Logger = tempReadCountState;
        state.show_Loading__Up_Voters_of_Logger = false;


    }
    else {

        // console.log("else");
        const data2 = state.all_Up_Voters_of_Logger_data.slice(((incrementedTemp_ReadCountState) * up_Voters__of_Logger_Lazy_Loading_value),
            state.size_OF_Total___Up_Voters_of_Logger+1);// +1 added on august_11_2021
        state.all_Read_Up_Voters_of_Logger_data = state.all_Read_Up_Voters_of_Logger_data.concat(data2);
        state.end_Reached___Up__Voters__of__Logger =true;
        // state.endReachedState = true;
        state.show_Loading__Up_Voters_of_Logger = false;


    }

};



// ## part 08, invoke load more 10 begins here---- for down voters---only



// ## part 08, invoke load more 10 ends here---- for down voters---only



const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {


        update_Date_OF_Birth_1: update_logger_Birth_Date_2,
        update_Bio_1: update_Bio_2,
        update_user_name__1: update_user_name__2,
        update_full_name__1: update_full_name__2,
        update_country__1: update_country__2,
        update_email__1: update_email__2,
        update_mobile__1: update_mobile_phone_number_2,
        update_gender_1: update_gender_2,
        update_Married__Status__for__Edit_Profile_1: update__Married_Status_2,

        ios_device_in_Redux:ios_device_in_Redux2,

        // up__voters __logger --begins --here---

        filter_All_By_Character_Selection__in__Up_Voters_of_Logger_Page: filter_All_By_Char_Up_Voters_of_Logger_Page_2,

        clear__UP_Voters_Of_Logger_Search_Text_Input:clear__UP_Voters_Of_Logger_FIltering_Text,

        new_filter_By_Full_Name_Amongst_UP_Voters_Of__Logger: up__Voter_Filter_By_Full_Name_String__2,

        invoke_auth_Slice_to_loadMore_Up__Voters: invoke_Redux__To_Load__more__Up__Voters,
        // up__voters __logger --ends --here


        // down___voters__disliker --of__of__logger_profile_extra--reducers--parts--begins here



// ## part 5 // down___voters__disliker --of__of__logger_profile_extra--reducers--parts--begins here

        filter_All__DisLikers__By_Character_Selection__in__DisLikers_Page: filter_All_By_Character_Dislikers_of_Logger_Page_2,

        clear___Search_Text_filter_All__DisLikers__By_Character_Selection__in__DisLikers_Page:clear__Dislikers_Of_Logger_FIltering_Text,

        new_filter_By_Full_Name_Amongst_Dislikers_Settings_List: Disliker_Filter_By_Full_Name_String__2,

        invoke_auth_Slice_to_load__More__DisLikers: invoke_Redux__To_Load__more__Dislikers,

// down___voters__disliker --of__of__logger_profile_extra--reducers--parts----Ends here
        // down___voters__disliker --of__of__logger_profile_extra--reducers--parts----Ends here

        populate_logger_offline_state_in_redux_for_offline_use:(
            state,
            action: PayloadAction<{offline:boolean}>,
        )=>{

            const userOffline:{offline:boolean} = action.payload;

            // console.log("userOffline: ",userOffline);

            state.isOffline = userOffline.offline;
        },

        check_Internet_State_Again:(
            state,
            action: PayloadAction<null>,
        )=>{

            // const userOffline:{offline:boolean} = action.payload;

            // console.log("userOffline: ",userOffline);

            NetInfo.fetch().then((state22:NetInfoState) => {
                console.log("Connection type  at [check_Internet_State_Again]:  ", state22.type);
                console.log("Is connected? at [check_Internet_State_Again]: ", state22.isConnected);

                if(state22.isConnected){
                    state.isOffline = false;

                }
                else{
                    state.isOffline = true;

                }
            });



            // state.isOffline = userOffline.offline;
        },






        logout10: (state) => {


            console.log("--rpg");
            // From here we can take action only at this "counter" state
            // But, as we have taken care of this particular "logout" action
            // in rootReducer, we can use it to CLEAR the complete Redux Store's state
        },




        // FOR LOGOUT
        clearState: (state) => {

            const returnedTarget = Object.assign(state, initailState0);
            return returnedTarget;
        },

        // WHEN YOU ARE ONLINE CLEAR EVERYTHING AS WE WILL ONLY NEED USERID TO GET USER INFORMATION. // added 11th December,2021...



    },
    extraReducers: (builder) => {







        builder.addCase(login_With_username_Password_Async.pending, (state) => {
            state.apiInovocatoinStatus = 'loading';
            // console.log("_____state.apiInovocatoinStatus = 'loading'");
        }).
            addCase(login_With_username_Password_Async.rejected, (state, action) => {
                console.log("(3)_____state.apiInovocatoinStatus = 'failed____'");
                state.apiInovocatoinStatus = "failed";
                state.isFetching = false;
                state.isSuccess= false;
                state.isError= true;
            }).
            addCase(login_With_username_Password_Async.fulfilled, (state, action) => {
                // console.log("(3)   idle____ [login_With_username_Password_Async ??");
                state.apiInovocatoinStatus = "idle";
                // console.log("_____state.apiInovocatoinStatus =  login_With_username_Password_Async 'fulfilled___idle'");



                // console.log("action.payload: ", action.payload); //email_not_verify //  {"message": "email_not_verify"}


                // Email not match.






                state.isFetching = false;
                state.isSuccess= true;
                state.isError= false;
                state.errorMessage= "";


                const temp_login_response= action.payload;

                if (temp_login_response!==undefined) {

                    const loginResponse: login__response__with_userName__password = temp_login_response;


                    // console.log("____loginResponse____:",loginResponse);




                    if(loginResponse.login_id){

                        const modified__login_With_UserName_Password: login__response__with_userName__password=

                            {
                                ...loginResponse,
                                login_id: Number(loginResponse.login_id),
                                id: Number(loginResponse.id),

                            };

                        state.userName_Password_Login_Response= modified__login_With_UserName_Password;//login__response__with_userName__password,

                        state.isComplete=true;

                    }

                    else{

                        console.log("loging might not be__________________Successful_____check__code____");
                    }




                }
            });



        // 11. added on may__05__22

        builder.addCase(un___Vote_bY_Logger_on_Settings_Page.pending, (state) => {
            state.apiInovocatoinStatus = 'loading';
            // console.log("_____state.apiInovocatoinStatus = 'loading'");
        }).
            addCase(un___Vote_bY_Logger_on_Settings_Page.rejected, (state,
                                                                    action) => {
                // [signupUser.rejected]: (state, { payload }) => {
                // console.log("failed____");
                console.log("_____state.apiInovocatoinStatus [up_Vote_on_Feedz] = 'failed____'");
                state.apiInovocatoinStatus = "failed";
                state.isFetching = false;
                state.isSuccess= false;
                state.isError= true;
                // state.errorMessage= action.payload; // will be ASSIGNED LATER....

            }).
            addCase(un___Vote_bY_Logger_on_Settings_Page.fulfilled, (state, action) => {
                // console.log("(3)   idle____ [update_user_notification_Async ??");
                state.apiInovocatoinStatus = "idle";
                // console.log("_____state.apiInovocatoinStatus  [up_Vote_on_Feedz] = 'fulfilled___idle'");

                state.isFetching = false;
                state.isSuccess= true;
                state.isError= false;
                state.errorMessage= '';

                // console.log("-------response___up_Vote_on_Feedz____", action.payload);

                const data_zx = action.payload;

                if(data_zx!==undefined){

                    //@ts-ignore
                    const data_zx2: customized__UN____Vote__BY_Logger__Response= data_zx;


                    // console.log("__data_zx__ --UP__VOTE___: ",data_zx2);

                    // return;
                    const {
                        user_id, // "user_id": "1",  // logger_ID or User__ID who is votting
                        vote_id,//"38",  // "vote_id": "35", // user_ID for whom someone is votting.
                        // type,
                        previous_Type,
                    } = data_zx2;


                    // user_vote_status

                    if (data_zx2.previous_Type==="up") {

                        const temp__Logger_Person__Data= state.loggerPerson;
                        temp__Logger_Person__Data.vote_status= "none";
                        temp__Logger_Person__Data.vote_up -=1;

                        // state.loggerPerson= temp__Logger_Person__Data;
                        // state.loggerPerson.vote_status==="none";
                        // state.loggerPerson.vote_up -=1;
                        // console.log("\n\n 222 < ", temp_read_posts);
                        return;


                    }

                    else if (data_zx2.previous_Type==="down") {

                        // console.log("__previous_Type__: ",previous_Type);

                        const temp__Logger_Person__Data= state.loggerPerson;
                        temp__Logger_Person__Data.vote_status= "none";
                        temp__Logger_Person__Data.vote_down -=1;

                    }

                    else{
                        console.log("__previous_Type__: ","else__");
                        return;
                    }

                }

                // state.creaet_feedz_reaction_response = action.payload;

            });


        // 11. ends here....___added on may__05__22




        // 12...// added on may__05__2022, logger like his own settings page

        builder.addCase(up__Vote_bY_Logger_on_Settings_Page.pending, (state) => {
            state.apiInovocatoinStatus = 'loading';
            // console.log("_____state.apiInovocatoinStatus = 'loading'");
        }).
            addCase(up__Vote_bY_Logger_on_Settings_Page.rejected, (state,
                                                                   action) => {
                // [signupUser.rejected]: (state, { payload }) => {
                // console.log("failed____");
                console.log("_____state.apiInovocatoinStatus [up_Vote_on_Feedz] = 'failed____'");
                state.apiInovocatoinStatus = "failed";
                state.isFetching = false;
                state.isSuccess= false;
                state.isError= true;
                // state.errorMessage= action.payload; // will be ASSIGNED LATER....

            }).
            addCase(up__Vote_bY_Logger_on_Settings_Page.fulfilled, (state, action) => {
                // console.log("(3)   idle____ [update_user_notification_Async ??");
                state.apiInovocatoinStatus = "idle";
                // console.log("_____state.apiInovocatoinStatus  [up_Vote_on_Feedz] = 'fulfilled___idle'");

                state.isFetching = false;
                state.isSuccess= true;
                state.isError= false;
                state.errorMessage= '';

                // console.log("-------response___up_Vote_on_Feedz____", action.payload);


                const data_zx = action.payload;





                if(data_zx!==undefined){

                    //@ts-ignore
                    const data_zx2: customized_up__Vote__BY_Logger__Response= data_zx;


                    // console.log("__data_zx__ --UP__VOTE___: ",data_zx2);

                    // return;
                    const {



                        user_id, // "user_id": "1",  // logger_ID or User__ID who is votting
                        vote_id,//"38",  // "vote_id": "35", // user_ID for whom someone is votting.
                        type,
                        previouse_Type,
                    } = data_zx2;

                    // console.log("primary_Index: ",primary_Index);
                    // console.log("previous_user_vote_status: ",previous_user_vote_status);
                    // console.log("up_vote: ",up_vote);
                    // console.log("down_vote: ",down_vote);
                    // console.log("type: ",type);




                    // user_vote_status

                    if(data_zx2.type==="up") {


                        const temp__Logger_Person__Data= state.loggerPerson;
                        temp__Logger_Person__Data.vote_status= "up";
                        temp__Logger_Person__Data.vote_up +=1;
                        temp__Logger_Person__Data.vote_down = (previouse_Type==="down") ?(temp__Logger_Person__Data.vote_down-1):temp__Logger_Person__Data.vote_down;


                        state.loggerPerson= temp__Logger_Person__Data;



                        // temp__Logger_Person__Data.vote_status="up";
                        // state.loggerPerson.vote_status= "up";
                        // state.loggerPerson.vote_up +=1;
                        // console.log("\n\n 222 < ", temp_read_posts);
                        return;


                    }

                    else if (data_zx2.type==="down") {


                        const temp__Logger_Person__Data= state.loggerPerson;
                        temp__Logger_Person__Data.vote_status= "down";
                        temp__Logger_Person__Data.vote_down +=1;
                        temp__Logger_Person__Data.vote_up = (previouse_Type==="up") ?(temp__Logger_Person__Data.vote_up-1):temp__Logger_Person__Data.vote_up;
                        // up__Vote_bY_Logger_on_Settings_Page

                        state.loggerPerson= temp__Logger_Person__Data;





                    }


                    else{


                        return;
                    }



                }



                // state.creaet_feedz_reaction_response = action.payload;

            });

        // added on may__05_22




        builder.addCase(get_User_Profile_With_UserID_Async.pending, (state) => {
            state.apiInovocatoinStatus = 'loading';
            // console.log("_____state.apiInovocatoinStatus = 'loading'");
        }).
            addCase(get_User_Profile_With_UserID_Async.rejected, (state, action) => {
                console.log("(3)_____state.apiInovocatoinStatus = 'failed____'");
                state.apiInovocatoinStatus = "failed";
                state.isFetching = false;
                state.isSuccess= false;
                state.isError= true;
            }).
            addCase(get_User_Profile_With_UserID_Async.fulfilled, (state, action) => {
                    // console.log("(3)   idle____ [login_With_username_Password_Async ??");
                    state.apiInovocatoinStatus = "idle";

                    state.isFetching = false;
                    state.isSuccess= true;
                    state.isError= false;
                    state.errorMessage= "";




                    const user_Profile_data_temp= action.payload;



                    if (user_Profile_data_temp!==undefined) {




                        let user_Profile_data : weXprez_Logger_User_Interface = user_Profile_data_temp;

                        // console.log("user__Profil__data__Before___ Modification: ",user_Profile_data);


                         user_Profile_data = {
                            ...user_Profile_data,

                            bio: (user_Profile_data.bio===null)
                                ?""
                                :user_Profile_data.bio,

                            country: (user_Profile_data.country===null)
                                ?""
                                :user_Profile_data.country,


                            sex: (user_Profile_data.sex===null)
                                ?""
                                :user_Profile_data.sex,

                            marital_status: (user_Profile_data.marital_status==="null")
                                ?""
                                :user_Profile_data.marital_status,

                            updated_at: (user_Profile_data.updated_at===null)
                                ?""
                                :user_Profile_data.updated_at,

                            birth_date: (user_Profile_data.birth_date===null)
                                // 2.// ?moment(new Date()).format('YYYY-MM-DD')
                                ? new Date()
                              :(user_Profile_data.birth_date.toString()==="0000-00-00") // updated on may_28 2022
                                ? new Date()


                              // 999
                                // DATE OF TODAY_ // TO MATCH THIS:  {(current_date_value_State.toDateString() === new Date().toDateString())
                                :new Date(user_Profile_data.birth_date), // required because it was saved to DB as String.

                            // UPDATED BIRHT DATE SHOULD BE CHECKED AGAIN.


                            id: Number(user_Profile_data.id),
                            login_id: Number(user_Profile_data.login_id),

                            verify_status:  Number(user_Profile_data.verify_status),

                            //added locally on april, 27
                            otp_verify: false,
                            email_verify: false,


                            // added on may_10;
                            status: Number(user_Profile_data.status)

                        };

                        state.loggerPerson = user_Profile_data;//login__response__with_userName__password,

                        // console.log("__user_Profile_data_2__ ",user_Profile_data_2);



                        state.isComplete=true;


                    }
                }
            );


        // get all likers of logger begins // added on may 05_2022:
        // 1

        builder.addCase(get_all_Likers_of_Logger_Profile.pending, (state) => {
            state.apiInovocatoinStatus = 'loading';
            // console.log("_____state.apiInovocatoinStatus = 'loading'");
        }).
            addCase(get_all_Likers_of_Logger_Profile.rejected, (
                state,
                action
            ) => {
                // [signupUser.rejected]: (state, { payload }) => {
                // console.log("failed____");
                console.log("_____state.apiInovocatoinStatus [get_all_Likers_of_Logger_Profile] = 'failed____'");
                state.apiInovocatoinStatus = "failed";
                state.isFetching = false;
                state.isSuccess= false;
                state.isError= true;
                // state.errorMessage= action.payload; // will be ASSIGNED LATER....

            }).
            addCase(get_all_Likers_of_Logger_Profile.fulfilled,
                (
                    state,
                    action
                ) => {
                    // console.log("(3)   idle____ [update_user_notification_Async ??");
                    state.apiInovocatoinStatus = "idle";
                    // console.log("_____state.apiInovocatoinStatus  [get_all_active_partners] = 'fulfilled___idle'");

                    state.isFetching = false;
                    state.isSuccess= true;
                    state.isError= false;
                    state.errorMessage= '';

                    // console.log("-------response___get_all_active_partners____", action.payload);





                    // const tempRespnose
                    if (action.payload===[]){


                        state.all_Up_Voters_of_Logger_data = [];
                        state.all_Read_Up_Voters_of_Logger_data = [];

                        state.show_Loading__Up_Voters_of_Logger = false;
                        state.size_OF_Total___Up_Voters_of_Logger= 0;

                    }
                    else {

                        console.log("____all ___up__Voters: ",action.payload);

                        const temp_up__Voters: one__up_Voter__data__interface[] = action.payload;

                        const modified_temp__Up__Voters = temp_up__Voters.map(
                            (
                                obj:one__up_Voter__data__interface,
                                index1: number,
                            ) => (
                                {
                                    ...obj,
                                    id: Number(obj.id),
                                    user_id: Number(obj.user_id),
                                    // added locally on may__05_2022
                                    is_following: 0,//obj.is_following,
                                    is_Blocked: 0,
                                }
                            )
                        );






                        console.log("__modified_temp__Up__Voters__:",modified_temp__Up__Voters);

                        state.show_Loading__Up_Voters_of_Logger = true;
                        state.size_OF_Total___Up_Voters_of_Logger = modified_temp__Up__Voters.length;

                        // console.log(" << modified_temp__Up__Voters: >> ", modified_temp__Up__Voters);


                        state.all_Up_Voters_of_Logger_data = modified_temp__Up__Voters;

                        if (modified_temp__Up__Voters.length > up_Voters__of_Logger_Lazy_Loading_value){
                            if (state.end_Reached___Up__Voters__of__Logger){

                                const last_active_partner_custome_Made = {
                                    ...modified_temp__Up__Voters[modified_temp__Up__Voters.length - 1],
                                    full_name: '----END----',

                                };

                                state.all_Read_Up_Voters_of_Logger_data = [
                                    ...modified_temp__Up__Voters,
                                    last_active_partner_custome_Made
                                ];
                                state.show_Loading__Up_Voters_of_Logger = false;
                            }

                            else {
                                const last_active_partner_custome_Made = {
                                    ...modified_temp__Up__Voters[modified_temp__Up__Voters.length - 1],
                                    full_name: '----END----',
                                };

                                const tempReadCountState_X= state.read_Count_State_Up_Voters_of_Logger;

                                const tempReadMessages3 = modified_temp__Up__Voters.slice(0,(tempReadCountState_X+1) *up_Voters__of_Logger_Lazy_Loading_value);





                                state.all_Read_Up_Voters_of_Logger_data = tempReadMessages3;
                                state.all_Up_Voters_of_Logger_data = modified_temp__Up__Voters.concat(last_active_partner_custome_Made);
                                state.read_Count_State_Up_Voters_of_Logger = tempReadCountState_X +1;

                                // console.log("tempReadCountState_X: " ,tempReadCountState_X);
                                state.show_Loading__Up_Voters_of_Logger = false;

                            }
                        }

                        else
                        {
                            const data2 = modified_temp__Up__Voters.slice(0, modified_temp__Up__Voters.length);

                            const last_active_partner_custome_Made = {
                                ...modified_temp__Up__Voters[modified_temp__Up__Voters.length - 1],
                                full_name: '----END----',
                            };

                            state.all_Read_Up_Voters_of_Logger_data = [...data2,last_active_partner_custome_Made];
                            state.all_Up_Voters_of_Logger_data = modified_temp__Up__Voters.concat(last_active_partner_custome_Made);
                            state.read_Count_State_Up_Voters_of_Logger += 1;
                            state.show_Loading__Up_Voters_of_Logger = false;
                        }
                    }
                }
            );
        // get all likers of loggers ENDS here // addded on may_05__2022



        // 13 added on may__07__2022__down__voters or --dislikers list begins ---here

        // part 2 builder add case dislikers  get all

        // part 2

        builder.addCase(get_all___Down_Voters__Dis_Likers_of_Logger_Profile.pending, (state) => {
            state.apiInovocatoinStatus = 'loading';
            // console.log("_____state.apiInovocatoinStatus = 'loading'");
        }).
            addCase(get_all___Down_Voters__Dis_Likers_of_Logger_Profile.rejected, (
                state,
                action
            ) => {
                // [signupUser.rejected]: (state, { payload }) => {
                // console.log("failed____");
                console.log("_____state.apiInovocatoinStatus [get_all___Down_Voters__Dis_Likers_of_Logger_Profile] = 'failed____'");
                state.apiInovocatoinStatus = "failed";
                state.isFetching = false;
                state.isSuccess= false;
                state.isError= true;
                // state.errorMessage= action.payload; // will be ASSIGNED LATER....

            }).
            addCase(get_all___Down_Voters__Dis_Likers_of_Logger_Profile.fulfilled,
                (
                    state,
                    action
                ) => {
                    // console.log("(3)   idle____ [update_user_notification_Async ??");
                    state.apiInovocatoinStatus = "idle";
                    // console.log("_____state.apiInovocatoinStatus  [get_all_active_partners] = 'fulfilled___idle'");

                    state.isFetching = false;
                    state.isSuccess= true;
                    state.isError= false;
                    state.errorMessage= '';

                    // console.log("-------response___get_all_active_partners____", action.payload);





                    // const tempRespnose
                    if (action.payload===[]){



                        state.all_Down_Voters_or_DIslikers__of_Logger_data = [];
                        state.all_Read_Dislikers_of_Logger_data = [];

                        state.show_Loading__Dislikers__of_Logger = false;
                        state.size_OF_Total___Dislikers_of_Logger= 0;

                    }
                    else {

                        console.log("____all ___up__Voters: ",action.payload);

                        const temp_up__Voters: one_Disliker__or__Down_Voter_Interface[] = action.payload;

                        const modified_temp__Up__Voters = temp_up__Voters.map(
                            (
                                obj:one_Disliker__or__Down_Voter_Interface,
                                index1: number,
                            ) => (
                                {
                                    ...obj,
                                    id: Number(obj.id),
                                    user_id: Number(obj.user_id),
                                    // added locally on may__05_2022
                                    // is_following: 0,//obj.is_following,
                                    // is_Blocked: 0,
                                }
                            )
                        );






                        console.log("__modified_temp__Up__Voters__:",modified_temp__Up__Voters);

                        state.show_Loading__Dislikers__of_Logger = true;
                        state.size_OF_Total___Dislikers_of_Logger = modified_temp__Up__Voters.length;

                        // console.log(" << modified_temp__Up__Voters: >> ", modified_temp__Up__Voters);


                        state.all_Down_Voters_or_DIslikers__of_Logger_data = modified_temp__Up__Voters;

                        if (modified_temp__Up__Voters.length > down_Voters__or__Dislikers__of_Logger_Profile__Lazy_Loading_value){
                            if (state.end_Reached__Dislikers__of__Logger){

                                const last_active_partner_custome_Made = {
                                    ...modified_temp__Up__Voters[modified_temp__Up__Voters.length - 1],
                                    full_name: '----END----',

                                };

                                state.all_Read_Dislikers_of_Logger_data = [
                                    ...modified_temp__Up__Voters,
                                    last_active_partner_custome_Made
                                ];
                                state.show_Loading__Dislikers__of_Logger = false;
                            }

                            else {
                                const last_active_partner_custome_Made = {
                                    ...modified_temp__Up__Voters[modified_temp__Up__Voters.length - 1],
                                    full_name: '----END----',
                                };

                                const tempReadCountState_X= state.read_Count_State_DisLikers_of_Logger;

                                const tempReadMessages3 = modified_temp__Up__Voters.slice(0,(tempReadCountState_X+1) *down_Voters__or__Dislikers__of_Logger_Profile__Lazy_Loading_value);





                                state.all_Read_Dislikers_of_Logger_data = tempReadMessages3;
                                state.all_Down_Voters_or_DIslikers__of_Logger_data = modified_temp__Up__Voters.concat(last_active_partner_custome_Made);
                                state.read_Count_State_DisLikers_of_Logger = tempReadCountState_X +1;

                                // console.log("tempReadCountState_X: " ,tempReadCountState_X);
                                state.show_Loading__Dislikers__of_Logger = false;

                            }
                        }

                        else
                        {
                            const data2 = modified_temp__Up__Voters.slice(0, modified_temp__Up__Voters.length);

                            const last_active_partner_custome_Made = {
                                ...modified_temp__Up__Voters[modified_temp__Up__Voters.length - 1],
                                full_name: '----END----',
                            };

                            state.all_Read_Dislikers_of_Logger_data = [...data2,last_active_partner_custome_Made];
                            state.all_Down_Voters_or_DIslikers__of_Logger_data = modified_temp__Up__Voters.concat(last_active_partner_custome_Made);
                            state.read_Count_State_DisLikers_of_Logger += 1;
                            state.show_Loading__Dislikers__of_Logger = false;
                        }
                    }
                }
            );

        // 13 ends here disliker list


        // 13 or 14 notification number builder add case---begins ----____here
        // 13 or 14 notification number builder add case
        builder.addCase(check_Notification_invocation_begins_Here.pending, (state) => {
            state.apiInovocatoinStatus = 'loading';
            console.log("_____state.apiInovocatoinStatus = 'loading'");
        }).
            addCase(check_Notification_invocation_begins_Here.rejected, (
                state,
                action
            ) => {

                console.log("_____state.apiInovocatoinStatus [check_Notification_invocation_begins_Here] = 'failed____'");
                state.apiInovocatoinStatus = "failed";
                state.isFetching = false;
                state.isSuccess= false;
                state.isError= true;
                // state.errorMessage= action.payload; // will be ASSIGNED LATER....

            }).
            addCase(check_Notification_invocation_begins_Here.fulfilled,
                (
                    state,
                    action
                ) => {
                    // console.log("(3)   idle____ [update_user_notification_Async ??");
                    state.apiInovocatoinStatus = "idle";
                    // console.log("_____state.apiInovocatoinStatus  [get_all_active_partners] = 'fulfilled___idle'");

                    state.isFetching = false;
                    state.isSuccess= true;
                    state.isError= false;
                    state.errorMessage= '';

                    // console.log("-------response___get_all_active_partners____", action.payload);



                    // check_Notification_invocation_begins_Here
                    // 999

                    const temp_Notification_Count__Response_Value= action.payload;

                    if (temp_Notification_Count__Response_Value!==undefined) {



                        // console.log("temp_Notification_Count__Response_Value: ",temp_Notification_Count__Response_Value);

                        const notification_Count_Response_by_Logger_ID: notification_Counter_Value_Response_Interface = temp_Notification_Count__Response_Value;


                        // console.log("____notification_Count_Response_by_Logger_ID____:",notification_Count_Response_by_Logger_ID);




                        if(notification_Count_Response_by_Logger_ID.value){



                            state.notification_Count_Response_And_Logger_ID= notification_Count_Response_by_Logger_ID;


                        }

                        else{

                            console.log("loging might not be__________________Successful_____check__code____");
                        }






                    }






                }
            );

        // 13 notification number build er add case

        // 13 or 14 notification number build er add case--ends here-----___






        // update_password_async
    }

    /*
    extraReducers: (builder) => {
        builder.addMatcher(
            api.endpoints.login.matchFulfilled,
            (state, { payload }) => {
                state.token = payload.token
                state.user = payload.user
            }
        )
    },*/
});





// password_Update_response



export const {
    clearState,
    logout10,

    populate_logger_offline_state_in_redux_for_offline_use,
    check_Internet_State_Again,

    // save_settings_data_to_realm,
    // populate_Settings_Data__From_realm,
    update_Date_OF_Birth_1,
    update_Bio_1,
    update_user_name__1,
    update_full_name__1,
    update_country__1,
    update_email__1,
    update_mobile__1,
    update_gender_1,
    update_Married__Status__for__Edit_Profile_1,
    ios_device_in_Redux,


    //  Likers of Loggers__ may__06
    // for filter by character in Likers of Loggers__
    filter_All_By_Character_Selection__in__Up_Voters_of_Logger_Page,
    clear__UP_Voters_Of_Logger_Search_Text_Input,
    new_filter_By_Full_Name_Amongst_UP_Voters_Of__Logger,
    invoke_auth_Slice_to_loadMore_Up__Voters,
    //  Likers of Loggers__
    // ends ----





    // disliker of logger profile actions --begins-- here

    // 04.

    // disliker of logger profile actions --begins-- here

    filter_All__DisLikers__By_Character_Selection__in__DisLikers_Page,
    clear___Search_Text_filter_All__DisLikers__By_Character_Selection__in__DisLikers_Page,
    new_filter_By_Full_Name_Amongst_Dislikers_Settings_List,
    invoke_auth_Slice_to_load__More__DisLikers,

// disliker of logger profile actions --ends-- here
    // disliker of logger profile actions --ends-- here




} = authSlice.actions;



export const select_logger_person_data = (state: RootState) => state.authReducer;

export const select_logger_person_data2 = (state: RootState) => state.authReducer.loggerPerson;
// IN EDIT PROFILE PAGE, AND OTERH PAGES. .__MARCH_22_2022

export const select_auth_store_data = (state: RootState) => state.authReducer.localStorage;

// export const select_login_data = (state: RootState) => state.authReducer.email_password_login_response;




export const select_user_Name__password_login_response = (state: RootState) => state.authReducer.userName_Password_Login_Response;
// FROM IDENTITY COMPONENTS.__march_22_2022

export const select_forget_password_data = (state: RootState) => state.authReducer.forget_password_email_response;

export const select_password_update_response = (state: RootState) => state.authReducer.password_Update_response;


export const select_offlineStatus = (state: RootState) => state.authReducer.isOffline;

export const select_is_ios_device = (state: RootState) => state.authReducer.IOS_Device;

// export const select_password_update_response = (state: RootState) => state.authReducer.password_Update_response;



// added on may__05_2022 ----- up_voters_of_Logger
export const select_All_UP_Voters_data = (state: RootState) => state.authReducer.all_Up_Voters_of_Logger_data;
export const select_Read_Up__Voters_data = (state: RootState) => state.authReducer.all_Read_Up_Voters_of_Logger_data;
export const select_Show_Loading__Up__Voters__of__Logger = (state: RootState) => state.authReducer.show_Loading__Up_Voters_of_Logger;
export const select_End_Reached_State__UP__Voters__of__Logger = (state: RootState) => state.authReducer.end_Reached___Up__Voters__of__Logger;
export const select_Exported_Total_size__UP__Voters_Of__Logger = (state:RootState) => state.authReducer.size_OF_Total___Up_Voters_of_Logger;

export const select_All__UP_Voters_Search_String_Value_State= (state:RootState) => state.authReducer.all__up_Voters_Search__String_Value_State;

// added on may_05_2022 // ends ---- up_voters_of_Logger



// dislikers selction begins here

// added on may__07_2022 ----- DisLikers_of_Logger--begins ---here
export const select_All_DisLikers_data = (state: RootState) => state.authReducer.all_Down_Voters_or_DIslikers__of_Logger_data;
export const select_Read_DisLikers_data = (state: RootState) => state.authReducer.all_Read_Dislikers_of_Logger_data;
export const select_Show_Loading__DisLikers__of__Logger = (state: RootState) => state.authReducer.show_Loading__Dislikers__of_Logger;

export const select_End_Reached_State__DisLikers__of__Logger = (state: RootState) => state.authReducer.end_Reached__Dislikers__of__Logger;
export const select_Exported_Total_size__DisLikers_Of__Logger = (state:RootState) => state.authReducer.size_OF_Total___Dislikers_of_Logger;

export const select_All__DisLikers_Search_String_Value_State= (state:RootState) => state.authReducer.all__Dislikers_Search__String_Value_State;


// added on may_07_2022 // ends ---- up_voters_of_Logger

// added on may_25

export const select_Notification_Count_Response_And_Logger_ID= (state:RootState) => state.authReducer.notification_Count_Response_And_Logger_ID;
// dislikers selction ends here

export default authSlice.reducer;
