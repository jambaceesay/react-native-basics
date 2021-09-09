import React from 'react';
import {Alert} from 'native-base';

const NotificationC = ({
  notification = {isOn: false, type: 'success', message: 'default text'},
}) => {
  return (
    <>
      <Alert status={notification.type} w="100%" variant="left-accent">
        <Alert.Icon />
        <Alert.Title flexShrink={1}>{notification.message}</Alert.Title>
      </Alert>
    </>
  );
};

export default NotificationC;
