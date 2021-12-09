import { getStyles, setStyle } from "./database.js"

document.addEventListener("change", (event) => {
    const metalD = event.target.name;
    if (metalD === "style") {
        setStyle(parseInt(event.target.value));
    }
})

const styles = getStyles()

/*document.addEventListener(
    "change",
    (event) => {
    }
)*/

export const JewelryStyles = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = styles.map((styyle) => `<li><input type="radio" name="style" value="${styyle.id}" />${styyle.style}</li>`)


    // Join all of the strings in the array into a single string
    html += listItems.join(" ")

    html += "</ul>"
    return html
}

