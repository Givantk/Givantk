const mongoose=require('mongoose');
const sendNotification= require('../../assets/utils/sendNotifications');

//Models

const Profile=mongoose.model('profile');
const Service=mongoose.model('service');

module.exports=inviteHelper=(req,res)=>{
    Profile.findById(req.params.profile_id).then((profile)=>{
        
        console.log(profile);
        console.log(req.user);


        
        profile.notifications.unshift({
            title:`${req.user.first_name} invited you to the service`,
        })
    })
}
