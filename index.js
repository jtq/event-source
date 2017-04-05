module.exports = function EventSource() {

  this._events = {};

  this.on = function(type, handler) {
    this._events[type] = this._events[type] || [];
    this._events[type].push(handler);
  };

  this.fire = function(type) {
    var args = Array.prototype.slice.call(arguments, 1);  // Knock type parameter off any additional arguments
    (this._events[type] || []).forEach(function(cb) {
      cb.apply(cb, args);
    });
  };

  this.off = function(type, handler) {
    var cbs = this._events[type] || [];
    for(var i = 0; i < cbs.length; i++) {
      if(!handler || cbs[i] === handler) {
        cbs.splice(i, 1);
        i--;
      }
    };
  };

};