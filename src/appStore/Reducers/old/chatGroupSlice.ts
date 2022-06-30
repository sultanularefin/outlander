export interface one_User_Info_Interface {
    // _id:{
    //     $oid:string,
    // },
    user_id: string,
    user_name: string,
    profile_image: string
    selected_For_Tagging: boolean,// ADDED ON MARCH_1ST
}

export interface group_info_interface{

    group_id: string;
    group_name: string;
    short_name: string;
}
