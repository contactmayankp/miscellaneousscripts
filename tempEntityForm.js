function OnLoad(executionContext) {
    var formContext = executionContext.getFormContext();
    //create or update form type then
    if (formContext.ui.getFormType() == 1 || formContext.ui.getFormType() == 2) {
        var ownerControl = formContext.getControl('ownerid');
        if (ownerControl.getEntityTypes().length > 1) {
            // Set entity type to team
            ownerControl.setEntityTypes(['team']);
            //alert(ownerControl.getEntityTypes().length);

            //set default view to display "My Owner Teams" (which will only show teams user been part of!)
            var defaultViewId = "00000000-0000-0000-00AA-000010001027";
            ownerControl.setDefaultView(defaultViewId);
        }

        //while Creating new record set default value to blank for user to pick correct team!
        if(formContext.ui.getFormType() == 1)
        {
            ownerControl.getAttribute().setValue(null);
        }
        
    }
}