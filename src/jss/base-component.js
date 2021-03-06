export default theme => (
  {
    root: {
      flexGrow: 1
    },
    paper: {
      overflow: 'hidden',
      padding: '5px'
    },
    button: {
      backgroundColor: theme.palette.subPrimary.main,
      color: theme.palette.subPrimary.contrastText,
      margin: theme.spacing.unit,
      '&:hover': {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
      }
    },
    contentLeft: {
      textAlign: 'left'
    },
    contentRight: {
      textAlign: 'right'
    },
    contentCenter: {
      textAlign: 'center'
    },
    cardWithHeader: {
      display: 'flex',
      flexDirection: 'column',
      overflow: 'visible',
      marginBottom: '10px'
    },
    cardHeader: {
      backgroundColor: theme.palette.subPrimary.main,
      marginTop: '-15px',
      marginLeft: '10px',
      marginRight: '10px',
      borderRadius: '5px',
      boxShadow: '0px 2px 4px -1px rgba(120,120,120,1)'
    },
    cardHeaderContent: {
      color: theme.palette.primary.contrastText,
    },
    cardContent: {
      paddingTop: '30px',
      paddingLeft: '30px',
      paddingRight: '30px',
      wordBreak: 'break-all',
      wordWrap: 'break-word'
    },
    inputFullWidth: {
      width: '100%'
    },
    chartContainer: {
      
      height: '250px',
      width: '250px'
    }
  }
)