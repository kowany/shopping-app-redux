import { SET_FAVORITE, SET_LOADING, SET_PRODUCTS } from "./types";

export const setProducts = (payload) => ({
 type: SET_PRODUCTS,
 payload,
})

export const setLoading = (payload) => ({
 type: SET_LOADING,
 payload
})

export const setFavorite = (payload) => ({
 type: SET_FAVORITE,
 payload
})