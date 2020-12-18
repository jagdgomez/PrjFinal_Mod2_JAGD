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
        SearchPage.ClickSpecialityButton(SpecialityLbls.phisicalBtnLbl);
        expect(browser).toHaveUrlContaining(searchPage.PhisicalSpecialityURL);
    });

    it ('Validacion de Filtros- Click en especialidad "Lenguage"', () => {
        let SpecialityLbls = SpecialityBtnLbls()
        SearchPage.ClickSpecialityButton(SpecialityLbls.languageBtnLbl);
        expect(browser).toHaveUrlContaining(searchPage.LanguageSpecialityURL);
    });

    it ('Validacion de Filtros- Click en especialidad "Ocupacional"', () => {
        let SpecialityLbls = SpecialityBtnLbls()
        SearchPage.ClickSpecialityButton(SpecialityLbls.ocupationalBtnLbl);
        expect(browser).toHaveUrlContaining(searchPage.OcupationalSpecialityURL);
    });

    it ('Busqueda de Texto "Maria" y Confirma el primer resultado de la lista', () => {
        let UserToSearch = defaultSearchUser();
        SearchPage.SearchText(UserToSearch.name);
        expect(browser).toHaveUrlContaining(SearchPage.SearchPageUrl);
        expect(SearchPage.resultsLblPlaceHolder).toHaveText(SearchPage.lblResultForTestUser)
        expect(SearchPage.searchResultNameContainer).toHaveTextContaining(UserToSearch.name)
    });

    it ('Al cambiar entre Mapa y Lista, el mapa desaparece de la pagina', () => {
        SearchPage.ToggleMapOrList();
        expect(SearchPage.MapContainer).not.toBeVisible();
        
    });
       
});


