const dialogStyle = {
  darkbg: {
    position: 'fixed',
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
    background: 'rgba(0,0,0,0.2)',
    zIndex: '9',
  },
  dialog: {
    background: '#fff',
    borderRadius: '3px',
    //boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.14)",
    boxShadow: '0 12px 15px 0 rgba(0,0,0,0.24)',
    padding: '0px 0px 10px 0px',
    width: '60%',
    maxWidth: '700px',
    minWidth: '250px',
    maxHeight: '500px',
    position: 'absolute',
    zIndex: '10 !important',
    top: '50%',
    right: '0',
    left: '0',
    margin: 'auto',
    transform: 'translateY(-50%)',
  },
  closebutton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    background: 'transparent',
    border: 'none',
    padding: '0',
    color: '#ccc',
    cursor: 'pointer',

    '&:hover': {
      color: '#999',
      cursor: 'pointer',
    },
  },
  dialogHeader: {
    boxSizing: 'border-box',
    borderBottom: '1px solid #eee',
    padding: '10px',
    fontSize: '18px',
    fontWeight: '100',
    color: '#444',
    background: '#f7f7f7',

    '& h4': {
      float: 'left',
      width: '80%',
    }
  },
  dialogBody: {
    padding: '10px 50px 10px 30px',
  },
  clear: {
    clear: 'both',
  },
}

export default dialogStyle
