(function() {
    function RoomCtrl(Room, $uibModal){
        this.rooms = Room.all; //transferring the array
        this.add = Room.add;
        this.createPopUp = function(){
            var modalInstance = $uibModal.open({
                templateUrl: 'templates/CreateRoom.html',
                controller: 'CreateRoomCtrl',
                controllerAs: '$ctrl',
                size: "md",
              
            });   
        }
        

        
        
        
        
        //this.roomData = Room;
        //console.log(Room.all);
        //console.log(Room.all[0]);
    }
    
    angular
        .module('blocChat')
        .controller('RoomCtrl', ['Room', '$uibModal', RoomCtrl]);
})();
