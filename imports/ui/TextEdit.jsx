import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import classnames from 'classnames';
// Texteditor component - represents a texteditor that the user can use for
//notetaking

export default class TextEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  deleteThisNote() {
    Meteor.call('notes.remove', this.props.TextEdit._id);
  }
  /*handleSubmit(event) {
    alert('A note was submitted: ' + this.state.value);
    event.preventDefault();
  }*/


  /*render() {
    return (
      //<div className="textEdit">
        <form onSubmit={this.handleSubmit}>
          <textarea name="message" rows="10" cols="30"
            value={this.state.value}
            onChange={this.handleChange}>The cat was playing in the garden.</textarea>
          <input type="submit" value="Submit"/>
        </form>
    //  </div>
    );
  }
}*/
}
TextEdit.propTypes = {
    tasks: PropTypes.array.isRequired,
    incompleteCount: PropTypes.number.isRequired,
};
