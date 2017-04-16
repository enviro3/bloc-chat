(function(){
    function Room($firebaseArray){
        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);
        console.log(rooms);
        
        var add = function(nameOfRoom){
            rooms.$add({$value: nameOfRoom});
        }
        return{
            all: rooms, 
            add: add
            
        };
    }
    
    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();
