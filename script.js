
const toggles = document.querySelectorAll(".faq-toggle")

toggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
toggle.parentNode.classList.toggle("active")
})   
})

// toggles.forEach((toggle) => {
//     toggle.addEventListener("click", () => {
//         toggle.parentNode.classList.remove("active");
//     toggle.parentNode.add("active");
//     })
// }) /*why doesn't this work as expected*/