const Page = require('./page');


/**
 * sub page containing specific selectors and methods for a specific page
 */
class SearchPage extends Page {

    SearchPageUrl = 'search'
    PhisicalSpecialityURL='sp=phisical'
    LanguageSpecialityURL='sp=language'
    OcupationalSpecialityURL='sp=ocupational'
    specialityPlaceHolder = '//a[text()="[SpecialityName]"]';

    /**
     * define selectors using getter methods-- switch-field, a.selected 
     */
    get inputSearchTextbox () { return $('input.form-control') }
    get btnSearch () { return $('input[value="Buscar"]') }
    get resultsLblPlaceHolder () { return $('div.col-md-6 h4') }
    get searchResultNameContainer () { return $('div.col-lg-7 h3') }
    get btnToggleMapOrList () { return $('div.layout_view') }
    get MapContainer () { return $('col-lg-5, #sidebar') }
    
    /** 
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    SpecialityButton (Speciality) {
         return $(this.specialityPlaceHolder.replace('[SpecialityName]',Speciality))
    }

    SearchText (TextToSearch) {
        this.inputSearchTextbox.setValue(TextToSearch);
        this.btnSearch.click();
    }
    ToggleMapOrList () {
        this.btnToggleMapOrList.click();
    }


     /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('search');
    }
}
module.exports = new SearchPage();
