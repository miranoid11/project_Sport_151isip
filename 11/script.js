const btn = document.getElementById('themeBtn');
const body = document.body;
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark');
}
btn.addEventListener('click', function() {
    body.classList.toggle('dark');

    if (body.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});