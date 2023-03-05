let searchText = document.getElementById("search-text");
let searchButton = document.getElementById("search-button");
let videosUl = document.getElementById("videos");

let apiURL = "https://www.googleapis.com/youtube/v3/search";
let apiKey = "AIzaSyD8CaRPD306xrTpmcYlahGgcMLFM817RsQ";

async function searchVideos(keyword) {
    let research = await fetch(`${apiURL}?part=snippet&q=${keyword}&key=${apiKey}&maxResults=20`);
    let data = await research.json();

    showData(data);
}

function showData(data) {
    let lis = '';
    for (let i = 0; i < data.items.length; i++) {
        let item = data.items[i];
        lis +=
        `<li>
            <img src="${item.snippet.thumbnails.high.url}">
            <div>
                <p class="title">${item.snippet.title}</p>
                <p class="channel">${item.snippet.channelTitle}</p>
            </div>
            <a class="btn" href="https://youtu.be/${item.id.videoId}">動画を見る</a>
        </li>`

        videosUl.innerHTML = lis;
    }
}

searchButton.addEventListener("click", function(){
    let searchKeyword = searchText.value;
    if (searchKeyword == '') {
        alert('検索キーワードを入力してください');
    } else{
        searchVideos(searchKeyword);
    }
});