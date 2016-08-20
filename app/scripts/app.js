'use strict'; 
angular.module("angularController",[]).controller("MenuController",['$scope',function($scope){
           $scope.filterText="";
           $scope.showDetails='false';
           $scope.setTab=1;
           $scope.dishes=[
                         {
                           name:'Uthapizza',
                           image: 'images/uthapizza.png',
                           category: 'mains',
                           label:'Hot',
                           price:'4.99',
                           description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.',
                           comment: ''
                        },
                        {
                           name:'Zucchipakoda',
                           image: 'images/zucchipakoda.png',
                           category: 'appetizer',
                           label:'',
                           price:'1.99',
                           description:'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce',
                           comment: ''
                        },
                        {
                           name:'Vadonut',
                           image: 'images/vadonut.png',
                           category: 'appetizer',
                           label:'New',
                           price:'1.99',
                           description:'A quintessential ConFusion experience, is it a vada or is it a donut?',
                           comment: ''
                        },
                        {
                           name:'ElaiCheese Cake',
                           image: 'images/elaicheesecake.png',
                           category: 'dessert',
                           label:'',
                           price:'2.99',
                           description:'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms',
                           comment: ''
                        }
                        ];
            
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

.controller('dishDetailController',['$scope',function($scope) {

            $scope.dish={
                          name:'Uthapizza',
                          image: 'images/uthapizza.png',
                          category: 'mains', 
                          label:'Hot',
                          price:'4.99',
                          description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.',
                           comments: [
                               {
                                   rating:5,
                                   comment:"Imagine all the eatables, living in conFusion!",
                                   author:"John Lemon",
                                   date:"2012-10-16T17:57:28.556Z"
                               },
                               {
                                   rating:4,
                                   comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
                                   author:"Paul McVites",
                                   date:"2014-09-05T17:57:28.556Z"
                               },
                               {
                                   rating:3,
                                   comment:"Eat it, just eat it!",
                                   author:"Michael Jaikishan",
                                   date:"2015-02-13T17:57:28.556Z"
                               },
                               {
                                   rating:4,
                                   comment:"Ultimate, Reaching for the stars!",
                                   author:"Ringo Starry",
                                   date:"2013-12-02T17:57:28.556Z"
                               },
                               {
                                   rating:2,
                                   comment:"It's your birthday, we're gonna party!",
                                   author:"25 Cent",
                                   date:"2011-12-02T17:57:28.556Z"
                               }
                               
                           ]
                    };
            
            
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
