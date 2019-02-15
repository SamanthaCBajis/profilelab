"use strict";
const editprofile = {
    template: `
    <form ng-submit="$ctrl.submitProf($ctrl.profileObject)";>
    <h1 class="first"> Use the form below to update your profile </h1>
    <p class="title">Name</p>
    <input placeholder= "Name" type="text" ng-model="$ctrl.profileObject.name">
    <p class="title">Contact</p>
    <input placeholder="Contact Info" type="text" ng-model="$ctrl.profileObject.contact">
    <p class="title">Bio</p>
    <input placeholder="Bio" type="text" ng-model="$ctrl.profileObject.bio">
    <button>Update</button>
    </form>`,
    
    controller: ["ProfileService", function(ProfileService) {
        const vm= this;
        vm.submitProf = function(profileObject) {
            ProfileService.setUserProfile(profileObject);
            // ProfileService.goHome();
}
}]
};

angular
.module("ProfileApp")
.component("editprofile", editprofile);