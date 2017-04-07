(function() {
    function RoomCtrl(Room){
        this.rooms = Room.all; //transferring the array
        //this.roomData = Room;
        //console.log(Room.all);
        //console.log(Room.all[0]);
    }
    
    angular
        .module('blocChat')
        .controller('RoomCtrl', ['Room', RoomCtrl]);
})();
