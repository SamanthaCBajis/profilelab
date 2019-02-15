"use strict";
function ProfileService($location) {
const self = this;

self.profileObject = {
    name: "Taki Bajis",
    contact: "Mr.Cuddles@postalpooch.com",
    bio: "My favorite things are to sleep and eat. I love going on walks, practicing my tricks, and giving my family all of the kisses and cuddles in the world. I am a good boy❤️❤️",
}
self.getUserProfile = function(){
    return self.profileObject;

}
self.setUserProfile = function(profileObject){
    self.profileObject = profileObject;
    $location.path("/profilepage");

}
self.editProfile = function(){
    $location.path("/editprofile");
}
// self.goHome = function(){
//     $location.path("/profilepage");
// }

};

angular
.module("ProfileApp")
.service("ProfileService", ProfileService);