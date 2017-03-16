import React, { Component, PropTypes } from 'react';

// Texteditor component - represents a texteditor that the user can use for
//notetaking

export default class TextEdit extends Component {
  constructor(props) {
    super(props);
    var notetexttemp = this.props.temptext;
    this.state = {value: notetexttemp, tempnotetext: this.props.temptext};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.enterSubmit = this.enterSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    Meteor.call('notes.update', this.props.noteidentity, this.state.value);
  }
  

  enterSubmit(e) {
    e = e || event;
    if (e.keyCode === 13 && !e.ctrlKey) {
      console.log("hi");
      Meteor.call('notes.update', this.props.noteidentity, this.state.value);
    }
 
  }

  render() {
    return (
      //<div className="textEdit">
          <textarea id="noteEditor" name="message" rows="10" cols="30"
            value={this.state.value}
            onChange={this.handleChange} 
	    onKeyUp={this.enterSubmit }></textarea>
    //  </div>
    );
  }
}
