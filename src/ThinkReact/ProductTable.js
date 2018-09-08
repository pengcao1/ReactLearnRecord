import React from "react"
import ProductRow from "./ProductRow";

class ProductTable extends React.Component {
    render() {
        const { filterText, inStockOnly } = this.props;
        const rows = [];
        console.log("ProductTable render..", filterText, inStockOnly)
        console.log(" props ", this.props)
        this.props.products.forEach((product) => {
            if (product.name.indexOf(filterText) === -1) {
                return;
            }
            if (inStockOnly && !product.stocked) {
                return;
            }
            rows.push(
                <ProductRow
                    product={product}
                    key={product.name}
                />
            );
        });
        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        )
    };
}
export default ProductTable;