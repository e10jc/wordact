// @flow

import React from 'react'

const Newsletter = () => (
  <div
    className='sans-serif border border-gray p2 mx-auto bg-darken-0'
    style={{maxWidth: '450px'}}
  >
    <div className='h3 mb3 mt1 line-height-3'>{'Sign up for our newsletter'}</div>

    <form>
      <div className='flex'>
        <input
          className='input mb0 col-9 flex-auto'
          placeholder='you@you.com'
          type='email'
        />

        <button
          className='btn btn-primary col-3 h5 regular ups'
          style={{flex: '0 0 80px'}}
          type='submit'
        >
          {'Submit'}
        </button>
      </div>
    </form>
  </div>
)

export default Newsletter
