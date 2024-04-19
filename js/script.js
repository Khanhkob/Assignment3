//An hien thong tin User
function handleSubmit() {
    //lay cac gia tri email chuyen sang in thuong
    const emailValue = document.getElementById('email').value.toLocaleLowerCase()
        //dieu kien de la 1 email
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //the hien email loi
    const errorEmail = document.getElementById('error-email');
    //check mail
    const check = emailValue.match(regex);
    //lấy phần chứa thông tin User
    const sectionContent = document.querySelector('#personal-info .section-content');
    //phần chứa button
    const submitemail = document.querySelector('.submit-email');
    if (check) {
        sectionContent.style.display = 'block';
        submitemail.style.display = 'none';
        errorEmail.innerHTML = '';
    } else {
        errorEmail.innerHTML = 'Please enter valid email!';
        errorEmail.style.color = 'red';
    }
}

//An hien view more
function handleOnMouseOver (element){
	const viewMore = element.querySelector('.control-view');
	viewMore.style.display = 'inline-block';
}

function handleOnMouseOut (element){
	const viewMore = element.querySelector('.control-view');
	if(!viewMore.classList.value.includes('less-more')){
		viewMore.style.display = 'none';
	}   
}

//An hien job info
function handleViewMore(element){
	const parentElement = element.closest('.parent');
	const viewMore = parentElement.querySelector('.control-view');
    const sectionContent= parentElement.querySelectorAll('.section-content');
    if(viewMore.classList.value.includes('view-more')){
        sectionContent.forEach((element) =>{
        element.style.display = 'block';
        });
        viewMore.classList.remove('view-more');
        viewMore.classList.remove('less-more');
        viewMore.innerHTML = 'Less more'
    } else {
        sectionContent.forEach((element) =>{
        element.style.display = 'none'
        });
        viewMore.classList.remove('less-more');
        viewMore.classList.remove('view-more');
        viewMore.innerHTML = 'View more'
    }
}
