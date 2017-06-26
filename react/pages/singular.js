// @flow

import React from 'react'

import createPage from '../helpers/create-page'
import Post from '../components/post'
import Related from '../components/related'

const extractPostData = ({postsData, revisionsData}: Object) => Object.assign({},
  Array.isArray(postsData) ? postsData[0] : postsData,
  revisionsData ? revisionsData[0] : {}
)

export const Singular = (props: Object) => {
  const postData = extractPostData(props)

  return (
    <div>
      <Post
        key={`Post${postData.id}`}
        postData={postData}
      />

      {postData.type === 'page' ? <hr /> : null}

      {postData.type === 'post' ? (
        <div>
          <hr />

          <Related
            key={`Related${postData.id}`}
            postData={postData}
          />

          <hr />
        </div>
      ) : null}
    </div>
  )
}

Singular.displayName = 'Singular'

export default createPage(Singular, {
  fullWidth: true,
  hrBottom: false,
  hrTop: false,
  maxWidth: 3,
  // maxWidth: (props: Object) => {
  //   const postData = extractPostData(props)
  //   return postData._formatting && postData._formatting.no_sidebar ? '3' : '4'
  // },
  propPaths: ({asPath, query: {p, page_id, preview, preview_id, type, slug}}) => ({
    postsData: {
      authorize: !!preview,
      path: (p || page_id) ? `/wp/v2/${type}s/${p || page_id}/?_embed` : `/wp/v2/${type}s?_embed&slug=${slug}`
    },
    revisionsData: preview ? {
      authorize: true,
      path: `/wp/v2/${type}s/${p || page_id || preview_id}/revisions`
    } : null
  })
})
