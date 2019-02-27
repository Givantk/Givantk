const accountListItems = (navigation, userId, currentUserProfile) => [
  {
    title: 'View Profile',
    iconName: 'ios-happy',
    iconType: 'Ionicons',
    onPress: () =>
      navigation.navigate('Profile', {
        userId,
      }),
  },
  {
    title: 'Services you bookmarked',
    iconName: 'md-star',
    iconType: 'Ionicons',
    onPress: () =>
      navigation.navigate('BookmarkedServices', {
        currentUserProfile,
      }),
  },
  {
    title: 'Services you proposed for',
    iconName: 'account-card-details',
    iconType: 'MaterialCommunityIcons',
    onPress: () =>
      navigation.navigate('ProposedForServices', {
        currentUserProfile,
      }),
  },
  {
    title: 'Services you archived',
    iconName: 'file-archive-o',
    iconType: 'FontAwesome',
    onPress: () =>
      navigation.navigate('ArchivedServices', {
        currentUserProfile,
      }),
  },
  {
    title: 'Payment Info',
    iconName: 'money',
    iconType: 'FontAwesome',
    onPress: () => navigation.navigate('PaymentInfo'),
  },
  // {
  //   title: 'Personal Info',
  //   iconName: 'magnifying-glass',
  //   iconType: 'Foundation',
  //   onPress: () => navigation.navigate('PersonalInfo'),
  // },
  // {
  //   title: 'Invite Friends',
  //   iconName: 'ios-people',
  //   iconType: 'Ionicons',
  //   onPress: () => navigation.navigate('InviteFriends'),
  // },
  // {
  //   title: 'Verify Identity',
  //   iconName: 'verified-user',
  //   iconType: 'MaterialIcons',
  //   onPress: () => navigation.navigate('VerifyIdentity'),
  // },
];

export default accountListItems;
