class Base {
    openPage(url){
        browser.url(url);
        return this;
    }
}
module.exports = Base