const accordionWrapper = document.querySelector('.acc-wrapper');

accordionWrapper.addEventListener('click', hideShowAnswer);

function hideShowAnswer(e) {
    const item = e.target;

    if (item.classList.contains('ques')) {
        
        if (item.nextElementSibling.style.display === '') 
        {
            item.nextElementSibling.style.display = 'block';
            item.classList.add('bold');
        } 
        else 
        {
            item.nextElementSibling.style.display = '';
            item.classList.remove('bold');

        }
    }

    else if(item.id === 'arrow') 
    {
        if (item.parentElement.nextElementSibling.style.display === '') 
        {
            item.parentElement.nextElementSibling.style.display = 'block';
            item.parentElement.classList.add('bold');
        } 
        else 
        {
            item.parentElement.nextElementSibling.style.display = '';
            item.parentElement.classList.remove('bold');
        }
    }
}