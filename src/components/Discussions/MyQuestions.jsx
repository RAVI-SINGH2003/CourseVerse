import React, { useEffect } from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { getUserQuestions } from '../../redux/actions/questionAction';
import { Container } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import './MyQuestions.css';

const QuestionCard = ({ q }) => {
  const navigate = useNavigate();
  return (
    <div
      className="questionCard"
      onClick={() => navigate(`/questions/${String(q._id)}`)}
    >
      <p>
        <b>Question : </b>{' '}
        {q.question.length >= 100
          ? q.question.slice(0, 100) + '...'
          : q.question}
      </p>
      <p>
        {' '}
        <b>Author : </b> {q?.askedBy?.userName}
      </p>
    </div>
  );
};

const MyQuestions = () => {
  const dispatch = useDispatch();
  const { error, questionsList, message } = useSelector(
    state => state.question
  );
  useEffect(() => {
    dispatch(getUserQuestions());
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
    }
  }, [dispatch, error, toast, message]);
  return (
    <Container
      className="myQuestions"
      maxW={'container.lg'}
      paddingY={8}
      boxShadow={'lg'}
    >
      <h1>My Questions : </h1>
      <div className="questionsBox">
        {questionsList && questionsList.map(q => <QuestionCard q={q} />)}
      </div>
    </Container>
  );
};

export default MyQuestions;
