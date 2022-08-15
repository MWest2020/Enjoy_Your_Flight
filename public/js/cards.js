

function myFunction(type) {
    let item = document.getElementById(type);
    showItem(item);
}

function checkClicked(item) {
    if (item !== 'entertainment') {
        let entertainment = document.getElementById('entertainment');
        hideItem(entertainment)
    }

    if (item !== 'flightInfo') {
        let flightInfo = document.getElementById('flightInfo');
        hideItem(flightInfo)
    }

    if (item !== 'order') {
        let order = document.getElementById('order');
        hideItem(order)
    }
}

function showItem(item) {
    checkClicked(item);
    if (item.style.display === "none") {
        item.style.display = "block";
    }
}

function hideItem(item) {
    if (item.style.display === "block") {
        item.style.display = "none";
    }
}