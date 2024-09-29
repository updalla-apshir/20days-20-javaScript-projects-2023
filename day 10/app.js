function higlightText (){

    const keyword = document.getElementById('searchInput').value.trim();

    const paragraph = document.querySelector('#paragraph');

    const highlightParagraph = paragraph.innerHTML.replace(/<span class="higlight">|<\/span>/g, '');

    const regax = new RegExp(keyword, 'gi');

    const higlightText = highlightParagraph.replace(regax,match => `<span class="higlight">${match}</span>`)

    paragraph.innerHTML = higlightText;
}