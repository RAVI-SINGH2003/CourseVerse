import React, { useState } from 'react';
import Tesseract from 'tesseract.js';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Textarea,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { createQuestion } from '../../redux/actions/questionAction';
const AskQuestion = ({ onClose, isOpen }) => {
  const [question, setQuestion] = useState('');
  const [uploadText, setUploadText] = useState('Upload a file');
  const dispatch = useDispatch();
  const askHandler = () => {
    console.log('question', question);
    dispatch(createQuestion(question));
  };
  const imageToTextConversion = async e => {
    setUploadText('Uploading...');
    const imageFile = e.target.files[0];
    if (!imageFile) return;
    const {
      data: { text },
    } = await Tesseract.recognize(
      imageFile,
      'eng' // Language code (English in this case)
      // {
      //   logger: info => console.log(info), // Optional logger function
      // }
    );
    setQuestion(text.replace(/\s+/g, ' ').trim());
    setUploadText('Upload a file');
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent maxH={800} maxW={800}>
        <ModalHeader fontSize={'1.5rem'}>Post Your Question</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <span>{uploadText} : &nbsp;</span>
          <input
            type="file"
            accept="image/*"
            onChange={imageToTextConversion}
          />
          <p>OR</p>
          <Textarea
            placeholder="Enter your question"
            fontSize={'1.1rem'}
            marginTop={2}
            value={question}
            onChange={e => setQuestion(e.target.value)}
            rows={10}
            wrap={'hard'}
          />
        </ModalBody>
        <ModalFooter>
          <Button
            colorScheme="yellow"
            mr={3}
            fontSize={'1rem'}
            padding={5}
            onClick={askHandler}
          >
            Ask
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AskQuestion;
