




			
//====================get data===================,
//const files = document.querySelector('input[type=`file`]').files;
let test_data = 'Numan'

//==============Set into FormData================,
const form = new FormData()
form.append('test_data', test_data)
//data.append('picture', files[0])


//==============Finally send the data===========,
let url = '/Server Address'
fetch(url, {
  method: 'post',
  body: form,
	})
	.then(response => { return response.json() })
	.then(data => { console.log(data) })
	.catch(err => { console.error(err) })




