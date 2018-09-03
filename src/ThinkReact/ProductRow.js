import React from "react"

class ProductRow extends React.Component {
    render() {
        const product = this.props.product;
        const name = product.stocked ?
            product.name :
            <span style={{color:"#FF0000"}}>
                {product.name}
            </span>
        console.log("product ", product);

        return (
            <tr>
                <td>{name}</td>
                <td>{product.price}</td>
            </tr>
        )
    }
}

export default ProductRow;