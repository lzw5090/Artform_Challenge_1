import React, { Component } from 'react';
import store from './store';
import Upload from './Upload';
import EditForm from './EditForm';
import { Grid, Container } from 'semantic-ui-react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: store.getState().firstName,
      lastName: store.getState().lastName,
      about: store.getState().about,
      imageUrl: store.getState().imageUrl,
    };
  }
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState());
    });
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
    const { firstName, lastName, about, imageUrl } = this.state;
    return (
      <Container fluid style={{ padding: '3em 3em' }}>
        <Grid columns={2} verticalAlign="middle">
          <Grid.Column>
            <img src={imageUrl} alt='' height="50%" width="50%" />
            <Upload imageUrl={imageUrl}/>
          </Grid.Column>
          <Grid.Column>
            <h1 style={{color:'rgb(101, 66, 117)'}}>{firstName} {lastName}</h1>
            <p>{about}</p>
            <EditForm firstName={firstName} lastName={lastName} about={about}/>
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

export default App;
