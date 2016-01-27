({
	doInit : function(component, event, helper) {
        var row = component.get("v.row");
        var column = component.get("v.column").get("v.name");
        var isDrilldown = component.get("v.column").get("v.isDrilldown");
        
        component.set("v.value", row[column]);
        component.set("v.isDrilldown", isDrilldown);
	}
})