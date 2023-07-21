document.getElementById('ketQua1').onclick = xetDiem;
function xetDiem() {
    //Lấy dữ liệu đầu vào, điểm chuẩn
    var diemChuan = Number(DomID('diemChuan').value);
    var khuVuc = Number(DomID('khuVuc').value);
    var doiTuong = Number(DomID('doiTuong').value);
    var mon1 = Number(DomID('mon1').value);
    var mon2 = Number(DomID('mon2').value);
    var mon3 = Number(DomID('mon3').value);
    var diem = !0;
    //kết quả xét đạt hoặc không đạt string
    var ketQua = '';

    //Tổng điểm 3 môn * khu vực + đối tượng = tổng > điểm chuẩn đạt
    var tong = tinhTongDiem(mon1, mon2, mon3, khuVuc, doiTuong);


    if (diem &= xetDiemKhong(mon1) && xetDiemKhong(mon2) && xetDiemKhong(mon3)) {
        if (tong >= diemChuan) {
            ketQua = 'Bạn đã đậu. ' + ' Tổng điểm: ' + tong;
        } else {
            ketQua = 'Bạn đã rớt. ' + ' Tổng điểm: ' + tong;
        }
    } else {
        ketQua = 'Bạn đã rớt. Do có điểm bằng 0 (Không nhập số âm)';
    }
    //In ra màn hình
    DomID('txtResult').innerHTML = ketQua;

}
function DomID(id) {
    return document.getElementById(id);
}
function xetDiemKhong(mon) {
    return !(mon <= 0);
}
function tinhTongDiem(mon1, mon2, mon3, khuVuc, doiTuong) {
    var tong = mon1 + mon2 + mon3 + khuVuc + doiTuong;
    return tong;
}
// ------------------------------------------------------

document.getElementById('ketQua2').onclick = tinhTienDien;
function tinhTienDien() {
    //Lấy dữ liệu đầu vào 
    var ten = DomID('ten').value;
    var dienTieuThu = Number(DomID('soKW').value);
    const DAU_50 = 500;
    const KE_50 = 650;
    const KE_100 = 850;
    const KE_150 = 1100;
    const CON_LAI = 1300;

    //Output  tongtiendien = dien tieu thu * gia dien
    var tongTienDien = 0;

    //progress
    if (dienTieuThu > 0 && dienTieuThu <= 50) {
        tongTienDien = dienTieuThu * DAU_50;
    } else if (dienTieuThu > 50 && dienTieuThu <= 100) {
        tongTienDien = 50 * DAU_50 + (dienTieuThu - 50) * KE_50;
    } else if (dienTieuThu > 100 && dienTieuThu <= 200) {
        tongTienDien = 50 * DAU_50 + 50 * KE_50 + (dienTieuThu - 100) * KE_100;
    } else if (dienTieuThu > 200 && dienTieuThu <= 350) {
        tongTienDien = 50 * DAU_50 + 50 * KE_50 + 100 * KE_100 + (dienTieuThu - 200) * KE_150;
    } else if (dienTieuThu > 350) {
        tongTienDien = 50 * DAU_50 + 50 * KE_50 + 100 * KE_100 + 150 * KE_150 + (dienTieuThu - 350) * CON_LAI;
    } else {
        alert('Không nhập số âm')
    }

    //In ra màn hình
    DomID('txtResult2').innerHTML = 'Họ tên: ' + ten + ' - Tiền điện của bạn là: ' + tongTienDien;
}
// ------------------------------------------------------------
document.getElementById('ketQua3').onclick = tinhThue;
function tinhThue() {
    //input
    var ten = DomID('tenBai3').value;
    var tongThuNhap = Number(DomID('tongThuNhapNam').value);
    var soNguoiPhuThuoc = Number(DomID('soNguoiPhuThuoc').value);
    //thuế suất

    const lv1 = 0.05,
        lv2 = 0.1,
        lv3 = 0.15,
        lv4 = 0.2,
        lv5 = 0.25,
        lv6 = 0.3,
        lv7 = 0.35,
        trieu = 1000000;

    //output
    var tienThue = 0;

    //progress
    var thuNhapChiuThue = tongThuNhap - 4000000 - 1600000 * soNguoiPhuThuoc;
    var giamDonVi = thuNhapChiuThue / trieu;
    if (soNguoiPhuThuoc <= 0) {
        alert('Nhập số người phù hợp')
    } else {
        if (giamDonVi > 0 && giamDonVi <= 60) {
            tienThue = thuNhapChiuThue * lv1;
        } else if (giamDonVi > 60 && giamDonVi <= 120) {
            tienThue = thuNhapChiuThue * lv2;
        } else if (giamDonVi > 120 && giamDonVi <= 210) {
            tienThue = thuNhapChiuThue * lv3;
        } else if (giamDonVi > 210 && giamDonVi <= 384) {
            tienThue = thuNhapChiuThue * lv4;
        } else if (giamDonVi > 384 && giamDonVi <= 624) {
            tienThue = thuNhapChiuThue * lv5;
        } else if (giamDonVi > 624 && giamDonVi <= 960) {
            tienThue = thuNhapChiuThue * lv6;
        } else if (giamDonVi > 960) {
            tienThue = thuNhapChiuThue * lv7;
        } else {
            alert('Vui lòng nhập số hợp lệ');
        }
    }


    tienThue = new Intl.NumberFormat("vn-VN").format(tienThue);
    //in ra màn hình
    DomID('txtResult3').innerHTML = 'Họ tên: ' + ten + ' - Tiền thuế của bạn là: ' + tienThue + ' VND';
}
// ------------------------------------------
document.getElementById('ketQua4').onclick = tinhTienCap;
function tinhTienCap() {
    var maKhachHang = DomID('maKhachHang').value;
    var soKenhCap = DomID('soKenh').value;
    var soKetNoi = DomID('soKetNoi').value;
    var loaiKhacHang = DomID('loaiKhacHang').value;

    //Nhà dân
    const XU_LY_HOA_DON = 4.5;
    const DICH_VU_CO_BAN = 20.5;
    const THUE_KENH_CAO_CAP = 7.5;

    //DOANH NGHIỆP
    const XU_LY_HOA_DON_dn = 15;
    const DICH_VU_CO_BAN_dn = 75;
    const THUE_KENH_CAO_CAP_dn = 50;
    const KET_NOI_THEM = 5;

    //output
    var tienCap = 0;

    //progress
    if (loaiKhacHang == 'user') {
        tienCap = XU_LY_HOA_DON + DICH_VU_CO_BAN + THUE_KENH_CAO_CAP * soKenhCap;
    } else if (loaiKhacHang == 'company') {
        if (soKetNoi > 0 && soKetNoi <= 10) {
            tienCap = XU_LY_HOA_DON_dn + DICH_VU_CO_BAN_dn + THUE_KENH_CAO_CAP_dn * soKenhCap;
        } else if (soKetNoi > 10) {
            tienCap = XU_LY_HOA_DON_dn + DICH_VU_CO_BAN_dn + KET_NOI_THEM * (soKetNoi - 10) + THUE_KENH_CAO_CAP_dn * soKenhCap;
        } else {
            alert('Không nhập số âm');
        }
    } else {
        alert('Chưa chọn loại khách hàng');
    }


    //IN RA màn hình
    DomID('txtResult4').innerHTML = 'Mã khách hàng ' + maKhachHang + ' - TIền cáp: $' + tienCap;


}
document.getElementById('loaiKhacHang').onchange = function () {
    var open = DomID('loaiKhacHang').value;
    // DomID('soKetNoi').style.display = 'company' == open ? 'block' : 'none';
    if (open == 'company') {
        DomID('soKetNoi').style.display = 'block';
    } else
        DomID('soKetNoi').style.display = 'none';
}