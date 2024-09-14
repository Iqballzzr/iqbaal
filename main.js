onload = () =>{
        document.body.classList.remove("container");
};

document.addEventListener('DOMContentLoaded', () => {
    const loveExplosion = document.querySelector('.love-explosion');
    
    function createHeart() {
      const heart = document.createElement('div');
      heart.classList.add('heart');
      heart.textContent = '❤️'; // Heart emoji
      
      // Randomize position
      heart.style.left = `${Math.random() * 90 + 5}%`;
      heart.style.top = `${Math.random() * 90 + 5}%`;
      
      // Append heart to the container
      loveExplosion.appendChild(heart);
      
      // Remove heart after animation ends
      heart.addEventListener('animationend', () => {
        heart.remove();
      });
    }
    
    function startExplosion() {
      const numberOfHearts = 20; // Number of hearts in the explosion
      for (let i = 0; i < numberOfHearts; i++) {
        setTimeout(createHeart, i * 500); // Delay each heart's appearance
      }
    }
    
    startExplosion(); // Trigger explosion
  });
  