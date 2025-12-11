"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const langgraph_1 = require("@langchain/langgraph");
// State schema (same as in index.ts)
const StateAnnotation = langgraph_1.Annotation.Root({
    name: (0, langgraph_1.Annotation)(),
    greeting: (0, langgraph_1.Annotation)(),
});
// Greeting node function (same as in index.ts)
function greetingNode(state) {
    const name = state.name ?? "Guest";
    const greeting = `Hello, ${name}! Welcome!`;
    return { greeting };
}
// Build graph function (same as in index.ts)
function buildApp() {
    return new langgraph_1.StateGraph(StateAnnotation)
        .addNode("greet", greetingNode)
        .addEdge(langgraph_1.START, "greet")
        .addEdge("greet", langgraph_1.END)
        .compile();
}
(0, vitest_1.describe)("Greeting Agent", () => {
    (0, vitest_1.it)("should return a greeting containing the input name", async () => {
        const app = buildApp();
        const result = await app.invoke({ name: "Alice", greeting: "" });
        (0, vitest_1.expect)(result).toHaveProperty("name", "Alice");
        (0, vitest_1.expect)(result).toHaveProperty("greeting");
        (0, vitest_1.expect)(result.greeting).toContain("Alice");
        (0, vitest_1.expect)(result.greeting).toBe("Hello, Alice! Welcome!");
    });
    (0, vitest_1.it)("should handle different names", async () => {
        const app = buildApp();
        const result = await app.invoke({ name: "Bob", greeting: "" });
        (0, vitest_1.expect)(result.greeting).toContain("Bob");
        (0, vitest_1.expect)(result.greeting).toBe("Hello, Bob! Welcome!");
    });
    (0, vitest_1.it)("should return greeting in the expected format", async () => {
        const app = buildApp();
        const result = await app.invoke({ name: "Charlie", greeting: "" });
        (0, vitest_1.expect)(result.greeting).toMatch(/^Hello, .+! Welcome!$/);
    });
});
