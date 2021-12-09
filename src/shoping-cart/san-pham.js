import React, { Component } from "react";

export default class SanPham extends Component {
  handleDetail = () => {
    this.props.detailProduct(this.props.product);
  }

  handleAddCart = () => {
    this.props.addProduct(this.props.products);
  }

  
  render() {
    // bóc tách
    const { product } = this.props;
    return (
      <div className="col-sm-4">
        <div className="card">
          <img className="card-img-top" src={product.hinhAnh} alt="" />
          <div className="card-body">
            <h4 className="card-title">{product.tenSP}</h4>
            <button className="btn btn-success" onClick ={this.handleDetail}>Chi tiết</button>
            {/* <button className="btn btn-danger" onClick = {this.addCart}>Thêm giỏ hàng</button> */}
            <button className="btn btn-danger" onClick = {()=>{
              this.props.addCart(product);
            }}>Thêm giỏ hàng</button>
          </div>
        </div>
      </div>
    );
  }
}
