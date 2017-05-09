(function() {
    function RoomCtrl(RoomService, $uibModal, MessageService, $cookies){
        this.rooms = RoomService.all; //transferring the array
        this.add = RoomService.add;
        this.text = "";
        
        this.send = function(){
            var message = {
                content: this.text,
                sentAt: Date.now(),
                username: $cookies.get('blocChatCurrentUser'),
                roomid: this.currentRoom.$id
            };
            if(this.text === ""){
               return;
            }
            MessageService.send(message);
            this.text = "";
        }
        
            
    
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
        .controller('RoomCtrl', ['RoomService', '$uibModal','MessageService','$cookies', RoomCtrl]);
})();
