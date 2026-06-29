// Step 45
async function fetchUser(id) {

    try {

        const response = await fetch(
            `https://jsonplaceholder.typicode.com/users/${id}`
        );

        const user = await response.json();

        console.log(user.name);

    }

    catch (error) {

        console.log(error);

    }

}

// Step 47
function fetchAllCourses() {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve([
                "HTML",
                "CSS",
                "JavaScript",
                "React"
            ]);

        }, 1000);

    });

}

// Step 48
console.log("Loading courses...");

fetchAllCourses().then((courses) => {

    console.log("Courses Loaded");

    console.log(courses);

});

// Step 49
Promise.all([

    fetchUser(1),

    fetchUser(2)

]).then(() => {

    console.log("Both requests completed.");

});