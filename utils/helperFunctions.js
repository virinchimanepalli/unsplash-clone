const getFilterDetails = (selectedFilters) => {
  let res = "";
  for (const key in selectedFilters) {
    if (selectedFilters[key].length > 0) {
      res += `&${key}=${selectedFilters[key]}`;
    }
  }
  return res;
};

const openInNewTab = (url) => {
  if (typeof window !== "undefined") {
    window.open(url, "_blank");
  }
};

const INITIAL_DATA = {
  data: { photos: [] },
  page: 1,
  perPage: 9,
  loading: true,
  hasMore: true,
};

const INITIAL_FILTERS = {
  orientation: "",
  sortby: "",
  color: "",
};

const FILTER_DATA = [
  { SORT_BY: [{ value: "relevant" }, { value: "latest" }] },
  {
    COLOR: [{ value: "white" }, { value: "purple" }],
  },
  {
    ORIENTATION: [
      { value: "landscape" },
      { value: "portrait" },
      { value: "squarish" },
    ],
  },
];

const UNSPLASH_API_URL = "https://api.unsplash.com";
const UNSPLASH_CLIENT_ID = "FZpIl7feLseFHwV4DScQqiaVULO54C7GRBiqlmDrxdI";

export {
  getFilterDetails,
  openInNewTab,
  INITIAL_DATA,
  INITIAL_FILTERS,
  UNSPLASH_API_URL,
  UNSPLASH_CLIENT_ID,
  FILTER_DATA,
};
