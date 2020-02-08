import axios from 'axios';
import * as vari from '../constants';

// Sign Up USers
export const submitSignUp = (values,setSubmiting,props) => {
    axios.post("/signUp",{values})
    .then(res => {
    if (res && res.data && res.data.user) {
			setSubmiting(false);
      props.history.push('/login');
    }
    }).catch(err => {
      console.error(err)
      setSubmiting(false)
      alert("something went wrong or User Already Exist")
    })
}

// Login User

export const submitLogin = (values,setSubmiting,props) => {
	axios.post("/login",{values})
	.then(res => {
  if (res && res.data && res.data.email && res.data.password) {
    setSubmiting(false)
    let setUser = JSON.stringify(res.data);
    localStorage.setItem("AppRocket",setUser);
    props.history.push('/home')
  }else {
    setSubmiting(false)
    alert("Something went wrong or Email not Exist")
  }
	}).catch(err => {
    console.error(err)
    setSubmiting(false)
    alert("Something went wrong or Email not Exist")
	})
}