// Fungsi asynchronous pertama
function getData() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            const data1 = "Data 1";
            resolve(data1);
        }, 1000);
    });
}

// Fungsi asynchronous kedua
function getMoreData(data1) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            const data2 = data1 + " + More Data 2";
            resolve(data2);
        }, 1000);
    });
}

// Fungsi asynchronous ketiga
function evenMoreData(data2) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            const finalData = data2 + " + Even More Data 3";
            resolve(finalData);
        }, 1000);
    });
}

// Menggunakan Promise untuk menangani callback hell
getData()
    .then(data1 => {
        return getMoreData(data1);
    })
    .then(data2 => {
        return evenMoreData(data2);
    })
    .then(finalData => {
        console.log("Hasil akhir:", finalData);
    })
    .catch(error => {
        console.error("Terjadi kesalahan:", error);
    });
