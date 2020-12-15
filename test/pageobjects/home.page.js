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
    SearchText (TextToSearch) {
        this.inputSearchTextbox.setValue(TextToSearch);
        this.btnSearch.click(); 
    }
     ClickSpecialityContainer() {
        this.specialityContainer.click();
     }
     ClickPhisicalSpeciality() {
        this.lblPhisicalSpeciality.click();
      }
      ClickLanguageSpeciality() {
        this.lblLanguageSpeciality.click();
      }
      ClickOcupationalSpeciality() {
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
