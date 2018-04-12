angular.module('userControllers', [])

.controller('regUser', function($http, $location, $timeout) {

    var notification = this;

    this.regUser = function(regData) {
        notification.loading = true;
        notification.errorMsg = false

        $http.post('/api/users', this.regData).then(function(data) {
            if (data.data.success) {
                notification.loading = false;
                notification.successMsg = data.data.message + ' redirecting...';

                $timeout(function() {
                    $location.path('/enter');
                }, 2000)
            } else {
                notification.loading = false;
                notification.errorMsg = data.data.message;
            }
        });
    };
});







// angular.module('userControllers', ['userServices'])

// .controller('regCtrl', function($location, $timeout, User) {

//     var notification = this;

//     this.regUser = function(regData) {
//         notification.loading = true;
//         notification.errorMsg = false

//         User.create(notification.regData.then(function(data) {
//             if (data.data.success) {
//                 notification.loading = false;
//                 notification.successMsg = data.data.message + ' redirecting...';

//                 $timeout(function() {
//                     $location.path('/enter');
//                 }, 2000)
//             } else {
//                 notification.loading = false;
//                 notification.errorMsg = data.data.message;
//             }
//         }));
//     };
// });