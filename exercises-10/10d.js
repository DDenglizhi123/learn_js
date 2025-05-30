function switchButton(category){
    const isToggled = document.querySelector(category);
    if (isToggled.classList.contains('changestatus')){
        isToggled.classList.remove('changestatus');
    }else{
        isToggled.classList.add('changestatus');
    }
}