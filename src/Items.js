import React from 'react';
import { map, get, replace } from 'lodash';
import { htmlDecode } from './utilities';

export default ({ items }) => (
  map(items, (item) => {
    const thumbURL = get(item, 'preview.images[0].resolutions[2].url');
    const safeURL = thumbURL ? replace(thumbURL, /&amp;/g, '&') : undefined;
    const redditVideo = get(item, 'media.reddit_video.fallback_url');
    const embed = get(item, 'media.oembed.html');
    const showImage = safeURL && !redditVideo && !embed;
    console.log(redditVideo && item);
    return (
      <div key={item.id}>
        <h2><a href={item.url}>{item.title}</a></h2>
        { showImage && <img loading="lazy" alt={item.title} src={safeURL} />}
        { redditVideo && <video preload="none" width="320" height="240" controls><source src={redditVideo} /></video>}
        { embed && <div dangerouslySetInnerHTML={{ __html: htmlDecode(embed) }} /> }
        <p>{item.author}</p>
        <a href={item.url}>Source</a>
        <a href={`https://old.reddit.com${item.permalink}`}>Comments</a>
      </div>
    );
  })
);
