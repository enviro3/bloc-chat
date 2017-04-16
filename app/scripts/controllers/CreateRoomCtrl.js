(function() {
    function CreateRoomCtrl(Room, $uibModalInstance){
        this.rooms = Room.all; //transferring the array
        this.add = Room.add; 
        
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
        .controller('CreateRoomCtrl', ['Room','$uibModalInstance',CreateRoomCtrl]);
})();
