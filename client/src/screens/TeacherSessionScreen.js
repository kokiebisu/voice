/**
 * @file Screen where teachers can monitor the feedbacks
 * being sent from the students
 */

/**
 * Dependencies
 */
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import io from 'socket.io-client';

/**
 * Components
 */
import { TeacherCardWrapper } from '../components/TeacherCardWrapper';

/**
 * Helper Method
 */
import { generateSessionId } from '../util/helper';

/**
 * Endpoint
 */
import endpoint from '../util/endpoint';

/**
 * Socket that will be eventually be connected
 */
let socket;
let roomId;

export default () => {
  /**
   * States
   */
  const [sessionId, setSessionId] = useState('');
  const [feedbacks, setFeedbacks] = useState({});
  const [studentNumber, setStudentNumber] = useState(0);

  /**
   * Creates a room with a randomly generated session id
   */
  useEffect(() => {
    socket = io(endpoint, { forceNode: true });
    roomId = generateSessionId(5);
    setSessionId(roomId);
    socket.emit('createRoom', roomId);
    return () => {
      socket.emit('destroyRoom', roomId);
    };
  }, [endpoint]);

  /**
   * Listens to any feedbacks being sent from the student
   */
  useEffect(() => {
    socket.on('updateVoices', (result) => {
      setFeedbacks(result.feedbacks);
    });
  });

  useEffect(() => {
    socket.on('updateStudents', (result) => {
      setStudentNumber(result.users.length);
    });
  }, []);

  /**
   * Sends the feedback pressed by the user
   * @param {string} feedbackName
   */
  const respond = (feedbackName) => {
    socket.emit('respondFeedback', feedbackName, roomId);
    setFeedbacks({ ...feedbacks, [feedbackName]: undefined });
  };

  return (
    <View>
      <Text>SessionID: {sessionId}</Text>
      <Text>People Joined: {studentNumber}</Text>
      <TeacherCardWrapper feedbacks={feedbacks} respond={respond} />
    </View>
  );
};
