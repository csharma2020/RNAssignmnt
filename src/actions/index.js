import {FETCH_AST,AST_FAILURE,AST_SUCCESS,AST_RESET} from './ActionTypes';

export const searchAstAction=(astID)=>{
    return{
        type:FETCH_AST,
        payload:astID
    }
}