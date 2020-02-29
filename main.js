//Viết HTML và JS cùng 1 file (file JS) -> cách viết bên reactJS

import {
    /*getListProduct, 
      deleteProduct, 
      getProductById, 
      updateProduct,
      addProduct*/ 
    callApi } from './utils/callapi.js';
import SanPham from './models/SanPham.js';

const renderHTML = () => {
    let contentHTML = `
    <div class="card text-white bg-dark">
        <div class="card-body">
            <h4 class="card-title">Danh sách sản phẩm</h4>
            <div class='container'>
                <div class="row">
                    <div class="col-md-3">
                        <input id="maSP" class="form-control" placeholder="Mã SP" disabled />
                    </div>
                    <div class="col-md-3">
                        <input id="tenSP" class="form-control" placeholder="Tên SP" />
                    </div>
                    <div class="col-md-3">
                        <input id="gia" class="form-control" placeholder="Giá" />
                    </div>
                    <div class="col-md-3">
                        <input id="hinhAnh" class="form-control" placeholder="Link hình" />
                    </div>
                </div>
                <br />
                <button id="btnThem" class="btn btn-success">Thêm sản phẩm</button>
                <button id="btnCapNhat" class="btn btn-success">Cap nhat</button>
            </div>
        </div>
    </div>
    <div class="container">
        <table class="table">
        <thead>
            <tr>
            <th>Mã SP</th>
            <th>Tên SP</th>
            <th>Giá </th>
            <th>Hình ảnh</th>
            <th></th>
            </tr>
        </thead>
        <tbody id="tblDanhSachSanPham">

        </tbody>
        </table>
    </div>
    `
    document.getElementById('root').innerHTML = contentHTML;
}

const renderTable = () => {
    callApi("SanPham","GET",null) //getListProduct()
        .then(result => {
            console.log(result.data);
            let contentTable = '';
            result.data.map((product) => {
                contentTable += `
                    <tr>
                        <td>${product.id}</td>
                        <td>${product.tenSP}</td>
                        <td>${product.gia}</td>
                        <td>
                            <img src = "${product.hinhAnh}" width = "50">
                        </td>
                        <td>
                            <button class="btn btn-info" onclick = "suaSP(${product.id})">Sửa</button>
                            <button class="btn btn-danger" onclick = "xoaSP(${product.id})">Xoá</button>
                        </td>
                    </tr>
                `;
            });
            document.getElementById("tblDanhSachSanPham").innerHTML = contentTable;
        })
        .catch(err => {
            console.log(err);
        });
}

renderHTML();
renderTable();

/* Xoa SP */

console.log(window);
window.xoaSP = xoaSP;

function xoaSP(id) {
    console.log(id);
    
    callApi(`SanPham/${id}`,'DELETE',null) //deleteProduct(id)
        .then(result => {
            console.log(result);
            alert
            renderTable();
        }).catch(err => {
            console.log(err);
        });
}

/* Sửa SP */

console.log(window);
window.suaSP = suaSP;

function suaSP(id) {
    console.log(id);
    
    callApi(`SanPham/${id}`,'GET',null) // getProductById(id)
        .then(result => {
            console.log(result.data);
            document.getElementById('maSP').value = result.data.id;
            document.getElementById('tenSP').value = result.data.tenSP;
            document.getElementById('gia').value = result.data.gia;
            document.getElementById('hinhAnh').value = result.data.hinhAnh;
            capNhatSP(id);
        }).catch(err => {
            console.log(err);
        })
}

/* Cập nhật SP */

document.getElementById("btnCapNhat").addEventListener("click", function () {
    let maSP = document.getElementById("maSP").value;
    let tenSP = document.getElementById("tenSP").value;
    let gia = document.getElementById("gia").value;
    let hinhAnh = document.getElementById("hinhAnh").value;

    let sanPham = new SanPham(maSP, tenSP, gia, hinhAnh);

    callApi(`SanPham/${maSP}`,'PUT',sanPham) //updateProduct(maSP, sanPham)
        .then(result => {
            console.log(result.data);
            alert
            renderTable();
        })
        .catch(err => {
            console.log(err);
        })

    console.log(sanPham);
});

/* Thêm SP */

document.getElementById('btnThem').addEventListener("click", function () {
    let tenSP = document.getElementById("tenSP").value;
    let gia = document.getElementById("gia").value;
    let hinhAnh = document.getElementById("hinhAnh").value;

    let sanPham = new SanPham("", tenSP, gia, hinhAnh);
    
    callApi('SanPham','POST',sanPham) //addProduct(sanPham)
        .then( result => {
            console.log(result.data);
            alert
            renderTable();
        })
        .catch(err => {
            console.log(err);
        })
        console.log(sanPham);
})
