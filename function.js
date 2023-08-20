// userIdGeneratedByUser()
// 'kcsy2'
// 'SMFYb'
// 'bWmeq'
// 'ZXOYh'
// '2Rgxf'

// userIdGeneratedByUser()
// '1GCSgPLMaBAVQZ26'
// 'YD7eFwNQKNs7qXaT'
// 'ycArC5yrRupyG00S'
// 'UbGxOFI7UXSWAyKN'
// 'dIV0SSUTgAdKwStr'

function userIdGeneratedByUser() {
    // Kumpulkan masukan dari pengguna
    var numberOfCharacters = parseInt(prompt("Masukkan jumlah karakter untuk ID pengguna:"));
    var numberOfIds = parseInt(prompt("Masukkan jumlah ID pengguna yang ingin dihasilkan:"));
  
    // Hasilkan ID pengguna dengan logika yang diberikan
    var userIDs = [];
    for (var i = 0; i < numberOfIds; i++) {
      var userId = "";
      for (var j = 0; j < numberOfCharacters; j++) {
        var randomCharCode = Math.floor(Math.random() * 26) + 65; // Menghasilkan kode karakter acak A-Z
        userId += String.fromCharCode(randomCharCode);
      }
      userIDs.push(userId);
    }
  
    return userIDs;
  }
  
  // Panggil fungsi untuk mendapatkan ID pengguna yang dihasilkan
  var generatedUserIDs = userIdGeneratedByUser();
  console.log(generatedUserIDs);
  
  function rgbColorGenerator() {
    let r = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    return `rgb(${r},${b},${g})`;
  }
  console.log(rgbColorGenerator());