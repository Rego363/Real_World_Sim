class TwoStateTwoEvent {
  constructor(state1, state2, event1, event2)
  {
    this.currentState = state1;
    this.firstState = state1;
    this.secondState = state2;
    this.firstEvent = event1;
    if(event2 != undefined && event1.twoWay == false)
    {
      this.secondEvent = event2;
    }
    this.currentState.draw();
  }

  changeState()
  {

    if(this.currentState === this.secondState && this.secondEvent != undefined && this.firstEvent.twoWay === false)
    {
      this.currentState = this.secondEvent.transition(this.currentState)
    }
    else
    {
      this.currentState = this.firstEvent.transition(this.currentState)
    }

    this.currentState.draw();
  }

  update()
  {
      this.currentState.update();
  }

  draw()
  {
    this.currentState.draw();
  }
}
