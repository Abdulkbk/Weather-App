async function fetchData() {
    
    let response = await fetch('city-list.json');

    if (response.ok) {
        let data = await response.json();
        console.log(data)
    } else {
        console.log(response.status)
    }

}

fetchData()