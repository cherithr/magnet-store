"use client";

import React, { createContext, useContext, useReducer, ReactNode } from "react";
import { Bundle, BUNDLES } from "./data";

export type UploadedImage = {
  id: string;
  file?: File;
  dataUrl: string;
  name: string;
};

type State = {
  selectedBundle: Bundle;
  uploads: (UploadedImage | null)[];
  cartOpen: boolean;
  cartItems: CartItem[];
  wishlist: boolean;
};

export type CartItem = {
  bundle: Bundle;
  uploads: (UploadedImage | null)[];
  quantity: number;
};

type Action =
  | { type: "SET_BUNDLE"; bundle: Bundle }
  | { type: "SET_UPLOAD"; index: number; image: UploadedImage }
  | { type: "REMOVE_UPLOAD"; index: number }
  | { type: "TOGGLE_CART" }
  | { type: "ADD_TO_CART" }
  | { type: "REMOVE_FROM_CART"; bundleId: string }
  | { type: "UPDATE_QUANTITY"; bundleId: string; delta: number }
  | { type: "TOGGLE_WISHLIST" };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_BUNDLE": {
      const slots = new Array(action.bundle.totalMagnets).fill(null);
      return { ...state, selectedBundle: action.bundle, uploads: slots };
    }
    case "SET_UPLOAD": {
      const uploads = [...state.uploads];
      uploads[action.index] = action.image;
      return { ...state, uploads };
    }
    case "REMOVE_UPLOAD": {
      const uploads = [...state.uploads];
      uploads[action.index] = null;
      return { ...state, uploads };
    }
    case "TOGGLE_CART":
      return { ...state, cartOpen: !state.cartOpen };
    case "ADD_TO_CART": {
      const existing = state.cartItems.findIndex(
        (i) => i.bundle.id === state.selectedBundle.id
      );
      if (existing >= 0) {
        const items = [...state.cartItems];
        items[existing] = { ...items[existing], quantity: items[existing].quantity + 1 };
        return { ...state, cartItems: items, cartOpen: true };
      }
      return {
        ...state,
        cartItems: [
          ...state.cartItems,
          { bundle: state.selectedBundle, uploads: state.uploads, quantity: 1 },
        ],
        cartOpen: true,
      };
    }
    case "REMOVE_FROM_CART": {
      return {
        ...state,
        cartItems: state.cartItems.filter((i) => i.bundle.id !== action.bundleId),
      };
    }
    case "UPDATE_QUANTITY": {
      const items = state.cartItems
        .map((item) =>
          item.bundle.id === action.bundleId
            ? { ...item, quantity: Math.max(0, item.quantity + action.delta) }
            : item
        )
        .filter((item) => item.quantity > 0);
      return { ...state, cartItems: items };
    }
    case "TOGGLE_WISHLIST":
      return { ...state, wishlist: !state.wishlist };
    default:
      return state;
  }
}

const defaultBundle = BUNDLES[1];
const initialState: State = {
  selectedBundle: defaultBundle,
  uploads: new Array(defaultBundle.totalMagnets).fill(null),
  cartOpen: false,
  cartItems: [],
  wishlist: false,
};

const StoreContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
} | null>(null);

export function StoreProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
}

export function useStore() {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error("useStore must be used within StoreProvider");
  return ctx;
}
