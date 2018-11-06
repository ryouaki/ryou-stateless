const listener = {};

function subscribe (event, handle) {
  if (typeof event !== 'string') {
    throw new Error('event must be String!');
  }
  if (typeof handle !== 'function') {
    throw new Error('handle must be function!');
  }

  if (!listener[event]) {
    listener[event] = [];
    listener[event].push(handle);
  } else {
    var index = listener[event].indexOf(handle);
    if (index < 0) {
      listener[event].push(handle);
    }
  }

  return function unSubscribe() {
    var index = listener[event].indexOf(handle);
    if (index > -1) {
      listener[event].splice(index, 1);
    }
  }
}

function dispatch (event, payload) {
  if (listener[event]) {
    listener[event].forEach(function serviceFunc(handle) {
      handle(payload);
    })
  } else {
    throw new Error('No subscriber be registried for serviceName!');
  }
}

export {
  subscribe,
  dispatch
}
