import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const addContact = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    phone: v.string(),
    address: v.string(),
    issue: v.string(),
  },

  handler: async (ctx, args) => {
    await ctx.db.insert("contact", {
      ...args,
      createdAt: Date.now(),
    });
  },
});
