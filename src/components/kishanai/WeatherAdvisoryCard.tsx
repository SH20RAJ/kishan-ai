interface WeatherAdvisoryCardProps {
  demo?: boolean;
  className?: string;
}

const demoForecast = [
  { day: "Today", high: 38, low: 26, icon: "\u2600\uFE0F", condition: "Sunny", rain: "0%" },
  { day: "Tue", high: 36, low: 25, icon: "\u26C5", condition: "Partly Cloudy", rain: "10%" },
  { day: "Wed", high: 34, low: 24, icon: "\uD83C\uDF26\uFE0F", condition: "Light Rain", rain: "60%" },
  { day: "Thu", high: 32, low: 23, icon: "\uD83C\uDF27\uFE0F", condition: "Rain", rain: "80%" },
  { day: "Fri", high: 35, low: 25, icon: "\u2600\uFE0F", condition: "Sunny", rain: "5%" },
];

const demoActions = [
  { icon: "\uD83D\uDCA7", title: "Irrigation", advice: "Reduce watering. Rain expected Wed-Thu." },
  { icon: "\uD83E\uDD6C", title: "Spraying", advice: "Avoid spraying before Thursday rain." },
  { icon: "\uD83C\uDF3E", title: "Harvesting", advice: "Good window Mon-Tue for harvesting." },
];

const demoAlerts = [
  { level: "warning", message: "Heavy rain expected Thursday. Secure harvested crops." },
];

export default function WeatherAdvisoryCard({
  demo = true,
  className = "",
}: WeatherAdvisoryCardProps) {
  return (
    <div className={`rounded-2xl border border-border bg-surface overflow-hidden ${className}`}>
      {/* Header */}
      <div className="p-5 bg-gradient-to-br from-primary/5 to-transparent">
        {demo && (
          <span className="inline-flex items-center text-xs font-medium px-2 py-0.5 rounded-full bg-secondary-light/15 text-secondary mb-3">
            Demo Data
          </span>
        )}
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold text-foreground">Weather Advisory</h3>
            <p className="text-sm text-muted mt-0.5">Nagpur, Maharashtra</p>
          </div>
          <div className="text-right">
            <span className="text-4xl" aria-hidden="true">{demoForecast[0].icon}</span>
            <p className="text-2xl font-bold text-foreground">{demoForecast[0].high}°C</p>
            <p className="text-sm text-muted">{demoForecast[0].condition}</p>
          </div>
        </div>
      </div>

      {/* Alerts */}
      {demoAlerts.length > 0 && (
        <div className="px-5 pb-3">
          {demoAlerts.map((alert, i) => (
            <div
              key={i}
              role="alert"
              className="flex items-start gap-2 p-3 rounded-xl bg-warning/5 border border-warning/20"
            >
              <span aria-hidden="true" className="text-sm mt-0.5">{"\u26A0\uFE0F"}</span>
              <p className="text-sm text-foreground">{alert.message}</p>
            </div>
          ))}
        </div>
      )}

      {/* 5-day forecast */}
      <div className="px-5 pb-4">
        <h4 className="text-sm font-semibold text-foreground mb-3">5-Day Forecast</h4>
        <div className="flex gap-2 overflow-x-auto pb-2">
          {demoForecast.map((day, i) => (
            <div
              key={i}
              className={`flex flex-col items-center min-w-[72px] p-3 rounded-xl border ${
                i === 0 ? "border-primary/20 bg-primary/5" : "border-border bg-surface-raised"
              }`}
            >
              <span className="text-xs font-medium text-muted">{day.day}</span>
              <span className="text-xl my-1" aria-hidden="true">{day.icon}</span>
              <span className="text-sm font-semibold text-foreground">{day.high}°</span>
              <span className="text-xs text-muted">{day.low}°</span>
              <span className="text-[10px] text-info mt-1">{day.rain}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Farming actions */}
      <div className="px-5 pb-5">
        <h4 className="text-sm font-semibold text-foreground mb-3">Farming Actions</h4>
        <div className="space-y-2">
          {demoActions.map((action, i) => (
            <div
              key={i}
              className="flex items-start gap-3 p-3 rounded-xl bg-surface-raised border border-border"
            >
              <span className="text-xl shrink-0" aria-hidden="true">{action.icon}</span>
              <div>
                <p className="text-sm font-medium text-foreground">{action.title}</p>
                <p className="text-xs text-muted mt-0.5">{action.advice}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
