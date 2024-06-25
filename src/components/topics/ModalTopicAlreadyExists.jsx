import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import PropTypes from 'prop-types'

function ModalTopicAlreadyExists({topic, show, onHide, handleClickNewTopicName}) {
    const topicName = topic;
  return (
    // Modal with grey font color

    <Modal className="topicModaltext" show={show} onHide={onHide} 

      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Topic Already Exists
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Topic `{topicName}` already exists.</p>
      </Modal.Body>
      <Modal.Footer>
      
        <Button onClick={handleClickNewTopicName}>Try a different name</Button>
        <Button onClick={onHide}>Edit topic</Button>

      </Modal.Footer>
    </Modal>
  );
}

ModalTopicAlreadyExists.propTypes = {
    onHide: PropTypes.func.isRequired,
    topic: PropTypes.string.isRequired,
    show: PropTypes.bool.isRequired,
    handleClickNewTopicName: PropTypes.func.isRequired
}
export default ModalTopicAlreadyExists;