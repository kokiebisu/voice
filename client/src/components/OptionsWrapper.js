import React from 'react';
import { Option } from '../components/Option';

export const OptionsWrapper = ({
  roomId,
  sendFeedback,
  disableFeedbacks,
  isDisabled,
}) => {
  return (
    <>
      <Option
        feedbackName='Too Slow'
        roomId={roomId}
        imgSrc={require('../img/1.png')}
        sendFeedback={sendFeedback}
        disableFeedbacks={disableFeedbacks}
        isDisabled={isDisabled}
      />
      <Option
        feedbackName='Too Fast'
        roomId={roomId}
        imgSrc={require('../img/1.png')}
        sendFeedback={sendFeedback}
        disableFeedbacks={disableFeedbacks}
        isDisabled={isDisabled}
      />
      <Option
        feedbackName='Repeat Last Phrase'
        roomId={roomId}
        imgSrc={require('../img/1.png')}
        sendFeedback={sendFeedback}
        disableFeedbacks={disableFeedbacks}
        isDisabled={isDisabled}
      />
      <Option
        feedbackName='Confused'
        roomId={roomId}
        imgSrc={require('../img/1.png')}
        sendFeedback={sendFeedback}
        disableFeedbacks={disableFeedbacks}
        isDisabled={isDisabled}
      />
    </>
  );
};
