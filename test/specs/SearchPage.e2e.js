const SearchPage = require('../pageobjects/search.page');
const {SpecialityBtnLbls, defaultSearchUser} = require('../../test/helpers/data.helper');
const searchPage = require('../pageobjects/search.page');


describe('Pagina de Resultados de Busqueda', () => {

    before (() =>{
       browser.reloadSession();
       SearchPage.open();
    })
        
    it ('Validacion de Filtros- Click en especialidad "Fisica"', () => {
        let SpecialityLbls = SpecialityBtnLbls()
        SearchPage.SpecialityButton(SpecialityLbls.phisicalBtnLbl).waitForClickable({ timeout: 10000 });
        SearchPage.SpecialityButton(SpecialityLbls.phisicalBtnLbl).click();
        expect(browser).toHaveUrlContaining(searchPage.PhisicalSpecialityURL);
    });

    it ('Validacion de Filtros- Click en especialidad "Lenguage"', () => {
        let SpecialityLbls = SpecialityBtnLbls()
        SearchPage.SpecialityButton(SpecialityLbls.languageBtnLbl).waitForClickable({ timeout: 10000 });
        SearchPage.SpecialityButton(SpecialityLbls.languageBtnLbl).click();
        
        expect(browser).toHaveUrlContaining(searchPage.LanguageSpecialityURL);
    });

    it ('Validacion de Filtros- Click en especialidad "Ocupacional"', () => {
        let SpecialityLbls = SpecialityBtnLbls()
        SearchPage.SpecialityButton(SpecialityLbls.ocupationalBtnLbl).click();
        SearchPage.SpecialityButton(SpecialityLbls.ocupationalBtnLbl).waitForClickable({ timeout: 10000 });
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


