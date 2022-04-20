/**
 * Input: num
 * 
 * Các bước xử lý
 * B1: Tìm các thẻ bằng id
 * B2: Tạo hàm tính
 *      + Lấy các giá trị từ form
 *      + ten = num / 2
 *      + unit = num % 2
 *      + sum = ten + unit
 *      + Hiển thị kết quả lên UI
 * 
 * B3: Gắn hàm vào sự kiện click
 * 
 * Output: sum
 */

var inpNum = document.getElementById("num");

function tinhTong() {
    var num = inpNum.value;
    var ten = Math.floor(num / 10);
    var unit = Math.floor(num % 10);
    var sum = ten + unit;

    document.getElementById("sum").innerHTML = "Tổng của " + ten + " và " + unit + " là: " + sum;
}