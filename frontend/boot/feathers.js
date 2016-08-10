import io from 'socket.io-client';
import feathers from 'feathers/client';
import socketio from 'feathers-socketio/client';
import hooks from 'feathers-hooks';
import authentication from 'feathers-authentication/client';

// Configure Feathers client through socket.io
const socket = io();
export default feathers()
  .configure(socketio(socket))
  .configure(hooks())
  .configure(authentication({storage: window.localStorage}))
