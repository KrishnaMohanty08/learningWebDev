button = document.querySelector(".add");
ListVedio = document.getElementById('#ListVedio');
button.addEventListener("click", function (event) {
    if (event.target.classList.contains("add")) {
        createCard("Introduction to BackEnd |Sigma web Dev video #2", "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw");
    }
})
function createCard(title, cName, views, monthOld, duration, thumbnail) {
    //write the function
    const cardContainer = document.querySelector(".list");
    const card = document.createElement("div");
    card.classList.add("bg-gray-800", "text-white", "p-4", "rounded", "shadow-lg", "gap-4", "flex", 'm-4');

    views = views > 1000 ? (views / 1000 + "K") : views;

    thumbnail
    card.innerHTML = `
    <div class="relative">
        <img src=${thumbnail} alt="Thumbnail" class=" w-32 h-20 rounded">
        <span class="absolute bottom-1 right-1 bg-black text-white text-xs px-1 py-1 rounded">${duration}</span>
    </div>
    <div>
    <h3 class="text-3xl font-bold text-black-900 ">${title}</h3>
    <span class="text-sm text-gray-400">${cName}</span> • 
    <span class="text-sm text-gray-400">${views + " views"}</span> •
    <span class="text-xs text-gray-400">${monthOld + " months ago"}</span>
    </div>
    `;
    cardContainer.appendChild(card);
}

