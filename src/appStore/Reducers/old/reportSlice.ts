import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
// import {feedz_response} from "./feedzSlice";
// import {RootState} from "../app/store";
// import {baseInterface} from "./baseInterface";
import {RootState} from "../../app/store";
import {baseInterface} from "../baseInterface";


export interface report_post_payload_interface{


    reporter_id: string,
    post_id: number,//string, updated feb_16_2022
    cause: string,
    report_type: number,
}

export interface report_State_interface extends baseInterface{

    report_post_response: {
        message:string,
    }

}

const initialState: report_State_interface = {

    apiInovocatoinStatus: '',
    isFetching: true,
    isSuccess: false,
    isError: false,
    errorMessage: '',

    isComplete: false,

    report_post_response:{
        message: '',
    }
};






// ----1
export const report_post_async = createAsyncThunk(
    'report/user',
    async (

        report_post_data:
            report_post_payload_interface,
        // userID:string


        /*{ email, password }*/
        thunkAPI) => {


        try {
            const response = await fetch(

                'https://tripzchat.com/api_dev/api/user/reportApi',
                {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },


                    body: JSON.stringify({

                        // report_post_data
                        reporter_id: report_post_data.reporter_id,
                        post_id: report_post_data.post_id,
                        cause: report_post_data.cause,
                        report_type: report_post_data.report_type,
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
    }
);






const reportSlice = createSlice({
    name: 'report',
    initialState,
    reducers: {


    },
    extraReducers: (builder) => {




        // 1
        builder.addCase(report_post_async.pending, (state) => {
            state.apiInovocatoinStatus = 'loading';

        }).
        addCase(report_post_async.rejected, (state, action) => {

            console.log("_____state.apiInovocatoinStatus report_post_async = 'failed____'");
            state.apiInovocatoinStatus = "failed";
            state.isFetching = false;
            state.isSuccess= false;
            state.isError= true;
            // state.errorMessage= action.payload; // will be ASSIGNED LATER....

        }).
        addCase(report_post_async.fulfilled, (state, action) => {

            state.apiInovocatoinStatus = "idle";


            state.isFetching = false;
            state.isSuccess= true;
            state.isError= false;
            state.errorMessage= '';

            console.log("action.payload.message [ for report post] ", action.payload);
            state.report_post_response = action.payload;


            return;
        });


    }
});

export const report_slice_response = (state: RootState) => state.reportReducer;

export default reportSlice.reducer;
