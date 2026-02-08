import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const addPayment = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    phone: v.string(),
    amount: v.number(),
  },

  handler: async (ctx, args) => {
    await ctx.db.insert("payments", {
      ...args,
      paymentMethod: "GPay QR",
      status: "Paid",
      createdAt: Date.now(),
    });
  },
});
