declare global {
  interface Window {
    __APP_CONFIG__: {
      apiUrl: string;
      version: string;
    };
  }
}

type TrendChart = { kind: "trend"; xVariables: string[]; yVariables: string[] };
type BarChart = { kind: "bar"; categories: string[]; values: number[] };
type LineChart = { kind: "line"; points: number[] };
type ErrorState = { kind: "error"; message: string };
type PieChart = { kind: "pie"; radius: number };

type ChartData = TrendChart | BarChart | LineChart | PieChart | ErrorState;

export function safeParse(input: unknown): ChartData {
  // X Error: You can't access the input directly until Narrowing it's type
  // console.log(input.type);

  if (typeof input === "object" && input !== null && "kind" in input) {
    return input as ChartData;
  }
  return { kind: "error", message: "Invalid Input" };
}

export function renderChart({ chartData }: { chartData: ChartData }) {
  switch (chartData.kind) {
    case "trend":
      const { xVariables, yVariables } = chartData;
      return (
        <TrendChartRenderer xVariables={xVariables} yVariables={yVariables} />
      );
    case "bar":
      const { categories, values } = chartData;
      return <BarChartRenderer categories={categories} values={values} />;
    case "line":
      const { points } = chartData;
      return <LineChartRenderer points={points} />;
    case "pie":
      const { radius } = chartData;
      return <PieChartRenderer radius={radius} />;
    case "error":
      const { message } = chartData;
      return <ErrorBox message={message} />;
    default:
      // If someone adds 'PieChart' to ChartData but forgets to add a case here.
      // TS will yell here!

      // Error: Type 'PieChart' is not assignable to type 'never'
      const _exhaustiveCheck: never = chartData;
      return _exhaustiveCheck;
  }
}

// 1. Pick - Extract only what you need
// Use case: Icon needs only 'kind'
export function getChartIcon({
  chartType,
}: {
  chartType: Pick<ChartData, "kind">;
}) {
  switch (chartType.kind) {
    case "trend":
      return <TrendIcon />;
    case "bar":
      return <BarIcon />;
    case "line":
      return <LineIcon />;
    case "pie":
      return <PieIcon />;
    case "error":
      return <ErrorIcon />;
    default:
      const _exhaustiveCheck: never = chartType.kind;
      return _exhaustiveCheck;
  }
}

// 2. Omit - Exclude what you don't need
// Use case: Child component doesn't need 'kind' as it's already handled
export function TrendChartRenderer({
  xVariables,
  yVariables,
}: Omit<TrendChart, "kind">) {
  return <div>...</div>;
}

// 3. Partial - Make everything optional
// Use case: Patching/Updating a subset of data
export function updateTrendChart({
  id,
  patch,
}: {
  id: string;
  patch: Partial<TrendChart>;
}) {
  // We can pass just { title: "New Title" }
  // No need to pass the whole object
  console.log(`Updating ${id} with`, patch);
}
