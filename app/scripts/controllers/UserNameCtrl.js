(function() {
    function UserNameCtrl($cookies, $uibModalInstance){
       this.setUserName = function(){

           if(this.text === ""){
               return;
           }
           $cookies.put('blocChatCurrentUser', this.text);
           $uibModalInstance.close();
       }
       this.text = "";
    }

angular
    .module('blocChat')
    .controller('UserNameCtrl', ['$cookies', '$uibModalInstance', UserNameCtrl]);
})();