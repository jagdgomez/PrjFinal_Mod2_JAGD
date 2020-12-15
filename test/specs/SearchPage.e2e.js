const SearchPage = require('../pageobjects/search.page');
const {SpecialityBtnLbls, defaultSearchUser} = require('../../test/helpers/data.helper');
const searchPage = require('../pageobjects/search.page');


describe('Pagina de Resultados de Busqueda', () => {

    beforeEach (() =>{
        //browser.reloadSession();
        SearchPage.open();

    })
        
    it ('Validacion de Filtros- Click en especialidad "Fisica"', () => {
        let SpecDetls = SpecialityBtnLbls()
        SearchPage.SpecialityButton(SpecDetls.phisicalBtnLbl).click();
        expect(browser).toHaveUrlContaining(searchPage.PhisicalSpecialityURL);
    });

    it ('Validacion de Filtros- Click en especialidad "Lenguage"', () => {
        let SpecDetls = SpecialityBtnLbls()
        SearchPage.SpecialityButton(SpecDetls.languageBtnLbl).click();
        expect(browser).toHaveUrlContaining(searchPage.LanguageSpecialityURL);
    });

    it ('Validacion de Filtros- Click en especialidad "Ocupacional"', () => {
        let SpecDetls = SpecialityBtnLbls()
        SearchPage.SpecialityButton(SpecDetls.ocupationalBtnLbl).click();
        expect(browser).toHaveUrlContaining(searchPage.OcupationalSpecialityURL);
    });

    it ('Busqueda de Texto "Maria" y Confirma el primer resultado de la lista', () => {
        let TextToSearch = defaultSearchUser();
        SearchPage.SearchText(TextToSearch.name);
        expect(browser).toHaveUrlContaining(SearchPage.SearchPageUrl);
        expect(SearchPage.resultsLblPlaceHolder).toHaveText('Mostrando 1 de 1 resultados')
        expect(SearchPage.searchResultNameContainer).toHaveTextContaining(TextToSearch.name)
    });

    it ('Al cambiar entre Mapa y Lista, el mapa desaparece de la pagina', () => {
        SearchPage.ToggleMapOrList();
        expect(SearchPage.MapContainer).not.toBeVisible();
        
    });
       
});


