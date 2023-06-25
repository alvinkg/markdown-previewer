function updatePreview() {
    document.getElementById('preview').innerHTML =  marked.parse(document.getElementById('editor').value);
    // document.getElementById('preview').innerHTML =  marked.parse('# The Quick Brown Fox \n\nRendered by **marked**.');
    // document.getElementById('preview').innerHTML = window.marked.parse(document.getElementById('editor').value);
}
marked.