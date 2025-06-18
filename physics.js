function getAcceleration(obj) {
  if (typeof obj.f === "number" && typeof obj.m == "number") {
    return obj.f / obj.m;
  }

  if (typeof obj.Δv === "number" && typeof obj.Δt == "number") {
    return obj.Δv / obj.Δt;
  }

  if (typeof obj.t === "number" && typeof obj.d == "number") {
    return (2 * obj.d) / (obj.t * obj.t);
  }

  return "impossible";
}
