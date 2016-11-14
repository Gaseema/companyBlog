import React from 'react';

const Footer = () => (
  (
    <div>
      <section className="row footer">
        <div style={{width: '90%', display: 'block', marginLeft: 'auto', marginRight: 'auto'}}>
          <div className="small-12 large-4 columns">
            <h6>RANDOM POSTS</h6>
            <div style={{borderBottom: 'solid rgba(139, 133, 133, 0.45) 1px', marginBottom: 20}} />
            <div className="row footerPad">
              <div className="small-4 large-4 columns">
                <img src="./img/africanFashion.jpg" />
              </div>
              <div className="small-8 large-8 columns">
                <p className="postFontWeight">Lorem Ipsum is simply dummy text of the printing an</p>
                <p>Oct 07, 2014</p>
              </div>
            </div>
            <div className="row footerPad">
              <div className="small-4 large-4 columns">
                <img src="./img/fashion2.jpg" />
              </div>
              <div className="small-8 large-8 columns">
                <p className="postFontWeight">Lorem Ipsum is simply dummy text of the printing an</p>
                <p>Oct 07, 2014</p>
              </div>
            </div>
            <div className="row footerPad">
              <div className="small-4 large-4 columns">
                <img src="./img/design.jpg" />
              </div>
              <div className="small-8 large-8 columns">
                <p className="postFontWeight">Lorem Ipsum is simply dummy text of the printing an</p>
                <p>Oct 07, 2014</p>
              </div>
            </div>
            <div className="row footerPad">
              <div className="small-4 large-4 columns">
                <img src="./img/caesar_war_for_the_planet_of_the_apes-3840x2160.jpg" />
              </div>
              <div className="small-8 large-8 columns">
                <p className="postFontWeight">Lorem Ipsum is simply dummy text of the printing an</p>
                <p>Oct 07, 2014</p>
              </div>
            </div>
          </div>
          <div className="small-12 large-4 columns">
            <div>
              <h6>TAGS</h6>
              <div style={{borderBottom: 'solid rgba(139, 133, 133, 0.45) 1px', marginBottom: 20}} />
              <div>
                <ul style={{marginLeft: 0}}>
                  <li>Business</li>
                  <li>Family</li>
                  <li>Featured</li>
                  <li>Gallery</li>
                  <li>Style</li>
                  <li>Technology</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="small-12 large-4 columns">
            <h6>RECENT IN FASHION</h6>
            <div style={{borderBottom: 'solid rgba(139, 133, 133, 0.45) 1px', marginBottom: 20}} />
            <div className="row footerPad">
              <div className="small-4 large-4 columns">
                <img src="./img/fashion3.jpg" />
              </div>
              <div className="small-8 large-8 columns">
                <p className="postFontWeight">Lorem Ipsum is simply dummy text of the printing an</p>
                <p>Oct 07, 2014</p>
              </div>
            </div>
            <div className="row footerPad">
              <div className="small-4 large-4 columns">
                <img src="./img/fashion1.jpg" />
              </div>
              <div className="small-8 large-8 columns">
                <p className="postFontWeight">Lorem Ipsum is simply dummy text of the printing an</p>
                <p>Oct 07, 2014</p>
              </div>
            </div>
            <div className="row footerPad">
              <div className="small-4 large-4 columns">
                <img src="./img/fashion2.jpg" />
              </div>
              <div className="small-8 large-8 columns">
                <p className="postFontWeight">Lorem Ipsum is simply dummy text of the printing an</p>
                <p>Oct 07, 2014</p>
              </div>
            </div>
            <div className="row footerPad">
              <div className="small-4 large-4 columns">
                <img src="./img/pexels-photo-25943-large.jpg" />
              </div>
              <div className="small-8 large-8 columns">
                <p className="postFontWeight">Lorem Ipsum is simply dummy text of the printing an</p>
                <p>Oct 07, 2014</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="row" style={{backgroundColor: 'black', color: 'white', minWidth: '100%', textAlign: 'center'}}>
        <p style={{marginBottom: 0, fontSize: '0.8em', padding: 5}}>Copyright 2016</p>
      </div>
    </div>
  )
);

export default Footer;

