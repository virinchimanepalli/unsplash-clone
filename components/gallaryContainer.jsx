import React, { memo } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { openInNewTab } from "@/utils/helperFunctions";
const LikeButton = React.lazy(() => import("./buttons/likeButton"));
const Like = React.lazy(() => import("./svgs/Like"));
const DownloadIcon = React.lazy(() => import("./svgs/DownloadIcon"));

const ImageComponent = memo(({ photo }) => (
  <div key={photo.id} alt="placeholder">
    <figure className="unsplash-page__imageContainer__figure">
      <img
        loading="lazy"
        src={photo.urls.regular}
        alt=""
        onClick={() => {
          openInNewTab(photo.urls.regular);
        }}
      />

      <div className="unsplash-page__imageContainer__figure__topIcons">
        <LikeButton>
          <Like />
          <span>{photo.likes}</span>
        </LikeButton>
      </div>
      <div className="unsplash-page__imageContainer__figure__bottomIcons">
        <div className="icon-container">
          <LikeButton>
            <DownloadIcon
              onClickHandle={() => {
                openInNewTab(photo.urls.small_s3);
              }}
            />
          </LikeButton>
        </div>
      </div>
    </figure>
  </div>
));

export default function GallaryContainer({ loadMore, imageData }) {
  const {
    loading,
    data: { photos },
  } = imageData;
  if (loading)
    return <div className="unsplash-page__imageContainer">Loading..</div>;

  return (
    <div className="unsplash-page__infiniteScrollContainer">
      <InfiniteScroll
        dataLength={photos.length}
        next={loadMore}
        hasMore={true}
        loader={<h1>Loading...</h1>}
        endMessage={
          <p className="end-message">
            <b>Yay! You have seen it all</b>
          </p>
        }>
        <div className="unsplash-page__imageContainer">
          {photos.map((photo) => (
            <ImageComponent photo={photo} />
          ))}
          {photos.length === 0 && (
            <div className="not-found">Sorry not found : (</div>
          )}
        </div>
      </InfiniteScroll>
    </div>
  );
}
