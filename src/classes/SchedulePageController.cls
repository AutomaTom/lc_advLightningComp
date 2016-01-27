public class SchedulePageController {

    @AuraEnabled
    public static Event[] getEvents(String orderBy) {
        String soql = 'SELECT Id, Subject, Description, StartDateTime, EndDateTime FROM Event';
        soql += (String.isNotBlank(orderBy)) ? ' ORDER BY ' + orderBy : ''; 
        soql += ' LIMIT 10'; 
        return(Event[])Database.query(soql);
    }
    
    @AuraEnabled
    public static void insertEvent(sObject event) {
        insert event;
    }
    
    @AuraEnabled
    public static void deleteEvents(sObject[] events) {
        delete events;
    }
}