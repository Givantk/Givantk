const { Expo } = require('expo-server-sdk');

const expo = new Expo();

const sendNotifications = (messages) => {
  messages = messages.filter((m) => Expo.isExpoPushToken(m.to));

  const chunks = expo.chunkPushNotifications(messages);
  const tickets = [];

  (async () => {
    for (const chunk of chunks) {
      try {
        const ticketChunk = await expo.sendPushNotificationsAsync(chunk);
        tickets.push(...ticketChunk);
      } catch (error) {
        console.error('Error sending push notification', error);
      }
    }
  })();

  // To be tested and implemented when we need to remove unregistered tokens:

  // const receiptIds = [];
  // for (const ticket of tickets) {
  //   if (ticket.id) {
  //     receiptIds.push(ticket.id);
  //   }
  // }

  // const receiptIdChunks = expo.chunkPushNotificationReceiptIds(receiptIds);
  // (async () => {
  //   for (const chunk of receiptIdChunks) {
  //     try {
  //       const receipts = await expo.getPushNotificationReceiptsAsync(chunk);
  //       console.log(receipts);
  //       for (const receipt of receipts) {
  //         if (receipt.status === 'ok') {
  //           continue;
  //         } else if (receipt.status === 'error') {
  //           console.error(
  //             `There was an error sending a notification: ${receipt.message}`,
  //           );
  //           if (receipt.details && receipt.details.error) {
  //             if (receipt.details.error === 'DeviceNotRegistered') {
  //               const mongoose = require('mongoose');
  //               const User = mongoose.model('user');

  //               User.findOne({
  //                 pushNotificationToken: receipt.message.slice(1, 42),
  //               }).then((user) => {
  //                 user.pushNotificationToken = '';
  //                 user.save().then(() => {
  //                   console.log('Successfully deleted not registered device');
  //                 });
  //               });
  //             }
  //           }
  //         }
  //       }
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
  // })();
};

/*
The input consumed by this function is an array of messages:
messages=[
  {
    to: pushToken,
    sound: 'default',
    title:'This is a test title',
    body: 'This is a test body',
    data: { withSome: 'data' },
  },
  ...
]
*/

module.exports = sendNotifications;
