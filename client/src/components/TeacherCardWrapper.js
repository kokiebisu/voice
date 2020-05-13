import React from 'react';
import { TeacherCard } from '../components/TeacherCard';

export const TeacherCardWrapper = ({ respond, feedbacks }) => {
  return (
    <>
      {feedbacks['Too Slow'] === '' ||
      feedbacks['Too Slow'] === undefined ||
      feedbacks['Too Slow'].length === 0 ? null : (
        <TeacherCard
          respond={respond}
          feedbackName='Too Slow'
          length={feedbacks['Too Slow'].length}
          imgSrc={require('../img/1.png')}
        />
      )}
      {feedbacks['Too Fast'] === '' ||
      feedbacks['Too Fast'] === undefined ||
      feedbacks['Too Fast'].length === 0 ? null : (
        <TeacherCard
          respond={respond}
          feedbackName='Too Fast'
          length={feedbacks['Too Fast'].length}
          imgSrc={require('../img/shape.png')}
        />
      )}
      {feedbacks['Repeat'] === '' ||
      feedbacks['Repeat'] === undefined ||
      feedbacks['Repeat'].length === 0 ? null : (
        <TeacherCard
          respond={respond}
          feedbackName='Repeat'
          length={feedbacks['Repeat'].length}
          imgSrc={require('../img/arrows.png')}
        />
      )}
      {feedbacks['Confused'] === '' ||
      feedbacks['Confused'] === undefined ||
      feedbacks['Confused'].length === 0 ? null : (
        <TeacherCard
          respond={respond}
          feedbackName='Confused'
          length={feedbacks['Confused'].length}
          imgSrc={require('../img/job.png')}
        />
      )}
    </>
  );
};
