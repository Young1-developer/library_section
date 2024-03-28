document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            document.getElementById('mainNav').classList.add('scrolled');
        } else {
            document.getElementById('mainNav').classList.remove('scrolled');
        }    
    });
});

// news sticker array
    // Array of news items
    const newsItems = [
        "Latest News: Library will be closed on National Holidays...",
        "New Digital Resources are now available online...",
        "Extended hours for exam season announced!",
        "Join our digital literacy workshops this summer.",
        "Usama will teach free class on introduction to web development next week"
    ];

    let currentNewsIndex = 0;

    function changeNewsItem() {
        // Update the news item
        document.getElementById('newsTicker').innerText = newsItems[currentNewsIndex];
        // Move to the next news item, loop back to the first item if at the end
        currentNewsIndex = (currentNewsIndex + 1) % newsItems.length;
    }

    // Change the news item every 5 seconds
    setInterval(changeNewsItem, 5000);

    
// welcome snippit section in homepage functionality
document.addEventListener('DOMContentLoaded', function() {
    var welcomeSection = document.getElementById('welcomeSection');

    var observer = new IntersectionObserver(function(entries) {
        // The callback will execute when the observed element enters or exits the viewport
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                // Element is now in the viewport, make it visible
                welcomeSection.style.opacity = 1;
            } else {
                // Optional: Hide it again when it leaves the viewport
                 welcomeSection.style.opacity = 0;
            }
        });
    }, {
        // Optional: Configuration options for the observer
        root: null, // observes the element in the context of the viewport
        rootMargin: '0px',
        threshold: 0.1 // Callback is executed when 10% of the element is visible
    });

    // Start observing the 'aboutSection'
    observer.observe(welcomeSection);
});
// about snippit section functionality


  
// about snippit section in homepage functionality
document.addEventListener('DOMContentLoaded', function() {
    var aboutSection = document.getElementById('aboutSection');

    var observer = new IntersectionObserver(function(entries) {
        // The callback will execute when the observed element enters or exits the viewport
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                // Element is now in the viewport, make it visible
                aboutSection.style.opacity = 1;
            } else {
                // Optional: Hide it again when it leaves the viewport
                 aboutSection.style.opacity = 0;
            }
        });
    }, {
        // Optional: Configuration options for the observer
        root: null, // observes the element in the context of the viewport
        rootMargin: '0px',
        threshold: 0.1 // Callback is executed when 10% of the element is visible
    });

    // Start observing the 'aboutSection'
    observer.observe(aboutSection);
});
// about snippit section functionality


// about snippit section in homepage functionality
document.addEventListener('DOMContentLoaded', function() {
    var historySection = document.getElementById('historySection');

    var observer = new IntersectionObserver(function(entries) {
        // The callback will execute when the observed element enters or exits the viewport
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                // Element is now in the viewport, make it visible
                historySection.style.opacity = 1;
            } else {
                // Optional: Hide it again when it leaves the viewport
                 historySection.style.opacity = 0;
            }
        });
    }, {
        // Optional: Configuration options for the observer
        root: null, // observes the element in the context of the viewport
        rootMargin: '0px',
        threshold: 0.1 // Callback is executed when 10% of the element is visible
    });

    // Start observing the 'historySection'
    observer.observe(historySection);
});
// history snippit section functionality



//encurage functionality
document.addEventListener("DOMContentLoaded", function(){
    const readMoreBtn = document.querySelector('.read-more-btn');

    readMoreBtn.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(readMoreBtn.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
