const EmbeddedApp = ({ src, title, allow }: {src:string, title:string, allow:string}) => {
    return (
      <iframe src={src} title={title} allow={allow} style={{ width: '60vw', height: '40vh' }} />
    );
  };
  
  export default EmbeddedApp;