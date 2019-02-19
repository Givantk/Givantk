import store from '../../store/createStore';

const getNotificationsNumber = () => {
  const { currentUserProfile } = store.getState().profile;
  if (!currentUserProfile) return 0;

  const { notifications } = store.getState().profile.currentUserProfile;
  if (!notifications) return 0;

  const notificationsNumber = notifications.filter((n) => !n.seen).length;
  return notificationsNumber;
};

export default getNotificationsNumber;
