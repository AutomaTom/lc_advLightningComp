({
	getSelected : function(component){
    	var events = [];
        component.find("dataTableRow").forEach(function(dataTableRow){
            if(dataTableRow.get("v.selected")){
                events.push(dataTableRow.get("v.row"));
            }
        });
        return events;
	}
})