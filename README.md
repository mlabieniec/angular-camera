### angular-camera
An angular directive to render a web camera with either getUserMedia (if available) or flash. Also provides an interface (thanks to https://github.com/cthayur/CamCapture) for taking snapshots through flash and rtc.

### Usage
Just include `'angular-camera'` in your angular application modules, than add to your html. Options are configurable in your controller and mimic options for CamCapture.

`<camera
	rtc="rtc"
	options="options"></camera>`

### Options
Options are sent directly to CamCapture, see demo/app.js for example. One thing to note is the location of the swf file. For most apps you should point to the location in your bower_components, i.e:

`relativeSwfLocation:"/bower_componets/angular-camera/cam.swf"`

Basically, where-ever the module is installed, cam.swf is located. You can also copy the swf file where ever you want and just point to it with the above option.