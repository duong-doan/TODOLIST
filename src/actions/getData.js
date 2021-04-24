import * as TypeActions from '../constants/TypeActions';

export const GetData = (data) => {
    return {
        type: TypeActions.GET_DATA,
        payload: data,
    }
}