let tabs = document.querySelectorAll('.tabstog'), contents = document.querySelectorAll('.tabcont');
tabs.forEach((tab, index)=> {
    tab.addEventListener('click', () => {
        contents.forEach((content) => {
            content.classList.remove('is-active');
        });
        tabs.forEach((tab) => {
            tab.classList.remove('is-active');
        });
        
        contents[index].classList.add('is-active');
        tabs[index].classList.add('is-active');
    });
});