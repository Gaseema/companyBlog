import React from 'react';
import Social from './Social.jsx';

const RowLatest = () => (
  <section className="row latest">
    <div className="row ">
      <div className="small-12 large-5 columns" style={{ width: '45%', height: '500px' }}>
        <div>
          <div style={{ overflow: 'hidden' }}>
            <div className="zoom" style={{ backgroundImage: 'url(./img/bicycle-1920x1080.jpg)', height: '300px' }}>
            </div>
          </div>
          <div style={{ padding: '10px', paddingTop: '5px' }}>
            <h3>Lorem Ipsum is simply dummy text</h3>
            <p>by <span style={{ fontWeight: '700' }}>Rina Chaudhary</span> <span style={{ float: 'right', color: '#3f3f3f' }}>Dec 14,2013</span></p>
            <div>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
            </div>
          </div>
        </div>
      </div>
      <div className="small-12 large-3 columns " style={{ padding: '0px 0px', width: '23%' }}>
        <div style={{ height: '260px' }}>
          <div>
            <div style={{ overflow: 'hidden' }}>
              <img className="zoom" src="img/bicycle-1920x1080.jpg" style={{ height: '160px', width: '100%' }} alt="abc" />
            </div>
            <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h6>
            <div id="author">
              <p>by <span style={{ fontWeight: '700' }}>Rina Chaudhary</span> <span style={{ float: 'right', color: '#3f3f3f' }}>Dec 14,2013</span></p>
            </div>
          </div>
        </div>
        <div style={{ height: '260px' }}>
          <div>
            <div style={{ overflow: 'hidden' }}>
              <img className="zoom" src="img/bicycle-1920x1080.jpg" style={{ height: '160px', width: '100%' }} alt="abc" />
            </div>
            <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h6>
            <div id="author">
              <p>by <span style={{ fontWeight: '700' }}>Rina Chaudhary</span> <span style={{ float: 'right', color: '#3f3f3f' }}>Dec 14,2013</span></p>
            </div>
          </div>
        </div>
      </div>
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
              <li className="lastChild">
                <p>Follow us on <span style={{ color: 'white' }}>FaceBook</span></p>
              </li>
            </ul>
          </div>
          <div id="twitter">
            <ul>
              <li className="bdrRight">
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </li>
              <li>
                <p>187,255</p>
              </li>
              <li className="lastChild">
                <p>Follow us on <span style={{ color: 'white' }}>Twitter</span></p>
              </li>
            </ul>
          </div>
          <div id="youtube">
            <ul>
              <li className="bdrRight">
                <i className="fa fa-youtube" aria-hidden="true"></i>
              </li>
              <li>
                <p>187,255</p>
              </li>
              <li className="lastChild">
                <p>Subscribe us on <span style={{ color: 'white' }}>YouTube</span></p>
              </li>
            </ul>
          </div>
        </div>
        <div style={{ marginTop: '40px' }}>
          <div className="socialMedia">
            <div id="social">FOLLOW BY EMAIL</div>
          </div>
          <div className="subscribe">
            <h6>GET MORE STUFF</h6>
            <h3>in your inbox</h3>
            <a className="button">SUBMIT</a>
            <p>We respect your privacy</p>
          </div>
        </div>
      </div>
    </div>
    <Social />
  </section>
);

export default RowLatest;

