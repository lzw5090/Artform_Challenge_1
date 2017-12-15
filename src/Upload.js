import React, { Component } from 'react';
import store, { changePhoto } from './store';
import { Button, Modal } from 'semantic-ui-react';
import Dropzone from 'react-dropzone';

class Upload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageUrl: this.props.imageUrl,
            modalOpen: false,
        };
    }
    onDrop = (acceptedFiles) => {
        this.setState({
            imageUrl: acceptedFiles[0].preview
        });
    }
    handleOpen = () => this.setState({ modalOpen: true })
    handleClose = () => this.setState({ modalOpen: false })
    handleSubmit = () => {
        const preview = this.state.imageUrl 
        store.dispatch(changePhoto(preview));
        this.setState({ modalOpen: false });
    }
    render() {
    const { imageUrl, modalOpen } = this.state;
    return (
        <Modal trigger={<Button onClick={this.handleOpen}>Change</Button>} open={modalOpen} basic size='small'>
        <p>Drop or click to select images to upload.</p>
            <Dropzone
                onDrop={(file) => this.onDrop(file)}> 
                <img src={imageUrl} alt='' height="100%" width="100%"/>
            </Dropzone>
            <Button primary type="save" onClick={this.handleSubmit}>Save</Button>
            <Button onClick={this.handleClose}>Cancel</Button>
        </Modal>
    );
  }
}

export default Upload;   
