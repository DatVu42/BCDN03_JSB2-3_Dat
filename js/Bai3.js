/**
 * Input: tienUSD
 * 
 * Các bước xử lý:
 * B1: Tìm các thẻ bằng id
 * B2: Tạo hàm tính
 *      + Lấy giá trị từ form
 *      + tienVND = tienUSD * tyGia
 *      + Hiển thị kết quả lên UI
 * 
 * B3: Gắn hàm vào sự kiện click
 * 
 * Output: tienVND
 */

var inpTyGia = document.getElementById("tyGia");
var inpTienUSD = document.getElementById("tienUSD");

function doiTienUSD() {
    var tyGia = inpTyGia.value;
    var tienUSD = inpTienUSD.value;
    var tienVND = tienUSD * tyGia;

    document.getElementById("tienVND").value = tienVND.toLocaleString();
}