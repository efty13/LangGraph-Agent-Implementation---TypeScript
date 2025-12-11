"use strict";
{
    rtf1;
    ansi;
    ansicpg1252;
    cocoartf2867;
    cocoatextscaling0;
    cocoaplatform0;
    {
        fonttbl;
        f0;
        fswiss;
        fcharset0;
        Helvetica;
    }
    {
        colortbl;
        red255;
        green255;
        blue255;
    }
    {
         * ;
        expandedcolortbl;
        ;
    }
    paperw11900;
    paperh16840;
    margl1440;
    margr1440;
    vieww11520;
    viewh8400;
    viewkind0;
    pard;
    tx720;
    tx1440;
    tx2160;
    tx2880;
    tx3600;
    tx4320;
    tx5040;
    tx5760;
    tx6480;
    tx7200;
    tx7920;
    tx8640;
    pardirnatural;
    partightenfactor0;
    f0;
    fs24;
    cf0;
    {
        StateGraph;
    }
    from;
    "@langchain/langgraph";
    {
        name: string;
        greeting: string;
    }
    ;
    {
        const name = state.name ?? "Guest";
        const greeting = `Hello, $\{name\}! Welcome!`;
        console.log("[greet node] input:", state);
        console.log("[greet node] output:", { greeting });
        return ;
        {
            greeting;
        }
        ;
    }
    // ---------- Build Graph ----------\
    function buildApp() { }
    {
        const graph = new StateGraph();
        graph.addNode("greet", greetingNode);
        graph.addEdge("__start__", "greet");
        graph.addEdge("greet", "__end__");
        return graph.compile();
    }
    // ---------- Entry Point ----------\
    async function main() { }
    {
        console.log("[main] building graph...");
        const app = buildApp();
        console.log("[main] invoking graph...");
        const result = await app.invoke({ name: "Eftal", greeting: "" });
        console.log("[main] final result:", result);
    }
    main().catch((err) => , {
        console, : .error("Error:", err),
        process, : .exit(1)
    });
}
