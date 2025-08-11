// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
        nav.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
    
    // Clicking on a menu item should close the menu
    const navLinks = document.querySelectorAll('.nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}


// Array of additional blog posts
const additionalBlogs = [
    {
        imgSrc: "https://blogger.googleusercontent.com/img/a/AVvXsEjaZ19xpxDn2usUAGav57RT1y9OJIy1O09eyRKWKn84qw6l9omw0ax9gu6sgUQnxMdacUqSIz7vnHSoc0aVxpKRTpAzFvBsiIt7Fi1QnTKuUzazYHjOnmBzD4HZsH7AFEQF3mf4eWdaSiopZ-V-MpuqHuNLnCvI_VZVGQOJUlaWvyTZ0zzpSTFNKlinTMZ5",
        title: "The Process of Our Birth",
        date: "October 23, 2024",
        description: "The Process of Our Birth is a thoughtful piece written by Nittyshry Prabhu. In this, Nittyshry Prabhu is trying to know how the human being was created or how the nature was created.",
        link: "https://nittyshryprabhu.blogspot.com/2024/10/the-process-our-birth.html"
    },
    // {
    //     imgSrc: "https://example.com/image5.jpg",
    //     title: "Another Blog Post",
    //     date: "November 1, 2024",
    //     description: "Description of blog post 5",
    //     link: "https://example.com/blog5"
    // }
    // Add more as needed
];

const seeMoreBtn = document.getElementById('see-more-btn');
const blogGrid = document.querySelector('.blog-grid');
let currentIndex = 0;

if (seeMoreBtn && blogGrid) {
    seeMoreBtn.addEventListener('click', function() {
        // Check if there are more blogs to add
        if (currentIndex < additionalBlogs.length) {
            const blog = additionalBlogs[currentIndex];
            
            const blogItem = document.createElement('div');
            blogItem.className = 'blog-item';
            blogItem.innerHTML = `
                <img src="${blog.imgSrc}" alt="${blog.title}" class="blog-img">
                <div class="blog-info">
                    <h3>${blog.title}</h3>
                    <span class="blog-date">${blog.date}</span>
                    <p class="blog-description">${blog.description}</p>
                    <a href="${blog.link}" class="blog-read-more">Read More</a>
                </div>
            `;
            
            blogGrid.appendChild(blogItem);
            currentIndex++;
            
            // Hide button if no more blogs
            if (currentIndex >= additionalBlogs.length) {
                seeMoreBtn.style.display = 'none';
            }
        }
    });
}
