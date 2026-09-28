"use client";

import { useActionState } from "react";
import { signIn } from "./actions";

const initialState = {
  message: "",
  email: "",
};

export function LoginForm() {
  const [state, formAction, isPending] = useActionState(signIn, initialState);

  return (
    <form action={formAction} className="mt-6 max-w-sm space-y-4 text-black">
      <div className="space-y-2">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          defaultValue={state.email}
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-black"
          placeholder="you@example.com"
          required
        />
      </div>

      <div className="space-y-2">
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700"
        >
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-black"
          placeholder="••••••••"
          required
        />
      </div>

      {state.message ? (
        <p className="text-sm text-red-600">{state.message}</p>
      ) : null}

      <button
        type="submit"
        disabled={isPending}
        className="w-full rounded-md bg-black px-4 py-2 font-medium text-white disabled:opacity-60"
      >
        {isPending ? "Signing in..." : "Sign in"}
      </button>
    </form>
  );
}
