class TopBanner extends React.Component {
  render() {
    return (
      <div id="full-video">
        <section className="video-section">
          <div className="banner" id="home">
            <video id="video_background" preload="auto" autoPlay loop>
              <source src="src/assets/banner.mp4" type="video/mp4" />
            </video>
            <div className="top-header row" />
            <div className="banner-info">
              <div className="banner-left">
                <img src="src/assets/1.png" alt="" />
              </div>
              <div className="banner-right">
                <h1>ETHAN
                  <br />RICHARDSON
                </h1>
                <div className="border" />
                <h2>SOFTWARE ENGINEER</h2>
              </div>
              <div className="clearfix" />
            </div>
          </div>
        </section>
      </div>
    );
  }
}
// <MyList data={['Hi', 'I am', 'Ethan']} />
