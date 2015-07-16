### angular-camera
An angular directive to render a web camera with either getUserMedia (if available) or flash. Also provides an interface (thanks to https://github.com/cthayur/CamCapture) for taking snapshots through flash and rtc.

### Usage
Just include `'angular-camera'` in your angular application modules, than add to your html. Options are configurable in your controller and mimic options for CamCapture.
	
#### Options
Options are sent directly to CamCapture, see demo/app.js for example. One thing to note is the location of the swf file. For most apps you should point to the location in your bower_components, i.e:

`relativeSwfLocation:"/bower_componets/angular-camera/cam.swf"`

Basically, where-ever the module is installed, cam.swf is located. You can also copy the swf file where ever you want and just point to it with the above option.
    
    $scope.options = {
    	// forces use of flash in all browsers
        forceFlash: false,
        
        // the location of the swf file (you can move it if you want)
        relativeSwfLocation:'/bower_components/angular-camera/cam.swf',
        
        // <video> to render html5 if available with getUserMedia
        videoSelector: '.webcam-live',
        
        // the div to render the flash object in 
        flashVideoSelector: ".webcam-flash",
        
        displayWidth: 320,
        displayHeight: 240,
        
        // delay to use when capturing with burst (interval)
        delay: {
            rtc: 200,
            flash: 50
        },
        
        // frames per second
        frames: {
            rtc: 12,
            flash: 12
        },
        
        // callbacks from either flash or getUserMedia
        camAccessSuccess: function () {
            console.log('user accepted');
            $scope.onReady();
        },
        camAccessError: function () {
            alert('user denied cam access');
            $scope.onReady();
        }
    };

#### HTML

The `<video class="webcam-live"></video>` and `<div class="webcam-flash"></div>` don't need to be in the directive, they can be anywhere in your html, as long as the options **videoSelector** and **flashVideoSelector** point to them in the options with their valid css selectors.
    <camera
	    rtc="rtc"
	    options="options">

	    <!-- This is where the HTML5 video will render if available with getUserMedia -->
	    <video class="webcam-live" ng-show="rtc.type !== 'FLASH'"></video>
        
        <!-- This is where Flash will render if WebRTC is N/A -->
        <div class="webcam-flash" ng-show="rtc.type === 'FLASH'"></div>
	
	</camera>