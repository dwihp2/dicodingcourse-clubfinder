import "../component/search-bar.js";
import "../component/club-list.js";
import DataSource from "../data/data-source.js";

const main = () => {
    const searchElement = document.querySelector("search-bar");
    const clubListElement = document.querySelector("club-list");
    
    // //in promise form
    // const onButtonSearchClicked = () => {
    //     DataSource.searchClub(searchElement.value)
    //     .then(renderResult)
    //     .catch(fallbackResult)
    // }

    //in async/await form
    const onButtonSearchClicked = async () => {
        try {
            const result = await DataSource.searchClub(searchElement.value);
            renderResult(result);
        }
        catch (msg) {
            fallbackResult(msg);
        }
    }

    const renderResult = results => {
        clubListElement.clubs = results;
    };

    const fallbackResult = message => {
        clubListElement.renderError(message);
    };

    searchElement.clickEvent = onButtonSearchClicked;
};

export default main;