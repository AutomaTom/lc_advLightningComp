({
	getEvents : function(component) {
        
        var action = component.get("c.getEvents");
        action.setParam("orderBy", component.get("v.orderBy"));
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (component.isValid() && state === "SUCCESS") {
                component.set("v.events", response.getReturnValue());
            }
        });
        $A.enqueueAction(action);
	},
    
    newEventInstance : function(component) {
        
		component.set("v.newEvent", {
            sobjectType: "Event",
            Subject: "",
            Description: "",
            StartDateTime: null,
            EndDateTime: null
		});
    },
    
    insertEvent : function(component){
        
        var helper = this;
		var action = component.get("c.insertEvent");
        action.setParam("event", component.get("v.newEvent"));
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (component.isValid() && state === "SUCCESS") {
                component.get("v.modal").close();
                helper.newEventInstance(component);
                helper.resetForm(component.find("newEventForm"));
                helper.getEvents(component);
            }
        });
        $A.enqueueAction(action);  
    },
    
    deleteEvents : function(component){
        
        var helper = this;
		var action = component.get("c.deleteEvents");
        action.setParam("events", component.get("v.selectedEvents"));
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (component.isValid() && state === "SUCCESS") {
                helper.getEvents(component);
            }
        });
        $A.enqueueAction(action);  
    },
    
    isNewEventValid : function(component){
        
        var isValid = true;
        var newEvent = component.get("v.newEvent");
        
        //Validation Rules
        if(newEvent.Subject.length == 0){
            component.find("Subject").addError("This field is required");
            isValid = false;
        } else {
            component.find("Subject").clearError();
        }
        
        if(!newEvent.StartDateTime){
            component.find("StartDateTime").addError("This field is required");
            isValid = false;
        } else {
            component.find("StartDateTime").clearError();
        }
        
        if(!newEvent.EndDateTime){
            component.find("EndDateTime").addError("This field is required");
            isValid = false;
        } else {
            component.find("EndDateTime").clearError();
        }
        
        return isValid;
    },
    
    resetForm : function(component){
        
        component.get("v.body").forEach(function(formElement){
            formElement.clearError();
        });
    }
})