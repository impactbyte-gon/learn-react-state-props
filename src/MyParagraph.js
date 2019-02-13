import React from 'react'

class MyParagraph extends React.Component {
  render() {
    return (
      <p>
        Our names are{' '}
        {this.props.names.map((name, index) => {
          if (index !== this.props.names.length - 1) {
            return <span key={index}>{name}, </span>
          } else {
            return <span key={index}>{name}.</span>
          }
        })}
      </p>
    )
  }
}

export default MyParagraph
