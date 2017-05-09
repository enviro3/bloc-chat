(function(){
    function RoomService($firebaseArray){
        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);
    
        var xadd = function(nameOfRoom){
            rooms.$add({$value: nameOfRoom});
        }
        return{
            all: rooms, 
            add: xadd
            
        };
    }
    
    angular
        .module('blocChat')
        .factory('RoomService', ['$firebaseArray', RoomService]);
})();
