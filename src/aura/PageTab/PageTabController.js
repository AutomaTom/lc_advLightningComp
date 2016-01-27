({
    doInit : function(component, event, helper) {
        if(component.get("v.focus")){
            var anchorClass = component.get("v.anchorStyleClass") + " " + component.get("v.mouseoverStyleClass");
            component.set("v.anchorClass", anchorClass)
        }
    },
    
	handleClickEvent : function(component, event, helper) {
        
        var navigateToPageEvent = component.getEvent("navigateToPage");
        navigateToPageEvent.setParams({
            "pageComponent" : component.get("v.target")
        });
        navigateToPageEvent.fire();
        var tabClickEvent = component.getEvent("tabClick");
        tabClickEvent.fire();
	},
    
	handleMouseoutEvent : function(component, event, helper) {
        component.set("v.mouseover", false);
	},
    
	handleMouseoverEvent : function(component, event, helper) {
        component.set("v.mouseover", true);
	}
})