var Viera = require('./viera');

// create instance of module
var tv = new Viera('192.168.0.86');

// send command
tv.sendCommand("CHG_INPUT")
  .sendCommand("enter");

// you can also chain multiple methods
//tv.sendCommand("apps")
//  .sendCommand("down")
//  .sendCommand("enter")
//  .setVolume(25);

//tv.sendCommand("menu").sendCommand("right").sendCommand("enter");
