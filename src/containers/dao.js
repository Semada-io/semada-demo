import React, { Component } from 'react'
import ProposalsLayout from '../hocs/proposals-layout'
import {connect} from 'react-redux'
import DaoScreen from '../presenters/dao/screen'
import getTokenBalance from '../utils/getTokenBalance'
import { 
  getDao,
  receiveRepBalance,
  showRepBalance
} from '../actions/daos'

const mapStateToProps = (state, ownProps) => {  
  let id = ownProps.match.params.id
  
  return {
    dao: state.daos[id],
    web3: state.auth.web3,
    access_token: state.auth.access_token,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getDao: id => {
      return dispatch(getDao(id))
    },
    getRepBalance: async(web3, semadaCoreContract, dao) =>{
      let tokenBal = await getTokenBalance(web3, semadaCoreContract, dao.tokenNumberIndex)
      dispatch(receiveRepBalance(tokenBal))
    },
    showRepBalance: () => {
      dispatch(showRepBalance())
    },
  }
}

class Dao extends Component {
  
  componentDidMount() {
    let id = this.props.match.params.id
    this.props.getDao(id)
    this.props.getRepBalance(this.props.web3, this.props.semadaCoreContract, this.props.dao)
    if(!this.props.showRepBalance){
      this.props.showRepBalance()
    }
  }

  render() {
    if(this.props.dao) {
      return (
        <div>
          <DaoScreen {...this.props} />
        </div>
      )
    } else {
      return (<div>Loading...</div>)
    }

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  ProposalsLayout(Dao)
)