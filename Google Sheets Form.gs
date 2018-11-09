function submit() {
    
  var ss = SpreadsheetApp.getActive();
  var spr = ss.getSheetByName('Register'); 
  var column = spr.getRange('B:B');
  var values = column.getValues();
  
  var ss1 = SpreadsheetApp.getActive();
  var spr1 = ss1.getSheetByName('Form'); 
  var column1 = spr1.getRange("C8:C14");
  var values1 = column1.getValues();
  
  //Fields Date, Department, Item, In or out, and Signature 1 are mandatory
  //Date 0 0, Department 1-0, Item 2-0, In 3-0, Out 4-0, Signature 1 5-0
  if(values1[0][0] != "" && values1[1][0] != "" && values1[2][0] != "" && values1[5][0] != "" && ( values1[3][0] != "" || values1[4][0] != "") ){
  
    var ct = 0;
	
    while ( values[ct][0] != "" ) {
	
		ct++;
	  
    }
    ct = ct+1;
    
    var sheet = SpreadsheetApp.getActiveSheet();
    sheet.getRange("C8:C14").copyTo(spr.getRange("A"+ct),SpreadsheetApp.CopyPasteType.PASTE_VALUES,true);
    
    var message="Form submited with success!\nIf necessary, confirm data in the register sheet.";
    SpreadsheetApp.getUi().alert(message);
    SpreadsheetApp.getActiveSheet().getRange(8, 3, 10, 1).clear({contentsOnly: true});
    
  } else{
    
    SpreadsheetApp.getUi().alert("Please configure all the mandatory fields:\nDate\nDepartment\nItem\nIn or Out\nSignature1");
    
  }
  
}