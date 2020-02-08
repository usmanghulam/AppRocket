import React, { Fragment } from 'react';
import { Formik } from 'formik';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { submitSignUp } from '../../Redux/actions'

const SignUp = props => {
	return (
		<Fragment>
			<div className="container mt-5 pt-5" style={{width:"40%"}}>
				<h3 className="text-center mb-5 text-primary">Sign Up</h3>
			<Formik
      initialValues={{ email: '', password: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
					errors.email = 'Email is required'
				}
				else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        props.dispatch(submitSignUp(values,setSubmitting,props))
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
					<div className="form-group">
					<label htmlFor="exampleInputEmail1">Email address</label>
          <input
						className="form-control"
						placeholder="abc@abc.com"
            type="email"
						name="email"
						id="exampleInputEmail1"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && <span className="text-danger">{errors.email}</span>}
					</div>
					<div className="form-group">
					<label htmlFor="exampleInputPass1">Password</label>
          <input
						className="form-control"
            type="password"
						name="password"
						id="exampleInputPass1"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
					{errors.password && touched.password && <span className="text-danger">{errors.password}</span>}
          {errors.password && touched.password && <span className="text-danger">{errors.password}</span>}
					</div>
          <button className={`btn ${isSubmitting ? `btn-success` : `btn-primary`}`} type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    	</Formik>
			</div> 
		</Fragment>
	);
};

const mapStatetoProps = state => {
  return {
    ...state,
  }
}

export default withRouter(connect(mapStatetoProps,{submitSignUp})(SignUp));