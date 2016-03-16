import promise from 'redux-promise';

export const START_TIMER = 'START_TIMER';
export function startTimer() {
  return {
    type: START_TIMER
  }
}

export const UPDATE_TIMER = 'UPDATE_TIMER';
export function updateTimer() {
  return {
    type: UPDATE_TIMER
  }
}

export const STOP_TIMER = 'STOP_TIMER';
export function stopTimer() {
  return {
    type: STOP_TIMER
  }
}

function timerIsOn(state) {
  return state.videoTimer && state.videoTimer.running;
}

export function initializeTimer(updateInterval = 1000) {
  return (dispatch, getState) => {
    var interval = setInterval(function(){
      let state = getState();
      if(state) {
        if (timerIsOn(state)) {
          dispatch(updateTimer());
        }
        else {
          clearInterval(interval);
        }
      }
    }, updateInterval);

    dispatch(startTimer(interval));
  };
}
