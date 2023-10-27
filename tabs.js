/* Wymagania techniczne:
komponent będzie można stworzyć za pomocą klasy lub funkcji np. new Tabs(container, config) lub createTabsComponent(container, config)
container to element html, do którego należy “wstrzyknąć” komponent zakładek
config to dowolny obiekt lub tablica na podstawie, której należy wygenerować komponent. Przykładowy schemat: 
const tabs = [ {label: string, content: string} ]
domyślnie aktywna jest pierwsza zakładka
komponent wyświetla się poprawnie na mobile oraz desktop */

function createTabsComponent(container, config) {
    let tabs = [];
    let tabMenu = document.createElement("div");
    tabMenu.setAttribute("class", "tab-menu");
    container.appendChild(tabMenu);

    if(Array.isArray(config)){
        for(let el of config){
            tabs.push(createTab(el.label, el.content));
        }
    }
    else {
        tabs.push(createTab(config.label, config.content));
    }

    for(let item of tabs){
        tabMenu.appendChild(item.tab);
        container.appendChild(item.content);
    }
}

function createTab(label, content){
    let tab = document.createElement("button");
    tab.setAttribute("class", "tab-item");
    tab.onclick = () => { setActiveTab(label) };
    tab.textContent = label;

    let tabContent = createTabContent(label, content);

    return {tab: tab, content: tabContent};
}

function createTabContent(label, content) {
    let tabContent = document.createElement("div");
    tabContent.setAttribute("class", "tab-content");
    tabContent.setAttribute("id", label);
    tabContent.textContent = content;
    
    return tabContent;
}

function setActiveTab(label) {
    console.log(label);
}