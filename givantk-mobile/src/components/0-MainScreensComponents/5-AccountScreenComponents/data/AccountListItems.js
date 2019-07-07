const accountListItems = (navigation, userId, currentUserProfile) => [
  {
    title: 'الملف الشخصى',
    iconName: 'ios-happy',
    iconType: 'Ionicons',
    onPress: () =>
      navigation.navigate('Profile', {
        userId,
      }),
  },
  {
    title: 'الخدمات المفضلة',
    iconName: 'md-star',
    iconType: 'Ionicons',
    onPress: () =>
      navigation.navigate('BookmarkedServices', {
        currentUserProfile,
      }),
  },
  {
    title: 'الخدمات التى تقدمت إليها',
    iconName: 'account-card-details',
    iconType: 'MaterialCommunityIcons',
    onPress: () =>
      navigation.navigate('ProposedForServices', {
        currentUserProfile,
      }),
  },
  {
    title: 'الخدمات المؤرشفة',
    iconName: 'file-archive-o',
    iconType: 'FontAwesome',
    onPress: () =>
      navigation.navigate('ArchivedServices', {
        currentUserProfile,
      }),
  },
  // {
  //   title: 'Charge my Money score',
  //   iconName: 'money',
  //   iconType: 'FontAwesome',
  //   onPress: () => navigation.navigate('ChargeMoneyScore'),
  // },
  {
    title: 'ليس معى نقاط مجانية',
    iconName: 'emoji-sad',
    iconType: 'Entypo',
    onPress: () => navigation.navigate('GivantkPoints'),
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
