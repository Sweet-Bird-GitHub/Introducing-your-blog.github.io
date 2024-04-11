
document.addEventListener("DOMContentLoaded", function() {
    const sweetBird = document.querySelector("nav ul li a");

    
    const rainbowAnimation = [
        { color:  "#f025f7" },
        { color: "#ffffff" },     
        { color:  "#f025f7"}
    ];

    
    sweetBird.animate(rainbowAnimation, {
        duration: 7000, 
        iterations: Infinity, 
        easing: "linear" 
    });
});
