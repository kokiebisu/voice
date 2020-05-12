import React from 'react';
import { Voice } from '../components/Voice';

export const VoicesWrapper = ({
  voices,
  sendFeedback,
  isPressed,
  roomId,
  disableFeedbacks,
  disableIAgree,
}) => {
  return (
    <>
      {console.log(voices)}
      {voices['Too Slow'] === '' ||
      voices['Too Slow'] === undefined ||
      voices['Too Slow'].length === 0 ? null : (
        <Voice
          feedbackName='Too Slow'
          sendFeedback={sendFeedback}
          isPressed={isPressed}
          roomId={roomId}
          disableFeedbacks={disableFeedbacks}
          disableIAgree={disableIAgree}
        />
      )}
      {voices['Too Fast'] === '' ||
      voices['Too Fast'] === undefined ||
      voices['Too Fast'].length === 0 ? null : (
        <Voice
          feedbackName='Too Fast'
          sendFeedback={sendFeedback}
          isPressed={isPressed}
          roomId={roomId}
          disableFeedbacks={disableFeedbacks}
          disableIAgree={disableIAgree}
        />
      )}
      {voices['Repeat'] === '' ||
      voices['Repeat'] === undefined ||
      voices['Repeat'].length === 0 ? null : (
        <Voice
          feedbackName='Repeat'
          sendFeedback={sendFeedback}
          isPressed={isPressed}
          roomId={roomId}
          disableFeedbacks={disableFeedbacks}
          disableIAgree={disableIAgree}
        />
      )}
      {voices['Confused'] === '' ||
      voices['Confused'] === undefined ||
      voices['Confused'].length === 0 ? null : (
        <Voice
          feedbackName='Confused'
          sendFeedback={sendFeedback}
          isPressed={isPressed}
          roomId={roomId}
          disableFeedbacks={disableFeedbacks}
          disableIAgree={disableIAgree}
        />
      )}
    </>
  );
};
