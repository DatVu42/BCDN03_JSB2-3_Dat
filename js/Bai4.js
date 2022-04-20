/**
 * Input: chieuDai, chieuRong
 * 
 * Các bước xử lý:
 * B1: Tìm các thẻ bằng id
 * B2: Tạo hàm tính
 *      + Lấy giá trị từ form
 *      + dienTich = chieuDai * chieuRong
 *      + chuVi = (chieuDai + chieuRong) * 2
 *      + Hiển thị kết quả lên UI
 * 
 * B3: Gắn hàm vào sự kiện click
 * 
 * Output: dienTich, chuVi
 */

var inpChieuDai = document.getElementById("chieuDai");
var inpChieuRong = document.getElementById("chieuRong");

function tinhDienTichChuVi() {
    var chieuDai = parseFloat(inpChieuDai.value);
    var chieuRong = parseFloat(inpChieuRong.value);
    var dienTich = chieuDai * chieuRong;
    var chuVi = (chieuDai + chieuRong) * 2;

    document.getElementById("dienTich").value = dienTich + " m2";
    document.getElementById("chuVi").value = chuVi + " m";
}