import React from 'react';

const Social = () => (
  <div className="small-12 large-4 columns" style={{ paddingLeft: '40px', width: '32%' }}>
    <div className="socialMedia">
      <div id="social">SOCIAL</div>
    </div>
    <div className="subscription">
      <div id="facebook">
        <ul>
          <li className="bdrRight">
            <i className="fa fa-facebook" aria-hidden="true"></i>
          </li>
          <li>
            <p>187,255</p>
          </li>
          <li className="lastchild">
            <p>follow us on <span style={{ color: 'white' }}>facebook</span></p>
          </li>
        </ul>
      </div>
      <div id="twitter">
        <ul>
          <li className="bdrright">
            <i className="fa fa-twitter" aria-hidden="true"></i>
          </li>
          <li>
            <p>187,255</p>
          </li>
          <li className="lastchild">
            <p>follow us on <span style={{ color: 'white' }}>twitter</span></p>
          </li>
        </ul>
      </div>
      <div id="youtube">
        <ul>
          <li className="bdrright">
            <i className="fa fa-youtube" aria-hidden="true"></i>
          </li>
          <li>
            <p>187,255</p>
          </li>
          <li className="lastchild">
            <p>subscribe us on <span style={{ color: 'white' }}>youtube</span></p>
          </li>
        </ul>
      </div>
    </div>
    <div style={{ margintop: '40px' }}>
      <div className="socialmedia">
        <div id="social">follow by email</div>
      </div>
      <div className="subscribe">
        <h6>get more stuff</h6>
        <h3>in your inbox</h3>
        <a className="button">submit</a>
        <p>we respect your privacy</p>
      </div>
    </div>
  </div>
);

export default Social;

