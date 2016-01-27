({
	handleClickEvent : function(component, event, helper) {
		var pageTabs = component.find("pageTab");
        pageTabs.forEach(function(pageTab){
            if (event.getSource().getGlobalId() == pageTab.getGlobalId()){
                event.getSource().set("v.focus", true); 
            } else {
                pageTab.set("v.focus", false);
            }
        });
		  
	}
})