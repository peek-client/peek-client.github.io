const imgId = "waifu";

fetch("https://api.waifu.pics/sfw/waifu")
.then(response => response.json())
.then(data => {
    const img = document.getElementById(imgId) as HTMLImageElement;
    img.src = data.url;
})
.catch(error => console.error(error));