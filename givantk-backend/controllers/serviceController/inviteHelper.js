const mongoose=require('mongoose');
const sendNotification= require('../../assets/utils/sendNotifications');

//Models

const Profile=mongoose.model('profile');

module.exports=inviteHelper=(req,res)=>{
    Profile.findById(req.params.profile_id).then((profile)=>{
        
        console.log(profile);
        console.log(req.user)
        
        // profile.notifications.unshift({
        //     title:`${profile.first_name}`,
        // })
    })
}
