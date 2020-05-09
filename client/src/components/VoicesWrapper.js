import React from 'react';
import { Voice } from '../components/Voice';

export const VoicesWrapper = ({ voices, sendFeedback, isPressed }) => {
  return (
    <>
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
    </>
  );
};
