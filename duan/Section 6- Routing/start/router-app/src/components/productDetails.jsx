import React, { Component } from "react";

class ProductDetails extends Component {
  handleSave = () => {
    //replace current path bằng new path và current path sẽ không còn có ở
    // history object
    this.props.history.replace("/product");
  };

  render() {
    return (
      <div>
        <h1>Product Details - {this.props.match.params.id}</h1>
        <button onClick={this.handleSave}>Save</button>
      </div>
    );
  }
}

export default ProductDetails;
