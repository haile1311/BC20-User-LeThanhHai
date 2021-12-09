import React, { Component } from "react";
import DanhSachSanPham from "./danh-sach-san-pham";
import Modal from "./modal";
import data from "./data.json";

export default class LiftingStateUpCart extends Component {
  constructor(props){
    super(props);
    this.state = {
      listProduct: data,
      detailProduct: data[0],
      listCart: []
    }
  }

  

  handleDetailProduct = (product) => {
    // nhận product từ component SanPham truyền ra
    // cập nhật lại state => để component render lại lần mới
    this.setState({
      detailProduct: product,
    })
    console.log(product);
  }
  _findIndex = (maSP) => {
    return this.state.listCart.findIndex((item)=>{
      return item.maSP === maSP;
    });
  }

  handleAddCart = (product) => {
    // nhận product từ component SanPham truyền ra

    // ... spread operator ES6: COPY MẢNG LISTCART TRONG STATE => GÁN VÔ BIẾN MỚI 
    let listCart = [...this.state.listCart];
   
    // tìm kiếm product có tồn tại trong state.listCart?
    const index = this._findIndex(product.maSP);
    if(index !==-1){
      // tìm thấy => cập nhật lại soLuong
      listCart[index].soLuong +=1;
    }else{
      // thêm product vào listCart
      const productCart = {
        maSP: product.maSP,
        tenSP: product.tenSP,
        hinhAnh: product.hinhAnh,
        soLuong: 1,
        donGia: product.giaBan,
      }
      listCart.push(productCart);
    }
    this.setState({
      listCart,
    })
  }

  handleDelete = (product) => {
    // nhận product từ Component Modal truyền ra
    // 1. tìm kiếm product
    // 2. dùng hàm slice(index,1) để xóa
    // 3. setState lại
    const index = this._findIndex(product.maSP)
    if(index !== -1){
      let listCart = [...this.state.listCart];
      listCart.splice(index,1);
      this.setState({
        listCart,
      })
    }
  }
  
  handleUpdateQuantity = (product,status) => {
      // nhận product từ Modal truyền ra
   const index =  this._findIndex(product.maSP);
   if (index !== -1){
     let listCart = [...this.state.listCart];
    if (status) {
      listCart[index].soLuong +=1;
    }else{
      if(listCart[index].soLuong > 1){
        listCart[index].soLuong -=1;
      };
    }
    this.setState({
      listCart,
    });
   }
  }

  totalQuantity = () => {
    return this.state.listCart.reduce((total, product)=>{
      return total += product.soLuong
    },0)
  }

  render() {
    const {detailProduct} = this.state;
    return (
      <div>
        <h3 className="title">Bài tập giỏ hàng</h3>
        <div className="container">
          <button
            className="btn btn-danger"
            data-toggle="modal"
            data-target="#modelId"
          >
            Giỏ hàng ({this.totalQuantity()})
          </button>
        </div>
        <DanhSachSanPham listProduct={this.state.listProduct} detailProduct={this.handleDetailProduct} addCart={this.handleAddCart}/>
        <hr />
        <Modal listCart={this.state.listCart} productDelete={this.handleDelete} productUpdateQuantity={this.handleUpdateQuantity}/>
        <div className="row">
          <div className="col-sm-5">
            <img className="img-fluid" src={detailProduct.hinhAnh} alt="" />
          </div>
          <div className="col-sm-7">
            <h3>Thông số kỹ thuật</h3>
            <table className="table">
              <tbody>
                <tr>
                  <td>Màn hình</td>
                  <td>{detailProduct.manHinh}</td>
                </tr>
                <tr>
                  <td>Hệ điều hành</td>
                  <td>{detailProduct.heDieuHanh}</td>
                </tr>
                <tr>
                  <td>Camera trước</td>
                  <td>{detailProduct.cameraTruoc}</td>
                </tr>
                <tr>
                  <td>Camera sau</td>
                  <td>{detailProduct.cameraSau}</td>
                </tr>
                <tr>
                  <td>RAM</td>
                  <td>{detailProduct.ram}</td>
                </tr>
                <tr>
                  <td>ROM</td>
                  <td>{detailProduct.rom}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
