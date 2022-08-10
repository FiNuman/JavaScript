
// Dirrect Download Link
    let download = document.createElement('a');
    download.setAttribute('download', 'name');
    download.href = 'http://localhost/downlink/of/files'; //Full path of download link
    download.click();
    download.remove();
