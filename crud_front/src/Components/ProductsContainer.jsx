import React from 'react'
import ViewProduct from './ViewProduct'

class ProductsContainer extends React.Component {
  constructor(props) {
    super(props)
  }
  render () {
    return (
      <div className='productList'>
        {this.props.productData.map((data) => {
          return (
            <ViewProduct data={data} key={data.id} onDelete={this.props.deleteProduct} onUpdate={this.props.updateProduct} />
          )
        })}
      </div>
    )
  }
}

export default ProductsContainer
