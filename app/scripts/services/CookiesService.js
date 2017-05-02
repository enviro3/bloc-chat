(function() {
    function BlocChatCookies($cookies, $uibModal) {
        var currentUser = $cookies.get('blocChatCurrentUser');
        if (!currentUser || currentUser === '') {
            // Allows users to set their username
           $uibModal.open({
               //Modal configuration object properties
               templateUrl: 'templates/UserNameModal.html',
               controller: 'UserNameCtrl',
               controllerAs: '$ctrl',
               size: "md", 
               backdrop:'static',
               keyboard:false
           })
        }
    }


angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();