/**
 * main is the entry point for Javascript programs.
 * @author { Sean Regan}
 */

function main()
{
  var stateOn;
  var stateOff;
  var eventOn;
  var eventOff;
  var eventswitch;
  var fsm;


  stateOnImage = new Image();
  stateOnImage.src = 'lightswitchOn.png';


  stateOffImage = new Image();
  stateOffImage.src = 'lightswitchOff.png';


  stateOn = new State("On", {
      width: 419,
      height: 408,
      image: stateOnImage
    });
  stateOff = new State("Off", {
      width: 419,
      height: 408,
      image: stateOffImage
    });

    eventSwitch = new Event("Switch", stateOn, stateOff, true)
    eventOn = new Event("Turn On", stateOff, stateOn, false)
    eventOff = new Event("Turn Off", stateOn, stateOff, false)

  fsm = new TwoStateTwoEvent(stateOn, stateOff, eventSwitch);

  document.getElementById("canvas").onclick = function() {fsm.changeState()};
}
