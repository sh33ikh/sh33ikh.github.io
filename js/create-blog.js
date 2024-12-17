document.addEventListener('DOMContentLoaded', () => {
    const createBlogForm = document.getElementById('create-blog-form');
    if (createBlogForm) {
        createBlogForm.addEventListener('submit', handleCreateBlogSubmit);
    }
});

function handleCreateBlogSubmit(e) {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const excerpt = document.getElementById('excerpt').value;
    const content = document.getElementById('content').value;
    const image = document.getElementById('image').value;

    const slug = createSlug(title);
    const date = new Date().toLocaleDateString('bn-BD', { year: 'numeric', month: 'long', day: 'numeric' });

    const newPost = { title, excerpt, content, image, slug, date };

    // Save the new post
    saveBlogPost(newPost);

    // Create a new HTML file for the blog post
    createBlogPostFile(newPost);

    alert('নতুন ব্লগ পোস্ট সফলভাবে তৈরি করা হয়েছে!');
    e.target.reset();
    window.location.href = '/index.html#blog';
}

function createSlug(title) {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

function saveBlogPost(post) {
    const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    blogPosts.unshift(post);
    localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
}

function createBlogPostFile(post) {
    const blogPostHTML = `
<!DOCTYPE html>
<html lang="bn">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${post.title} | লিখন শেখ</title>
    <meta name="description" content="${post.excerpt}">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css">
    <link rel="stylesheet" href="/css/style.css">
</head>
<body class="bg-gray-100 font-sans leading-normal tracking-normal">
    <div class="container mx-auto mt-24 px-4">
        <article class="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="${post.image || '/images/placeholder.jpg'}" alt="${post.title}" class="w-full h-64 object-cover">
            <div class="p-6">
                <h1 class="text-3xl font-bold mb-4">${post.title}</h1>
                <p class="text-gray-600 mb-4">${post.date}</p>
                <div class="prose max-w-none">
                    ${post.content}
                </div>
            </div>
        </article>
        <div class="mt-8">
            <a href="/index.html#blog" class="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded">ব্লগে ফিরে যান</a>
        </div>
    </div>
</body>
</html>
    `;

    // In a real-world scenario, you would save this file to the server
    console.log('New blog post HTML:', blogPostHTML);
}

