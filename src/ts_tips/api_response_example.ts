// ❌ BAD: The "Bag of Optionals" Approach
// It's possible to have invalid states, e.g., isLoading: true AND error: "Failed"
type BadState = {
  isLoading: boolean;
  data?: string[];
  error?: string;
};

// ✅ GOOD: Discriminated Union
// You can ONLY be in one specific state at a time.
type LoadingState = { status: "loading" };
type SuccessState = { status: "success"; data: string[] };
type ErrorState = { status: "error"; error: string };

type RequestState = LoadingState | SuccessState | ErrorState;

export function handleRequest(state: RequestState) {
  // 1. Auto-complete Magic
  // Type "state." and you ONLY see "status".

  if (state.status === "loading") {
    return "Loading...";
  }

  if (state.status === "error") {
    // 2. Smart Context
    // TypeScript knows 'error' property exists here!
    // It also knows 'data' does NOT exist here.
    console.log(state.data);
    return `Error: ${state.error}`;
  }

  if (state.status === "success") {
    // 3. Safe Access
    // TypeScript guarantees 'data' is present.
    return `Data: ${state.data.join(", ")}`;
  }

  // 4. Future Proof
  // If you add type OfflineState = { status: 'offline' } later,
  // TS will error here if you don't handle it (if using switch/never pattern).
  const _exhaustiveCheck: never = state;
  return _exhaustiveCheck;
}
