({
	doInit : function(component, event, helper) {

	},
    
    handleClickEvent : function(component, event, helper) {
		
        if (event.getSource) {
            // handling a framework component event
            if (event.getSource().getLocalId() == "selectAll"){
                var selected = event.getSource().get("v.value");
                component.find("dataTableRow").forEach(function(dataTableRow){
                    dataTableRow.set("v.selected", selected);
                });
                
            } else {
                component.set("v.selectAll", false);
            }
            component.set("v.selectedRows", helper.getSelected(component));
        }

    }
})