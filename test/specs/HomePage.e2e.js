const HomePage = require('../pageobjects/home.page');
const SearchPage = require('../pageobjects/search.page');
const {defaultSearchUser}= require('../../test/helpers/data.helper');



describe ('Pagina de busqueda de Terapeutas', () => {

    beforeEach (() =>{
        browser.reloadSession();
        HomePage.open();
        //browser.pause(5000);
    })
        
    it ('Click en Buscar Sin Texto', () => {
        HomePage.SearchText();
        expect(browser).toHaveUrl(HomePage.EmptySearchUrl)
        });
        /* This test  below was created as extra 
        * can be covered with only this one. 
        * All others validate the same behavior but clicking on each button
        */
    it ('Click en Cualquier Especialidad: Obtiene el foco en la busqueda y cambia el placeholder', () => {
       
        HomePage.ClickSpecialityContainer();
        expect(HomePage.inputSearchTextbox).toBeFocused();
        expect(HomePage.inputSearchTextbox).toHaveAttr('placeholder',HomePage.ExpectedPlaceHolderValue);
        });
     
        /* Validating behaviour clicking on each button */

    it ('Click en Especialidad "Fisica" Obtiene el foco en la busqueda y cambia el placeholder', () => {
        HomePage.ClickPhisicalSpeciality();
        expect(HomePage.inputSearchTextbox).toBeFocused();
        expect(HomePage.inputSearchTextbox).toHaveAttr('placeholder',HomePage.ExpectedPlaceHolderValue);
        });
    
    it ('Click en Especialidad "Lenguage" Obtiene el foco en la busqueda y cambia el placeholder', () => {
        HomePage.ClickLanguageSpeciality();
        expect(HomePage.inputSearchTextbox).toBeFocused();
        expect(HomePage.inputSearchTextbox).toHaveAttr('placeholder',HomePage.ExpectedPlaceHolderValue);
        });   
   
    it ('Click en Especialidad "Ocupacional" Obtiene el foco en la busqueda y cambia el placeholder', () => {
        HomePage.ClickOcupationalSpeciality();
        expect(HomePage.inputSearchTextbox).toBeFocused();
        expect(HomePage.inputSearchTextbox).toHaveAttr('placeholder',HomePage.ExpectedPlaceHolderValue);
        });   
   
    it ('Busqueda de Texto: Maria y Confirma el resultado', () => {
      let TextToSearch = defaultSearchUser();
      HomePage.SearchText(TextToSearch.name);
      expect(browser).toHaveUrlContaining(SearchPage.SearchPageUrl);
      expect(SearchPage.searchResultNameContainer).toHaveTextContaining(TextToSearch.name)
  
    });
    
});


