import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const getAllFeedbacks = query({
  handler: async (ctx) => {
    return await ctx.db
      .query("feedbacks")
      .order("desc")
      .collect();
  },
});

export const addFeedback = mutation({
  args: {
    name: v.string(),
    phone: v.string(),
    email: v.string(),
    address: v.string(),
    feedback: v.string(),
  },

  handler: async (ctx, args) => {
    await ctx.db.insert("feedbacks", {
      ...args,
      createdAt: Date.now(),
    });
  },
});
