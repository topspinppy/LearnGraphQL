import React, { Component } from 'react'
import { connect } from 'react-redux'
class Home extends Component {
	render() {
		return (
			<div>
				<h3> อายุของคุณ { this.props.age } ปี</h3>
        <button onClick={this.props.increteAge}>บวก</button>
        <button onClick={this.props.decreteAge}>ลบ</button>
			</div>
		)
	}
}
function mapStateToProps(state) {
	return {
		age: state.counter
	}
}

function mapDispatchToProps(dispatch) {
	return {
    increteAge: () => {
      dispatch({type: 'INCREMENT'})
    },
    decreteAge: () => {
      dispatch({type: 'DECREMENT'})
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)
