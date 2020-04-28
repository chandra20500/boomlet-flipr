import React, { Component } from 'react';
import './manage-proposal-filter.css';
import Dropdown from '../assets/icons/arrow_drop_down.svg'
import Delete from '../assets/icons/delete.svg'

class Popup extends React.Component {
  render() {
    return (
      <div className='popup'>
        <div className='popup_inner' style={{ fontFamily: 'source sans pro', paddingTop: '2%', paddingLeft: '2%', paddingRight: '2%' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ opacity: '0.74' }}>
              <strong>Select date to see proposals</strong>
            </div>
            <div style={{ position: 'relative', marginTop: '5%', fontSize: '0.9rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', background: '#0000001F', paddingTop: '10px', paddingBottom: '10px', paddingLeft: '5px', paddingRight: '5px' }}>
                <div class="radio-item" style={{ flex: '2', marginTop: '0px' }}>
                  <input type="radio" id="ritema" name="ritem" value="ropt1" />
                  <label for="ritema">Proposal 1</label>
                </div>
                <div style={{ flex: '1', display: 'flex', flexDirection: 'row-reverse', opacity: '0.54', height: '100%', justifyContent: 'center' }}>
                  20-02-2020
              </div>
                <div style={{ flex: '1', display: 'flex', flexDirection: 'row-reverse', opacity: '0.54', }}>
                  10:30 PM
              </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', paddingTop: '10px', paddingBottom: '10px', paddingLeft: '5px', paddingRight: '5px' }}>
                <div class="radio-item" style={{ flex: '2', marginTop: '0px' }}>
                  <input type="radio" id="ritema" name="ritem" value="ropt1" />
                  <label for="ritema">Proposal 1</label>
                </div>
                <div style={{ flex: '1', display: 'flex', flexDirection: 'row-reverse', opacity: '0.54', height: '100%', justifyContent: 'center' }}>
                  20-02-2020
              </div>
                <div style={{ flex: '1', display: 'flex', flexDirection: 'row-reverse', opacity: '0.54', }}>
                  10:30 PM
              </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', paddingTop: '10px', paddingBottom: '10px', paddingLeft: '5px', paddingRight: '5px' }}>
                <div class="radio-item" style={{ flex: '2', marginTop: '0px' }}>
                  <input type="radio" id="ritema" name="ritem" value="ropt1" />
                  <label for="ritema">Proposal 1</label>
                </div>
                <div style={{ flex: '1', display: 'flex', flexDirection: 'row-reverse', opacity: '0.54', height: '100%', justifyContent: 'center' }}>
                  20-02-2020
              </div>
                <div style={{ flex: '1', display: 'flex', flexDirection: 'row-reverse', opacity: '0.54', }}>
                  10:30 PM
              </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', paddingTop: '10px', paddingBottom: '10px', paddingLeft: '5px', paddingRight: '5px' }}>
                <div class="radio-item" style={{ flex: '2', marginTop: '0px' }}>
                  <input type="radio" id="ritema" name="ritem" value="ropt1" />
                  <label for="ritema">Proposal 1</label>
                </div>
                <div style={{ flex: '1', display: 'flex', flexDirection: 'row-reverse', opacity: '0.54', height: '100%', justifyContent: 'center' }}>
                  20-02-2020
              </div>
                <div style={{ flex: '1', display: 'flex', flexDirection: 'row-reverse', opacity: '0.54', }}>
                  10:30 PM
              </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', paddingTop: '10px', paddingBottom: '10px', paddingLeft: '5px', paddingRight: '5px' }}>
                <div class="radio-item" style={{ flex: '2', marginTop: '0px' }}>
                  <input type="radio" id="ritema" name="ritem" value="ropt1" />
                  <label for="ritema">Proposal 1</label>
                </div>
                <div style={{ flex: '1', display: 'flex', flexDirection: 'row-reverse', opacity: '0.54', height: '100%', justifyContent: 'center' }}>
                  20-02-2020
              </div>
                <div style={{ flex: '1', display: 'flex', flexDirection: 'row-reverse', opacity: '0.54', }}>
                  10:30 PM
              </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', paddingTop: '10px', paddingBottom: '10px', paddingLeft: '5px', paddingRight: '5px' }}>
                <div class="radio-item" style={{ flex: '2', marginTop: '0px' }}>
                  <input type="radio" id="ritema" name="ritem" value="ropt1" />
                  <label for="ritema">Proposal 1</label>
                </div>
                <div style={{ flex: '1', display: 'flex', flexDirection: 'row-reverse', opacity: '0.54', height: '100%', justifyContent: 'center' }}>
                  20-02-2020
              </div>
                <div style={{ flex: '1', display: 'flex', flexDirection: 'row-reverse', opacity: '0.54', }}>
                  10:30 PM
              </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', paddingTop: '10px', paddingBottom: '10px', paddingLeft: '5px', paddingRight: '5px' }}>
                <div class="radio-item" style={{ flex: '2', marginTop: '0px' }}>
                  <input type="radio" id="ritema" name="ritem" value="ropt1" />
                  <label for="ritema">Proposal 1</label>
                </div>
                <div style={{ flex: '1', display: 'flex', flexDirection: 'row-reverse', opacity: '0.54', height: '100%', justifyContent: 'center' }}>
                  20-02-2020
              </div>
                <div style={{ flex: '1', display: 'flex', flexDirection: 'row-reverse', opacity: '0.54', }}>
                  10:30 PM
              </div>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row-reverse', position: 'relative', top: '15px' }}>
              <button onClick={this.props.hide_popup} style={{ border: 'none', background: '#6238F2', color: 'white', paddingLeft: '30px', paddingTop: '5px', paddingBottom: '5px', paddingRight: '30px', borderRadius: '6px', fontSize: '0.9rem' }}>
                Apply
              </button>
            </div>
          </div>
          {/* <button  style={{ cursor: 'pointer', background: 'white', position: 'relative', top: '3%', border: 'none', position: 'relative', right: '8%', fontSize: '0.9rem', color: '#6238F2', paddingBottom: '1%', paddingTop: '1%' }}>
              Discard
            </button> */}
        </div>
      </div>
    );
  }
}
class Filter extends React.Component {
  render() {
    return (
      <div className='filter_app' style={{ position: 'relative', marginRight: '0%', paddingRight: '10px', top: '0px', left: '0px' }}>Filter Proposal By Date<i class="fa fa-sliders" aria-hidden="true" onClick={this.props.popup_show}></i>
        {this.props.showPopup ?
          <Popup hide_popup={this.props.popup_show} />
          : null
        }
      </div>
    );
  }
};

export default Filter;
