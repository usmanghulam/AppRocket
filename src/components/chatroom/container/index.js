import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBar from "../components/TopBar/searchbar";
import TopRight from '../components/TopBar/rightbar';
import SideBar from '../components/Session/sidebar';
import MainBar from '../components/Session/mainBar';

class index extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-4">
              <SearchBar/>
            </div>
            <div className="col-8">
              <TopRight/>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <SideBar/>
            </div>
            <div className="col-8">
              <MainBar/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStatetoProps = state => (
  {
    ...state,
  }
)

export default connect(mapStatetoProps,{})(index);