const formCreate = document.querySelector('.user_create');
const formUpdate = document.querySelector('.user_update');

if (formCreate !== null) {
    formCreate.onsubmit = (e) => {
        alert('User was successfully added.')
    }
}

if (formUpdate !== null) {
    formUpdate.onsubmit = (e) => {
        e.preventDefault();
        let form = e.currentTarget;

        let data = {};

        // deconstruct data_array into an object for HTTP request
        Object.keys(form.elements).forEach(key => {
            let element = form.elements[key];

            if (element.type !== 'submit') {
                data[element.name] = element.value;
            }
        });

        console.log(data);
        // prepair request object
        let request = {
            'url': `http://localhost:3000/api/users/${data.id}`,
            'method': 'PUT',
            'data': data,
        };

        ajax(request);
    }
}

/**
 * Serialize all form data into an array
 * @param {HTMLFormElement} form The form to serialize
 * @returns {Array} The serialized form data
 */
const serializeArray = (form) => {
    // create a new FormData object
    const formData = new FormData(form);

    /**
     * how to read the entries in a FormData object
    
    for(let pair of formData.entries()) {
        console.log(pair);
        }
    */

    // create an array to hold the name/value pairs
    const data = [];

    // add each name/value pair to the array
    for (const [name, value] of formData) {
        data.push({ name, value });
    }

    // return the array
    return data;
}

// ajax request
const ajax = (req) => {
    // create XMLHttpRequest object
    let xhr = new XMLHttpRequest();
    
    // making our connection
    xhr.open(req.method, req.url, req.data, true);
    xhr.setRequestHeader('Cache-Control', 'max-age=0');

    // function executes after request is successful
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this);
        }
    }
    
    // sending our request
    xhr.send();
    alert('User was successfully edited.')
}
