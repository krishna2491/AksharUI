

IFMISMobileApp.controller('manageEmpCntr', function ($scope, NgMap,myutils,$http,$filter, $location, $log, $mdToast, IP, $translate, $mdDialog) {
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
       }
      */ 
    };

//alert("userList managEMp"+userList);
 //userList='';
if(userList!='')
{
$scope.userList =userList;
}


    $scope.goBack = function () {
        window.history.back();
    };

     $scope.goTo = function (e, x) {
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
        //alert("calling managEMp");
        isLogin = 0;
        window.localStorage['isLogin'] = 0;
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

 $scope.mapUser=function(mobileNo,roleId,userId,flag)
 {
     var action='';
if(flag=='admin')
{
action='MapAdmin';
}
else if(flag=='branch')
{
action='MapBranchAdmin';
}
else if(flag=='NormalUser')
{
action='NormalUser';

}

else{
action='deleteUsers';
}

//alert(action+"action ");
  window.localStorage['action']=action;

var requestdata = $.param({
                       
                        "roleId": roleId,
                        "userId":userId,
                        "action":action,
                    });

                  

                     $scope.isLoading = true;
                    myutils.showWait();

$scope.myLogShow('get userList data'+urlUsersList+" "+requestdata);
                     $http.post(urlUsersList, requestdata, config).success(function (data, status, headers, config) {
                        $scope.isLoading = false;
                        myutils.hideWait();
                        $scope.myLogShow('=Test Log >>>>>>>', data);
                        $scope.userList =data.result;
                         

                    $scope.myLogShow($scope.userList);
                    //alert('data='+data);
                        //need to get role here
                       
                        if ($scope.userList!=null && $scope.userList!='') {
                            
                         userList=$scope.userList;
                           $scope.goTo(this,'viewEmpLst');
                           
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
            
        
 }  

 $scope.UpdateUsers=function(dataList,action)
 {
     

     //var test='';
            var userIdArray ='';
            angular.forEach(dataList, function (value, key) {
                //alert(value+" "+ key);
                if (dataList[key].selected == dataList[key].userId) {
                   // userIdArray.push(dataList[key].selected);
                   if(userIdArray=='')
                   {
   userIdArray=dataList[key].selected;
                   }
                   else{
   userIdArray=userIdArray+","+dataList[key].selected;
                   }
                 
                }
            });
            $scope.myLogShow("userIdArray="+userIdArray);
if(userIdArray!=null && userIdArray!='')
{


var requestdata = $.param({
                       
                        "roleId": roleId,
                        "userId":userId,
                        "action":action,
                        "mpgLevel":action,
                        "userIdArray":userIdArray,
                    });

                  

                     $scope.isLoading = true;
                    myutils.showWait();
$scope.myLogShow(urlUpdateUserData+" "+requestdata);
                    var x2js = new X2JS();
                     $http.post(urlUpdateUserData, requestdata, config).success(function (data, status, headers, config) {
                        $scope.isLoading = false;
                        myutils.hideWait();
                        $scope.myLogShow('=update Log >>>>>>>', data);
                        
                    //$scope.result = x2js.xml_str2json(data);
                    $scope.result = data;
                    $scope.myLogShow($scope.result);
                    //alert('data='+data);
                        //need to get role here
                       
                        if ($scope.result.result!='' && $scope.result.result==='success' ) {
                            
                          //$scope.showValidationToast('Data Updation completed');alert_dataUpdated
                          $scope.showValidationToast( $filter('translate')('alert_dataUpdated'));
                           $scope.goTo(this,'manageEmp');
                           
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


window.localStorage['action']='';
}
else{

    alert("no record selectd");
}
            
            // if (userIdArray.length > 0)
            //     $scope.the_list = userIdArray.toString();
            // else
            //     $scope.the_list = 'Please choose an option';

                //alert($scope.the_list);
//$scope.myLogShow('final='+dataList);
 }


})