import React, { Component } from 'react';
import store, { changeInfo } from './store';
import {Button, Form, Input, Modal} from 'semantic-ui-react';

class EditForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      firstName: this.props.firstName,
      lastName: this.props.lastName,
      about: this.props.about,
    }

  }
  handleChangeFirstName = (evt, data) => {
    this.setState({ firstName: data.value })
  }
  handleChangeLastName = (evt, data) => {
    this.setState({ lastName: data.value })
  }
  handleChangeabout = (evt, data) => {
    this.setState({ about: data.value })
  }
  handleOpen = () => this.setState({ modalOpen: true })
  handleSubmit = (evt, data) => {
    store.dispatch(changeInfo(data.firstName, data.lastName, data.about));
    this.setState({ modalOpen: false });
  }
  render() {
    const { firstName, lastName, about, modalOpen } = this.state;
    return (
      <Modal 
        trigger={<Button onClick={this.handleOpen}>Edit</Button>}
        open={modalOpen}
        basic
        size='small'>
        <Form onSubmit={(evt) => this.handleSubmit(evt, this.state)} inverted>
          <Form.Field  control={Input} label='First Name' value={firstName} onChange={this.handleChangeFirstName} />
          <Form.Field   control={Input} label='Last Name' value={lastName} onChange={this.handleChangeLastName} />
          <Form.TextArea label='About' placeholder='Tell us more about you...' value={about} onChange={this.handleChangeabout}/>
          <br />
          <Form.Field>
            <Button primary type="save" >Save</Button>
          </Form.Field>
        </Form>
      </Modal>
    );
  }
}

export default EditForm;
