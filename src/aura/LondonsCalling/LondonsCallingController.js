({
    doInit : function(component, event, helper) {
        //When initialising the app we want to default to the Welcome Page
        var navigateToPageEvent = component.getEvent("navigateToPage");
        navigateToPageEvent.setParam("pageComponent","c:WelcomePage");
        navigateToPageEvent.fire();
    },
    
	navigateToPage : function(component, event, helper) {
		//Create the Component that we've been instructed to navigate to
        //and assign to the pageComponent attribute on the App  
        var pageComponent = event.getParam("pageComponent");
        if (pageComponent){
            $A.createComponents([[pageComponent,{}]],
                function(newPageComponents, status, statusMessagesList){
                    component.set("v.body", newPageComponents);
                });
    	}
	},
})