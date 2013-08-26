App.DoorbellButton = Ember.View.extend({
    classNames: ["doorbell"],
    classNameBindings: ["active"],

    action: null,
    onStopped: null,
    delay: 100,
    active: false,

    _timer: null,
    
    mouseDown: function () {
        this.set("active", true);
        var that = this;
        this._timer = setInterval(function() {
            that.get("controller").send(that.action);
        }, this.delay);
    },
    
    mouseUp: function () {
        this.stop();
    },
    
    mouseLeave: function() {
        this.stop();
    },
    
    stop: function() {
        this.set("active", false);
        clearInterval(this._timer);
        if (this.onStopped) this.get("controller").send(this.onStopped);
    }

});