// Get elements
const seeMoreBtn = document.getElementById("see-more-btn");
const moreText = document.getElementById("more-text");
const blogGrid = document.querySelector('.blog-grid');

let blogAdded = false; // Prevent duplicate posts

if (seeMoreBtn && moreText && blogGrid) {
    seeMoreBtn.addEventListener("click", function () {
        const isVisible = moreText.style.display === "block";

        // Toggle visibility of more text
        moreText.style.display = isVisible ? "none" : "block";
        seeMoreBtn.textContent = isVisible ? "See More" : "See Less";

        // Add blog post only if not already added
        if (!isVisible && !blogAdded) {
            alert("Thank You For Visiting more content on my Profile");

            const newBlogPost = document.createElement('div');
            newBlogPost.classList.add('blog-item');
            newBlogPost.innerHTML = `
                <img src="https://blogger.googleusercontent.com/img/a/AVvXsEjaZ19xpxDn2usUAGav57RT1y9OJIy1O09eyRKWKn84qw6l9omw0ax9gu6sgUQnxMdacUqSIz7vnHSoc0aVxpKRTpAzFvBsiIt7Fi1QnTKuUzazYHjOnmBzD4HZsH7AFEQF3mf4eWdaSiopZ-V-MpuqHuNLnCvI_VZVGQOJUlaWvyTZ0zzpSTFNKlinTMZ5" alt="Blog 4" class="blog-img">
                <div class="blog-info">
                    <h3>The Process of Our Birth</h3>
                    <span class="blog-date">October 23, 2024</span>
                    <p class="blog-description">The Process of Our Birth is a thoughtful piece written by Nittyshry Prabhu. In this, Nittyshry Prabhu is trying to know how the human being was created or how the nature was created.</p>
                    <a href="https://nittyshryprabhu.blogspot.com/2024/10/the-process-our-birth.html" class="blog-read-more">Read More</a>
                </div>
            `;
            blogGrid.appendChild(newBlogPost);
            blogAdded = true; // Mark as added
        }
    });
}


// Toggle class instead
moreText.classList.toggle("hidden");