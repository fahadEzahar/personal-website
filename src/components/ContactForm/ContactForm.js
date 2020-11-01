import React from 'react';
import Modal from 'react-modal';
import emailjs from 'emailjs-com';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',

    boxShadow: '5px 10px 10px gray',

  }
};
Modal.setAppElement('#root')

const ContactForm = ({ modalIsOpen, closeModal }) => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_nd4l0ac', e.target, 'user_OGBs16Y3YDmcbPlxu2MR8')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
  }

  return (
    <div>

      <Modal
        isOpen={modalIsOpen}

        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {/* <button onClick={closeModal}>close</button> */}
        <div class="text-center pb-3 font-weight-bold">Get In Touch</div>
        <form onSubmit={sendEmail} >
          <div class="form-group">

            <input type="text" class="form-control" placeholder="Your name" name='from_name' required />

          </div>
          <div class="form-group">

            <input type="email" class="form-control" placeholder="Your email" required />
            <small id="emailHelp" class="form-text text-muted">I'll never share your email with anyone else.</small>
          </div>
          <div class="form-group">

            <textarea type="email" class="form-control" name='message' placeholder="Your message" required />
            <small id="emailHelp" class="form-text text-muted">I’m eager to receive your feedback.</small>

          </div>

          <div className="text-center">
            <button type="submit" class="btn btn-dark px-4 ">Send</button>
          </div>

        </form>
      </Modal>
    </div>
  );
};

export default ContactForm;