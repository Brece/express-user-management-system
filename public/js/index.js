const formCreate = document.querySelector('.user_create');
const formUpdate = document.querySelector('.user_update');
const deleteBtns = document.querySelectorAll('.c-btn--delete');

deleteBtns.forEach( btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();

        if (confirm('Are you sure you want to DELETE this user?')) {
            // traverse to form element
            e.currentTarget.parentElement.submit();
        }
    });
});

if (formCreate !== null) {
    formCreate.onsubmit = (e) => {
        alert('User was successfully added.')
    }
}

// the code below is not necessary and has been replaced by the package "method-override" for additional form methods

/*
if (formUpdate !== null) {
    formUpdate.onsubmit = (e) => {
        e.preventDefault();
        let form = e.currentTarget;

        let data = {};

        // deconstruct data_array into an object for HTTP request
        Object.keys(form.elements).forEach(key => {
            let element = form.elements[key];

            if (element.type !== 'submit') {
                if (element.type === 'radio' && !element.checked) {
                    return;
                }
                data[element.name] = element.value;
            }
        });

        // prepair request object
        let request = {
            'url': `http://localhost:3000/api/users/${data.id}`,
            'method': 'PUT',
            'data': new FormData(form),
        };

        ajax(request);
    }
}
*/

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
    xhr.open(req.method, req.url, true);
    
    // sending our request
    xhr.send(req.data);
    alert('User was successfully edited.')
}
