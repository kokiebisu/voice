/**
 * @file Screen where teachers can monitor the feedbacks
 * being sent from the students
 */

/**
 * Dependencies
 */
import React, { useEffect, useState } from 'react';
import { View, Text, Button, TextInput, TouchableOpacity } from 'react-native';
import io from 'socket.io-client';

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

  /**
   * Creates a room with a randomly generated session id
   */
  useEffect(() => {
    socket = io(endpoint);
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
    socket.on('displayFeedbacks', (result) => {
      setFeedbacks(result.feedbacks);
    });
  }, []);

  console.log('feedbacks', feedbacks);

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
      {feedbacks['too slow'] === '' ||
      feedbacks['too slow'] === undefined ? null : (
        <TouchableOpacity
          onPress={() => {
            respond('too slow');
          }}>
          <Text>Too Slow: {feedbacks['too slow'].length}</Text>
        </TouchableOpacity>
      )}
      {feedbacks['too fast'] === '' ||
      feedbacks['too fast'] === undefined ? null : (
        <TouchableOpacity
          onPress={() => {
            respond('too fast');
          }}>
          <Text>Too Fast: {feedbacks['too fast'].length}</Text>
        </TouchableOpacity>
      )}
      {feedbacks['repeat last phrase'] === '' ||
      feedbacks['repeat last phrase'] === undefined ? null : (
        <TouchableOpacity
          onPress={() => {
            respond('repeat last phrase');
          }}>
          <Text>
            Repeat Last Phrase: {feedbacks['repeat last phrase'].length}
          </Text>
        </TouchableOpacity>
      )}
      {feedbacks['confused'] === '' ||
      feedbacks['confused'] === undefined ? null : (
        <TouchableOpacity
          onPress={() => {
            respond('confused');
          }}>
          <Text>Confused: {feedbacks['confused'].length}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
