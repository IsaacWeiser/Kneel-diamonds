import { getSizes,setSize } from "./database.js"

//create event listener that listens for size change and adds it to the db
document.addEventListener("change", (event)=> {
    //determine if what you have clicked on is size
    if (event.target.name === "size") {
        //set value in the db
        setSize(event.target.value);
    }
})

const sizes = getSizes()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "size") {
            setSize(parseInt(event.target.value))
        }
    }
)

export const DiamondSizes = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = sizes.map(size => {
        return `<li>
            <input type="radio" name="size" value="${size.id}" /> ${size.carets}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}

