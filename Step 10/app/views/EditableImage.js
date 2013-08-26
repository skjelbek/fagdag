App.EditableImage = Ember.View.extend({    
    templateName: "editable-image",
    classNames: ["editable-image", "clearfix"],
    
    tempValue: null,
    isEditing: false,
    
    doubleClick: function () {
        this.set("tempValue", this.value);
        this.set("isEditing", true);
    },

    saveImage: function () {
        if (this.tempValue && this.tempValue.trim() !== "") {
            this.set("value", this.tempValue);
            this.get("controller.store").commit();
        }
        this.set("isEditing", false);
    },
    
    cancel: function() {
        this.set("isEditing", false);
    }
});