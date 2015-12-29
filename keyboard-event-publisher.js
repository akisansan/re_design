// keyboard-event-publisher.js
import EventEmitter from 'events'
import KeyStringDetector from 'key-string'

const eventEmitter = new EventEmitter();
const keyStringDetector = new KeyStringDetector();

document.addEventListener('keydown', (event) => {
  if (event.target === document.body) {
    eventEmitter.emit(keyStringDetector(event), event);
  }
});

export default eventEmitter;
