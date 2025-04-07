document.addEventListener('DOMContentLoaded', () => {
  function setAnimeWallpaper() {
    try {
      // Create img element for wallpaper
      const wallpaperImg = document.createElement('img');
      
      // Set the src directly to the API endpoint
      wallpaperImg.src = 'https://app.zichen.zone/api/acg/api.php';
      
      // Style the image to work as wallpaper
      wallpaperImg.style.position = 'fixed';
      wallpaperImg.style.top = '0';
      wallpaperImg.style.left = '0';
      wallpaperImg.style.width = '100%';
      wallpaperImg.style.height = '100%';
      wallpaperImg.style.objectFit = 'cover';
      wallpaperImg.style.zIndex = '-1'; // Behind other content
      
      // Remove any existing wallpaper
      const existingWallpaper = document.querySelector('.anime-wallpaper');
      if (existingWallpaper) {
        existingWallpaper.remove();
      }
      
      // Add a class for easier identification
      wallpaperImg.classList.add('anime-wallpaper');
      
      // Add to document
      document.body.appendChild(wallpaperImg);
    } catch (error) {
      console.error('Error setting wallpaper:', error);
      // If setting fails, can use default background
    }
  }
  
  // Set wallpaper when page loads
  setAnimeWallpaper();
});
