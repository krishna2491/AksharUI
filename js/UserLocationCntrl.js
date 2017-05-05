

IFMISMobileApp.controller('UserLocationCntrl', function ($scope, NgMap,myutils,$filter,$http, $location, $log, $mdToast, IP, $translate, $mdDialog) {
    isLogin = window.localStorage['isLogin'];
   userId= window.localStorage['userId'];
    roleId=window.localStorage['roleId'];
    mobileNo=window.localStorage['mobileNo'];
    //alert(isLogin+" "+userId+" "+roleId+" "+mobileNo);
    //var isLogin = 1;
  
$scope.isLogin=isLogin;
$scope.userId=userId;
$scope.roleId=roleId;
$scope.mobileNo=mobileNo;
$scope.action=window.localStorage['action'];


 
$scope.myLogShow = function (msg,val) {
      //  alert("calling ngMaterial");
      /* if(val!=null && val!='')
       {
console.log(msg,val);
       }
       else
       {
console.log(msg);
       }*/
       
    };

    $scope.goBack = function () {
        window.history.back();
    };

     $scope.goTo = function (e, x) {
       //  alert("goTo 26 userLoc");
        if (x != 'login') { }
        else {
            if (isLogin == "1") {
                $scope.goTo(this, 'viewHomePage');
            }
        }
       

        $location.path('/' + x);
        $log.debug(x);
    }

    $scope.myLogShow(">> Test URL: ", $location.url());
    if ($location.url() != '' && $location.url() != '/login' && $location.url() != '/') {
    } else {
        if (isLogin == "1") {
            $scope.goTo(this, 'viewHomePage');
        }
    }

    $scope.showValidationToast = function (toastValidation) {
        $mdToast.show(
            $mdToast.simple()
                .content(toastValidation)
                .position('top right')
                .hideDelay(3000)
        );
    };
    $scope.myLogShow('>> isLOGIN: ', isLogin);
    if (angular.isUndefined(isLogin) || isLogin == '0') {
        $scope.goTo(this, 'login');
    }

    

    $scope.signOff = function () {
       // alert("calling userLocation");
       isLogin = 0;
        window.localStorage['isLogin'] = 0;
        window.localStorage['userId'] = '';
        window.localStorage['roleId'] = '';
        window.localStorage['mobileNo'] = '';
        window.localStorage['isLogin'] = 0;
        window.localStorage['childUserID']='';
    userId='';
    userList='';
  
   
    roleId='';
    mobileNo='';
      
          
        $scope.goTo(this, 'login');
    };



 


////changes for location
var requestdata = $.param({
                       
                        "roleId": roleId,
                        "userId":userId,
                       
                       
                        
                    });

                  
                $scope.myLogShow("loading data......"+requestdata);
                     $scope.isLoading = true;
                    myutils.showWait();

                    var x2js = new X2JS();
                     $http.post(urlviewDataWithLoc, requestdata, config).success(function (data, status, headers, config) {
                        $scope.isLoading = false;
                        myutils.hideWait();
                        $scope.myLogShow('=get userlist With location >>>>>>>', data);
                        
                    $scope.userLocList = data.result;
                    $scope.myLogShow( $scope.userLocList);
                      //$scope.myLogShow( $scope.userLocList.);
                    //alert('data='+data);
                        //need to get role here
                       
                        if ($scope.userLocList!='') {
                           $scope.dataFound=true; 
                         window.localStorage['parentUsrId']=$scope.userLocList.locadata1.parentUserId;
                         $scope.parentUserId=$scope.userLocList.locadata1.parentUserId;

                       //  alert($scope.parentUserId);
                           
                        }
                        else {
                            $scope.dataFound=false; 
                           // $scope.showValidationToast('Currently users are not available');
                             $scope.showValidationToast( $filter('translate')('alert_dataNotAvailble'));
                        }
                       
                     // alert("$scope.dataFound "+$scope.dataFound);
                    })
                        .error(function (data, status, headers, config) {
                            $scope.myLogShow('=Test  Error LOG>>>>', data);
                            $scope.isLoading = false;
                            myutils.hideWait();
                        });





$scope.refreshLoc=function(parentUserId)
{

    parentUserId=window.localStorage['parentUsrId'];
    //alert("parentUserId"+parentUserId+" window.localStorage['parentUsrId']");
var requestdata = $.param({
                       
                       
                        "userId":parentUserId,
                       
                       
                        
                    });

                  
                $scope.myLogShow("loading data......");
                     $scope.isLoading = true;
                    myutils.showWait();

                    var x2js = new X2JS();
                     $http.post(urlviewDataWithLoc, requestdata, config).success(function (data, status, headers, config) {
                        $scope.isLoading = false;
                        myutils.hideWait();
                        $scope.myLogShow('=get userlist With location >>>>>>>', data);
                        
                    $scope.userLocList = data.result;
                    $scope.myLogShow( $scope.userLocList);
                    //alert('data='+data);
                        //need to get role here
                       
                        if ($scope.userLocList!='') {
                            $scope.dataFound=true; 
                         window.localStorage['parentUsrId']=$scope.userLocList.locadata1.parentUserId;
                         $scope.parentUserId=$scope.userLocList.locadata1.parentUserId;
                           
                        }
                        else {
                            $scope.dataFound=false; 
                          //  $scope.showValidationToast('Currently users are not available');
                            $scope.showValidationToast( $filter('translate')('alert_dataNotAvailble'));
                          //  alert_dataNotAvailble
                        }
                       
                      
                    })
                        .error(function (data, status, headers, config) {
                            $scope.myLogShow('=Test  Error LOG>>>>', data);
                            $scope.isLoading = false;
                            myutils.hideWait();
                        });
}



///////





$scope.openChildDtls=function(usr)
{
    // $scope.myLogShow("User Object="+usr);
    // if(refresh!='yes' && usr.parentUserId!='')
    // {
    // usr.userId=usr.parentUserId;
    // }
    if(usr!='' &&  usr.userId!='' && usr.roleId!=4)
    {
         window.localStorage['parentUsrId']=usr.userId;
var requestdata = $.param({
                       
                      //  "roleId": usr.roleId,
                        "userId":usr.userId,
                       
                       
                        
                    });

                  
                $scope.myLogShow("loading data......");
                     $scope.isLoading = true;
                    myutils.showWait();

                    var x2js = new X2JS();
                     $http.post(urlviewDataWithLoc, requestdata, config).success(function (data, status, headers, config) {
                        $scope.isLoading = false;
                        myutils.hideWait();
                        $scope.myLogShow('=get userlist With location >>>>>>>', data);
                        
                    $scope.userLocList = data.result;
                    $scope.myLogShow( $scope.userLocList);
                    //alert('data='+data);
                        //need to get role here
                       
                        if ($scope.userLocList!='') {
                            
                           $scope.dataFound=true; 
                         
                           
                        }
                        else {
                              $scope.dataFound=false; 
                            //$scope.showValidationToast('Currently users are not available');
                              $scope.showValidationToast( $filter('translate')('alert_dataNotAvailble'));
                        }
                       
                      
                    })
                        .error(function (data, status, headers, config) {
                            $scope.myLogShow('=Test  Error LOG>>>>', data);
                            $scope.isLoading = false;
                            myutils.hideWait();
                        });



    }
    else if(usr.roleId==4)
    {
         //$scope.showValidationToast('You Reached at Lowest Level Employee'); 
           $scope.showValidationToast( $filter('translate')('alert_lstLevel'));
         
    }

}

$scope.showMap=function(usr)
{
    alert('map calling');
    window.localStorage['childUserID']=usr.userId;
     $scope.goTo(this, 'viewDataOnMap');
}

$scope.showHistory=function(usr)
{
    alert('History calling');
    window.localStorage['childUserID']=usr.userId;
     $scope.goTo(this, 'showHistory');
}

})

.controller('MapCtrl', function ($scope, NgMap,myutils,$filter,$http, $location, $log, $mdToast, IP, $translate, $mdDialog) {
    

//alert("map calling");



/// get data for mAp


 var userId=window.localStorage['childUserID'];
 var roleId=window.localStorage['roleId'];
// alert("userId--"+userId+" roleId "+roleId);
var requestdata = $.param({
                       
                      
                        "userId":userId,
                        "roleId": roleId,
                       
                        
                    });

              // var cities;   
            //  alert(requestdata);
                $scope.myLogShow("loading data map......");
                     $scope.isLoading = true;
                    myutils.showWait();

                    var x2js = new X2JS();
                     $http.post(urlviewDataWithLoc, requestdata, config).success(function (data, status, headers, config) {
                        $scope.isLoading = false;
                        myutils.hideWait();
                        $scope.myLogShow('=get userlist With location >>>>>>>', data.result);
                        
                    $scope.cities = data.result;
                    $scope.myLogShow( $scope.cities.locadata1);


/*angular.forEach(data.result, function(value, key) {
$scope.myLogShow(key + ': ' + value);
alert(value.userName);

});*/


                    //alert('data='+data);
                        //need to get role here
                       
                        if ($scope.cities!='') {
                            
                         var mapOptions = {
                  zoom: 4,
                 // center: new google.maps.LatLng($scope.cities[0].latitude,$scope.cities[0].longitude),
                  center: new google.maps.LatLng($scope.cities.locadata1.latitude,$scope.cities.locadata1.longitude),
                  mapTypeId: google.maps.MapTypeId.TERRAIN
              }

              $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

              $scope.markers = [];
              
              var infoWindow = new google.maps.InfoWindow();
              
              var createMarker = function (info){
                  
                  var marker = new google.maps.Marker({
                      map: $scope.map,
                      position: new google.maps.LatLng(info.latitude, info.longitude),
                      title: info.userName
                  });
                  marker.content = '<div class="infoWindowContent">' + info.mobileNo + '</div>';
                  
                  google.maps.event.addListener(marker, 'click', function(){
                      infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
                      infoWindow.open($scope.map, marker);
                  });
                  
                  $scope.markers.push(marker);
                  
              }  
             
            /*  for (i = 0; i < $scope.cities.length; i++){
                  createMarker($scope.cities[i]);
              }*/

$scope.map.setZoom(10);
              angular.forEach($scope.cities, function(value, key) {
                  createMarker(value);
        

});

              $scope.openInfoWindow = function(e, selectedMarker){
                  e.preventDefault();
                  google.maps.event.trigger(selectedMarker, 'click');
              }

         


                         
                           
                        }
                        else {
                            $scope.showValidationToast( $filter('translate')('alert_dataNotAvailble'));
                        }
                       
                      
                    })
                        .error(function (data, status, headers, config) {
                            $scope.myLogShow('=Test  Error LOG>>>>', data);
                            $scope.isLoading = false;
                            myutils.hideWait();
                        });



 })

 
 .controller('HistoryCntr', function ($scope, NgMap,$filter,myutils,$http, $location, $log, $mdToast, IP, $translate, $mdDialog) {


     var userId=window.localStorage['childUserID'];
 //alert("userId-----"+userId);
var requestdata = $.param({
                       
                      
                        "userId":userId,
                       
                       
                        
                    });

              // var cities;   
                $scope.myLogShow("loading History......");
                     $scope.isLoading = true;
                    myutils.showWait();

                    var x2js = new X2JS();
                     $http.post(urlviewHistory, requestdata, config).success(function (data, status, headers, config) {
                        $scope.isLoading = false;
                        myutils.hideWait();
                        $scope.myLogShow('=get History data >>>>>>>', data);
                        
                    $scope.userHistory = data.result;
                    $scope.myLogShow('kkk===log.......'+ $scope.userHistory);

                    if($scope.userHistory!='')
                    {
//$scope.HisUserName=$scope.userHistory[0].userName;
//$scope.HisUserMob=$scope.userHistory[0].userName;

$scope.HisUserName=$scope.userHistory.locadata1.userName;
$scope.HisUserMob=$scope.userHistory.locadata1.userName;


//$scope.onDate=$scope.userHistory[0].userName;
$scope.myLogShow($scope.HisUserName);
                    }
                    else{
                         // $scope.showValidationToast('Currently History Data are not available');
                           $scope.showValidationToast( $filter('translate')('alert_dataNotAvailble'));
                    }

                     })
                        .error(function (data, status, headers, config) {
                            $scope.myLogShow('=History  Error LOG>>>>', data);
                            $scope.isLoading = false;
                            myutils.hideWait();
                        });

                    //a


 });

///





   
              