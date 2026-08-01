import { createBrowserClient } from "@supabase/ssr";
import { isSupabaseConfigured } from "./supabase-config";

function createStubClient() {
  if (typeof window === "undefined") {
    console.warn(
      "[supabase] NEXT_PUBLIC_SUPABASE_URL / NEXT_PUBLIC_SUPABASE_ANON_KEY belum di-set.",
    );
  }

  const stubError = {
    message: "Supabase belum dikonfigurasi (env vars tidak ditemukan).",
  };
  const stubResult = { data: null, error: stubError, count: null };

  function makeBuilder(): Record<string, unknown> {
    const builder: Record<string, unknown> = {
      select: () => builder,
      insert: () => builder,
      update: () => builder,
      delete: () => builder,
      upsert: () => builder,
      eq: () => builder,
      neq: () => builder,
      gt: () => builder,
      gte: () => builder,
      lt: () => builder,
      lte: () => builder,
      like: () => builder,
      ilike: () => builder,
      in: () => builder,
      order: () => builder,
      limit: () => builder,
      range: () => builder,
      single: () => Promise.resolve(stubResult),
      maybeSingle: () => Promise.resolve(stubResult),
      then: (resolve: (v: unknown) => unknown) =>
        Promise.resolve(stubResult).then(resolve),
    };
    return builder;
  }

  return {
    from: () => makeBuilder(),
    auth: {
      getUser: async () => ({ data: { user: null }, error: null }),
      getSession: async () => ({ data: { session: null }, error: null }),
      signInWithPassword: async () => ({ data: null, error: stubError }),
      signOut: async () => ({ error: null }),
      onAuthStateChange: () => ({
        data: { subscription: { unsubscribe: () => {} } },
      }),
    },
    storage: {
      from: () => ({
        upload: async () => ({ data: null, error: stubError }),
        getPublicUrl: () => ({ data: { publicUrl: "" } }),
        remove: async () => ({ data: null, error: stubError }),
      }),
    },
  };
}

export const supabase = isSupabaseConfigured
  ? createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    )
  : (createStubClient() as ReturnType<typeof createBrowserClient>);

export { isSupabaseConfigured };
