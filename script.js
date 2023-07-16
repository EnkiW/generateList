let docTitle = document.title;
window.addEventListener("blur", () => {
    document.title = "Come Back ;(";
});
window.addEventListener("focus", () => {
    document.title = docTitle;
})
function generateList(array) {
    let html = '<ul>';
    for (let i = 0; i < array.length; i++) {
        html += '<li>';
        if (Array.isArray(array[i])) {
            html += generateList(array[i]);
        } else {
            html += array[i];
        }
        html += '</li>';
    }
    html += '</ul>';
    return html;
}
let input = prompt('Введіть масив чисел та масивів чисел:'); // В нашому випадку: [1, 2, [1.1, 1.2, 1.3], 3]
let array = JSON.parse(input);
let listHTML = generateList(array);
document.getElementById('result').innerHTML = listHTML;