# Event-source

Simple event-handling module.

## Introduction

Can be used as a mixin:

    var EventSource = require('event-source');
    function MyEventSourceObject() {
      EventSource.call(this);
    }

or instantiated as its own object

    var EventSource = require('event-source');
    function MyOtherObject() {
      this.events = new EventSource();
    }

## API

### Set an event handler:

    MyEventSourceObject.on('testEvent', function() { ... });

or

    MyOtherObject.events.on('testEvent', function() { ... });

### Fire an event

    MyEventSourceObject.fire('testEvent', param1, param2... paramN);

(etc)

### Unset event handlers

#### Unset a single event handler

    var myHandler = function() { ... };
    ...
    MyEventSourceObject.off('testEvent', myHandler);

#### Unset all event handlers

    MyEventSourceObject.off('testEvent');