document.addEventListener('DOMContentLoaded', () => {
    // Load blog posts
    loadBlogPosts();

    // Handle contact form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactFormSubmit);
    }
});

function loadBlogPosts() {
    const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    const blogGrid = document.getElementById('blog-posts');

    if (blogGrid) {
        blogGrid.innerHTML = '';
        blogPosts.forEach(post => {
            const postElement = createBlogPostElement(post);
            blogGrid.appendChild(postElement);
        });
    }
}

function createBlogPostElement(post) {
    const article = document.createElement('article');
    article.className = 'bg-white rounded-lg shadow-lg overflow-hidden';
    article.innerHTML = `
        <img src="${post.image || '/images/placeholder.jpg'}" alt="${post.title}" class="w-full h-48 object-cover">
        <div class="p-6">
            <h3 class="text-xl font-semibold mb-2">${post.title}</h3>
            <p class="text-gray-600 mb-4">${post.excerpt}</p>
            <a href="/blog/${post.slug}.html" class="text-indigo-500 hover:text-indigo-600 font-semibold">আরও পড়ুন</a>
        </div>
    `;
    return article;
}

function handleContactFormSubmit(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // In a real-world scenario, you would send this data to a server
    console.log('Form submitted:', { name, email, message });
    alert('আপনার বার্তা পাঠানো হয়েছে। আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।');
    e.target.reset();
}

