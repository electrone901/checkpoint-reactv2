import React from 'react';
import PetList from './PetList';
import axios from 'axios';

// We'll render these sample pets for now. Later, we'll instead fetch the list
// of pets from the server! We won't need samplePets after that.
import samplePets from '../petdata';

class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pets: null,
      loading: false,
      error500: false
    }
  }

  async componentDidMount() {
    try {
      this.setState({ loading: true })
      const response = await axios.get('/api/pets')
      console.log("response", response)
      const data = response.data
      this.setState({ pets: data, loading: false })
    } catch (error) {
      if (error.response.status === 500) {
        this.setState({ error500: true })
      }
    }
  }


  render() {
    return (
      <>
        <h1>Adoption Center</h1>
        {
          this.state.error500 ? <h1>Error</h1> : (this.state.pets ? <PetList pets={this.state.pets} /> : <h1>Loading</h1>)
        }
      </>
    );
  }
}

export default Root;
