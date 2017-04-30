(function() {
    function RoomCtrl(RoomService, $uibModal, MessageService){
        this.rooms = RoomService.all; //transferring the array
        this.add = RoomService.add;
        //this.messages = MessageService.all;
    
        this.createPopUp = function(){
            var modalInstance = $uibModal.open({
                templateUrl: 'templates/CreateRoom.html',
                controller: 'CreateRoomCtrl',
                controllerAs: '$ctrl',
                size: "md",
            });   
        }
        //console.log(this.messages); //need help reading this
        
        //var RoomCtrl = this;  //had assistance with this part; complex concept 
        //this.rooms.$loaded().then(function(rooms){
           //RoomCtrl.currentRoomTitle = rooms[0].$value;  //QUESTION FOR RICHARD 
        //})
        this.selectRoom = function(room){
            this.currentRoom = room;
            this.messages = MessageService.getByRoomId(room.$id); //don't know how to get the data
            //WHERE DOES $id COME FROM????
            //console.log(room);
            console.log(this.messages);
        };
       
    
    }
       
    angular
        .module('blocChat')
        .controller('RoomCtrl', ['RoomService', '$uibModal', 'MessageService', RoomCtrl]);
})();
