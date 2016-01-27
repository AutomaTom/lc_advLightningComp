({
    rerender : function(component, helper){
        if(component.get("v.focus") || component.get("v.mouseover")){
            var anchorClass = component.get("v.anchorStyleClass") + " " + component.get("v.mouseoverStyleClass");
            component.set("v.anchorClass", anchorClass)
        } else {
            var anchorClass = component.get("v.anchorStyleClass") + " " + component.get("v.mouseoutStyleClass");
            component.set("v.anchorClass", anchorClass)
        }
        return this.superRerender();
    }
})