"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const langgraph_1 = require("@langchain/langgraph");
// ---------- State Schema ----------
const StateAnnotation = langgraph_1.Annotation.Root({
    name: (0, langgraph_1.Annotation)(),
    greeting: (0, langgraph_1.Annotation)(),
});
// ---------- Node Function ----------
function greetingNode(state) {
    const name = state.name ?? "Guest";
    const greeting = `Hello, ${name}! Welcome!`;
    console.log("[greet node] input:", state);
    console.log("[greet node] output:", { greeting });
    return { greeting };
}
// ---------- Build Graph ----------
function buildApp() {
    return new langgraph_1.StateGraph(StateAnnotation)
        .addNode("greet", greetingNode)
        .addEdge(langgraph_1.START, "greet")
        .addEdge("greet", langgraph_1.END)
        .compile();
}
// ---------- Entry Point ----------
async function main() {
    console.log("[main] building graph...");
    const app = buildApp();
    console.log("[main] invoking graph...");
    const result = await app.invoke({ name: "Eftal", greeting: "" });
    console.log("[main] final result:", result);
}
main().catch((err) => {
    console.error("Error:", err);
    process.exit(1);
});
