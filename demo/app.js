'use strict';

angular.module('angularCameraDemo', [
    'angular-camera'
])
.controller('ctrl', function($scope) {

    var interval = undefined;

    $scope.options = {
        forceFlash: false,
        videoSelector: '.webcam-live',
        flashVideoSelector: ".webcam-flash",
        displayWidth: 320,
        displayHeight: 240,
        delay: {
            rtc: 200,
            flash: 50
        },
        frames: {
            rtc: 12,
            flash: 12
        },
        camAccessSuccess: function () {
            console.log('user accepted');
            $scope.onReady();
        },
        camAccessError: function () {
            alert('user denied cam access');
            $scope.onReady();
        }
    };

    $scope.onReady = function() {
        console.log('camera is ready with ' + $scope.rtc.type);
    };

    $scope.capture = function() {
        $scope.rtc.capture(function (data) {
            $('#result').append('<div class="imgs" style="display: inline;"><img src="' + data + '"></img></div>');
        });
    };

    $scope.burst = function() {
        clearInterval(interval);
        $('#result').html('<img id="loopImage"/>');

        $scope.rtc.captureBurst(function (data) {
            var i = 0;

            interval = setInterval(function () {
                $('#loopImage').attr('src', data[i]);
                i += 1;

                if (i === (options.frames.flash - 1)) {
                    i = 0;
                }
            }, 200);
        });
    };

    $scope.$watch('rtc',function(rtc) {
        console.log('rtc: ',rtc);
    });
});