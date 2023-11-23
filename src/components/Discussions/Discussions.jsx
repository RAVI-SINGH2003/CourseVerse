import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import './Discussions.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { searchQuestions } from '../../redux/actions/questionAction';
import AskQuestion from './AskQuestion';
import { useDisclosure } from '@chakra-ui/react';
import Tesseract from 'tesseract.js';

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
const Discussions = () => {
  const [search, setSearch] = useState('');
  const [uploadText, setUploadText] = useState('Upload a file');
  const dispatch = useDispatch();
  const { message, error, questionsList } = useSelector(
    state => state.question
  );
  const {
    isOpen: isAskQuestionOpen,
    onOpen: onAskQuestionOpen,
    onClose: onAskQuestionClose,
  } = useDisclosure();
  const performImageToTextConversion = async e => {
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
    setSearch(text.replace(/\s+/g, ' ').trim());
    setUploadText('Upload a file');
  };
  useEffect(() => {
    dispatch(searchQuestions(search));
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
    }
  }, [dispatch, search, error, message]);
  return (
    <div className="discussions">
      <AskQuestion onClose={onAskQuestionClose} isOpen={isAskQuestionOpen} />
      <div className="navigation">
        <div className="inputGroup">
          <textarea
            type="text"
            value={search}
            placeholder="Search a question"
            onChange={e => setSearch(e.target.value)}
            rows={3}
          ></textarea>
          <span>OR</span>
          <div class="upload-btn-wrapper">
            <button class="btn">{uploadText}</button>
            <input
              type="file"
              accept="image/*"
              onChange={performImageToTextConversion}
            />
          </div>
        </div>
        <div className="buttonGroup">
          <button onClick={onAskQuestionOpen}>Ask question</button>
          <Link to="/questions/me">My Questions</Link>
        </div>
      </div>
      <div className="questionsBox">
        <h1>{search ? 'Search Results' : 'Trending Questions'}</h1>
        {questionsList && questionsList.map((q, i) => <QuestionCard q={q} />)}
      </div>
    </div>
  );
};

export default Discussions;
