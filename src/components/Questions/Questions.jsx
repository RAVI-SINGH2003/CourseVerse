import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAnswer, getQuestion } from '../../redux/actions/questionAction';
import toast from 'react-hot-toast';
import './Questions.css';
import { Container, Heading, Text, useDisclosure } from '@chakra-ui/react';
import AddAnswer from './AddAnswer';

const Questions = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const { question, error, message, answer } = useSelector(
    state => state.question
  );

  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    dispatch(getQuestion(id));
    dispatch(getAnswer(id));
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
    }
  }, [id, dispatch, message, error, toast]);
  return (
    <Container
      className="questionPage"
      maxW={'container.lg'}
      paddingY={8}
      boxShadow={'lg'}
    >
      <AddAnswer onClose={onClose} isOpen={isOpen} id={id} oldAnswer={answer} />
      <div className="questionBox">
        <h1>Question : </h1>
        <p>
          <b>Author : </b> <i>{question?.askedBy?.userName}</i>
        </p>
        <p>{question?.question}</p>
      </div>
      <div className="answersBox">
        <button onClick={onOpen}>Add or Update Your Answer</button>
        <h1>Answers : </h1>
        {question?.answersList?.length > 0 ? (
          question?.answersList?.map((ans, ind) => (
            <div className="answerCard" key={ind}>
              <p>
                {' '}
                <b>Author : </b>
                <i> {ans?.answeredBy?.userName}</i>
              </p>
              <p>
                <b>Answer : </b> {ans.answer ? ans.answer : 'NO ANSWERS YET'}
              </p>
            </div>
          ))
        ) : (
          <b style={{ fontSize: '2rem' }}>No Answers yet</b>
        )}
      </div>
    </Container>
  );
};

export default Questions;
