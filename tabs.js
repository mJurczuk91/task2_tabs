/* Wymagania techniczne:
komponent będzie można stworzyć za pomocą klasy lub funkcji np. new Tabs(container, config) lub createTabsComponent(container, config)
container to element html, do którego należy “wstrzyknąć” komponent zakładek
config to dowolny obiekt lub tablica na podstawie, której należy wygenerować komponent. Przykładowy schemat: 
const tabs = [ {label: string, content: string} ]
domyślnie aktywna jest pierwsza zakładka
komponent wyświetla się poprawnie na mobile oraz desktop */

let tabs = [];

function createTabsComponent(container, config) {
    let tabMenu = document.createElement("div");
    tabMenu.setAttribute("class", "tab-menu");
    let content = document.createElement("div");
    content.setAttribute("id", "tab-content");
    content.setAttribute("class", "tab-content");

    container.append(tabMenu, content);

    if(Array.isArray(config)){
        for(let el of config){
            tabs.push(createTab(el.label, el.content));
        }
    }
    else {
        tabs.push(createTab(config.label, config.content));
    }

    for(let item of tabs){
        tabMenu.appendChild(item.label);
    }

    setActiveTab(tabs[0].label.textContent);
}

function createTab(label, content){
    let tabLabel = document.createElement("div");
    tabLabel.setAttribute("class", "tab-item");
    tabLabel.onclick = () => { setActiveTab(label) };
    tabLabel.textContent = label;

    let tabContent = createTabContent(label, content);

    return {label: tabLabel, content: tabContent};
}

function createTabContent(content) {
    let tabContent = document.createElement("div");
    tabContent.setAttribute("class", "tab-content");
    tabContent.textContent = content;
    
    return tabContent;
}

function setActiveTab(label) {
    let contentContainer = document.getElementById("tab-content");
    contentContainer.innerHTML = "";
    for(let tab of tabs){
        if(tab.label.textContent !== label){
            tab.label.setAttribute("class", "tab-item");
        } else {
            tab.label.setAttribute("class", "tab-item active");
            contentContainer.appendChild(tab.content);
        }
    }
}