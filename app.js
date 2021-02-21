
const searchSongs = () =>{
    const searchText = document.getElementById('search-field').Value;
    const url =`https://api.lyrics.ovh/suggest/:${searchText}`
    console.log(url);
}

