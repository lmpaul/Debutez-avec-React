import '../styles/Modal.css'

function PlantModal({updateModal, name}) {
  return (
     <div className='modal-background'>
      <div className='plant-modal-content'>
        <h5>{name.capitalize()}</h5>
        <p>La plante {name.capitalize()} est une excellent choix 🍀</p>
        <button onClick={() => {updateModal(false)}}>Fermer</button>
      </div>
    </div>
  )
}

export default PlantModal;
