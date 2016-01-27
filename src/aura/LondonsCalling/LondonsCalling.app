<aura:application >
    <ltng:require styles="/resource/slds0121/assets/styles/salesforce-lightning-design-system.min.css"/>
    <aura:attribute access="private" name="pageTabs" type="Object[]" 
                    default="[{focus:'true', label:'Home', target:'c:WelcomePage'}, 
                              {label:'Schedule', target:'c:SchedulePage'}]"/>
    <aura:handler name="init" value="{!this}" action="{!c.doInit}"/>
    <aura:handler name="navigateToPage" event="c:NavigateToPage" action="{!c.navigateToPage}"/>
    <aura:registerEvent name="navigateToPage" type="c:NavigateToPage"/>
    <aura:dependency resource="markup://c:WelcomePage" type="COMPONENT"/>
    <aura:dependency resource="markup://c:SchedulePage" type="COMPONENT"/>
    <div class="slds">
        <div class="slds-grid slds-grid--align-spread">
            <div class="slds-col slds-m-around--large">
				<img src="/resource/lclogo"/>
            </div>
            <div class="slds-col slds-align-bottom ">
                <c:PageTabList pageTabs="{!v.pageTabs}"/>
            </div>
        </div>
		{!v.body}
    </div>
</aura:application>