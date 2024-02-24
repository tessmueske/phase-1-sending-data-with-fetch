function submitData(name, email) {
  const configurationObject = {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json',
            "Accept": 'application/json'
        },
        body: JSON.stringify({ name: name, email: email })
      };
    return fetch('http://localhost:3000/users', configurationObject)
      .then(function (response) {
         return response.json();
        })
      .then(function (object) {
          document.body.textContent = object.id;
        }) 
      .catch(function (error) {
        alert("ERROR");
        document.body.textContent = error.message;
        });
    }
