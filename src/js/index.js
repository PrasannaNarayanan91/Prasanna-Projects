import React, {Component} from "react";
import homeImge from '../images/header.jpeg'
import Dropdown from './Dropdown';
import Body from './bodycontainer';
class Index extends Component {
  constructor(props){
    super(props);
      this.state = {
        open2 : false,
        subMenu1: ['option1', 'option2'],
        subMenu2: ['submenu2Option1', 'submenu2Option2', 'submenu2Option3']
      };
      
  }

  handClick2(){
    this.setState({
        open2 : !this.state.open2,
    })
  }
  componentDidMount() {

  }
  render() {
  return <div>
        <header className="header">
          <p className= "header-text">  Practise site for React </p>
        </header>
          <div className="menu-bar">
              <Dropdown menuItem= "nav1" subMenu={this.state.subMenu1}/>
              <Dropdown menuItem="navigationlink" subMenu= {this.state.subMenu2}/>
          </div>
          <Body />
        </div>
    }
};

export default Index;
