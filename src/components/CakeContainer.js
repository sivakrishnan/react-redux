import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux'

function CakeContainer(props) {
    return (
        <div>
            <h2>Number of Cakes: {props.numOfCakes}</h2>
            <button onClick={props.buyCake}>By Cake</button>
        </div>
    )
}

//read data from redux state step:1 get required data from redux state
const mapStateToProps = (state) => {
    return {
        numOfCakes: state.cake.numOfCakes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)