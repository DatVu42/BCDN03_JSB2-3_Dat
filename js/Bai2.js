/**
 * Input: num1, num2, num3, num4, num5
 * 
 * Các bước xử lý:
 * B1: Tìm các thẻ bằng id
 * B2: Tạo hàm tính
 *  + Lấy giá trị từ form
 *  + trungBinh = (partFloat(num1) + partFloat(num2) + partFloat(num3) + partFloat(num4) + partFloat(num5)) / 5;
 *  + Hiển thị kết quả lên UI
 * 
 * B3: Gắn hàm vào sự kiện click
 * 
 * Output: trungBinh
 */

var inpNum1 = document.getElementById("num1");
var inpNum2 = document.getElementById("num2");
var inpNum3 = document.getElementById("num3");
var inpNum4 = document.getElementById("num4");
var inpNum5 = document.getElementById("num5");

function tinhTB() {
    var num1 = parseFloat(inpNum1.value);
    var num2 = parseFloat(inpNum2.value);
    var num3 = parseFloat(inpNum3.value);
    var num4 = parseFloat(inpNum4.value);
    var num5 = parseFloat(inpNum5.value);
    
    var trungBinh = (num1 + num2 + num3 + num4 + num5) / 5;

    document.getElementById("trungBinh").innerHTML = trungBinh.toFixed(2);
}