(function() {
    function RoomCtrl(RoomService, $uibModal, MessageService){
        this.rooms = RoomService.all; //transferring the array
        this.add = RoomService.add;
    
        this.createPopUp = function(){
            var modalInstance = $uibModal.open({
                templateUrl: 'templates/CreateRoom.html',
                controller: 'CreateRoomCtrl',
                controllerAs: '$ctrl',
                size: "md",
            });   
        }
        
        this.selectRoom = function(room){
            this.currentRoom = room;
            this.messages = MessageService.getByRoomId(room.$id); 
        };
    }
       
    angular
        .module('blocChat')
        .controller('RoomCtrl', ['RoomService', '$uibModal', 'MessageService', RoomCtrl]);
})();
