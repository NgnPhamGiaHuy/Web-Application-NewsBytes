import formatLongDate from "@/utils/date/formatLongDate";

import fetchDataWithAccessToken from "@/utils/fetch/fetchDataWithAccessToken";
import fetchDataWithAccessTokenAndData from "@/utils/fetch/fetchDataWithAccessTokenAndData";
import fetchDataWithoutAccessToken from "@/utils/fetch/fetchDataWithoutAccessToken";
import fetchTokenRefresh from "@/utils/fetch/fetchTokenRefresh";

import fetcherWithAccessToken from "@/utils/fetcher/fetcherWithAccessToken";
import fetcherWithoutAccessToken from "@/utils/fetcher/fetcherWithoutAccessToken";

import sliceName from "@/utils/name/sliceName";

import getDescriptionAndImageUrl from "@/utils/news/getDescriptionAndImageUrl";

import formatText from "@/utils/texts/formatText";
import setCursorToEnd from "@/utils/texts/setCursorToEnd";
import splitText from "@/utils/texts/splitText";

import handleDecodeToken from "@/utils/token/handleDecodeToken";

import getUserData from "@/utils/user/getUserData";

export {
    formatLongDate,
    fetchDataWithAccessToken, fetchDataWithAccessTokenAndData, fetchDataWithoutAccessToken, fetchTokenRefresh,
    fetcherWithAccessToken, fetcherWithoutAccessToken,
    sliceName,
    getDescriptionAndImageUrl,
    formatText, setCursorToEnd, splitText,
    handleDecodeToken,
    getUserData,
}