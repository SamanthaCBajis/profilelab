"use strict";
const profilepage = {
    template: `
    <div class="image"> 
    <img src="app/css/Taki.jpg">
    </div>
    <div class="form">
    <h1> {{ $ctrl.profileObject.name}}</h1>
    <p class="contact"> {{ $ctrl.profileObject.contact }}</p>
    <p class="bio"> {{ $ctrl.profileObject.bio }}</p>
    <button class="edit" ng-click="$ctrl.pullEditPage();">Edit</button>
    </div>
    `,
    controller: ["ProfileService", function(ProfileService) {
        const vm= this;
        ProfileService.getUserProfile();
        vm.profileObject = ProfileService.getUserProfile();
        vm.pullEditPage = function() {
            ProfileService.editProfile();
        }
        
    }]
};
angular
.module("ProfileApp")
.component("profilepage", profilepage);