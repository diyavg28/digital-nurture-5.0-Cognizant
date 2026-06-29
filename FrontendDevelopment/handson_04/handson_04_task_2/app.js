const loading = document.getElementById("loading");
const notifications = document.getElementById("notifications");
const retryButton = document.getElementById("retry");

// Fetch Posts
async function apiFetch(url) {

    loading.textContent = "Loading...";
    retryButton.style.display = "none";
    notifications.innerHTML = "";

    try {

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }

        const posts = await response.json();

        loading.textContent = "";

        posts.slice(0, 5).forEach(post => {

            const card = document.createElement("div");

            card.innerHTML = `
                <h3>${post.title}</h3>
                <p>${post.body}</p>
                <hr>
            `;

            notifications.appendChild(card);

        });

    }

    catch (error) {

        loading.textContent = "";

        notifications.innerHTML =
            "<p>Error loading notifications.</p>";

        retryButton.style.display = "inline";

    }

}

// Retry Button
retryButton.addEventListener("click", () => {

    apiFetch("https://jsonplaceholder.typicode.com/posts");

});

// Load Data
apiFetch("https://jsonplaceholder.typicode.com/posts");