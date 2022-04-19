/**
 * Input:
 * + luong1Ngay
 * + soNgayLam
 * 
 * Các bước xử lý:
 * B1: Tìm các thẻ bằng id
 * B2: Tạo hàm tính
 *  + Lấy giá trị từ form
 *  + tongLuong = luong1Ngay * soNgayLam
 *  + Hiển thị kết quả lên UI
 * B3: Gắn hàm vào sự kiện click
 * 
 * Output: tongLuong
 */

var inpluong1Ngay = document.getElementById("luong1Ngay");
var inpSoNgayLam = document.getElementById("soNgayLam");
var tongLuong = 0;

function tinhLuong() {
    var luong1Ngay = inpluong1Ngay.value;
    var soNgayLam = inpSoNgayLam.value;

    tongLuong = luong1Ngay * soNgayLam;

    document.getElementById("tongLuong").innerHTML = "Lương của bạn là: " 
        + tongLuong.toLocaleString('vi', {style: 'currency', currency: 'VND'});
}