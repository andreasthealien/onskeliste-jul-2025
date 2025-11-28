const listContainer = document.getElementById("onskeliste");

const Element = (display, link) => {
    if (link) {
        return {
            display: display,
            link: link
        }
    } else {
        return {
            display: display
        }
    }
};

// Listen
const list = [
    Element("Seven Brief Lessons on Physics", "https://www.ark.no/produkt/boker/dokumentar-og-faktaboker/seven-brief-lessons-on-physics-9780141981727?gad_source=1&gad_campaignid=22902937865&gbraid=0AAAAAD22RQGySERJGwiK5loTZP6tokcgT&gclid=Cj0KCQiAiqDJBhCXARIsABk2kSnvxOiTqOgPgRuWb-JzH2LAvEMi2jFgkK1lBn6CM4UPvTTn1T5eRDQaAoDREALw_wcB"),
    Element("The Righteous Mind", "https://www.norli.no/boker/dokumentar-og-fakta/historie-og-dokumentar/the-righteous-mind?gad_source=1&gad_campaignid=22316185389&gbraid=0AAAAADsxdPBcpXlmPpgamTbfiTS-jYIHJ&gclid=Cj0KCQiAiqDJBhCXARIsABk2kSmIMWonFGT6I2JJZ6uQcMPKdNKCwDImTOQQ7-SxuQY-80x4Swr2-qgaAoAvEALw_wcB"),
    Element("Powerbank", "https://www.elkjop.no/product/mobil-nettbrett-og-smartklokker/mobiltilbehor/powerbank/belkin-boostcharge-pro-20k-powerbank-for-barbar-pc-sort/866724"),
    Element("Penger (for sparing til f.eks. bil)")
];

const createElement = (obj) => {
    const new_li_element = document.createElement('li');

    if ("link" in obj) {
        const new_a_element = document.createElement('a');
        new_a_element.setAttribute("href", obj.link);
        new_a_element.setAttribute("target", "_blank");
        new_a_element.innerText = obj.display;
        new_li_element.appendChild(new_a_element);
    } else {
        new_li_element.innerText = obj.display;
    };

    return new_li_element;
};

list.forEach((item) => {
    listContainer.appendChild(createElement(item));
});