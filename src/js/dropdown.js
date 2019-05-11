import React, {Component} from "react";
class Dropdown extends Component {
  constructor(props){
    super(props);
    this.state= {
      open : false
    }
    this.handleLinkClick = this.handleLinkClick.bind(this)
  }
  handleLinkClick(){
    this.setState({
        open : !this.state.open,
    })
  }
  render(){
  return <div className="container">
    <a className="button menu-bar-item" onClick={this.handleLinkClick}> {this.props.menuItem} </a>
        <div className="dropdown">
        {this.state.open && this.props.subMenu.length > 0 &&
        <ul>
          {this.props.subMenu.map((item, i) =>{
            return <li key ={i}>{item}</li>
          })}
        </ul>
      }
        </div>
  </div>
  }
}

export default Dropdown;
