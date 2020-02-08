import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const main = () => {
    return (
        <div className="" style={{width:"150px", margin:'200px auto'}}>
            <Link to="/signUp" className="btn btn-dark d-block">SignUp</Link>
            <Link to="/login" className="btn btn-dark mt-5 d-block">Login</Link>
        </div>
    );
};

export default withRouter(main);