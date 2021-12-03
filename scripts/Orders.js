import { getOrders, addCustomOrder, getMetals } from "./database.js"

const metals = getMetals()
const order =getOrders();

// Remember that the function you pass to find() must return true/false
const foundMetal = metals.find(
    (metal) => {
        return metal.id === order.metalId
    }
)
const totalCost = foundMetal.price


const buildOrderListItem = (order) => {
    
    return `<li>
        Order #${order.id} was placed on ${order.timestamp}
    </li>`
}

export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}

document.addEventListener("click", (event)=>{
    if(event.target.id === "orderButton")
    {
        addCustomOrder();
    }
})

