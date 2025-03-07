document.addEventListener('DOMContentLoaded', () => {
  // 获取并设置壁纸
  async function fetchAnimeWallpaper() {
    try {
      // 使用dmoe.cc API获取动漫壁纸
      const response = await fetch('https://app.zichen.zone/api/acg/api.php?return=json');
      const data = await response.json();
      const url = data && data.imgurl;
      if (url) {
        // 预加载图片
        const img = new Image();
        img.onload = () => {
          document.body.style.backgroundImage = `url('${url}')`;
        };
        img.src = url;
      }
    } catch (error) {
      console.error('Error fetching wallpaper:', error);
      // 如果获取失败，可以使用默认背景
    }
  }
  
  // 每次加载页面时获取新壁纸
  fetchAnimeWallpaper();
});
