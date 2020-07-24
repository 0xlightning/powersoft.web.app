const contentRenderer = document.getElementById('@admin/content');
const formRender = document.getElementById('@admin/form');
const input = document.getElementById('@admin/password');
const submit = document.getElementById('@admin/submitButton');
const database = firebase.database();

let authorized = false;
const password = '0YwV.#eU]Bi?<]R'

contentRenderer.style.display = 'none';

const onSubmit = () => {
	if(input.value === password) {
		contentRenderer.style.display = 'block';
		formRender.style.display = 'none'
	}

	else {
		alert('Invalid Passcode')
	}
}

database.ref('/enquiries').on("value", (snapshot) => {
  console.log('result', snapshot.val());

  contentRenderer.innerHTML=JSON.stringify(snapshot.val(), null, 3)
}, function (errorObject) {
  alert("The read failed: " + errorObject.code);
});