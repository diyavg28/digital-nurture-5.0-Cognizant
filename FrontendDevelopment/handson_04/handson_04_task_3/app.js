// Step 56 - Axios function
async function apiFetch(url) {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error("Error:", error);
    }
}

// Step 58 - Request Interceptor
axios.interceptors.request.use(config => {
    console.log("API call started:", config.url);
    return config;
});

// Step 57 - Fetch posts of User 1 using params
async function loadPosts() {
    try {
        const response = await axios.get(
            "https://jsonplaceholder.typicode.com/posts",
            {
                params: {
                    userId: 1
                }
            }
        );

        const posts = response.data;

        const container = document.getElementById("notifications");

        posts.forEach(post => {
            const card = document.createElement("div");

            card.innerHTML = `
                <h3>${post.title}</h3>
                <p>${post.body}</p>
                <hr>
            `;

            container.appendChild(card);
        });

    } catch (error) {
        console.error(error);
    }
}

loadPosts();

/*
Step 59 - Fetch vs Axios

1. Axios automatically parses JSON responses.
2. Axios throws errors automatically for HTTP errors.
3. Axios supports interceptors and request timeout.
*/