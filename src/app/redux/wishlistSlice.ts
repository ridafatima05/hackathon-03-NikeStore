import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface WishlistItem {
  _id: string;
  productName: string;
  price: string;
  imageUrl: string;
}

const initialState: WishlistItem[] = [];

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<WishlistItem>) => {
      const exists = state.find((item) => item._id === action.payload._id);
      if (!exists) {
        state.push(action.payload);
      }
    },
    removeFromWishlist: (state, action: PayloadAction<string>) => {
      return state.filter((item) => item._id !== action.payload);
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
