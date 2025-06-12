const EventEmitter=require ('node:events');
class MyEmitter extends EventEmitter{}
const myEmitter =new MyEmitter();

/*EventEmitter is a core Node.js class provided by the events module. It enables objects to emit named events and allows other parts of your code to listen for and respond to those events. This pattern is fundamental in Node.js, supporting its asynchronous and event-driven architecture
Emitting Events: You use the .emit() method to trigger (emit) an event.
Listening to Events: You use the .on() method to register a callback (listener) that will be called whenever the event is emitted.
*/

myEmitter.on('event1',()=>{
    console.log('an event occured!');
})
myEmitter.emit('event1');

//asynchronous behavior
myEmitter.on('event2',(a,b)=>{
    setImmediate(()=>{
        console.log('this happens asynchronously')
    })
})
myEmitter.emit('event2')

//Using the eventEmitter.once() method, it is possible to register a listener that is called at most. Once the event is emitted, the listener is ignored.


//error handling-if eventEmitter does not have at least one listener register for the error event the error will be thrown
myEmitter.on('error', (err) => {
  console.error('whoops! there was an error');
});
myEmitter.emit('error', new Error('whoops!'));

/*
Normally, if you attach an async function as an event listener and it throws an error or returns a rejected promise, that rejection is not automatically handled by the EventEmitter. This can lead to unhandled promise rejections and potentially crash your application

When captureRejections is enabled (either per instance or globally via events.captureRejections = true), EventEmitter will automatically route any promise rejections from async listeners to the 'error' event handler, or to a special rejection handler if defined.

This means you can catch errors from async listeners using the standard 'error' event, making error handling consistent and preventing unhandled rejections
*/
// EventEmitter.captureRejections=true;
// myEmitter.on('event3',async()=>{
//     throw new Error('kaboom');
// });
// myEmitter.on('error',(err)=>{
//     console.log('caught error:',err.message);
// })
// myEmitter.emit('event3');

//emitter.emit(evenName[,args])-Synchronously calls each of the listeners registered for the event named eventName, in the order they were registered, passing the supplied arguments to each.
myEmitter.on('event',function firstListener(){
    console.log('Hellow firstlistener');
})
myEmitter.on('event',function secondListener(arg1,arg2){
    console.log(`event with parameters ${arg1},${arg2} in second listener`)
})
myEmitter.on('event',function thirdListener(...args){
    const parameters=args.join(',');
    console.log(`event with parameters ${parameters} in third listener`)
})
console.log(myEmitter.listenerCount('event'));

myEmitter.emit('event',1,2,3,4,5);

//.on() adds listeners to the end of the listener array (called in order added).
//.prependListener() adds listeners to the beginning (called first).

const callbackA = () => {
  console.log('A');
  myEmitter.removeListener('event', callbackB);
};

const callbackB = () => {
  console.log('B');
};

myEmitter.on('event', callbackA);

myEmitter.on('event', callbackB);

// callbackA removes listener callbackB but it will still be called.
// Internal listener array at time of emit [callbackA, callbackB]
myEmitter.emit('event');
// Prints:
//   A
//   B

// callbackB is now removed.
// Internal listener array [callbackA]
myEmitter.emit('event');
// Prints:
//   A