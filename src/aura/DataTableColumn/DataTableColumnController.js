({
    fireSortEvent : function(component, event, helper) {
        
        //Toggle Sort Order (Ascending/Descending)
        var sortDescending = component.get("v.sortDescending");
        sortDescending = ($A.util.isUndefined(sortDescending) || sortDescending) ? false : true;
		component.set("v.sortDescending", sortDescending);
        
        //Fire Event
        var columnName = event.srcElement.getAttribute("data-column-name");
        var sortEvent = component.getEvent("sortEvent");
        sortEvent.setParam("columnName", columnName);
        sortEvent.setParam("sortDescending", component.get("v.sortDescending"));
        sortEvent.fire();
    }
})