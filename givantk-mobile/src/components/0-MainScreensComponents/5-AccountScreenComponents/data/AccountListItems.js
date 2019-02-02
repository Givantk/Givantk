const accountListItems = (navigation) => [
  {
    title: 'View Profile',
    iconName: 'ios-happy',
    iconType: 'Ionicons',
    onPress: () => navigation.navigate('Profile'),
  },
  {
    title: 'Bookmarked Services',
    iconName: 'md-star-outline',
    iconType: 'Ionicons',
    onPress: () => {},
  },
  {
    title: 'Proposed for services',
    iconName: 'account-card-details',
    iconType: 'MaterialCommunityIcons',
    onPress: () => {},
  },
  {
    title: 'Payment Info',
    iconName: 'money',
    iconType: 'FontAwesome',
    onPress: () => navigation.navigate('PaymentInfo'),
  },
  {
    title: 'Personal Info',
    iconName: 'magnifying-glass',
    iconType: 'Foundation',
    onPress: () => navigation.navigate('PersonalInfo'),
  },
  {
    title: 'Invite Friends',
    iconName: 'ios-people',
    iconType: 'Ionicons',
    onPress: () => navigation.navigate('InviteFriends'),
  },
  {
    title: 'Verify Identity',
    iconName: 'verified-user',
    iconType: 'MaterialIcons',
    onPress: () => navigation.navigate('VerifyIdentity'),
  },
];

export default accountListItems;
