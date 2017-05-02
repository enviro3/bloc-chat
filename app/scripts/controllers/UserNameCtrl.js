(function() {
    function UserNameCtrl($cookies, $uibModalInstance){
       this.setUserName = function(){
           console.log("kiss");
           console.log(this.text);
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