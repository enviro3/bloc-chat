(function(){
    function MessageService($firebaseArray){
        var ref = firebase.database().ref().child("Messages"); 
        var messages = $firebaseArray(ref);
        
        return {
            all: messages,
            getByRoomId: function (roomID){
        
                return $firebaseArray(ref.orderByChild('roomid').equalTo(roomID));
            }
        
        };
        
    }
    angular
        .module('blocChat')
        .factory('MessageService', ['$firebaseArray', MessageService]);
    
})();
