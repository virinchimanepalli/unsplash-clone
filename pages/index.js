import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import GallaryContainer from "@/components/gallaryContainer";
import HeaderComponent from "@/components/HeaderComponent";
import { INITIAL_DATA } from "@/utils/helperFunctions";
import axios from "axios";

// Constants
const PER_PAGE = 9;

export default function Home() {
  const route = useRouter();
  const [query, setQuery] = useState("");
  const [imageData, setImageData] = useState(INITIAL_DATA);
  const [error, setError] = useState("");

  const onChangeInput = (e) => {
    setQuery(e.target.value);
  };

  const onSubmitSearchForm = (e) => {
    e.preventDefault();
    if (query.length === 0) {
      setError("Please fill the below field");
      return;
    }
    route.push(`/search?q_s=${query}`);
  };

  const fetchPhotos = () => {
    const page = imageData?.page || 1;
    axios
      .get(
        `${process.env.NEXT_PUBLIC_UNSPLASH_API_URL}/photos?client_id=${process.env.NEXT_PUBLIC_UNSPLASH_CLIENT_ID}&per_page=${PER_PAGE}&page=${page} `
      )
      .then((res) => {
        setImageData((prevState) => ({
          data: { photos: prevState.data.photos.concat(res.data) },
          page: page + 1,
          loading: false,
          hasMore: true,
        }));
      })
      .catch(console.error);
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <>
      {error && <p>{error}</p>}
      <HeaderComponent
        onSubmitSearchForm={onSubmitSearchForm}
        onChangeInput={onChangeInput}
        query={query}
      />

      <GallaryContainer loadMore={fetchPhotos} imageData={imageData} />
    </>
  );
}
