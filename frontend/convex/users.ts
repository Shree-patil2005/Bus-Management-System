import { mutation, query, action } from "./_generated/server";
import { v } from "convex/values";
import bcrypt from "bcryptjs";

/* ---------------- SIGNUP (ACTION) ---------------- */
export const signup = action({
  args: {
    name: v.string(),
    email: v.string(),
    password: v.string(),
  },
  handler: async (ctx, args) => {
    const hashedPassword = await bcrypt.hash(args.password, 10);

    await ctx.runMutation("users:createUser", {
      name: args.name,
      email: args.email,
      password: hashedPassword,
    });

    return "Signup successful";
  },
});

/* --------- REAL DB WRITE (MUTATION) --------- */
export const createUser = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    password: v.string(),
  },
  handler: async (ctx, args) => {
    const existing = await ctx.db
      .query("users")
      .withIndex("by_email", (q) => q.eq("email", args.email))
      .first();

    if (existing) {
      throw new Error("User already exists");
    }

    await ctx.db.insert("users", args);
  },
});

/* ---------------- LOGIN (ACTION) ---------------- */
export const login = action({
  args: {
    email: v.string(),
    password: v.string(),
  },
  handler: async (ctx, args) => {
    const user = await ctx.runQuery("users:getByEmail", {
      email: args.email,
    });

    if (!user) {
      throw new Error("Invalid email or password");
    }

    const match = await bcrypt.compare(args.password, user.password);

    if (!match) {
      throw new Error("Invalid email or password");
    }

    return {
      id: user._id,
      name: user.name,
      email: user.email,
    };
  },
});

/* --------- QUERY --------- */
export const getByEmail = query({
  args: { email: v.string() },
  handler: async (ctx, args) => {
    return ctx.db
      .query("users")
      .withIndex("by_email", (q) => q.eq("email", args.email))
      .first();
  },
});
