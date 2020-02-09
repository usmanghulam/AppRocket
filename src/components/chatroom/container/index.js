import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBar from "../components/TopBar/searchbar";
import TopRight from '../components/TopBar/rightbar';
import SideBar from '../components/Session/sidebar';
import MainBar from '../components/Session/mainBar';
import axios from 'axios';

class index extends Component {
  state = {
    search: [],
    contacts: [],
    chat: '',
    id: null,
    msg: []
  }

  componentDidMount(){
    this.getAllContacts()
  }

  getAllContacts = () => {
    let getID = localStorage.getItem("AppRocket");
    let parseID = JSON.parse(getID);
    if (parseID && parseID._id && parseID.email) {
      let _id = parseID._id;
      axios.post('/users',{_id})
     .then(res => res && res.data ? this.setState({contacts:res.data}): null)
    }
  }

  onSearch = e => {
    let search = e.target.value;
    axios.post('/search',{search}).then(res => res && res.data ? this.setState({search:res.data}): null)
  }

  onInputBlur = () => this.setState({searchResult:[],search:[]})

  onUserClick = _id => {
    this.setState({id:_id})
    let getID = localStorage.getItem("AppRocket");
    let parseID = JSON.parse(getID);
    let sender = parseID && parseID._id ? parseID._id : '';
    axios.post('/users/find',{sender,receiver:_id})
    .then(res => this.setState({msg:res.data}))
    .catch(err => alert("Something went Wrong"))
  }

  onChatText = e => {
    let value = e.target.value;
    this.setState({ chat: value})
  }
  onChatTextSubmit = e => {
    if (e.keyCode === 13 || e.which === 13) {
      let msg = this.state.chat;
      let getID = localStorage.getItem("AppRocket");
      let parseID = JSON.parse(getID);
      let sender = parseID && parseID._id ? parseID._id : '';
      let receiver = this.state.id;
      if (msg && sender && receiver) {
        axios.post("/users/submit",{msg,sender,receiver})
        .then(res => {
          this.setState({msg:[...this.state.msg,res.data]}, () => this.setState({chat:''}))
        })
        .catch(err => alert("Something went Wrong",err))
      }else alert("Something went Wrong")
    }
  }
  render() {
    return (
      <div>
        <div className="container-fluid" style={{height:"100vh"}}>
          <div className="row">
            <div className="col-4 border border-left-0 border-top-0" style={{height:"20vh"}}>
              <SearchBar
              onSearch={this.onSearch}
              searchResult={this.state.search}
              onInputBlur={this.onInputBlur}
              />
            </div>
            <div className="col-8 border border-left-0 border-right-0 border-top-0" style={{height:"20vh"}}>
              <TopRight
              length={this.state.contacts.length}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-4 border border-left-0 border-bottom-0 border-top-0" style={{height:"80vh"}}>
              <SideBar
              users={this.state.contacts}
              onUserClick={this.onUserClick}
              />
            </div>
            <div className="col-8" style={{height:"80vh"}}>
              <MainBar
              onChatText={this.onChatText}
              onChatTextSubmit={this.onChatTextSubmit}
              value={this.state.chat}
              chat={this.state.msg}
              show={this.state.id}
              />
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