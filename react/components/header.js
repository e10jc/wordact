// @flow

import React from 'react'
import PropTypes from 'prop-types'
import {IoIosEmailOutline, IoSocialFacebookOutline} from 'react-icons/lib/io'

import Link from '../helpers/link'

const Header = (props: Object, {emailModalStore, likeModalStore, siteData}: Object) => {
  const handleEmailClick = e => {
    e.preventDefault()
    emailModalStore.open()
  }

  const handleFacebookClick = e => {
    e.preventDefault()
    likeModalStore.open()
  }

  const aClassName = 'inline-block'
  const iconClassName = 'header-icon'

  return (
    <header>
      <div className='flex items-center justify-between my2 sm-my4'>
        <div>
          <a
            className={aClassName}
            href='javascript:void(0)'
            onClick={handleEmailClick}
          >
            <IoIosEmailOutline className={iconClassName} />
          </a>
        </div>

        <div className='flex-auto center'>
          <Link
            className='block header-logo mx-auto'
            href='/'
          >
            <img
              alt={siteData.name}
              className='block fit'
              src='/static/img/logo.svg'
            />
          </Link>
        </div>

        <div>
          {siteData.facebook_page_url ? (
            <a
              className={aClassName}
              href='javascript:void(0)'
              onClick={handleFacebookClick}
            >
              <IoSocialFacebookOutline className={iconClassName} />
            </a>
          ) : null}
        </div>
      </div>
    </header>
  )
}

Header.contextTypes = {
  emailModalStore: PropTypes.object,
  likeModalStore: PropTypes.object,
  pagesData: PropTypes.array,
  siteData: PropTypes.object
}

export default Header
