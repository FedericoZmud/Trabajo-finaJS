const select = document.querySelectorAll('select')
const input = document.querySelectorAll ('input')
const btncovertir = document.querySelector('button')
let html = '';

const url = 'https://exchangerate-api.p.rapidapi.com/rapid/latest/USD';
const options = {
	method: 'GET',
	headers: {
		'content-type': 'application/octet-stream',
		'X-RapidAPI-Key': 'f83a1ab995msh2f52b4cbc468ed5p1f02e4jsn4b9850b6d9fe',
		'X-RapidAPI-Host': 'exchangerate-api.p.rapidapi.com'
	}
};

 const fecthcurrencyes = async() => {
    try {
	const response = await fetch(url, options);
	const result = await response.json();
    const arrKeys = Object.keys(result.rates);
    const rates = result.rates;
    arrKeys.map(item =>{
        return html += `<option value=${item}>${item}</option>`;
    });
    console.log(html);
    for(let i=0; i<select.length; i++){
        select[i].innerHTML = html;
    }

    btncovertir.addEventListener('click',()=>{
        input[1].value = input[0].value * rates[select[1].value] / rates[select[0].value];
        Toastify({

            text: "conversion exitosa!",
            
            duration: 3000
            
            }).showToast();
    })
} catch (error) {
	console.error(error);
}
};
fecthcurrencyes()

