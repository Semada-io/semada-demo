import React from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import baseComponentStyle from '../../jss/base-component'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import VoteChart from './vote-chart'

const screen = (props) => {
  let voteTimeEnd = new Date(props.proposal.voteTimeEnd * 1000)
  .toUTCString()

  let totalRepStaked = props.proposal.yesRepStaked + props.proposal.noRepStaked
  let yesRepPercent = Math.floor(100 * (props.proposal.yesRepStaked / totalRepStaked))
  let noRepPercent = Math.floor(100 * (props.proposal.noRepStaked / totalRepStaked))
  
  yesRepPercent = isNaN(yesRepPercent) ? 0 : yesRepPercent
  noRepPercent = isNaN(noRepPercent) ? 0 : noRepPercent
  
  return (
    <div>
      <Card className={props.classes.cardWithHeader}>
        <CardHeader
          classes={{
            root: props.classes.cardHeader,
            title: props.classes.cardHeaderContent,
            subheader: props.classes.cardHeaderContent,
          }}
          title="Proposal Status: Active"
          subheader="Voting is under way"
        />
        <div className={props.classes.cardContent}>
          <Grid container spacing={16}>
            <Grid item xs={12} sm={6}>
              <Typography variant='caption'>
                {props.proposal.name}
              </Typography>
              <Typography variant='title'>
                {props.proposal.evidence}
              </Typography>
              <br/>
              <Typography variant='caption'>
                Yes REP
              </Typography>
              <Typography variant='title'>
                {props.proposal.yesRepStaked} ({yesRepPercent}%)
              </Typography>
              <br/>
              <Typography variant='caption'>
                No REP
              </Typography>
              <Typography variant='title'>
                {props.proposal.noRepStaked} ({noRepPercent}%)
              </Typography>
              <br/>
              <Typography variant='caption'>
                Voting End Time
              </Typography>
              <Typography variant='title'>
                {voteTimeEnd}
              </Typography>
              <br/>
              <Typography variant='caption'>
                Voting Time Remaining
              </Typography>
              <Typography variant='title'>
                {props.proposal.voteTimeRemaining}
              </Typography>
              <br/>
            </Grid>  
            <Grid item xs={12} sm={6}>
              <VoteChart 
                yes={props.proposal.yesRepStaked} 
                no={props.proposal.noRepStaked} />
            </Grid>
          </Grid>
        </div>
        <Button className={props.classes.button}
          onClick={() => props.vote(props.proposal._id, props.dao._id)} >
          Vote
        </Button>
      </Card>
    </div>
  )

}

export default withStyles(baseComponentStyle)(screen)