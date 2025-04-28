// https://www.typescriptlang.org/play/?#code/PTAEHUFMBsGMHsC2lQBd5oBYoCoE8AHSAZVgCcBLA1UABWgEM8BzM+AVwDsATAGiwoBnUENANQAd0gAjQRVSQAUCEmYKsTKGYUAbpGF4OY0BoadYKdJMoL+gzAzIoz3UNEiPOofEVKVqAHSKymAAmkYI7NCuqGqcANag8ABmIjQUXrFOKBJMggBcISGgoAC0oACCbvCwDKgU8JkY7p7ehCTkVDQS2E6gnPCxGcwmZqDSTgzxxWWVoASMFmgYkAAeRJTInN3ymj4d-jSCeNsMq-wuoPaOltigAKoASgAywhK7SbGQZIIz5VWCFzSeCrZagNYbChbHaxUDcCjJZLfSDbExIAgUdxkUBIursJzCFJtXydajBBCcQQ0MwAUVWDEQC0gADVHBQGNJ3KAALygABEAAkYNAMOB4GRonzFBTBPB3AERcwABS0+mM9ysygc9wASmCKhwzQ8ZC8iHFzmB7BoXzcZmY7AYzEg-Fg0HUiQ58D0Ii8fLpDKZgj5SWxfPADlQAHJhAA5SASPlBFQAeS+ZHegmdWkgR1QjgUrmkeFATjNOmGWH0KAQiGhwkuNok4uiIgMHGxCyYrA4PCCJUUJQyCjIyQYSwAwhQyK6UABvAclUDxDLcfKgSOwKczyMAbgXJTIDHh7AK-XYiGk3z3JQAvsFB9tvqOlsQAI4OvrzxdLldr6Pvm5d33K4KAAL0gNdOHPS8yGvUA7wXIcnzHXAtU4ZguS-Rdlx4P9UDQjDICA79pAYTNIOgq9gOwChmEwVAKIvKjb2CVB2lAYgHCIHlQEnacuQAHw4gC+iEnACPcPdgg5KlD1gGhXTI4QACEyJILi52AmT8LHGgcNXK58OGPcEMUwRhD4mdwVWBQeBUtTOIYbisJKfS-03fiiJ4jct3cYjFxlfD2Hk8UlQIdhOXUEsjwoE9GJgnUXO-K52A2JUdTgljTMYczhI-FA1ls7h7MzRznOAtz10EESvN5f98v8kpArIYL0DIMKIrdWAQPA+LvkS4Dv0EVLvnSzL4MUbKlO8CSCpslFitAVTSo00AksqyMjLtPzvK29C-PG5rWtC8LIu60jyLPJiyH4U6utAGi6IYq6EqSoaRvajLgLvBDki4eSGi8IRLPcJVriINcysgHU13BlBRBBzTvycVB8S8OGAn0nluTqjzt0m4I-vMepGlbR5IHk7bIDBjTIY0mGrlW0Q33ytbgJRtGqrAryMkZpzIBMwn-pJoHBHE9l9upuG6f5hm4dbGaJcItnkZzTn5YyKkzAsIlxapgnFCJgHSaEPXJYAJhp-mZaIOWmeEM3laSjmTT5ohMZXbG6r2wjI0moA

// Paste the code in typescript playground for referecing typescript to javascript

interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  size: number;
}

interface Triangle {
  kind: "triangle";
  base: number;
  height: number;
}

type Shape = Circle | Square | Triangle;

abstract class BaseShape {
  abstract kind: string;
}

class Circle extends BaseShape {
  kind: "circle" = "circle";
  constructor(public radius: number) {
    super();
  }
}

class Square extends BaseShape {
  kind: "square" = "square";
  constructor(public size: number) {
    super();
  }
}

class Triangle extends BaseShape {
  kind: "triangle" = "triangle";
  constructor(public base: number, public height: number) {
    super();
  }
}

function isCircle(shape: Shape): shape is Circle {
  return shape.kind === "circle";
}

function isRectangle(shape: Shape): shape is Square {
  return "size" in shape;
}

function isTriangle(shape: Shape): shape is Triangle {
  return shape instanceof Triangle;
}

function isTriangle2(shape: Shape): shape is Triangle {
  return shape.kind === "triangle";
}
