/**
 * @file Screen where teachers can monitor the feedbacks
 * being sent from the students
 */

/**
 * Dependencies
 */
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet} from 'react-native';
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
    <View style={styles.container}>
      <View style={{flex:1}}>
      <View style={styles.sessionWrapper}>
      <Text style={styles.sessionHeader}>SessionID: {sessionId}</Text>
      <Text style={styles.sessionHeader2}>People Joined: {studentNumber}</Text>
      </View>
      </View>
      <View style={{flex:1, }}>
      <TeacherCardWrapper feedbacks={feedbacks} respond={respond} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
   
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
  sessionWrapper: {
    width: 300,
    height: 87,
    backgroundColor: '#2A526A',
    borderRadius: 10,
    
  },
  sessionHeader: {
    position: 'absolute',
    top: 25,
    left: 90,
    fontWeight: 'bold',
    color: 'white'
  },
  sessionHeader2: {
    position: 'absolute',
    top: 45,
    left: 90,
    fontWeight: 'bold',
    color: 'white'
  },
  
});
