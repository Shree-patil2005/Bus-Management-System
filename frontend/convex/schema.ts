import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    name: v.string(),
    email: v.string(),
    password: v.string(),
  }).index("by_email", ["email"]),

  buses: defineTable({
    busNo: v.string(),
    source: v.string(),
    destination: v.string(),
    seats: v.number(),
    type: v.union(v.literal("AC"), v.literal("Non-AC")),
    totalStops: v.number(),

    stops: v.array(
      v.object({
        stopName: v.string(),
        stopOrder: v.number(),
        priceTillHere: v.number(),
      })
    ),

    createdAt: v.number(),
  }),

  bookings: defineTable({
    name: v.string(),
    mobile: v.string(),
    email: v.string(),
    source: v.string(),
    destination: v.string(),
    date: v.string(),
    time: v.string(),
    people: v.number(),
    createdAt: v.number(),
  }),
});

