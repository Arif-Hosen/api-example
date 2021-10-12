function searchFood() {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // clear input field
    searchField.value = '';
    if (searchText == '') {
        const noResultDiv = document.getElementById('no-result');
        noResultDiv.innerHTML = `<h2>Please Input a Food name</h2>`
    }

    // load data
    else {
        const url = `https://www.themealdb.com/api/json/v122/1/search.php?s=${searchText}`;

        try {
            fetch(url)
                .then(res => res.json())
                .then(data => displaySearchResult(data.meals))
        }
        catch (error) {
            console.log(error);
        }
    }
}

const displaySearchResult = meals => {
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';

    //show no result 
    if (meals == null) {
        const noResultDiv = document.getElementById('no-result');
        noResultDiv.innerHTML = `<h2>Sorry, No result found</h2>`
    }
    else {
        meals.forEach(meal => {
            // console.log(meal);
            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML = `
            <div onclick="loadMealDetail(${meal.idMeal})"  class="card">
                    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${meal.strMeal}</h5>
                        <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
                    </div>
                </div>
            </div>
            `;
            searchResult.appendChild(div);
        })
    }


}

const loadMealDetail = async mealId => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;

    const res = await fetch(url);
    const data = await res.json();
    displayMealDetail(data.meals[0])
    // fetch(url)
    //     .then(res => res.json())
    //     .then(data => displayMealDetail(data.meals[0]))

}

const displayMealDetail = meal => {
    const mealDetails = document.getElementById("meal-details");
    mealDetails.textContent = '';

    const div = document.createElement('div');

    div.classList.add('card');
    div.innerHTML = `
    <img src="${meal.strMealThumb}" class="card-img-top " alt="">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0, 150)}.</p>
                <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
            </div>
    `;
    mealDetails.appendChild(div);
}