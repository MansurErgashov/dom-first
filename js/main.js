const data = [
  { 
    src: 'https://picsum.photos/200/300?random=1',
    id: 1,
    first_name: "Sophronia",
    last_name: "Stoddart",
    email: "sstoddart0@howstuffworks.com",
    gender: "Female",
    ip_address: "80.215.124.45",
  },
  { 
    src: 'https://picsum.photos/200/300?random=2',
    id: 2,
    first_name: "Elie",
    last_name: "Ashenhurst",
    email: "eashenhurst1@ameblo.jp",
    gender: "Female",
    ip_address: "68.37.253.68",
  },
  { 
    src: 'https://picsum.photos/200/300?random=3',
    id: 3,
    first_name: "Elianore",
    last_name: "Eaddy",
    email: "eeaddy2@chronoengine.com",
    gender: "Female",
    ip_address: "67.148.137.105",
  },
  { 
    src: 'https://picsum.photos/200/300?random=4',
    id: 4,
    first_name: "Brittne",
    last_name: "Heditch",
    email: "bheditch3@businessweek.com",
    gender: "Female",
    ip_address: "100.224.120.91",
  },
  { 
    src: 'https://picsum.photos/200/300?random=5',
    id: 5,
    first_name: "Harman",
    last_name: "Mashal",
    email: "hmashal4@sakura.ne.jp",
    gender: "Male",
    ip_address: "135.116.148.60",
  },
  { 
    src: 'https://picsum.photos/200/300?random=6',
    id: 6,
    first_name: "Flore",
    last_name: "Zappel",
    email: "fzappel5@tripod.com",
    gender: "Female",
    ip_address: "78.191.118.28",
  },
  { 
    src: 'https://picsum.photos/200/300?random=7',
    id: 7,
    first_name: "Angelina",
    last_name: "Manneville",
    email: "amanneville6@lycos.com",
    gender: "Bigender",
    ip_address: "176.253.242.10",
  },
  { 
    src: 'https://picsum.photos/200/300?random=8',
    id: 8,
    first_name: "Merilyn",
    last_name: "Marusik",
    email: "mmarusik7@1und1.de",
    gender: "Female",
    ip_address: "221.137.214.47",
  },
  { 
    src: 'https://picsum.photos/200/300?random=9',
    id: 9,
    first_name: "Jeddy",
    last_name: "Brunn",
    email: "jbrunn8@umn.edu",
    gender: "Male",
    ip_address: "9.189.41.129",
  },
  { 
    src: 'https://picsum.photos/200/300?random=10',
    id: 10,
    first_name: "Kilian",
    last_name: "Chadderton",
    email: "kchadderton9@wix.com",
    gender: "Male",
    ip_address: "177.47.251.168",
  },
  { 
    src: 'https://picsum.photos/200/300?random=11',
    id: 11,
    first_name: "Kilian",
    last_name: "Chadderton",
    email: "kchadderton9@wix.com",
    gender: "Male",
    ip_address: "177.47.251.168",
  }
]
  const arr0Img = document.querySelectorAll('.card-img')
  arr0Img[0].src = data[0].src;
  const arr0Name = document.querySelectorAll('.user__fullname')
  arr0Name[0].textContent = data[0].first_name + ' ' + data[0].last_name
  const arr0Email = document.querySelectorAll('.user__email')
  arr0Email[0].textContent = data[0].email
  const arr0Gender = document.querySelectorAll('.user__gender')
  arr0Gender[0].textContent = data[0].gender
  const arr0Addres = document.querySelectorAll('.user__address')
  arr0Addres[0].textContent = data[0].ip_address



  const arr1Img = document.querySelectorAll('.card-img')
  arr1Img[1].src = data[1].src;
  const arr1Name = document.querySelectorAll('.user__fullname')
  arr1Name[1].textContent = data[1].first_name + ' ' + data[1].last_name
  const arr1Email = document.querySelectorAll('.user__email')
  arr1Email[1].textContent = data[1].email
  const arr1Gender = document.querySelectorAll('.user__gender')
  arr1Gender[1].textContent = data[1].gender
  const arr1Addres = document.querySelectorAll('.user__address')
  arr1Addres[1].textContent = data[1].ip_address


  const arr2Img = document.querySelectorAll('.card-img')
  arr2Img[2].src = data[2].src;
  const arr2Name = document.querySelectorAll('.user__fullname')
  arr2Name[2].textContent = data[2].first_name + ' ' + data[2].last_name
  const arr2Email = document.querySelectorAll('.user__email')
  arr2Email[2].textContent = data[2].email
  const arr2Gender = document.querySelectorAll('.user__gender')
  arr2Gender[2].textContent = data[2].gender
  const arr2Addres = document.querySelectorAll('.user__address')
  arr2Addres[2].textContent = data[2].ip_address

  const arr3Img = document.querySelectorAll('.card-img')
  arr3Img[3].src = data[3].src;
  const arr3Name = document.querySelectorAll('.user__fullname')
  arr3Name[3].textContent = data[3].first_name + ' ' + data[3].last_name
  const arr3Email = document.querySelectorAll('.user__email')
  arr3Email[3].textContent = data[3].email
  const arr3Gender = document.querySelectorAll('.user__gender')
  arr3Gender[3].textContent = data[3].gender
  const arr3Addres = document.querySelectorAll('.user__address')
  arr3Addres[3].textContent = data[3].ip_address

  const arr4Img = document.querySelectorAll('.card-img')
  arr4Img[4].src = data[4].src;
  const arr4Name = document.querySelectorAll('.user__fullname')
  arr4Name[4].textContent = data[4].first_name + ' ' + data[4].last_name
  const arr4Email = document.querySelectorAll('.user__email')
  arr4Email[4].textContent = data[4].email
  const arr4Gender = document.querySelectorAll('.user__gender')
  arr4Gender[4].textContent = data[4].gender
  const arr4Addres = document.querySelectorAll('.user__address')
  arr4Addres[4].textContent = data[4].ip_address

  const arr5Img = document.querySelectorAll('.card-img')
  arr5Img[5].src = data[5].src;
  const arr5Name = document.querySelectorAll('.user__fullname')
  arr5Name[5].textContent = data[5].first_name + ' ' + data[5].last_name
  const arr5Email = document.querySelectorAll('.user__email')
  arr5Email[5].textContent = data[5].email
  const arr5Gender = document.querySelectorAll('.user__gender')
  arr5Gender[5].textContent = data[5].gender
  const arr5Addres = document.querySelectorAll('.user__address')
  arr5Addres[5].textContent = data[5].ip_address

  const arr6Img = document.querySelectorAll('.card-img')
  arr6Img[6].src = data[6].src;
  const arr6Name = document.querySelectorAll('.user__fullname')
  arr6Name[6].textContent = data[6].first_name + ' ' + data[6].last_name
  const arr6Email = document.querySelectorAll('.user__email')
  arr6Email[6].textContent = data[6].email
  const arr6Gender = document.querySelectorAll('.user__gender')
  arr6Gender[6].textContent = data[6].gender
  const arr6Addres = document.querySelectorAll('.user__address')
  arr6Addres[6].textContent = data[6].ip_address

  const arr7Img = document.querySelectorAll('.card-img')
  arr7Img[7].src = data[7].src;
  const arr7Name = document.querySelectorAll('.user__fullname')
  arr7Name[7].textContent = data[7].first_name + ' ' + data[7].last_name
  const arr7Email = document.querySelectorAll('.user__email')
  arr7Email[7].textContent = data[7].email
  const arr7Gender = document.querySelectorAll('.user__gender')
  arr7Gender[7].textContent = data[7].gender
  const arr7Addres = document.querySelectorAll('.user__address')
  arr7Addres[7].textContent = data[7].ip_address

  const arr8Img = document.querySelectorAll('.card-img')
  arr8Img[8].src = data[8].src;
  const arr8Name = document.querySelectorAll('.user__fullname')
  arr8Name[8].textContent = data[8].first_name + ' ' + data[8].last_name
  const arr8Email = document.querySelectorAll('.user__email')
  arr8Email[8].textContent = data[8].email
  const arr8Gender = document.querySelectorAll('.user__gender')
  arr8Gender[8].textContent = data[8].gender
  const arr8Addres = document.querySelectorAll('.user__address')
  arr8Addres[8].textContent = data[8].ip_address

  const arr9Img = document.querySelectorAll('.card-img')
  arr9Img[9].src = data[9].src;
  const arr9Name = document.querySelectorAll('.user__fullname')
  arr9Name[9].textContent = data[9].first_name + ' ' + data[9].last_name
  const arr9Email = document.querySelectorAll('.user__email')
  arr9Email[9].textContent = data[9].email
  const arr9Gender = document.querySelectorAll('.user__gender')
  arr9Gender[9].textContent = data[9].gender
  const arr9Addres = document.querySelectorAll('.user__address')
  arr9Addres[9].textContent = data[9].ip_address

  const arr10Img = document.querySelectorAll('.card-img')
  arr10Img[10].src = data[10].src;
  const arr10Name = document.querySelectorAll('.user__fullname')
  arr10Name[10].textContent = data[10].first_name + ' ' + data[10].last_name
  const arr10Email = document.querySelectorAll('.user__email')
  arr10Email[10].textContent = data[10].email
  const arr10Gender = document.querySelectorAll('.user__gender')
  arr10Gender[10].textContent = data[10].gender
  const arr10Addres = document.querySelectorAll('.user__address')
  arr10Addres[10].textContent = data[10].ip_address