// function to validate form 
function validateForm() {
    const nameInput = document.getElementById('name-input');
    const commnetInput = document.getElementById('comment-input');
    const jkInput = document.getElementById('jk-input');
    
    if(nameInput === ''){
        alert('Mohon Lengkapi Data')
        return false;
    }else{
        document.getElementById('result-form').innerHTML = nameInput.value;
    }

    if(commnetInput === ''){
        alert('Mohon Lengkapi Data')
        return false;
    }else{
        document.getElementById('result-form').innerHTML = commnetInput.value;
    }

    if(jkInput === ''){
        alert('Mohon Lengkapi Data')
        return false;
    }else{
        document.getElementById('result-form').innerHTML = jkInput.value;
    }
    
}

