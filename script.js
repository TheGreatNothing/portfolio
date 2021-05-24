//Dark Mode

const darkMode = document.querySelector('#toggle');

darkMode.addEventListener('click',(e)=>{
	const html = document.querySelector('html');
	if(html.classList.contains('dark')) {
		html.classList.remove('dark');
		e.target.innerHTML = 'Dark Mode';
	} else {
		html.classList.add('dark');
		e.target.innerHTML = 'Light Mode';
	}
})

// Fixed Navigation

const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', fixNav);

function fixNav() {
	if(window.scrollY > navbar.offsetHeight + 200) {
		navbar.classList.add('active');
	} else {
		navbar.classList.remove('active');
	}
}

