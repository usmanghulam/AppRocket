import axios from 'axios';
import * as vari from '../constants';


export const submitSignUp = (values,setSubmiting,props) => {
    let paresedValues = JSON.stringify(values);
    localStorage.setItem("appRocket",paresedValues)
    axios.post("/signUp",{values})
    .then(res => {
        if(res) setSubmiting(false)
    }).catch(err => {
        console.error(err)
        setSubmiting(false)
    })
}