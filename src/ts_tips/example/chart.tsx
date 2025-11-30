declare global {
    interface Window {
      __APP_CONFIG__: {
        apiUrl: string;
        version: string;
      };
    }
  }
  
  type TrendChart = {kind: 'trend'; title: 'trend'; xVariables: string[]; yVariables: string[]; }
  type BarChart = {kind: 'bar'; categories: string[]; values: number[]; }
  type LineChart = {kind: 'line'; points: number[]; }
  type ErrorState = {kind: 'error'; message: string; }
  type PieChart = {kind: 'pie'; radius: number; }
  
  type ChartData = TrendChart | BarChart | LineChart | PieChart | ErrorState;
  
export function safeParse(input: unknown): ChartData{
      // X Error: You can't access the input directly until Narrowing it's type
    // console.log(input.type);
    
      if(typeof input === 'object' && input !== null && 'kind' in input) {
          return input as ChartData;
      }
      return { kind: "error", message: 'Invalid Input'}
  } 
  
export function renderChart({ chartData }: {chartData: ChartData}) {
      switch (chartData.kind) {
          case 'trend': 
              const {xVariables, yVariables} = chartData
              return <TrendChart xVariables={xVariables} yVariables={yVariables} />
          case 'bar':
              const {categories, values} = chartData
              return <BarChart categories={categories} values={values} />
          case 'line':
              const {points} = chartData
              return <Line points={points} />
          case 'pie':
              const {radius} = chartData
              return <Pie radius={radius}/>
          case 'error':
              const {message} = chartData
              return <ErrorBox message={message} />
          default: 
          // If someone adds 'PieChart' to ChartData but forgets to add a case here.
          // TS will yell here!
          
          // Error: Type 'PieChart' is not assignable to type 'never'
          const _exhaustiveCheck: never = chartData;
          return _exhaustiveCheck;
      }
  }
  
export function getChartIcon({chartType}: {chartType: Pick<ChartData, 'kind'>}) {
      switch(chartType.kind) {
          case 'trend': 
              return <TrendIcon />
          case 'bar':
              return <BarIcon />
          case 'line':
              return <LineIcon />
          case 'pie':
              return <PieIcon />
          case 'error':
              return <ErrorIcon />
          default: 
          const _exhaustiveCheck: never = chartType.kind;
          return _exhaustiveCheck;
      }
  }