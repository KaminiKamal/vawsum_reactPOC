import React, { Component } from 'react';
import NavBar from "./components/NavBar.jsx";
import Loader from "./components/Loader.jsx";
import { FETCHURL } from "./constants/config.jsx";
import { connect } from 'react-redux';
import { storeFeedList } from "./actions/index.js";
import './App.css';

class FeedList extends Component {
  constructor(props)
  {
    super(props);
    this.state =
    {
      items: [],
      lang: "en",
      loader: false
    }
  }

  sentRequest = () => {
    this.setState({loader: true});
    let data = [];
    this.props.storeFeedList(data);
    let res = this.menu.value;
    let arr = this.state.inputparameter.split(/[ ,]+/);
    let searchString = arr.join("+");
    searchString = searchString.toString();
    let url = FETCHURL+searchString+"&lang="+res+"&format=json";

    fetch(url)
    .then(res => res.json())
    .then(response => {
      console.log("response", response.data);
      if(response.data!==undefined){
        this.setState({loader: false});
        this.setState({items: response.data});console.log("stata", this.state.items)
        this.props.storeFeedList(this.state.items);
      }
      else{
        this.setState({loader: null});
        this.setState({items: response.data});console.log("stata", this.state.items)
        this.props.storeFeedList([]);
      }
    })

  }

  render() {console.log("this.props.items", this.props.items);
  if(this.props.items===undefined && this.state.loader===null){
    var data = "No result found!";
  }
  if(this.props.items===undefined && this.state.loader===true)
  {
    var data = <Loader />
  }
  if(this.props.items!==undefined)
  {
    var data = this.props.items.map((e, i) => {var t=e.relevance;t=t.toString()+"%";console.log("el", t);
        return <li className="collection-item" key={i}>{e.title}<div className="progress">
                  <div className="determinate" style={{width: t}}></div>
                  </div>
                </li>

      })
  }

    return (
        <div>
        <NavBar />
          <div className="row">
          <div className="input-field col s3">
            <select ref = {(input)=> this.menu = input} >
              <option value="en">English</option>
              <option value="de">German</option>
              <option value="fi">Finnish</option>
              <option value="sv">Swedish</option>
              <option value="es">Spanish</option>
              <option value="zh">Chinese</option>
              <option value="ru">Russian</option>
              <option value="et">Estonian</option>
            </select>
            <label>Select Language</label>
          </div>

            <div className="input-field col s9">
              <input id="text" type="text" className="validate" onChange={(event) => this.setState({inputparameter: event.target.value})} />
              <label>Please enter url or free text</label>
            </div>

            <button style={{marginLeft: "10px"}} className="waves-effect waves-light btn" name="action" onClick={this.sentRequest}>
              <i className="material-icons right">send</i>
            </button>

          </div>

          <div className="row">
          <div className="col s6">
            <ul className="collection with-header">
            <li className="collection-header"><h6>Results</h6></li>
              {data}
            </ul>
        </div>
        </div>
        </div>
    );
  }
}
function mapStateToProps(state)
{
 const { items } = state;console.log("inside mapstateto props", state, items);
  return{
	items
  }
}



export default connect(mapStateToProps, { storeFeedList })(FeedList);
//export default FeedList;
