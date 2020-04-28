import React, { Component } from 'react';
import './manage-influencer-filter.css';
import Dropdown from '../assets/icons/arrow_drop_down.svg'
import Delete from '../assets/icons/delete.svg'

class Popup extends React.Component {
  render() {
    return (
      <div className='popup'>
        <div className='popup_inner' style={{ fontFamily: 'source sans pro', paddingTop: '2%', paddingLeft: '2%', paddingRight: '2%' }}>
          <div style={{ height: '10%', display: 'flex', alignItems: 'flex-start' }}>
            <div style={{ color: '#000000', opacity: '0.74', fontSize: '1.2rem', fontWeight: '1000', flex: '1' }}>
              <strong>Filters</strong>
            </div>
            <div style={{ flex: '1', display: 'flex', color: 'red', flexDirection: 'row-reverse' }}>
              ResetAll
            </div>
          </div>
          <div style={{ display: 'flex' }}>
            <div className="social_media_select" style={{ flex: '0.6', position: 'relative', width: '22%', height: '12%', display: 'flex', paddingLeft: '20px', paddingTop: '5px', paddingBottom: '5px', paddingRight: '20px', background: '#0000000A 0% 0% no-repeat padding-box' }}>
              <div style={{ flex: '2', color: '#6238F2', fontSize: '0.8rem' }}>
                <p style={{ marginBottom: '0px', color: '#000000', opacity: '0.44' }}>Choose Platform</p>
                <input type="text" placeholder="YouTube" style={{ border: 'none', color: '#18191B', fontWeight: '600', background: '#F5F5F5 0% 0% no-repeat padding-box' }} />
              </div>
              <div className="select_box">
                <div style={{ flex: '1', display: 'flex', fontSize: '1rem', fontWeight: '600', borderBottom: '2px solid #F5F5F5', opacity: '0.64' }}>
                  <div style={{ flex: '1' }}>instagram</div>
                  <div style={{ flex: '1', display: 'flex', flexDirection: 'row-reverse', paddingTop: '5px' }}>
                    <label class="container" id="checkbox_influencer" style={{ marginBottom: '0px', alignItems: 'flex-start', width: '20%', paddingLeft: '0%', position: 'relative', marginRight: '0px', top: '50%', transform: 'translateY(-50%)', marginLeft: '0px', paddingRight: '0px', display: 'flex' }}>
                      <input type="checkbox" style={{ position: 'relative' }} />
                      <span class="checkmark" style={{}}></span>
                    </label>
                  </div>
                </div>
                <div style={{ flex: '1', display: 'flex', fontSize: '1rem', fontWeight: '600', borderBottom: '2px solid #F5F5F5', opacity: '0.64' }}>
                  <div style={{ flex: '1' }}>Facebook</div>
                  <div style={{ flex: '1', display: 'flex', flexDirection: 'row-reverse', paddingTop: '5px' }}>
                    <label class="container" id="checkbox_influencer" style={{ marginBottom: '0px', alignItems: 'flex-start', width: '20%', paddingLeft: '0%', position: 'relative', marginRight: '0px', top: '50%', transform: 'translateY(-50%)', marginLeft: '0px', paddingRight: '0px', display: 'flex' }}>
                      <input type="checkbox" style={{ position: 'relative' }} />
                      <span class="checkmark" style={{}}></span>
                    </label>
                  </div>
                </div>
                <div style={{ flex: '1', display: 'flex', fontSize: '1rem', fontWeight: '600', borderBottom: '2px solid #F5F5F5', opacity: '0.64' }}>
                  <div style={{ flex: '1' }}>Twitter</div>
                  <div style={{ flex: '1', display: 'flex', flexDirection: 'row-reverse', paddingTop: '5px' }}>
                    <label class="container" id="checkbox_influencer" style={{ marginBottom: '0px', alignItems: 'flex-start', width: '20%', paddingLeft: '0%', position: 'relative', marginRight: '0px', top: '50%', transform: 'translateY(-50%)', marginLeft: '0px', paddingRight: '0px', display: 'flex' }}>
                      <input type="checkbox" style={{ position: 'relative' }} />
                      <span class="checkmark" style={{}}></span>
                    </label>
                  </div>
                </div>
                <div style={{ flex: '1', display: 'flex', fontSize: '1rem', fontWeight: '600', borderBottom: '2px solid #F5F5F5', opacity: '0.64' }}>
                  <div style={{ flex: '1' }}>Tik-Tok</div>
                  <div style={{ flex: '1', display: 'flex', flexDirection: 'row-reverse', paddingTop: '5px' }}>
                    <label class="container" id="checkbox_influencer" style={{ marginBottom: '0px', alignItems: 'flex-start', width: '20%', paddingLeft: '0%', position: 'relative', marginRight: '0px', top: '50%', transform: 'translateY(-50%)', marginLeft: '0px', paddingRight: '0px', display: 'flex' }}>
                      <input type="checkbox" style={{ position: 'relative' }} />
                      <span class="checkmark" style={{}}></span>
                    </label>
                  </div>
                </div>
                <div style={{ flex: '1', display: 'flex', fontSize: '1rem', fontWeight: '600', borderBottom: '2px solid #F5F5F5', opacity: '0.64' }}>
                  <div style={{ flex: '1' }}>Blogger</div>
                  <div style={{ flex: '1', display: 'flex', flexDirection: 'row-reverse', paddingTop: '5px' }}>
                    <label class="container" id="checkbox_influencer" style={{ marginBottom: '0px', alignItems: 'flex-start', width: '20%', paddingLeft: '0%', position: 'relative', marginRight: '0px', top: '50%', transform: 'translateY(-50%)', marginLeft: '0px', paddingRight: '0px', display: 'flex' }}>
                      <input type="checkbox" style={{ position: 'relative' }} />
                      <span class="checkmark" style={{}}></span>
                    </label>
                  </div>
                </div>
                <div style={{ flex: '1', display: 'flex', fontSize: '1rem', fontWeight: '600', borderBottom: '2px solid #F5F5F5', opacity: '0.64' }}>
                  <div style={{ flex: '1' }}>YouTube</div>
                  <div style={{ flex: '1', display: 'flex', flexDirection: 'row-reverse', paddingTop: '5px' }}>
                    <label class="container" id="checkbox_influencer" style={{ marginBottom: '0px', alignItems: 'flex-start', width: '20%', paddingLeft: '0%', position: 'relative', marginRight: '0px', top: '50%', transform: 'translateY(-50%)', marginLeft: '0px', paddingRight: '0px', display: 'flex' }}>
                      <input type="checkbox" style={{ position: 'relative' }} />
                      <span class="checkmark" style={{}}></span>
                    </label>
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', color: '#18191B', opacity: '0.87', flexDirection: 'column', justifyContent: 'center' }}>
                <img src={Dropdown} height="18px" style={{ opacity: '0.84' }} />
              </div>
            </div>
            <div style={{ flex: '1', display: 'flex', overflowY: 'hidden', overflowX: 'hidden', paddingRight: '20px', alignItems: 'flex-start', flexDirection: 'row-reverse' }}>
              <label class="container" id="checkbox_influencer" style={{ marginBottom: '0px', alignItems: 'flex-start', width: '20%', paddingLeft: '0%', position: 'relative', marginRight: '0px', top: '50%', transform: 'translateY(-50%)', marginLeft: '0px', paddingRight: '0px', display: 'flex' }}>
                <input type="checkbox" style={{ position: 'relative' }} />
                <span class="checkmark" style={{}}></span>
                <p style={{ marginBottom: '0px', position: 'relative', left: '20%' }}>Couple</p>
              </label>
              <label class="container" id="checkbox_influencer" style={{ marginBottom: '0px', alignItems: 'flex-start', width: '20%', paddingLeft: '0%', position: 'relative', marginRight: '0px', top: '50%', transform: 'translateY(-50%)', marginLeft: '0px', paddingRight: '0px', display: 'flex' }}>
                <input type="checkbox" style={{ position: 'relative', top: '50%', transform: 'translateY(-50%)' }} />
                <span class="checkmark"></span>
                <p style={{ marginBottom: '0px', position: 'relative', left: '20%' }}>female</p>
              </label>
              <label class="container" id="checkbox_influencer" style={{ marginBottom: '0px', alignItems: 'flex-start', width: '20%', paddingLeft: '0%', position: 'relative', marginRight: '0px', top: '50%', transform: 'translateY(-50%)', marginLeft: '0px', paddingRight: '0px', display: 'flex' }}>
                <input type="checkbox" style={{ position: 'relative', top: '50%', transform: 'translateY(-50%)' }} />
                <span class="checkmark"></span>
                <p style={{ marginBottom: '0px', position: 'relative', left: '20%' }}>Male</p>
              </label>
            </div>
          </div>

          <div style={{ position: 'relative', top: '3%', height: '8%' }}>
            <div style={{ position: 'relative', height: '100%', display: 'flex', paddingLeft: '20px', paddingTop: '5px', paddingBottom: '5px', paddingRight: '20px', background: '#0000000A 0% 0% no-repeat padding-box' }}>
              <div style={{ background: '#EBEBEB 0% 0% no-repeat padding-box', display: 'flex', paddingLeft: '10px', paddingRight: '10px', borderRadius: '19px', position: 'relative', height: '80%', top: '10%' }}>
                <div style={{ fontSize: '0.8rem', position: 'relative', top: '50%', opacity: '0.74', transform: 'translateY(-30%)', fontWeight: '600', letterSpacing: '0.38px' }}>
                  Pune
                </div>
                <div style={{ position: 'relative', top: '50%', transform: 'translateY(-50%)', left: '5%', background: '#000000 0% 0% no-repeat padding-box', opacity: '0.12', height: '15px', borderRadius: '50%', width: '15px' }}>
                  <img src={Delete} style={{ paddingLeft: '3px', paddingBottom: '15px' }} />
                </div>
              </div>
              <div style={{ color: '#6238F2', fontSize: '0.8rem', width: '20%', position: 'relative', left: '2%' }}>
                <input type="text" placeholder="Choose City" style={{ marginBottom: '0px', color: '#000000', opacity: '0.44', position: 'relative', height: '100%', border: 'none', transformY: 'translateY(-50%)', background: '#F5F5F5' }} />
              </div>
            </div>
          </div>
          <div style={{ position: 'relative', top: '5%', height: '8%' }}>
            <div style={{ position: 'relative', height: '100%', display: 'flex', paddingLeft: '20px', paddingTop: '5px', paddingBottom: '5px', paddingRight: '20px', background: '#0000000A 0% 0% no-repeat padding-box' }}>
              <div style={{ color: '#6238F2', fontSize: '0.8rem', width: '20%', position: 'relative', left: '2%' }}>
                <input type="text" placeholder="Choose Vendor" style={{ marginBottom: '0px', color: '#000000', opacity: '0.44', position: 'relative', height: '100%', border: 'none', transformY: 'translateY(-50%)', background: '#F5F5F5' }} />
              </div>
            </div>
          </div>
          <div style={{ position: 'relative', top: '7%', height: '8%' }}>
            <div style={{ position: 'relative', height: '100%', display: 'flex', paddingLeft: '20px', paddingTop: '5px', paddingBottom: '5px', paddingRight: '20px', background: '#0000000A 0% 0% no-repeat padding-box' }}>
              <div style={{ color: '#6238F2', fontSize: '0.8rem', width: '20%', position: 'relative', left: '2%' }}>
                <input type="text" placeholder="Choose Influencer Category" style={{ marginBottom: '0px', color: '#000000', opacity: '0.44', position: 'relative', height: '100%', border: 'none', transformY: 'translateY(-50%)', background: '#F5F5F5' }} />
              </div>
            </div>
          </div>
          <div style={{ position: 'relative', top: '9%', height: '8%' }}>
            <div style={{ position: 'relative', height: '100%', display: 'flex', paddingLeft: '20px', paddingTop: '5px', paddingBottom: '5px', paddingRight: '20px', background: '#0000000A 0% 0% no-repeat padding-box' }}>
              <div style={{ color: '#6238F2', fontSize: '0.8rem', width: '20%', position: 'relative', left: '2%' }}>
                <input type="text" placeholder="Choose Influencer Type" style={{ marginBottom: '0px', color: '#000000', opacity: '0.44', position: 'relative', height: '100%', border: 'none', transformY: 'translateY(-50%)', background: '#F5F5F5' }} />
              </div>
            </div>
          </div>
          <div style={{ position: 'relative', top: '11%', height: '8%' }}>
            <div style={{ position: 'relative', height: '100%', display: 'flex', paddingLeft: '20px', paddingTop: '5px', paddingBottom: '5px', paddingRight: '20px', background: '#0000000A 0% 0% no-repeat padding-box' }}>
              <div style={{ color: '#6238F2', fontSize: '0.8rem', width: '20%', position: 'relative', left: '2%' }}>
                <input type="text" placeholder="Choose Select language" style={{ marginBottom: '0px', color: '#000000', opacity: '0.44', position: 'relative', height: '100%', border: 'none', transformY: 'translateY(-50%)', background: '#F5F5F5' }} />
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', position: 'relative', top: '12%' }}>
            <div style={{ width: '40%' }}>
              <p style={{ fontSize: '0.9rem', fontWeight: '600', opacity: '0.74' }}>
                Followers
              </p>
              <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', paddingRight: '20px' }}>
                <div style={{ display: 'flex', width: '40%', background: '#0000000A 0% 0% no-repeat padding-box' }}>
                  <div style={{ flex: '3' }}>
                    <p style={{ marginRight: '0px', marginBottom: '0px', fontSize: '0.8rem' }}>
                      Min
                    </p>
                    <input type="text" placeholder="₹1500" style={{ background: '#F5F5F5 0% 0% no-repeat padding-box', border: 'none', width: '100%', fontSize: '0.8rem' }} />
                  </div>
                  <div style={{ flex: '1', display: 'flex', alignItems: 'center' }}>
                    <img src={Dropdown} height="20px" />
                  </div>
                </div>
                <div style={{ display: 'flex', width: '40%', background: '#0000000A 0% 0% no-repeat padding-box' }}>
                  <div style={{ flex: '3' }}>
                    <p style={{ marginRight: '0px', marginBottom: '0px', fontSize: '0.8rem' }}>
                      Max
                    </p>
                    <input type="text" placeholder="₹341100" style={{ background: '#F5F5F5 0% 0% no-repeat padding-box', border: 'none', width: '100%', fontSize: '0.8rem' }} />
                  </div>
                  <div style={{ flex: '1', display: 'flex', alignItems: 'center' }}>
                    <img src={Dropdown} height="20px" />
                  </div>
                </div>
              </div>
            </div>
            <div style={{ width: '40%' }}>
              <p style={{ fontSize: '0.9rem', fontWeight: '600', opacity: '0.74' }}>
                Story Cost
              </p>
              <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', width: '40%', background: '#0000000A 0% 0% no-repeat padding-box' }}>
                  <div style={{ flex: '3' }}>
                    <p style={{ marginRight: '0px', marginBottom: '0px', fontSize: '0.8rem' }}>
                      Min
                    </p>
                    <input type="text" placeholder="₹10500" style={{ background: '#F5F5F5 0% 0% no-repeat padding-box', border: 'none', width: '100%', fontSize: '0.8rem' }} />
                  </div>
                  <div style={{ flex: '1', display: 'flex', alignItems: 'center' }}>
                    <img src={Dropdown} height="20px" />
                  </div>
                </div>
                <div style={{ display: 'flex', width: '40%', background: '#0000000A 0% 0% no-repeat padding-box' }}>
                  <div style={{ flex: '3' }}>
                    <p style={{ marginRight: '0px', marginBottom: '0px', fontSize: '0.8rem' }}>
                      Max
                    </p>
                    <input type="text" placeholder="₹110500" style={{ background: '#F5F5F5 0% 0% no-repeat padding-box', border: 'none', width: '100%', fontSize: '0.8rem' }} />
                  </div>
                  <div style={{ flex: '1', display: 'flex', alignItems: 'center' }}>
                    <img src={Dropdown} height="20px" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', position: 'relative', top: '12%' }}>
            <div style={{ width: '40%' }}>
              <p style={{ fontSize: '0.9rem', fontWeight: '600', opacity: '0.74' }}>
                Post cost
              </p>
              <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', paddingRight: '20px' }}>
                <div style={{ display: 'flex', width: '40%', background: '#0000000A 0% 0% no-repeat padding-box' }}>
                  <div style={{ flex: '3' }}>
                    <p style={{ marginRight: '0px', marginBottom: '0px', fontSize: '0.8rem' }}>
                      Min
                    </p>
                    <input type="text" placeholder="₹1500" style={{ background: '#F5F5F5 0% 0% no-repeat padding-box', border: 'none', width: '100%', fontSize: '0.8rem' }} />
                  </div>
                  <div style={{ flex: '1', display: 'flex', alignItems: 'center' }}>
                    <img src={Dropdown} height="20px" />
                  </div>
                </div>
                <div style={{ display: 'flex', width: '40%', background: '#0000000A 0% 0% no-repeat padding-box' }}>
                  <div style={{ flex: '3' }}>
                    <p style={{ marginRight: '0px', marginBottom: '0px', fontSize: '0.8rem' }}>
                      Max
                    </p>
                    <input type="text" placeholder="₹341100" style={{ background: '#F5F5F5 0% 0% no-repeat padding-box', border: 'none', width: '100%', fontSize: '0.8rem' }} />
                  </div>
                  <div style={{ flex: '1', display: 'flex', alignItems: 'center' }}>
                    <img src={Dropdown} height="20px" />
                  </div>
                </div>
              </div>
            </div>
            <div style={{ width: '40%' }}>
              <p style={{ fontSize: '0.9rem', fontWeight: '600', opacity: '0.74' }}>
                video Cost
              </p>
              <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', width: '40%', background: '#0000000A 0% 0% no-repeat padding-box' }}>
                  <div style={{ flex: '3' }}>
                    <p style={{ marginRight: '0px', marginBottom: '0px', fontSize: '0.8rem' }}>
                      Min
                    </p>
                    <input type="text" placeholder="₹10500" style={{ background: '#F5F5F5 0% 0% no-repeat padding-box', border: 'none', width: '100%', fontSize: '0.8rem' }} />
                  </div>
                  <div style={{ flex: '1', display: 'flex', alignItems: 'center' }}>
                    <img src={Dropdown} height="20px" />
                  </div>
                </div>
                <div style={{ display: 'flex', width: '40%', background: '#0000000A 0% 0% no-repeat padding-box' }}>
                  <div style={{ flex: '3' }}>
                    <p style={{ marginRight: '0px', marginBottom: '0px', fontSize: '0.8rem' }}>
                      Max
                    </p>
                    <input type="text" placeholder="₹110500" style={{ background: '#F5F5F5 0% 0% no-repeat padding-box', border: 'none', width: '100%', fontSize: '0.8rem' }} />
                  </div>
                  <div style={{ flex: '1', display: 'flex', alignItems: 'center' }}>
                    <img src={Dropdown} height="20px" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ position: 'relative', top: '14%', display: 'flex', flexDirection: 'row-reverse' }}>
            <button onClick={this.props.hide_popup} style={{ border: 'none', color: 'white', borderRadius: '6px', background: '#6238F2 0% 0% no-repeat padding-box', position: 'relative', top: '3%', paddingBottom: '1%', paddingTop: '1%', fontSize: '0.9rem' }}>
              Apply Filter
            </button>
            <button onClick={this.props.hide_popup} style={{ cursor: 'pointer', background: 'white', position: 'relative', top: '3%', border: 'none', position: 'relative', right: '8%', fontSize: '0.9rem', color: '#6238F2', paddingBottom: '1%', paddingTop: '1%' }}>
              Discard
            </button>
          </div>
        </div>
      </div >
    );
  }
}
class Filter extends React.Component {
  render() {
    return (
      <div className='filter_app'>Filter<i class="fa fa-sliders" aria-hidden="true" onClick={this.props.popup_show}></i>
        {this.props.showPopup ?
          <Popup hide_popup={this.props.popup_show} />
          : null
        }
      </div>
    );
  }
};

export default Filter;
