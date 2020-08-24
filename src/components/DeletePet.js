import React from 'react';
import axios from 'axios';

const handleDelete = async (petId, callback) => {
  const response = await axios.delete(`/api/pets/${petId}`);
  if(response.status === 200) {
    callback(petId)
  }
}

const DeletePet = (props) => {
  const { petId } = props;
  console.log("DeletePet -> props Luis", props)
  return (
    <div>
      <button className="delete-pet"
        onClick={() => handleDelete(petId, props.handleDelete)}>Delete</button>

    </div>
  )
}

export default DeletePet;
