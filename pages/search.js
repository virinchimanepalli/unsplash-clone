import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import GallaryContainer from "../components/gallaryContainer";
import HeaderComponent from "@/components/HeaderComponent";
import {
  getFilterDetails,
  INITIAL_DATA,
  INITIAL_FILTERS,
} from "@/utils/helperFunctions";
import FilterComponent from "@/components/FilterComponent";
import axios from "axios";
import queryString from "query-string";

export async function getServerSideProps(context) {
  const searchString = context?.q_s ?? "";

  return { props: { searchString: searchString } };
}
function SearchPage({ searchString }) {
  // Initializing router and states

  const route = useRouter();
  const [query, setQuery] = useState(route?.query?.q_s);
  const [imageData, setImageData] = useState(INITIAL_DATA);
  const [selectedFilters, setSelectedFilters] = useState(INITIAL_FILTERS);
  const [showFilter, setShowFilter] = useState(false);

  // Function to fetch photos from the Unsplash API
  const fetchPhotos = (PageNum = null) => {
    const page = PageNum || imageData?.page;
    const queryString = query || route?.query?.q_s;
    console.log(queryString, route?.query?.q_s, searchString, "queryString");

    axios
      .get(
        `${process.env.NEXT_PUBLIC_UNSPLASH_API_URL}/search/photos?client_id=${
          process.env.NEXT_PUBLIC_UNSPLASH_CLIENT_ID
        }&per_page=10&page=${page}&query=${query}${getFilterDetails(
          selectedFilters
        )}`
      )
      .then((res) => {
        setImageData((response) => {
          return {
            data: { photos: response?.data.photos.concat(res.data.results) },
            page: response.page + 1,
            loading: false,
            hasMore: true,
            order_by: PageNum !== null ? selectedFilters.sortby : "",
            orientation: PageNum !== null ? selectedFilters.orientation : "",
            color: PageNum !== null ? selectedFilters.color : "",
          };
        });
      })
      .catch((err) => {
        console.error(err);
        alert("Failed to fetch photos, please try again later");
      });
  };

  const resetData = () => {
    setImageData({
      data: { photos: [] },
      page: 1,
      loading: true,
      hasMore: true,
    });
  };

  const clearIntervals = () => {
    setSelectedFilters(() => {
      return {
        orientation: "",
        sortby: "",
        color: "",
      };
    });
    setImageData((res) => {
      return { ...res, order_by: "", orientation: "", color: "" };
    });

    fetchPhotos(1);
    setShowFilter(false);
  };

  useEffect(() => {
    fetchPhotos();
  }, []);

  const onChangeInput = (e) => {
    setQuery(e.target.value);
  };

  const onSubmitSearchForm = (e) => {
    if (query.length === 0) return alert("Please fill the below field");
    e.preventDefault();
    resetData();
    fetchPhotos(1);
    route.push(`/search?query=${query}`);
  };

  const handleChange = (event, type) => {
    resetData();
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [type]: event,
    }));
    fetchPhotos(1);
  };

  return (
    <div className="container">
      <HeaderComponent
        onSubmitSearchForm={onSubmitSearchForm}
        onChangeInput={onChangeInput}
        query={query}
        openFilter={() => setShowFilter((b) => !b)}
        isSearchPage={true}
      />

      {showFilter && (
        <FilterComponent
          selectedFilters={selectedFilters}
          handleChange={handleChange}
          clearIntervals={clearIntervals}
        />
      )}

      <GallaryContainer loadMore={fetchPhotos} imageData={imageData} />
    </div>
  );
}

export default SearchPage;
