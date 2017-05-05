/* JavaScript content from script/aes/ngMaterial.js in folder common */

//var ipCon = "http://172.168.10.12:8080/Test/"
//var ipCon ="http://localhost/AksharLocator/";

var ipCon ="http://akshareveryneeds.com/AksharLocator/";
//var ipCon = "https://cybertreasuryuat.gujarat.gov.in/CTPMobileAppServer/";
var url = ipCon;//+ "/CTPMobileAppServer/";

// var url = "https://cybertreasuryuat.gujarat.gov.in/CTPMobileAppServer/";
// var urlValidate = url + "Login/validate";

var urlGetProfile = url + "MainController/getProfileData";
var urlValidate = url + "MainController/validateLogin";
var urlresisterUser = url + "MainController/resisterUser";
var urlUsersList = url + "MainController/getUserList";
var urlUpdateUserData = url + "MainController/updateUsersMpg";


var urlviewDataWithLoc = url + "MainController/getUserListWithLoc";
var urlviewDataOnMap = url + "MainController/getUserListWithLoc";
var urlviewHistory = url + "MainController/viewHistory";
var urlinsertLocationData = url + "MainController/insertLocationData";
var googleMApUrl= "https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyAurm217ki1y5qVV2F2CKLyPC0rE2mFx2Q&";



var urlUpdateProfile = url + "Login/updateProfile";
var urlLifeCerti = url + "Pension/life";
var urlPensionSlip = url + "Pension/pensionSlip";
var urlPensionCaseStatus = url + 'Pension/getPensionCaseStatus';
var urlPensionMonthlyEnquiry = url + 'Pension/generateMonthlyPensionSlip';
var urlPensionPerioDetails = url + 'Pension/getPensionSlipParaDtls'

var loginPpo;
var loginAcc;
var isLogin;
var userId;
var roleId;
var mobileNo;
var userList='';

 var config = {
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
                        }
                    }

                    var options = {
  enableHighAccuracy: true,
  timeout: 10000,
  maximumAge: 60000
};


IFMISMobileApp.controller('shishaCtrl', function ($scope, NgMap, $location,$http, $log, $mdToast,$interval, IP, $translate, $mdDialog) {

//$interval(alert("calling in 6 sec"),6000);

//$interval(callAtInterval, 60000); 


//kkkk location
 var callbackFn = function(location) {
	
	alert( location.latitude + ',' + location.longitude);
       // console.log('[js] BackgroundGeolocation callback:  ' + location.latitude + ',' + location.longitude);

       onSuccess(location);
 
        // Do your HTTP request here to POST location to your server. 
        // jQuery.post(url, JSON.stringify(location)); 
 
        /*
        IMPORTANT:  You must execute the finish method here to inform the native plugin that you're finished,
        and the background-task may be completed.  You must do this regardless if your HTTP request is successful or not.
        IF YOU DON'T, ios will CRASH YOUR APP for spending too much time in the background.
        */
        backgroundGeolocation.finish();
    };
 
    var failureFn = function(error) {
        console.log('BackgroundGeolocation error');
    };
 
    // BackgroundGeolocation is highly configurable. See platform specific configuration options 
    backgroundGeolocation.configure(callbackFn, failureFn, {
        desiredAccuracy: 10,
        stationaryRadius: 30,
        distanceFilter: 30,
        interval: 65000
    });
 
    // Turn ON the background-geolocation system.  The user will be tracked whenever they suspend the app. 
    backgroundGeolocation.start();

///



function callAtInterval() {
    $scope.myLogShow("Interval occurred");
   // alert("Interval occurred");
  //  navigator.geolocation.getCurrentPosition(onSuccess, onError,options);
}
function onSuccess(position) {
     
alert("success clling");
//alert(position.coords.latitude+" "+position.coords.longitude );
$scope.myLogShow(position.coords.latitude+" "+position.coords.longitude);
//callGoogleServices(position.coords.latitude,position.coords.longitude);
callGoogleServices(position.latitude,position.longitude);
  
    }
 function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }


function callGoogleServices(lat,lng)
    {
		alert(lat+" "+lng);

        userId= window.localStorage['userId'];
alert("userId="+userId);
        if(userId!='' && userId!=null && userId!=0)
        {

        
//alert("caling callGoogleServices");
$scope.myLogShow("caling callGoogleServices");
$scope.myLogShow("caling callGoogleServices"+lat+" "+lng);


      
$scope.address='';
                     var geocoder = new google.maps.Geocoder();
                var latlng = new google.maps.LatLng(lat, lng);
                geocoder.geocode({ 'latLng': latlng }, function (results, status) {
                    if (status == google.maps.GeocoderStatus.OK) {
                        if (results[1]) {
                          //  element.text(results[1].formatted_address);
                           // alert(results[1].formatted_address)
                           $scope.myLogShow(results[1].formatted_address);
                           $scope.address=results[1].formatted_address;


 var latLongData = $.param({
                        "mobileNo": mobileNo,
                        "latitude": lat,
                        "longitude":lng,
                        "lastAddress": results[1].formatted_address,
                        "userId":userId,
                    });
alert("latLongData"+latLongData);
                    $http.post(urlinsertLocationData, latLongData, config).success(function (data, status, headers, config) {


        
                   // $scope.addResult = data;
                    //$scope.myLogShow('Test >> get location by lat long Case :' + $scope.addResult);
                   
                   
                })
                    .error(function (data, status, header, config) {
                        $scope.myLogShow('Update Error LOG:', data);
                        
                    });


                        } else {
                            $scope.myLogShow('Location not found');
                             $scope.address='';
                            //alert("Location not found");
                        }
                    } else {

                        //alert('Geocoder failed due to: ' + status);
                        $scope.myLogShow('Geocoder failed due to: ' + status);
                         $scope.address='Not available';
                    }
                });

 
    }
    }

//alert("label_showHistoryOF" | $translate);

    isLogin = window.localStorage['isLogin'];
   userId= window.localStorage['userId'];
    roleId=window.localStorage['roleId'];
    mobileNo=window.localStorage['mobileNo'];
   // alert(isLogin+" "+userId+" "+roleId+" "+mobileNo);
    //var isLogin = 1;

$scope.changeLanguage = function (key) {
        $translate.use(key);
    };
 $scope.myLogShow = function (msg,val) {
      //  alert("calling ngMaterial");
    /*   if(val!=null && val!='')
       {
console.log(msg,val);
       }
       else
       {
console.log(msg);
       }
      */ 
    };


    $scope.goTo = function (e, x) {
      //  alert("goTo 250 ng");
        if (x != 'login') { }
        else {
            if (isLogin == "1") {
                $scope.goTo(this, 'viewHomePage');
            }
        }
        if (x === 'viewHomePage' && roleId=='4') {
           x='viewDataOnMap';
        }

        $location.path('/' + x);
        $log.debug(x);
    }


    $scope.goBack = function () {
        window.history.back();
    };

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
      //  alert("calling ngMaterial");
        isLogin = 0;
        window.localStorage['isLogin'] = 0;
        window.localStorage['userId'] = '';
        window.localStorage['roleId'] = '';
        window.localStorage['mobileNo'] = '';
        window.localStorage['isLogin'] = 0;
window.localStorage['childUserID']='';


userId=''
  
   
    roleId='';
    mobileNo='';          
        $scope.goTo(this, 'login');
    };

    $scope.openMenu = function ($mdOpenMenu, ev) {
        $mdOpenMenu(ev);
    };


  


    $scope.showIPConfigDialog = function (ev) {
        var confirm = $mdDialog.prompt()
            .placeholder('ip:port //Test')
            .targetEvent(ev)
            .ok('SET')
            .cancel('CANCEL');

        $mdDialog.show(confirm).then(function (result) {
            $scope.myLogShow(result);
            ipCon = result;
            window.localStorage['IP'] = result;
        }, function () {
        });
    };



})

    .controller('waitCtrl', ['$mdDialog', '$rootScope', function ($mdDialog, $rootScope) {
        $rootScope.$on("hide_wait", function (event, args) {
            $mdDialog.cancel();
        });
    }])

    .controller('loginCtrl', function ($scope,$location,NgMap, myutils, $filter, myutils, $http, $mdDialog, IP,$interval,$translate) {

       $scope.userId= window.localStorage['userId'];
    $scope.roleId=window.localStorage['roleId'];
    $scope.mobileNo=window.localStorage['mobileNo'];
    //alert(' $scope.userId='+ $scope.userId+" "+ $scope.roleId+" "+$scope.mobileNo);

      // $interval(alert("calling in 5 sec"),10000);


        $scope.loginUser = function (user) {
            if (angular.isUndefined(user) || angular.isUndefined(user.mobileNo)) {
                $scope.showValidationToast($filter('translate')('alert_enterMOb'));
            } else if (angular.isUndefined(user.password) || angular.isUndefined(user.password)) {
                $scope.showValidationToast($filter('translate')('alert_enterPWD'));
            } else {
                if (window.navigator.onLine) {
                    var requestdata = $.param({
                        "mobileNo": user.mobileNo,
                        "password": user.password,
                    });
                    $scope.myLogShow('=Test REQUEST >>>>>>>>>>>', requestdata);
                   
                   // $scope.myLogShow('=Test URL >>>>>>>>>>>', 'http://' + IP.IP + urlValidate);
                    $scope.isLoading = true;
                    myutils.showWait();
                   
                    var x2js = new X2JS();
                   // $scope.showValidationToast(urlValidate);
                    $http.post(urlValidate, requestdata, config).success(function (data, status, headers, config) {
                        $scope.isLoading = false;
                        myutils.hideWait();
                        $scope.myLogShow('=getting user data >>>>>>>', data);
                        $scope.uservO =data.userArray;
                   $scope.myLogShow('=getting user data >>>>>>>',    $scope.uservO);

                        //need to get role here
                       
                        if ($scope.uservO.loogedIn === true && $scope.uservO.activeFlag==1 && $scope.uservO.roleId!=5) {
                            window.localStorage['logindata'] = JSON.stringify(requestdata);
                            window.localStorage['isLogin'] = 1;
                              window.localStorage['userId'] =  $scope.uservO.userId;
                               window.localStorage['mobileNo']= $scope.uservO.mobileNo;

                               
                             isLogin = 1;
                             

                              window.localStorage['roleId'] = $scope.uservO.roleId;
                               $scope.mobileNo  =  $scope.uservO.mobileNo;
                            
             
                         
                            if( $scope.uservO.roleId==1)
                            {
                            $scope.goTo(this, 'viewHomePage');
                            }
                           else 
                           {
                              // alert("role id"+$scope.uservO.roleId);
                               window.localStorage['childUserID']= $scope.uservO.userId;

// insert location data while login user
$scope.onSuccess=function(position) {
     

//alert(position.coords.latitude+" "+position.coords.longitude );
$scope.myLogShow(position.coords.latitude+" "+position.coords.longitude);
$scope.callGoogleServices(position.coords.latitude,position.coords.longitude);
  
    }

  $scope.onError=function(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }

 navigator.geolocation.getCurrentPosition($scope.onSuccess,$scope.onError);

 

 $scope.callGoogleServices=function(lat,long)
    {
//alert("caling callGoogleServices");
$scope.myLogShow("caling callGoogleServices");
$scope.myLogShow("caling callGoogleServices"+lat+" "+long);


       
$scope.address='';
                     var geocoder = new google.maps.Geocoder();
                var latlng = new google.maps.LatLng(lat, long);
                geocoder.geocode({ 'latLng': latlng }, function (results, status) {
                    if (status == google.maps.GeocoderStatus.OK) {
                        if (results[1]) {
                          //  element.text(results[1].formatted_address);
                           // alert(results[1].formatted_address)
                           $scope.myLogShow(results[1].formatted_address);
                           $scope.address=results[1].formatted_address;


 $scope.latLongData = $.param({
                        "mobileNo": mobileNo,
                        "latitude": lat,
                        "longitude":long,
                        "lastAddress": results[1].formatted_address,
                        "userId": $scope.uservO.userId,
                    });


//$scope.myLogShow("latLongData=="+latLongData);
alert("adress"+$scope.address);
                    alert("latLongData"+$scope.latLongData);
$scope.myLogShow(urlinsertLocationData+""+$scope.latLongData);

                    
        $http.post(urlinsertLocationData, $scope.latLongData, config).success(function (data, status, headers, config) {

        alert('dat inserted');
        
                   // $scope.addResult = data;
                    
                   // $scope.myLogShow('Test >> get location by lat long Case :' + $scope.addResult);
                   
                   
                })
                    .error(function (data, status, header, config) {

                        alert("geeeting error");
                        alert("data="+data);
                        $scope.myLogShow('Update Error LOG:', data);
                       
                    });



                        } else {
                            $scope.myLogShow('Location not found');
                             $scope.address='';
                            //alert("Location not found");
                        }
                    } else {

                        //alert('Geocoder failed due to: ' + status);
                        $scope.myLogShow('Geocoder failed due to: ' + status);
                         $scope.address='Not available';
                    }
                });

               
             //   alert("window.localStorage['childUserID']"+window.localStorage['childUserID']);
             //$scope.insertLocationData($scope.latLongData);
                 if( $scope.uservO.roleId<4)
                     {
                            $scope.goTo(this, 'viewHomePage');
                        }
                        else
                        {
                             $scope.goTo(this, 'viewDataOnMap');
                        }
                 
    };
                //end




                                
                           }
                           
                        }
                        else if ($scope.uservO.loogedIn === true && $scope.uservO.activeFlag==1 && $scope.uservO.roleId==5) {

                        //$scope.showValidationToast('You are not configured in system Contact to admin');
                         $scope.showValidationToast( $filter('translate')('label_userNotConfig'));
                       
                        }


                         else if ($scope.uservO.loogedIn === true && $scope.uservO.activeFlag==0) {
                    $scope.showValidationToast( $filter('translate')('label_userNotAuth'));
                           
                        }
                        else {
                           // $scope.showValidationToast('Userid or Password incorrect');
                          $scope.showValidationToast( $filter('translate')('label_incorrectIdPwd'));
                        }
                       
                      
                    })
                        .error(function (data, status, headers, config) {
                            $scope.myLogShow('=Test  Error LOG>>>>', data);
                            $scope.isLoading = false;
                            myutils.hideWait();
                        });
                }
                else {
                 //   $scope.showValidationToast('Please check your internet connection.');
                 $scope.showValidationToast( $filter('translate')('label_checkNetConnection'));
                }
            }
        };

        $scope.insertLocationData=function(latLong)
        {
             $http.post(urlinsertLocationData,latLong, config).success(function (data, status, headers, config) {

       // alert('dat inserted by function');
        
                   // $scope.addResult = data;
                    
                   // $scope.myLogShow('Test >> get location by lat long Case :' + $scope.addResult);
                   
                   
                })
                    .error(function (data, status, header, config) {

                        alert("geeeting error function"+data);
                        $scope.myLogShow('Update Error LOG:', data);
                       
                    });

        }

        
        $scope.ManageEmployee=function(mobileNo,roleId,userId)
            {
/*var requestdata = $.param({
                        "mobileNo": mobileNo,
                        "roleId": roleId,
                        "userId":userId,
                    });*/

                    $location.path('/manageEmp');
                     //$location.path('/monthlyDtls');
                    // $scope.goTo(this, 'manageEmp');


            }

            

        $scope.regiUser = function (user) {
            if (angular.isUndefined(user) || angular.isUndefined(user.name)) {
                  $scope.showValidationToast($filter('translate')('alert_enterName'));
          
            }  else if (angular.isUndefined(user) || angular.isUndefined(user.mobileNo)) {
            $scope.showValidationToast($filter('translate')('alert_enterMOb'));
            } else if (angular.isUndefined(user) || angular.isUndefined(user.email)) {
                $scope.showValidationToast($filter('translate')('alert_enterEmailID'));
            } else if (angular.isUndefined(user) || angular.isUndefined(user.password)) {
                $scope.showValidationToast($filter('translate')('alert_enterPWD'));
            } else if (angular.isUndefined(user) || angular.isUndefined(user.cnfpassword)) {
                $scope.showValidationToast($filter('translate')('alert_enterCnfPwd'));
            } else if (user.password != user.cnfpassword) {
                $scope.showValidationToast($filter('translate')('alert_pwdCndSame'));
            }
            else {
                if (window.navigator.onLine) {
                   
                    var requestdata1 = $.param({
                        "name": user.name,
                       
                      
                        "mobileNo": user.mobileNo,
                     
                        "email": user.email,
                        "password": user.password,
                         "appCode":'123',
                       
                    });
                 /*   var config1 = {
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
                        }
                    }*/

                    $scope.myLogShow('Test Before Update:', requestdata1);
                    $scope.isLoading = true;
                    myutils.showWait();
                    var x2js = new X2JS();

                    $http.post(urlresisterUser, requestdata1, config).success(function (data, status, headers, config) {
                        $scope.myLogShow('resisterUser Log :', data);
                        //alert(data);
                      //  $scope.result = x2js.xml_str2json(data);
                        $scope.result = data;
                        $scope.myLogShow($scope.result);
                        $scope.isLoading = false;
                        myutils.hideWait();

                        if ($scope.result.result === 'success') {
                            //$scope.showValidationToast('Account Registered Successfully.');
                            $scope.showValidationToast($filter('translate')('alert_accRegistSucc'));
                            $scope.goTo(this, 'login');

                        }
                        else if($scope.result.result === 'mobileAvail' )
                        {
                            //$scope.showValidationToast('This Mobile Number already available');
                              $scope.showValidationToast($filter('translate')('alert_avialMobNUm'));
                        }
                         else {
                            //$scope.showValidationToast('Account Registeration Failed.');
                              $scope.showValidationToast($filter('translate')('alert_regFail'));
                        }
                    })
                        .error(function (data, status, header, config) {
                            $scope.myLogShow('Update Error LOG:', data);
                            $scope.isLoading = false;
                            myutils.hideWait();
                        });
                } else {
                   // $scope.showValidationToast('Please check your internet connection.');
                    $scope.showValidationToast( $filter('translate')('label_checkNetConnection'));
                }
            }
        };


        //chnges to get userlist with location
$scope.viewUserLocList=function(mobileNo,roleId,userId)
{
 $scope.goTo(this, 'viewUserLoctionUI');

}

   $scope.getLocationOfUser=function(userId)
    {
//alert('functions is calling');
      //   document.addEventListener("deviceready", onDeviceReady, false);
      var options = {
  enableHighAccuracy: true,
  timeout: 6000,
  maximumAge: 30000
};
      //navigator.geolocation.getCurrentPosition(onSuccess, onError,options);

    // Cordova is ready
    //
    /*function onDeviceReady() {
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }*/

    // onSuccess Geolocation
    //
    function onSuccess(position) {
     

alert(position.coords.latitude+" "+position.coords.longitude );


       
    }

    // onError Callback receives a [PositionError](PositionError/positionError.html) object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }

    }       

       
    }
  
    
    
    
    );


  
  

    



    

