// Mobile menu

function toggleMenu(){

    const nav = document.getElementById("navMenu");

    nav.classList.toggle("active");

}


// Close mobile menu after clicking a link

document.querySelectorAll("#navMenu a").forEach(function(link){

    link.addEventListener("click", function(){

        document.getElementById("navMenu").classList.remove("active");

    });

});


// Simple reveal animation

const observer = new IntersectionObserver(
    function(entries){

        entries.forEach(function(entry){

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold:0.12
    }
);


document.querySelectorAll(
    ".feature-card, .blog-card, .hero-card, .about-box"
).forEach(function(element){

    element.classList.add("reveal");

    observer.observe(element);

});
