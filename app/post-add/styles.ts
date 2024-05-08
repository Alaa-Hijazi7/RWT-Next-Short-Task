export const styles = {
  section: { display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: 'calc(100vh - 221px)' },
  stepIndicator: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    paddingTop: '5px',
  },
  outline: {
    border: "1px solid #B0B0B0",
    backgroundColor: "transparent",
    color: "#000000",
  },
  actions: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    maxWidth: '482',
    gap: '16px',
    mt: '48px',
    button: {
      maxWidth: '233px',
    },
  },
  children: {
    width: '100%',
    maxWidth: '1027px',
    mb: 30,
    mt: '100px',
  },

  stepWrapper: {
    boxShadow: '0px 0px 10px 2px #0000001A',
    w: '100%',
    maxWidth: '1027px',
    p: '42px 49px',
    borderRadius: '12px',
  },
  doubleField: {
    display: 'flex',
    gap: '32px',
    justifyContent: 'space-between',
    w: '100%',
    '> div': {
      maxWidth: 'calc(50% - 16px)',
    },
  },
  'drag-drop-container': {
    flex: 2,
    width: '100%',
    minHeight: '286px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '16px',

    backgroundColor: '#F0F0F0',
    border: '1px dashed #666666',
    borderRadius: '6px',
  },
  'images-list': {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  'image-item': {
    p: "4px",
    backgroundColor: '#F3F3F3',
    borderRadius: '8px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '8px',
    "img": {
      borderRadius: '4px',
      objectFit: 'cover',
      maxWidth: "39px",
      maxHeight: "33px",
    },
    ".chakra-text": {
      overflow: "hidden",
      whiteSpace: "nowrap",
      maxWidth: "210px",
      textOverflow: "ellipsis",
    }
  },
  reviewInformationSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: "45px",
  }
}
