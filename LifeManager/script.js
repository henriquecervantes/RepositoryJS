const tabs = document.querySelectorAll ('.side-bar-button');

tabs.forEach(tab => tab.addEventListener('click',() => tabClicked(tab)));

const tabClicked= (tab) => {

    const contents = document.querySelectorAll('.content');

    contents.forEach(content => content.classList.remove('show'));

    const contentId = tab.getAttribute('content-id')
    const content = document.getElementById(contentId)
    
    console.log(contentId)
    console.log(content)
    
    content.classList.add('show');
}