import React, { useEffect, useState } from 'react';
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
import { createAnswer } from '../../redux/actions/questionAction';

const AddAnswer = ({ onClose, isOpen, id, oldAnswer }) => {
  const [answer, setAnswer] = useState(oldAnswer);
  const [uploadText, setUploadText] = useState('Upload a file');
  const dispatch = useDispatch();
  const addAnswerHandler = () => {
    // console.log(answer);
    dispatch(createAnswer(answer, id));
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
    setAnswer(text.replace(/\s+/g, ' '));
    setUploadText('Upload a file');
  };
  useEffect(() => {
    setAnswer(oldAnswer);
  }, [oldAnswer]);
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent maxH={800} maxW={800}>
        <ModalHeader fontSize={'1.5rem'}>Post Your Answer</ModalHeader>
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
            placeholder="Enter your Answer"
            fontSize={'1.1rem'}
            marginTop={2}
            value={answer}
            onChange={e => setAnswer(e.target.value)}
            rows={10}
          ></Textarea>
        </ModalBody>
        <ModalFooter>
          <Button
            colorScheme="yellow"
            mr={3}
            fontSize={'1rem'}
            padding={5}
            onClick={addAnswerHandler}
          >
            Submit
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AddAnswer;
