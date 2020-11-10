import { GET_EXPERIENCE} from '../constants/ActionTypes';
// import axios from 'axios';

export const searchInput = (text) => {
    return {
        type: GET_EXPERIENCE,
        payload: text
    }
}

// export const fetchCountries = () => {
//     return (dispatch) => {
//         dispatch({ type: LOADING_FETCH_COUNTRY, payload: true })
//         setTimeout(() => {
//             axios.get("https://restcountries.eu/rest/v2/all")
//                 .then(response => {
//                     dispatch({
//                         type: FETCH_COUNTRY,
//                         payload: response.data,

//                     });
//                     dispatch({
//                         type: LOADING_FETCH_COUNTRY,
//                         payload: false
//                     })
//                 })
//                 .catch(error => console.log({ error }))
//         }, 1000);
//     }
// }