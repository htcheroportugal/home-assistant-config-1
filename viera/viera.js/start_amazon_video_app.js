var Viera = require('./viera');

// create instance of module
var tv = new Viera('192.168.0.86');

// send command
tv.sendCommand("down")
tv.sendCommand("down")
tv.sendCommand("enter");
//tv.sendCommand("menu").sendCommand("right").sendCommand("enter");
