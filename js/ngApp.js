
/* JavaScript content from script/aes/ngApp.js in folder common */

// Include app dependency on ngMaterial

var IFMISMobileApp = angular.module('IFMISMobile', ['ngMaterial', 'ngMessages', 'ngRoute', 'ngMap', 'ngSanitize', 'pascalprecht.translate', 'yaru22.angular-timeago'])
  .controller("IFMISMobileCtrl", function () {

  });
var monthwiseDtlsVo = '';
var globalYearList = '';
var globalPeriodList = '';
var globalYear = '';
var globalPeriod = '';
var montlySlipList = '';
IFMISMobileApp.directive('schrollBottom', function () {
  return {
    scope: {
      schrollBottom: "="
    },
    link: function (scope, element) {
      scope.$watchCollection('schrollBottom', function (newValue) {
        if (newValue) {
          $(element).scrollTop($(element)[0].scrollHeight);
        }
      });
    }
  }
});


IFMISMobileApp.factory('IP', function () {
  return {
    ipCon: (angular.isUndefined(window.localStorage['IP']) ||
      window.localStorage['IP'] == '' ||
      window.localStorage['IP'] == 'undefined')
      ? ipCon
      : window.localStorage['IP']
  };
});

IFMISMobileApp.service('myutils', myutils);
myutils.$inject = ['$mdDialog', '$rootScope'];
function myutils($mdDialog, $rootScope) {
  return {
    hideWait: hideWait,
    showWait: showWait
  }

  function hideWait() {
    $rootScope.$emit("hide_wait");
  }

  function showWait() {
    $mdDialog.show({
      controller: 'waitCtrl',
      template: '<md-dialog id="plz_wait" style="background-color:transparent;box-shadow:none;height:200px;">' +
      '<div layout="row" layout-sm="column" layout-align="center center" aria-label="wait">' +
      '<img src="images/balls.svg"/>' +
      '</div>' +
      '</md-dialog>',
      parent: angular.element(document.body),
      clickOutsideToClose: true,
      fullscreen: false
    })
      .then(function (answer) {
      });
  }
}



IFMISMobileApp.config(function ($routeProvider, $locationProvider, $translateProvider, $compileProvider) {
  $routeProvider
    .when('/login', {
      templateUrl: 'views/login.html'
    })
    .when('/register', {
      templateUrl: 'views/register.html'
    })
    .when('/viewuserprofile', {
      templateUrl: 'views/viewuserprofile.html'
    })
    .when('/changePass', {
      templateUrl: 'views/changePass.html'
    })
    .when('/deleteAcc', {
      templateUrl: 'views/deleteAccount.html'
    })
    .when('/lifeCertificate', {
      templateUrl: 'views/lifeCertificate.html'
    })
    .when('/pensionSlip', {
      templateUrl: 'views/pensionSlip.html'
    })
    .when('/monthlySlip', {
      templateUrl: 'views/monthlySlip.html',
    })
    .when('/showHistory', {
      templateUrl: 'views/showHistory.html',
    })
    .when('/viewDataOnMap', {
      templateUrl: 'views/ViewMap.html',
    })
    .when('/viewUserLoctionUI', {
      templateUrl: 'views/viewUsereLocation.html',
    })
    .when('/viewEmpLst', {
      templateUrl: 'views/EmployeeList.html',
    })
    .when('/manageEmp', {
      templateUrl: 'views/manageEmployee.html',
    })
     .when('/viewHomePage', {
      templateUrl: 'views/HomePage.html',
    })
    
    .otherwise({
      redirectTo: '/login'
    });

  $translateProvider.translations('en', {
    TITLE: 'Hello',
    FOO: 'This is a paragraph.',
    BUTTON_LANG_EN: 'English',
    //  BUTTON_LANG_GU: 'Gujarati',    
    BUTTON_LANG_GU: 'ગુજરાતી',
    //  BUTTON_LANG_HI: 'Hindi',    
    BUTTON_LANG_HI: 'हिंदी',

    //Login
    Login: 'Login',
    Cancel: 'Cancel',

    
    Log_Off: 'Log Off',

// changes for Akshr

label_mobileNO:'Mobile No',
  Label_Email: 'Email',
   Label_search: 'Search',
   Label_password: 'Password',
   Label_cnfpassword:'Confirm Password',
   Label_resister:'Register',
    Label_fulName:'Full Name',
    label_UserRegistration:'User Register',
   label_manageEmp:'Manage Employee',
   label_MapAdmin:'Map Admin',
   label_deleteUser:'Delete User',
   label_MapBranchAdmin:'Map Branch Admin',
   label_viewEmp:'View Employee Location',
   label_save:'Save',
   label_MapEmplyee:'Map Employee',
    Label_Address: 'Address',
    Label_AppName:'Akshar Locator System',
    Label_toMngAdmin:'You can Map These employee as Admin',
    Label_toMngBranchAdmin:'You can Map These employee as Branch Admin',
    Label_toDeleteEmp:'You can Delete Employee',
    label_showHistoryOF:'You are looking History of-',
    label_userNotConfig:'You are not configured in system Contact to admin',
    label_userNotAuth:'You are not Authorized in system Contact to admin',

     label_incorrectIdPwd:'Userid or Password incorrect',
      label_userNotAuth:'You are not Authorized in system Contact to admin',
     label_checkNetConnection:' Please check your internet connection.',
     alert_enterMOb:'Please enter your mobileNO',
     alert_enterPWD:'Please enter your Password',
     alert_enterName:'Please enter your name.',
     alert_enterEmailID:'Please enter your email',
     alert_enterCnfPwd:'Please enter your confirmation password',
     alert_pwdCndSame:'Password and Confrim Password should match.',
    alert_accRegistSucc: 'Account Registered Successfully.',
     alert_avialMobNUm:'This Mobile Number already available',
     alert_regFail:'Account Registeration Failed.',
     alert_dataNotAvailble:'Currently users are not available',
     alert_lstLevel:'You Reached at Lowest Level Employee',
     alert_dataUpdated:'Data Updation completed'
    

  });

  $translateProvider.translations('hi', {
    TITLE: 'Kem Cho',
    FOO: 'This is a paragraph.',
    //    BUTTON_LANG_GU: 'गुजराती',
    BUTTON_LANG_GU: 'ગુજરાતી',
    //    BUTTON_LANG_EN: 'अंग्रेज़ी',
    BUTTON_LANG_EN: 'English',
    BUTTON_LANG_HI: 'हिंदी',

    Login: 'लॉगइन',
    Cancel: 'कैनसल',

    
     Log_Off: 'लॉग ऑफ',


label_mobileNO:'मोबाइल नहीं है',
  Label_Email: 'ईमेल',
   Label_search: 'खोज',
   Label_password: 'पासवर्ड',
   Label_cnfpassword:'पासवर्ड की पुष्टि कीजिये',
   Label_resister:'रजिस्टर',
    Label_fulName:'पूरा नाम',
    label_UserRegistration:'उपयोगकर्ता रजिस्टर',
   label_manageEmp:'कर्मचारी प्रबंधित करें',
   label_MapAdmin:'मानचित्र व्यवस्थापक',
   label_deleteUser:'उपयोगकर्ता हटाएं',
   label_MapBranchAdmin:'मैप शाखा एडमिन',
   label_viewEmp:'कर्मचारी स्थान देखें',
   label_save:'बचाना',
   label_MapEmplyee:'मानचित्र कर्मचारी',
    Label_Address: 'पता',
    Label_AppName:'अक्षर लोकेटर सिस्टम',
    Label_toMngAdmin:'आप इन कर्मचारियों को प्रशासन के रूप में देख सकते हैं',
    Label_toMngBranchAdmin:'आप इन कर्मचारियों को शाखा व्यवस्थापक के रूप में देख सकते हैं',
    Label_toDeleteEmp:'आप कर्मचारी हटा सकते हैं',
    label_showHistoryOF:'आप का इतिहास देख रहे हैं-',
    label_userNotConfig:'आप सिस्टम से कॉन्फ़िगर नहीं किए जाते हैं व्यवस्थापक से संपर्क करें',
    label_userNotAuth:'आप व्यवस्थापक से सिस्टम संपर्क में अधिकृत नहीं हैं',
     label_incorrectIdPwd:'यूजरिड या पासवर्ड गलत',
      label_userNotAuth:'आप व्यवस्थापक से सिस्टम संपर्क में अधिकृत नहीं हैं',
     label_checkNetConnection:' कृपया अपने इंटरनेट कनेक्शन की जाँच करें।',
     alert_enterMOb:'कृपया अपना मोबाइल दर्ज करें',
     alert_enterPWD:'अपना पासवर्ड दर्ज करें',
     alert_enterName:'अपना नाम दर्ज करें।',
     alert_enterEmailID:'अपना ईमेल दर्ज करें',
     alert_enterCnfPwd:'कृपया अपना पुष्टिकरण पासवर्ड दर्ज करें',
     alert_pwdCndSame:'पासवर्ड और कॉन्फ़िगर पासवर्ड मैच होना चाहिए।',
    alert_accRegistSucc: 'खाते की सफलतापूर्वक पंजीकरण।',
     alert_avialMobNUm:'यह मोबाइल नंबर पहले ही उपलब्ध है',
     alert_regFail:'खाता पंजीकरण करना विफल।',
     alert_dataNotAvailble:'वर्तमान में उपयोगकर्ता उपलब्ध नहीं हैं',
     alert_lstLevel:'आप निम्न स्तर के कर्मचारी में पहुंचे',
     alert_dataUpdated:'डेटा अद्यतन पूर्ण'




  });

  
  $translateProvider.preferredLanguage('en');
  $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|file|blob):|data:image\//);

});
