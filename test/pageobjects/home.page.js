const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputSearchTextbox () { return $('#search-input') }
    get btnSearch () { return $('input.btn_search') }
    get specialityContainer () { return $('#custom-search-input label')};
    get lblPhisicalSpeciality () { return $('label[for=phisical]')};
    get lblLanguageSpeciality () { return $('label[for=language]')};
    get lblOcupationalSpeciality () { return $('label[for=ocupational]')};
    
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    //Add Input text and search  
    SearchText (TextToSearch) {
        this.inputSearchTextbox.click();
        this.inputSearchTextbox.setValue(TextToSearch);
        this.btnSearch.waitForClickable({ timeout: 5000 });
        this.btnSearch.click(); 
    }
    //Click on any Speciality Container 
     ClickSpecialityContainer() {
        this.specialityContainer.waitForClickable({ timeout: 5000 });
        this.specialityContainer.click();
     }

     //Click Física button
     ClickPhisicalSpeciality() {
        this.lblPhisicalSpeciality.waitForClickable({ timeout: 5000 }); 
        this.lblPhisicalSpeciality.click();
      }
      //Click Lenguage button
      ClickLanguageSpeciality() {
        this.lblLanguageSpeciality.waitForClickable({ timeout: 5000 }); 
        this.lblLanguageSpeciality.click();
      }
      //Click Ocupacional button
      ClickOcupationalSpeciality() {
        this.lblOcupationalSpeciality.waitForClickable({ timeout: 5000 }); 
        this.lblOcupationalSpeciality.click();
      }
    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('');
    }
}
module.exports = new HomePage();
