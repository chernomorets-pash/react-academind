import './Modal.css';

function Modal() {
    return (
        <div className='modal'>
            <p>Are you sure?</p>
            <button className='btn btn--alert'>No</button>
            <button className='btn'>Yes</button>
        </div>
    );
}

export default Modal;
