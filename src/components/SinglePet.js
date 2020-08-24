import React from 'react';

class SinglePet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'Available',
      adopted: false
    }
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    // ! the exclamation point is the oppositive
    this.setState({ adopted: !this.state.adopted })
  }
  render() {
    const { pet } = this.props;
    return <div className={!this.state.adopted ? "single-pet" : "single-pet adopted"} >
      <p>{pet.name}</p>
      <p>{pet.description}</p>
      <p>{pet.species}</p>
      <>
        {
          !this.state.adopted ? <p>Available for adoption</p> : <p>Adopted!</p>
        }
      </>
      <button onClick={this.toggle}>Toggle Status</button>
    </div >;
  }
}

export default SinglePet;
