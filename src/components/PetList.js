import React from 'react';
import SinglePet from './SinglePet';
import DeletePet from './DeletePet';

const cody = {
  id: 2,
  name: 'Cody',
  description: 'Adorable pug who loves to hug',
  species: 'dog',
};

// PetList only renders one SinglePet. We'd like it to render a list of pets,
// passed in as props.pets. Don't forget to add a unique key to each one!
class PetList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pets: this.props.pets,
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(evt) {
    const pets = this.props.pets;
    const selectedType = evt.target.value;
    const newSelection = pets.
      filter((pet) => {
        // if  type = all then it returns otherwise evaluates the second
        return selectedType === 'all' || selectedType.includes(pet.species)
      })
    this.setState({ pets: newSelection })

    // if (evt.target.value === "cats") {
    //   const allCats = this.props.pets.filter((pet) => pet.species === "cat");
    //   this.setState({ pets: allCats })
    // }
    // if (evt.target.value === "dogs") {
    //   const allDogs = this.props.pets.filter((pet) => pet.species === "dog");
    //   this.setState({ pets: allDogs })
    // }
    // else if (evt.target.value === "all") {
    //   this.setState({ pets: this.props.pets })
    // }
  }
  render() {
    const pets = this.state.pets;
    return (
      <div>
        <DeletePet />
        <label htmlFor="type-selected">Choose type of pet: </label>
        <select name="petType" id="" onChange={this.handleChange}>
          <option value="all">All</option>
          <option value="cats">Cats</option>
          <option value="dogs">Dogs</option>
        </select>

        <div className="pet-list">
          {
            pets.map((pet) => <SinglePet key={pet.id} pet={pet} />)
          }
        </div>
      </div>
    );
  }
}

export default PetList;
