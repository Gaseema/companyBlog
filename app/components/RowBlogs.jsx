import React from 'react';

const RowBlogs = () => (
  (
    <section className="row blogs">
      <div className="row ">
        <div className="small-12 large-5 columns" style={{ width: '50%' }}>
          <div className="top-bar-right" style={{ backgroundColor: '#20C1DD' }}>
            <h6>DESIGN</h6>
          </div>
          <div id="cat1">
            <p>NULLAM UT MAGNA NON LACUS ADIPISCING</p>
          </div>
        </div>
        <div className="small-12 large-3 columns" style={{ padding: '0px 0px', width: '20%' }}>
          <div className="top-bar-right" style={{ backgroundColor: '#FFA905' }}>
            <h6>PHOTOGRAPHY</h6>
          </div>
          <div id="cat2">
            <p>NULLAM UT MAGNA NON LACUS ADIPISCING</p>
          </div>
        </div>
        <div className="small-12 large-4 columns " style={{ width: '30%' }}>
          <div style={{ height: '200px', marginBottom: '20px' }}>
            <div className="top-bar-right" style={{ backgroundColor: '#5AA628' }}>
              <h6>FASHION</h6>
            </div>
            <div id="cat3">
              <p>NULLAM UT MAGNA NON LACUS ADIPISCING</p>
            </div>
            <div className="top-bar-right" style={{ backgroundColor: '#F04A3C' }}>
              <h6>ART</h6>
            </div>
            <div id="cat4">
              <p>NULLAM UT MAGNA NON LACUS ADIPISCING</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
);

export default RowBlogs;

