// Add your code here
function submitData(name, email) {
    const formData = {
        name: name,
        email: email
    };

    const configurationObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(formData),
    };

    return fetch("http://localhost:3000/users", configurationObject)
        .then((res) => res.json())
        .then((data) => document.body.append(data.id))
        .catch((error) => document.body.append(error.message))

}




///////////////////////////////////////////////////////////
// EXAMPLE CODE FOR FETCH FOR http://localhost:3000/dogs //
///////////////////////////////////////////////////////////
// const formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle"
// }
// const configurationObject = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json",
//     },
//     body: JSON.stringify(formData),
// };

// fetch("http://localhost:3000/dogs", configurationObject)
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(object) {
//         console.log(object);
//     })
//     .catch(function(error) {
//         alert("Bad things! Ragnarők!");
//         console.log(error.message);
//     })


