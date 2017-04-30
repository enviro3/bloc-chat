(function(){
    function MessageService($firebaseArray){
        var ref = firebase.database().ref().child("Messages"); //need to do orderByChild()
        var messages = $firebaseArray(ref);
        
        return {
            all: messages,
            getByRoomId: function (roomID){
                //console.log($firebaseArray(ref.orderByChild('roomID').equalTo(roomID)));
                return $firebaseArray(ref.orderByChild('roomid').equalTo(roomID));
                //return[{content:"helloworld", context:"west coast swing"}];
                //Filter the messages by their room ID 
                //use Firebase's equalTo() method to find all messages whose  roomId property is equal to the roomId in the argument
            }
        
        };
        
    }
    angular
        .module('blocChat')
        .factory('MessageService', ['$firebaseArray', MessageService]);
    
})();
