({
	doInit : function(component, event, helper) {
        
        component.set("v.modal", component.find("newEventModal"));
        helper.getEvents(component);
		helper.newEventInstance(component);
	},
    
    openModal : function(component, event, helper){ 
        
        component.get("v.modal").open();
    },

    insertNewEvent : function(component, event, helper){
        
        if(helper.isNewEventValid(component)){
			helper.insertEvent(component);
        }
    },
    
    cancelNewEvent : function(component, event, helper){
        
        helper.newEventInstance(component);
        helper.resetForm(component.find("newEventForm"));
        component.get("v.modal").close();
    },
    
    handleSortEvent : function(component, event, helper){
        
        var orderBy = event.getParam("columnName");
        orderBy += (event.getParam("sortDescending")) ? " DESC"  : " ASC";
        component.set("v.orderBy", orderBy);
        helper.getEvents(component);
    },
    
    deleteSelectedEvents : function(component, event, helper){
        
        helper.deleteEvents(component);
    }
})