import React from 'react';
import { Option } from '../components/Option';

export const OptionsWrapper = ({
  roomId,
  sendFeedback,
  disableFeedbacks,
  isDisabled,
  disableIAgree,
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
        disableIAgree={disableIAgree}
      />
      <Option
        feedbackName='Too Fast'
        roomId={roomId}
        imgSrc={require('../img/shape.png')}
        sendFeedback={sendFeedback}
        disableFeedbacks={disableFeedbacks}
        isDisabled={isDisabled}
        disableIAgree={disableIAgree}
      />
      <Option
        feedbackName='Repeat'
        roomId={roomId}
        imgSrc={require('../img/arrows.png')}
        sendFeedback={sendFeedback}
        disableFeedbacks={disableFeedbacks}
        isDisabled={isDisabled}
        disableIAgree={disableIAgree}
      />
      <Option
        feedbackName='Confused'
        roomId={roomId}
        imgSrc={require('../img/job.png')}
        sendFeedback={sendFeedback}
        disableFeedbacks={disableFeedbacks}
        isDisabled={isDisabled}
        disableIAgree={disableIAgree}
      />
    </>
  );
};
