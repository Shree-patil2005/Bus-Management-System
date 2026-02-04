import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

/* ================= ADD BUS ================= */
export const addBus = mutation({
  args: {
    busNo: v.string(),
    source: v.string(),
    destination: v.string(),
    seats: v.number(),
    type: v.union(v.literal("AC"), v.literal("Non-AC")),
    stops: v.array(
      v.object({
        stopName: v.string(),
        stopOrder: v.number(),
        priceTillHere: v.number(),
      })
    ),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("buses", {
      ...args,
      totalStops: args.stops.length,
      createdAt: Date.now(),
    });
  },
});

/* ================= GET ALL BUSES ================= */
export const getAllBuses = query({
  handler: async (ctx) => {
    return await ctx.db.query("buses").collect();
  },
});

/* ================= DELETE BUS ================= */
export const deleteBus = mutation({
  args: { id: v.id("buses") },
  handler: async (ctx, { id }) => {
    await ctx.db.delete(id);
  },
});

/* ================= UPDATE BUS ================= */
export const updateBus = mutation({
  args: {
    id: v.id("buses"),
    busNo: v.string(),
    source: v.string(),
    destination: v.string(),
    seats: v.number(),
    type: v.union(v.literal("AC"), v.literal("Non-AC")),
    stops: v.array(
      v.object({
        stopName: v.string(),
        stopOrder: v.number(),
        priceTillHere: v.number(),
      })
    ),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.id, {
      busNo: args.busNo,
      source: args.source,
      destination: args.destination,
      seats: args.seats,
      type: args.type,
      stops: args.stops,
      totalStops: args.stops.length,
    });
  },
});
