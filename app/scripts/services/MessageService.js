(function(){
    function MessageService($firebaseArray){
        var ref = firebase.database().ref().child("Messages"); 
        var messages = $firebaseArray(ref);
        
        /*var add = function(nameOfRoom){
            rooms.$add({$value: nameOfRoom}); */
       
        return {
            all: messages,
            getByRoomId: function (roomID){
                return $firebaseArray(ref.orderByChild('roomid').equalTo(roomID));
            },
            send: function(newMessage){
                messages.$add(newMessage);
    
                return newMessage;
        
            } 
            
        }
    }
    angular
        .module('blocChat')
        .factory('MessageService', ['$firebaseArray', MessageService]);
    
})();
