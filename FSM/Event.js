class Event
{
    constructor(id, state1, state2, twoWay)
    {
      this.id = id;
      this.firstState = state1;
      this.secondState = state2;
      this.twoWay = twoWay; // Boolean to say if state can be changed back using this event
    }

    transition(state)
    {
      // First state to second
      if(state.name === this.firstState.name)
      {
        console.log(this.firstState.name + " to " + this.secondState.name);
        return this.secondState;
      } // Second state to first if it is a two way event
      else if(state.name === this.secondState.name && this.twoWay)
      {
        console.log(this.secondState.name + " to "  + this.firstState.name);
        return this.firstState;
      } // Error can't transition this way
      else if (this.twoWay === false)
      {
        console.log("Transition error! Can't transition backwards (" + this.secondState.name + " to " + this.firstState.name + ")");
        return state;
      }
      else // Error state not found
      {
        console.log("Transition error! " + state.name + " not found in event " + this.id);
        return state;
      }
    }
}
