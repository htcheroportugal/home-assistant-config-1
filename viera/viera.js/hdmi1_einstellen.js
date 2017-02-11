var Viera = require('./viera');

// create instance of module
var tv = new Viera('192.168.0.86');

// send command
tv.sendCommand("CHG_INPUT");
tv.sendCommand("enter");
tv.sendCommand("cancle")
//tv.sendCommand("menu").sendCommand("right").sendCommand("enter");
