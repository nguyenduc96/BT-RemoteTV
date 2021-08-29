console.log("TV đầu tiên")
let tivi = new Tivi("VTV1", 30, true);
console.log(tivi);
console.log("TV khi dùng Remote")
let remote = new Remote("001", "VTV3", 50);
tivi.changeChanel();
tivi.changeVolume();
console.log(tivi);
console.log("Tăng volume")
remote.setChangeVolume(60);
tivi.changeVolume();
console.log(tivi);
console.log("Đổi kênh")
remote.setChangeChanel("VTV6");
tivi.changeChanel();
console.log(tivi);
console.log("Giảm volume")
remote.setChangeVolume(20);
tivi.changeVolume();
console.log(tivi);
