'use strict'; 
angular.module("angularController").controller("MenuController",['$scope','menuFactory',function($scope,menuFactory){
           $scope.filterText="";
           $scope.showDetails='false';
           $scope.setTab=1;
           $scope.dishes=menuFactory.getdishes();
            
            $scope.select=function(setTab){
                $scope.setTab=setTab;
                switch(setTab){
                    case 1:
                        $scope.filterText='';
                        break;
                    case 2:
                        $scope.filterText='mains';
                        break;
                    case 3:
                        $scope.filterText='appetizer';
                        break;
                    case 4:
                        $scope.filterText='dessert';
                        break;
                    default:
                        break;
                }    
            };
            $scope.toggleDetails=function(){
                $scope.showDetails=!$scope.showDetails;
            };
            $scope.isSelected=function(setTab){
                return $scope.setTab===setTab;
            };
        }])
.controller('ContactController',['$scope',function($scope){
    $scope.feedback={firstname:'',
                     lastname:'',
                     agree:false,
                     mychannel:'',
                     email:''
                    };
    $scope.channels=[{value:'tel',label:'tel'},{value:'Email',label:'Email'}];
    $scope.invalidchannelselection=false;
}])

.controller('FeedbackController',['$scope',function($scope){
    $scope.submit=function(){
         console.log($scope.feedback);
                                if ($scope.feedback.agree && ($scope.feedback.mychannel === "")&& !$scope.feedback.mychannel) {
                                    $scope.invalidchannelselection = true;
                                    console.log('incorrect');
                                  }else{
                                  $scope.invalidchannelselection = false;
                                  $scope.feedback = {mychannel:"", firstName:"", lastName:"",
                                  agree:false, email:"" };
                                  $scope.feedback.mychannel="";
                                  $scope.feedbackform.$setPristine();
                                  console.log($scope.feedback);
                                  }
                                  };
}])

.controller('dishDetailController',['$scope','menuFactory','$routeParams',function($scope,menuFactory,$routeParams){

            $scope.dish=menuFactory.getdish(parseInt($routeParams.id,10));
            $scope.criteria='';
            $scope.val='';
            $scope.passVal=function(){
                $scope.criteria=$scope.val;
            };
        }])
.controller('FormController',['$scope',function($scope){
    $scope.formval={
        author:'',
        rating:'',
        comment:'',
        date:''
    };
    $scope.invalidcheck=false;
    $scope.commentSubmit=function(){
        console.log($scope.formval);
        if($scope.formval.rating==''){
            $scope.invalidcheck=true;
            console.log('incorrect');
        }else{
            var currentDate=new Date();
            var year=currentDate.getFullYear();
            var month=currentDate.getMonth()+1;
            var date=currentDate.getDate();
            var hour=currentDate.getHours();
            var minute=currentDate.getMinutes();
            var sec=currentDate.getSeconds();
            var milsec=currentDate.getMilliseconds();
            $scope.formval.date=year+'-'+month+'-'+date+'T'+hour+':'+minute+':'+sec+'.'+milsec+'Z';
            $scope.dish.comments.push($scope.formval);
            $scope.invalidcheck=false;
            $scope.formval={
        author:'',
        rating:'',
        comment:'',
        date:''
    };
            $scope.formVal.$setPristine();
            console.log($scope.formval);
        }
    };
}])
;
