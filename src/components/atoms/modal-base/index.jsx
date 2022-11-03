import React, { Children } from 'react'
import ReactModal from 'react-modal';


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        padding: '12px',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '620px',
        backgroundColor: '#fff',
    },
};

const BaseModal = ({ children, isOpen, onRequestClose, title }) => {
    return (
        <ReactModal
            isOpen={isOpen}
            style={customStyles}
            contentLabel="Example Modal"
            onRequestClose={onRequestClose}
            ariaHideApp={false}
        >
            <div className='w-full flex flex-col gap-8'>
                <div className='w-full flex justify-between items-center'>
                    <h2>{title}</h2>
                    <button onClick={onRequestClose}>
                        close
                    </button>
                </div>
                {children}
            </div>
        </ReactModal>
    )
}

export default BaseModal