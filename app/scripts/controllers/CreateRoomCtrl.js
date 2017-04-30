(function() {
    function CreateRoomCtrl(RoomService, $uibModalInstance){
        this.rooms = RoomService.all; //transferring the array
        this.add = RoomService.add; 
        
        this.ok = function () {
            if(this.text === ""){
                return;    
            }
            this.add(this.text);
            $uibModalInstance.close();
    
        };

        this.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };
        
        this.text = "";
    }
    
    angular
        .module('blocChat')
        .controller('CreateRoomCtrl', ['RoomService','$uibModalInstance',CreateRoomCtrl]);
})();
