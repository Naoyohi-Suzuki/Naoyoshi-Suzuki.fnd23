"use strict";
const carDb = [
  //車両データ（本来はDBからinする)
  {
    carName: "NX 350h version_L",
    carMaker: "Lexus",
    carImage: "Cars/LEXUS_NX350h.png",
    country: "country/JP.gif",
    specifications: ["2487cc","190ps/6000rpm","5ドア","5名"],
    driveSystem: "4WD",
    voteGoodCount: 521,
    voteBadCount: 23,
    voteComment: ["・上質な室内空間と乗り心地","・足回りが少し硬いかも","・ハンドリングが滑らか"],
  },
  {
    carName: "Q5 SportBack",
    carMaker: "audi",
    carImage: "Cars/audi_Q5SB.png",
    country: "country/DE.gif",
    specifications: ["1968cc","190ps/4200rpm","5ドア","5名"],
    driveSystem: "4WD",
    voteGoodCount: 622,
    voteBadCount: 45,
    voteComment: ["・加速がスムーズ","・欧州車らしい上品さがある","・後方視野が狭くて運転しにくかった"],
  },
  {
    carName: "X5",
    carMaker: "BMW",
    carImage: "Cars/BMW_X5.jpg",
    country: "country/DE.gif",
    specifications: ["2992cc","340ps/4400rpm","5ドア","5名"],
    driveSystem: "FF",
    voteGoodCount: 85,
    voteBadCount: 11,
    voteComment: ["・パノラマルーフ開放的で好印象","・グローブボックスの収納力が低い","・スポーツモードの走行性がGOOD！"],
  },
  {
    carName: "CX-60",
    carMaker: "MAZDA",
    carImage: "Cars/MAZDA_CX60.png",
    country: "country/JP.gif",
    specifications: ["2488cc","231ps/4200rpm","5ドア","5名"],
    driveSystem: "FR",
    voteGoodCount: 222,
    voteBadCount: 5,
    voteComment: ["・FR特有のロングノーズでバランスがとても良い","・踏めばそこそこパワーを感じる","・発進時に少し異音がする"],
  },
  {
    carName: "COMMANDER",
    carMaker: "Jeep",
    carImage: "Cars/Jeep_COMMANDER.png",
    country: "country/US.gif",
    specifications: ["1956cc","170ps/3750rpm","5ドア","7名"],
    driveSystem: "4WD",
    voteGoodCount: 314,
    voteBadCount: 68,
    voteComment: ["・コックピット周りの操作性が◎","・乗り降りにサイドステップがほしい"],
  },  
]





// 表の動的作成
function makeTable(carData){

  let rows = [];
  let mytable = document.getElementById("main-tb");
  let tableRows = mytable.getElementsByTagName("tr");
  let rowCount = tableRows.length;

  for(let i=rowCount-1; i>0;i--){
    mytable.deleteRow(1);
  }

  for(let i=0; i < carData.length; i++) {

    rows.push(mytable.insertRow(-1));

    let myCellCarName = rows[i].insertCell(0);
    let myCellCarMaker = rows[i].insertCell(1);
    let myCellCarImage = rows[i].insertCell(2);
    let myCellCountry = rows[i].insertCell(3);
    let myCellSpecifications = rows[i].insertCell(4);
    let myCellDriveSystem = rows[i].insertCell(5);
    let myCellVoteGoodIcon = rows[i].insertCell(6);
    let myCellVoteGoodCnt = rows[i].insertCell(7);
    let myCellVoteBadIcon = rows[i].insertCell(8);
    let myCellVoteBadCnt = rows[i].insertCell(9);
    let myCellVoteComment = rows[i].insertCell(10);
    let myCellReserveBtn = rows[i].insertCell(11);

    let carName = document.createTextNode(carData[i].carName);
    myCellCarName.appendChild(carName);
    myCellCarName.width = 250;
    myCellCarName.style.fontSize = "20px";
    myCellCarName.style.fontWeight = "bold";

    let carMaker = document.createTextNode(carData[i].carMaker);
    myCellCarMaker.appendChild(carMaker);
    myCellCarMaker.width = 100;
    myCellCarMaker.style.fontSize = "20px";
    myCellCarMaker.style.fontWeight = "bold";

    let carImage = document.createElement("img");
    carImage.src = carData[i].carImage;
    carImage.width = 225;
    carImage.height = 150;
    myCellCarImage.appendChild(carImage);

    let country = document.createElement("img");
    country.src = carData[i].country;
    country.width = 75;
    country.height = 37.5;
    myCellCountry.appendChild(country);

    console.log(carData[i].specifications.length);

    //各車の車両諸元配列ループ
    for(let k = 0;k < carData[i].specifications.length;k++) {

      //車両諸元配列の要素毎に改行(br)を入れながら、表に出力
      let specifications = document.createTextNode(carData[i].specifications[k]);
      myCellSpecifications.appendChild(specifications);
      if(k + 1 < carData[i].specifications.length) {
        specifications = document.createElement("br");
        myCellSpecifications.appendChild(specifications);
      }
    }
    myCellSpecifications.width = 175;

    let driveSystem = document.createTextNode(carData[i].driveSystem);
    myCellDriveSystem.appendChild(driveSystem);
    myCellDriveSystem.width = 100;


    let voteGoodIcon = document.createElement("button");
    voteGoodIcon.id = i;
    voteGoodIcon.className = "button-good";
    voteGoodIcon.addEventListener("click", {clickRow:voteGoodIcon.id,clickCol:6, handleEvent:clickCount},{once:true});
    myCellVoteGoodIcon.appendChild(voteGoodIcon);
    myCellVoteGoodIcon.width = 50;

    let voteGoodCnt = document.createTextNode(carData[i].voteGoodCount);
    myCellVoteGoodCnt.appendChild(voteGoodCnt);
    myCellVoteGoodCnt.width = 50;

    let voteBadIcon = document.createElement("button");
    voteBadIcon.id = i;
    voteBadIcon.className = "button-bad";
    voteBadIcon.addEventListener("click", {clickRow:voteBadIcon.id,clickCol:8, handleEvent:clickCount},{once:true});
    myCellVoteBadIcon.appendChild(voteBadIcon);
    myCellVoteBadIcon.width = 50;

    let voteBadCnt = document.createTextNode(carData[i].voteBadCount);
    myCellVoteBadCnt.appendChild(voteBadCnt);
    myCellVoteBadCnt.width = 50;

    //各車の評価コメントループ
    for(let k = 0;k < carData[i].voteComment.length;k++) {
      //投稿済の評価コメントの要素毎に改行(br)を入れながら、表に出力
      let voteComment = document.createTextNode(carData[i].voteComment[k]);
      voteComment.className = "comment";
      myCellVoteComment.appendChild(voteComment);
      myCellVoteComment.width = 400;  
      if(k + 1 < carData[i].voteComment.length) {
        voteComment = document.createElement("br");
        myCellVoteComment.appendChild(voteComment);
      }
    }

    let reserveBtn = document.createElement("button");
    reserveBtn.className = "button-resere";
    reserveBtn.textContent = "検索";
    reserveBtn.addEventListener("click", {handleEvent:clickReserve});
    myCellReserveBtn.appendChild(reserveBtn);
    myCellReserveBtn.width = 100;
  }
}

//評価ボタン（サムアップ、ダウン）が押された時の処理
function clickCount() {
  let mainTable = document.getElementById("main-tb");
  let voteNum;
  let userComment = window.prompt("よろしければ、評価コメントを入力してください","");
  //表のサムアップ（ダウン）カウントをインクリメント
  voteNum = Number(mainTable.rows[Number(this.clickRow) + 1].cells[Number(this.clickCol) + 1].innerText);
  mainTable.rows[Number(this.clickRow) + 1].cells[Number(this.clickCol) + 1].innerText = voteNum + 1;

  //プロンプトで、OKボタンが押された場合、ユーザー入力コメントを表の「評価コメント」欄に出力
  if(userComment !== null) {
    
    if(userComment !== ""){
      if(userComment.charAt(0) !== "・") {
        userComment = "・" + userComment;
      }

      let voteComment = mainTable.getElementsByClassName("comment");
      let myCellVoteComment = mainTable.rows[Number(this.clickRow) + 1].cells[10];
      voteComment = document.createElement("br");
      myCellVoteComment.appendChild(voteComment);
      voteComment = document.createTextNode(userComment);
      myCellVoteComment.appendChild(voteComment);
    }
  }
}

function clickReserve() {
  window.open("reseve.html");
}

window.onload = function(){

  // 表の動的作成
  makeTable(carDb);
};


//フィルタ条件(日本)ボタンが押された時の処理
function buttonJapan() {
  let outputCars = [];
  //日本車のデータだけを抽出
  for(const array of carDb){
    if(array.country === "country/JP.gif"){
      outputCars.push(array);
    }
  }
  makeTable(outputCars);
}

//フィルタ条件(ALL)ボタンが押された時の処理
function buttonAll() {
  //全車データで表をリメイク
  makeTable(carDb);
}

//フィルタ条件（ドイツ）ボタンが押された時の処理
function buttonGermany() {
  let outputCars = [];
  //ドイツ車のデータだけを抽出
  for(const array of carDb){
    if(array.country === "country/DE.gif"){
      outputCars.push(array);
    }
  }
  makeTable(outputCars);
}

//フィルタ条件（米国）ボタンが押された時の処理
function buttonUSA() {
  let outputCars = [];
  //米国車のデータだけを抽出
  for(const array of carDb){
    if(array.country === "country/US.gif"){
      outputCars.push(array);
    }
  }
  makeTable(outputCars);
}
