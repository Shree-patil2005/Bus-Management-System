import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const addBooking = mutation({
  args: {
    name: v.string(),
    mobile: v.string(),
    email: v.string(),
    source: v.string(),
    destination: v.string(),
    date: v.string(),
    time: v.string(),
    people: v.number(),
  },

  handler: async (ctx, args) => {
    await ctx.db.insert("bookings", {
      ...args,
      createdAt: Date.now(),
    });
  },
});
