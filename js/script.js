

const html =  {
    links: [...document.querySelector(".tab-links").children],
    contents: [...document.querySelector(".tab-content").children],
    openTab: document.querySelector("[data-open]")
}

function TabNavigation() {
    function hidenItems() {
        html.contents.forEach(section => {
            section.style.display = "none"
        })
    }
    
    function removeItemsClass() {
        // Remove as classes ativas nos links
        html.links.forEach(tab => {
          tab.className = tab.className.replace(" active", "")
        })
    }
    
    
    function showCurrentItem(id) {
        // mostrar item ativo
        const tab = document.querySelector("#" + id)

        tab.style.display = "flex"
    }

    function selectTab(event) {
      hidenItems()
      removeItemsClass() 

        const target = event.currentTarget

        showCurrentItem(target.dataset.id)

        target.className += " active"

        
    }
    
    function listenChange() {
        // ouvir as mudanças que ocorrerão

        html.links.forEach(tab => {
            tab.addEventListener("click", selectTab)
        })
    }
    
    function init() {
        // inicia a aplicação
    
        hidenItems()
        listenChange()

        html.openTab.click()
    }
    
    return {
      init
    }
}

window.addEventListener("load", () => {
    let tabNavigation = TabNavigation()
    tabNavigation.init()
})