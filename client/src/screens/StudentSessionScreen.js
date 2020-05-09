/**
 * @file Screen where users can send feedbacks to the teacher instantaneously
 */

/**
 * Dependencies
 */
import React, { useState, useEffect } from 'react';
import { View, Alert, StyleSheet } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import io from 'socket.io-client';

// Components
import { Section } from '../components/Section';
import { StudentSessionHeader } from '../components/StudentSessionHeader';
import { Voice } from '../components/Voice';
import { Option } from '../components/Option';

/**
 * Endpoint for the WebSocket
 */
import ENDPOINT from '../util/endpoint';
// import { TouchableOpacity } from 'react-native-gesture-handler';

let socket;
let roomId;

export const leaveStudentRoom = (navigation) => {
  Alert.alert(
    'Are you sure?',
    'You will be leaving the room',
    [
      {
        text: 'Cancel',
        onPress: () => {},
        style: 'cancel',
      },
      {
        text: 'Leave',
        onPress: () => {
          socket.emit('leaveRoom', roomId);
          navigation.goBack();
        },
      },
    ],
    { cancelable: true }
  );
};

export default () => {
  /**
   * Used to navigate between the screens
   */
  const navigation = useNavigation();

  /**
   * Used to receive data from other screens
   */
  const route = useRoute();

  /**
   * States
   */
  const [session, setSession] = useState('');
  const [voices, setVoices] = useState([]);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  /**
   * Redirects the student back to the authentication screen when
   * student gets the session id wrong
   */
  const redirectBack = () => {
    navigation.navigate('Student Authentication');
  };

  /**
   * Initial call when the screen is first rendered.
   * Creates a socket when it is successful and it fetches any voices in the room.
   */
  useEffect(() => {
    socket = io(ENDPOINT);
    roomId = route.params.data;
    setSession(roomId);
    socket.emit('joinRoom', roomId, ({ error }) => {
      Alert.alert('Error', error, [
        {
          text: 'Gotcha',
          onPress: () => redirectBack(),
        },
      ]);
    });
    socket.on('updateVoices', (result) => {
      setVoices(result.feedbacks);
    });
  }, [ENDPOINT]);

  /**
   * Student will get kicked out of the room when the teacher ends the session
   */
  useEffect(() => {
    socket.on('kickFromRoom', () => {
      Alert.alert('Session ended', 'Please go back', [
        {
          text: 'Gotcha',
          onPress: () => redirectBack(),
        },
      ]);
    });
  }, []);

  /**
   * Receive a response back from the teacher when the feedback is seen by the teacher
   */
  useEffect(() => {
    socket.on('teacherResponse', () => {
      Alert.alert('Successful', 'Thanks for your voice', [
        {
          text: 'No Problem',
          onPress: () => {},
        },
      ]);
    });
  }, []);

  /**
   * Updates any voices that are sent in the room
   */
  useEffect(() => {
    socket.on('updateVoices', (result) => {
      setVoices(result.feedbacks);
      // Dim the lights here(?)
    });
  }, [voices]);

  /**
   * Sends a feedback to the teacher based on the button pressed
   * @param {string} feedback
   * @param {string} roomId
   */
  const sendFeedback = (feedback, roomId) => {
    setIsDisabled(true);
    socket.emit('sendFeedback', feedback, roomId, ({ error }) => {
      Alert.alert('Error', error, [
        {
          text: 'Gotcha',
          onPress: () => redirectBack(),
        },
      ]);
    });
  };

  /**
   * Disables feedback fpr a specified time span when a feedback is pressed
   */
  const disableFeedbacks = () => {
    setTimeout(function () {
      setIsDisabled(false);
    }, 10000);
    setIsPressed(false);
  };

  return (
    <View style={styles.container}>
      <StudentSessionHeader session={session} />
      <Section title='Voices'>
        {voices['Too Slow'] === '' ||
        voices['Too Slow'] === undefined ||
        voices['Too Slow'].length === 0 ? null : (
          <Voice
            feedbackName='Too Slow'
            sendFeedback={sendFeedback}
            isPressed={isPressed}
          />
        )}
        {voices['Too Fast'] === '' ||
        voices['Too Fast'] === undefined ||
        voices['Too Fast'].length === 0 ? null : (
          <Voice
            feedbackName='Too Fast'
            sendFeedback={sendFeedback}
            isPressed={isPressed}
          />
        )}
        {voices['Repeat Last Phrase'] === '' ||
        voices['Repeat Last Phrase'] === undefined ||
        voices['Repeat Last Phrase'].length === 0 ? null : (
          <Voice
            feedbackName='Repeat Last Phrase'
            sendFeedback={sendFeedback}
            isPressed={isPressed}
          />
        )}
        {voices['Confused'] === '' ||
        voices['Confused'] === undefined ||
        voices['Confused'].length === 0 ? null : (
          <Voice
            feedbackName='Confused'
            sendFeedback={sendFeedback}
            isPressed={isPressed}
          />
        )}
      </Section>
      <Section title='Options'>
        <Option
          feedbackName='Too Slow'
          roomId={roomId}
          imgSrc='../img/1.png'
          sendFeedback={sendFeedback}
          disableFeedbacks={disableFeedbacks}
          isDisabled={isDisabled}
        />
        <Option
          feedbackName='Too Fast'
          roomId={roomId}
          imgSrc='../img/1.png'
          sendFeedback={sendFeedback}
          disableFeedbacks={disableFeedbacks}
          isDisabled={isDisabled}
        />
        <Option
          feedbackName='Repeat Last Phrase'
          roomId={roomId}
          imgSrc='../img/arrows.png'
          sendFeedback={sendFeedback}
          disableFeedbacks={disableFeedbacks}
          isDisabled={isDisabled}
        />
        <Option
          feedbackName='Confused'
          roomId={roomId}
          imgSrc='../img/job.png'
          sendFeedback={sendFeedback}
          disableFeedbacks={disableFeedbacks}
          isDisabled={isDisabled}
        />
      </Section>
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
});
