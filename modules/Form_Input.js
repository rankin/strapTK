/* Sprocket Manifest
 *= require Panel
 */
var FormInput = Panel.extend(
    /** @lends FormInput# */
    {
      initialize : function(args) {
        FormInput.__super__.initialize.call(this, args);

        this.setDefaultValue("", "placeholder", "name", "value");
        this.setDefaultValue("text", "type");
        this.base = "input";
        Typify(this);
      },

      template : _.template("<input <%= rootAttrs %> />"),

      listAttributes : function() {
        return FormSelect.__super__.listAttributes.call(this, "type", "placeholder", "name", "value");
      }
    },
    /** @lends FormInput */
    {
      klass: "FormInput",
      types:  [
                "button", "checkbox", "color", "date", "datetime", "datetime-local", "email", "file", "hidden", "image", "month",
                "number", "password", "radio", "range", "reset", "search", "submit", "tel", "text", "time", "url", "week"
              ]
    });