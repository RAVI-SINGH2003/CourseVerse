import { server } from '../store.js';
import axios from 'axios';

//search Questions

export const searchQuestions =
  (search = '') =>
  async dispatch => {
    try {
      dispatch({ type: 'searchQuestionsRequest' });
      const { data } = await axios.post(
        `${server}/questions/search`,
        {
          search: search,
        },
        {
          headers: {
            'Content-type': 'application/json',
          },
          withCredentials: true,
        }
      );
      dispatch({ type: 'searchQuestionsSuccess', payload: data.questions });
    } catch (error) {
      dispatch({
        type: 'searchQuestionsFail',
        payload: error.response.data.message,
      });
    }
  };

// create a question
export const createQuestion =
  (question = '') =>
  async dispatch => {
    try {
      dispatch({ type: 'createQuestionRequest' });
      const { data } = await axios.post(
        `${server}/questions/create`,
        { question },
        {
          headers: {
            'Content-type': 'application/json',
          },
          withCredentials: true,
        }
      );
      dispatch({ type: 'createQuestionSuccess', payload: data.message });
    } catch (error) {
      dispatch({
        type: 'createQuestionFail',
        payload: error.response.data.message,
      });
    }
  };

//get a question
export const getQuestion =
  (id = '') =>
  async dispatch => {
    try {
      dispatch({ type: 'getQuestionRequest' });
      const { data } = await axios.get(`${server}/questions/${id}`, {
        withCredentials: true,
      });
      dispatch({
        type: 'getQuestionSuccess',
        payload: data.question,
      });
    } catch (error) {
      dispatch({
        type: 'getQuestionFail',
        payload: error.response.data.message,
      });
    }
  };

//get all user question
export const getUserQuestions = () => async dispatch => {
  try {
    dispatch({ type: 'getUserQuestionsRequest' });
    const { data } = await axios.get(`${server}/questions/all`, {
      withCredentials: true,
    });
    dispatch({
      type: 'getUserQuestionsSuccess',
      payload: data.questions,
    });
  } catch (error) {
    dispatch({
      type: 'getUserQuestionsFail',
      payload: error.response.data.message,
    });
  }
};

//get user answer
export const getAnswer =
  (id = '') =>
  async dispatch => {
    try {
      dispatch({ type: 'getAnswerRequest' });
      const { data } = await axios.get(`${server}/questions/answers/${id}`, {
        withCredentials: true,
      });
      // console.log('Thi is answet', data.answer);
      dispatch({
        type: 'getAnswerSuccess',
        payload: data.answer,
      });
    } catch (error) {
      dispatch({
        type: 'getAnswerFail',
        payload: error.response.data.message,
      });
    }
  };

//create / updating answer
export const createAnswer =
  (answer = '', id = '') =>
  async dispatch => {
    try {
      dispatch({ type: 'createAnswerRequest' });
      const { data } = await axios.post(
        `${server}/questions/answers/${String(id)}`,
        { answer },
        {
          headers: {
            'Content-type': 'application/json',
          },
          withCredentials: true,
        }
      );
      dispatch({ type: 'createAnswerSuccess', payload: data.message });
    } catch (error) {
      dispatch({
        type: 'createAnswerFail',
        payload: error.response.data.message,
      });
    }
  };
