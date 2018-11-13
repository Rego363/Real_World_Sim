class NStateMEvent
{
  constructor(id, state)
  {
    this.id = id;
    this.currentState = state;
    this.states = {};
    this.allEvents = {};
    this.availableEvents = {};
  }

  addState(state)
  {
    this.states.append(state);
  }

  addEvent(event)
  {
    this.allEvents.append(event);
  }

  updateAvailableEvents()
  {
    this.availableEvents = {};
    for (var i = 0; i < this.allEvents.length; i++) {
      if(this.allEvents[i].firstState.name === this.currentState.name)
      {
        this.availableEvents.append(this.allEvents[i]);
      }
      else if(this.allEvents[i].secondState.name === this.currentState.name && this.allEvents[i].twoWay)
      {
        this.availableEvents.append(this.allEvents[i]);
      }
    }
    console.log(this.availableEvents);
  }

  changeState(event)
  {
    this.currentState = event.transition(this.currentState);
  }

  update()
  {
    this.currentState.update()
  }

  draw()
  {
    this.currentState.draw()
  }

}
