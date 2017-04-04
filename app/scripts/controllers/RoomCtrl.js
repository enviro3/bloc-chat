(function() {
    function RoomCtrl(Room){
        this.roomData = Room;
        console.log(Room.all);
        console.log(Room.all[0]);
    }
    
    angular
        .module('blocChat')
        .controller('RoomCtrl', ['Room', RoomCtrl]);
})();
